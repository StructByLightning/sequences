"use client"

import "@/styles/core.scss";
import {useEffect, useRef} from "react";
import {Previewer} from "pagedjs";


/**
 * Positions margin notes in the left/right margins of rendered paged.js pages.
 * Each note is placed at its anchor's Y position, pushed down if it would
 * overlap a previous note on the same side (soft anchoring).
 *
 * @param container - The paged.js preview container element
 * @param noteData  - Map of noteId to {side, content} objects
 */
function injectMarginNotes(container, noteData) {
  const allPages = [...container.querySelectorAll(".pagedjs_page")];
  if (allPages.length === 0) return;

  //Measure rendered line height for snapping clip boundaries
  const firstArea = allPages[0].querySelector(".pagedjs_area");
  firstArea.style.position = "relative";
  const measureEl = document.createElement("div");
  measureEl.className = "margin-note-rendered margin-note-left";
  measureEl.style.visibility = "hidden";
  measureEl.innerHTML = "<p>X<br>X</p>";
  firstArea.appendChild(measureEl);
  const measureP = measureEl.querySelector("p");
  const twoLineHeight = measureP.getBoundingClientRect().height;
  measureP.innerHTML = "X";
  const oneLineHeight = measureP.getBoundingClientRect().height;
  const lineHeight = twoLineHeight - oneLineHeight;
  measureEl.remove();

  /**
   * Snaps a height down to the nearest line-height multiple
   * so clipping never cuts through the middle of a text line.
   */
  const snapToLine = (h) => Math.floor(h / lineHeight) * lineHeight;
  const noteGap = lineHeight;

  //Notes that overflow the bottom of a page and need to continue on the next
  let pendingOverflow = [];

  allPages.forEach((page) => {
    const area = page.querySelector(".pagedjs_area");
    const areaRect = area.getBoundingClientRect();
    const footnoteArea = area.querySelector(".pagedjs_footnote_area:not(.pagedjs_footnote_empty)");
    const areaHeight = area.clientHeight - (footnoteArea ? footnoteArea.clientHeight : 0);
    area.style.position = "relative";

    //Track the bottom edge of the last note on each side for collision avoidance
    const lastBottom = {left: 0, right: 0};
    const newOverflow = [];

    //First, render continuation notes from previous page overflow
    pendingOverflow.forEach(({content, shownHeight, side, totalHeight}) => {
      const top = lastBottom[side];
      const rawAvailable = areaHeight - top;
      if (rawAvailable <= 0) {
        //No room even for continuation, defer to next page
        newOverflow.push({content, shownHeight, side, totalHeight});
        return;
      }

      const noteEl = document.createElement("div");
      noteEl.className = `margin-note-rendered margin-note-${side}`;
      noteEl.style.top = top + "px";

      if (totalHeight === null) {
        //Deferred note — never rendered before, render fresh and measure
        noteEl.innerHTML = content;
        area.appendChild(noteEl);
        const naturalHeight = noteEl.scrollHeight;

        if (naturalHeight > rawAvailable) {
          const clippedHeight = snapToLine(rawAvailable);
          noteEl.style.height = clippedHeight + "px";
          noteEl.style.overflow = "hidden";
          newOverflow.push({content, shownHeight: clippedHeight, side, totalHeight: naturalHeight});
          lastBottom[side] = areaHeight;
        } else {
          lastBottom[side] = top + naturalHeight + noteGap;
        }
      } else {
        //Continuation — offset content by already-shown height
        const remainingHeight = totalHeight - shownHeight;
        noteEl.style.overflow = "hidden";
        noteEl.innerHTML = `<div style="margin-top: -${shownHeight}px">${content}</div>`;

        if (remainingHeight > rawAvailable) {
          const clippedHeight = snapToLine(rawAvailable);
          noteEl.style.height = clippedHeight + "px";
          newOverflow.push({content, shownHeight: shownHeight + clippedHeight, side, totalHeight});
          lastBottom[side] = areaHeight;
        } else {
          noteEl.style.height = remainingHeight + "px";
          lastBottom[side] = top + remainingHeight + noteGap;
        }

        area.appendChild(noteEl);
      }
    });

    //Then handle anchored notes on this page
    const anchors = [...page.querySelectorAll(".margin-note-anchor")];
    anchors.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);

    anchors.forEach((anchor) => {
      const noteId = anchor.dataset.noteId;
      const note = noteData[noteId];
      if (!note) return;

      const {content, side} = note;
      const anchorY = anchor.getBoundingClientRect().top - areaRect.top;

      //Soft anchor: start at anchor position, but push down if overlapping previous note
      const top = Math.max(anchorY, lastBottom[side]);

      //Pushed entirely off the page — defer as overflow to next page
      if (top >= areaHeight) {
        newOverflow.push({content, shownHeight: 0, side, totalHeight: null});
        return;
      }

      const rawAvailable = areaHeight - top;

      //Render note with auto height to measure natural size
      const noteEl = document.createElement("div");
      noteEl.className = `margin-note-rendered margin-note-${side}`;
      noteEl.style.top = top + "px";
      noteEl.innerHTML = content;
      area.appendChild(noteEl);

      const naturalHeight = noteEl.scrollHeight;

      if (naturalHeight > rawAvailable) {
        //Note overflows — clip to line-snapped height, schedule continuation
        const clippedHeight = snapToLine(rawAvailable);
        noteEl.style.height = clippedHeight + "px";
        noteEl.style.overflow = "hidden";
        newOverflow.push({content, shownHeight: clippedHeight, side, totalHeight: naturalHeight});
        lastBottom[side] = areaHeight;
      } else {
        lastBottom[side] = top + naturalHeight + noteGap;
      }
    });

    pendingOverflow = newOverflow;
  });
}


/**
 * Adjusts line-height on each page's main text column so the last line
 * sits flush with the page bottom. Distributes extra space evenly across
 * all text lines. Skips pages where the per-line adjustment would exceed
 * a visibility threshold (title pages, short final pages, etc.).
 *
 * @param container - The paged.js preview container element
 */
function featherColumns(container) {
  const MAX_PER_LINE = 1.5;
  const allPages = [...container.querySelectorAll(".pagedjs_page")];
  if (allPages.length === 0) return;

  //Measure main text line-height from the first page
  const firstArea = allPages[0].querySelector(".pagedjs_area");
  if (!firstArea) return;
  const probe = document.createElement("p");
  probe.style.visibility = "hidden";
  probe.innerHTML = "X<br>X";
  firstArea.appendChild(probe);
  const twoLine = probe.getBoundingClientRect().height;
  probe.innerHTML = "X";
  const oneLine = probe.getBoundingClientRect().height;
  const mainLH = twoLine - oneLine;
  probe.remove();

  allPages.forEach((page) => {
    const area = page.querySelector(".pagedjs_area");
    if (!area) return;
    const footnoteArea = area.querySelector(".pagedjs_footnote_area:not(.pagedjs_footnote_empty)");
    const areaH = area.clientHeight - (footnoteArea ? footnoteArea.clientHeight : 0);
    const areaTop = area.getBoundingClientRect().top;

    const chapter = area.querySelector(".chapter");
    if (!chapter) return;

    const paras = [...chapter.querySelectorAll("p")];
    if (paras.length === 0) return;

    const lastP = paras[paras.length - 1];
    const bottom = lastP.getBoundingClientRect().bottom - areaTop;
    const shortfall = areaH - bottom;
    if (shortfall <= 0) return;

    //Count text lines across all paragraphs
    const totalTextH = paras.reduce((sum, p) => sum + p.getBoundingClientRect().height, 0);
    const lineCount = Math.round(totalTextH / mainLH);
    if (lineCount <= 0) return;

    const perLine = shortfall / lineCount;
    if (perLine > MAX_PER_LINE) return;

    paras.forEach((p) => {
      p.style.lineHeight = (mainLH + perLine) + "px";
    });
  });
}


/**
 * Extracts margin notes from the DOM before paged.js processes it.
 * Replaces each note with an inline anchor span in the preceding element,
 * and returns a map of note content keyed by generated IDs.
 *
 * @param container - The DOM element containing the content
 * @returns         Map of noteId to {side, content} objects
 */
function extractMarginNotes(container) {
  const noteData = {};
  const notes = container.querySelectorAll(".margin-note");
  let noteIndex = 0;

  notes.forEach((note) => {
    const id = `margin-note-${noteIndex++}`;
    const side = note.dataset.side;

    //Walk backward to find the preceding non-margin-note sibling (the anchor paragraph)
    let anchor = note.previousElementSibling;
    while (anchor && anchor.classList.contains("margin-note")) {
      anchor = anchor.previousElementSibling;
    }

    if (anchor) {
      //Insert anchor span at the start of the preceding element, after any
      //existing anchors so consecutive notes maintain their DOM order
      const marker = document.createElement("span");
      marker.className = "margin-note-anchor";
      marker.dataset.noteId = id;
      marker.dataset.side = side;
      const lastExisting = anchor.querySelector(".margin-note-anchor:last-of-type");
      if (lastExisting) {
        lastExisting.after(marker);
      } else {
        anchor.insertBefore(marker, anchor.firstChild);
      }
    }

    //Store note content and remove from flow
    noteData[id] = {content: note.innerHTML, side};
    note.remove();
  });

  return noteData;
}


export default function RootLayout({children}) {

  const contentRef = useRef(null);
  useEffect(() => {
    const loadPagedJS = async () => {
      try {
        if (contentRef.current) {
          //Remove any existing preview container first
          const existingPreview = document.getElementById("preview-container");
          if (existingPreview) {
            existingPreview.remove();
          }

          const paged = new Previewer();

          //Get the HTML content as a string
          let htmlContent = contentRef.current.innerHTML;

          //Insert blank pages before chapters
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = htmlContent;

          //Find all chapter elements
          const chapters = tempDiv.querySelectorAll(".chapter");

          chapters.forEach((chapter) => {
            //Create a blank page element that will force a page break
            const blankPage = document.createElement("div");
            blankPage.className = "forced-blank-page";
            blankPage.style.cssText = "page-break-before: always; page-break-after: always; height: 1px;";
            blankPage.innerHTML = "&nbsp;"; //Non-breaking space to ensure the element renders

            //Insert the blank page before the chapter
            chapter.parentNode.insertBefore(blankPage, chapter);
          });

          //Extract margin notes before paged.js processes the content
          const noteData = extractMarginNotes(tempDiv);

          //Update the HTML content with the blank pages and extracted notes
          htmlContent = tempDiv.innerHTML;

          //Create a container for the preview
          const previewContainer = document.createElement("div");
          previewContainer.id = "preview-container";
          document.body.appendChild(previewContainer);

          //Get all stylesheets - this is crucial for PagedJS to see your @page rules
          const stylesheets = [];
          for (let i = 0; i < document.styleSheets.length; i++) {
            const sheet = document.styleSheets[i];
            if (sheet.href) {
              stylesheets.push(sheet.href);
            }
          }

          console.log(stylesheets)

          //Preview the content with stylesheets
          await paged.preview(htmlContent, stylesheets, previewContainer).then((flow) => {
            //Hide the original content
            if (contentRef.current) {
              contentRef.current.style.display = "none";
            }

            //Set height: 100% on all .chapter elements
            //We have to do it here instead of css or it will break the layout with footnotes
            const chapterElements = previewContainer.querySelectorAll(".chapter");
            chapterElements.forEach((chapter) => {
              chapter.style.height = "100%";
            });

            //Position margin notes in the rendered pages
            if (Object.keys(noteData).length > 0) {
              injectMarginNotes(previewContainer, noteData);
            }

            //Vertically justify main text columns
            featherColumns(previewContainer);

          });

          //Update TOC page numbers after a short delay to ensure DOM is ready
          setTimeout(() => {
            if (window.updateTableOfContents) {
              console.log("Updating TOC page numbers...");
              window.updateTableOfContents();
            }
          }, 500);
        }
      } catch (error) {
        console.error("Failed to load PagedJS:", error);
      }
    };

    loadPagedJS();

    //Cleanup function to remove preview container
    return () => {
      const preview = document.getElementById("preview-container");
      if (preview) {
        preview.remove();
      }
      //Show original content again
      if (contentRef.current) {
        contentRef.current.style.display = "";
      }
    };
  }); //No dependency array - runs on every render

  return <html lang="en">
    <body>
      <div ref={contentRef}>
        {children}
      </div>
    </body>
  </html>
}
