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
  const allPages = container.querySelectorAll(".pagedjs_page");

  allPages.forEach((page) => {
    const area = page.querySelector(".pagedjs_area");
    const areaRect = area.getBoundingClientRect();
    const areaHeight = area.clientHeight;
    area.style.position = "relative";

    //Track the bottom edge of the last note on each side for collision avoidance
    const lastBottom = {left: 0, right: 0};

    //Find all anchors on this page, sorted by vertical position
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

      //Don't render if pushed entirely off the page
      if (top >= areaHeight) return;

      const noteEl = document.createElement("div");
      noteEl.className = `margin-note-rendered margin-note-${side}`;
      noteEl.style.top = top + "px";
      noteEl.style.maxHeight = (areaHeight - top) + "px";
      noteEl.innerHTML = content;
      area.appendChild(noteEl);

      //Update collision tracking with actual rendered height
      lastBottom[side] = top + noteEl.offsetHeight;
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
      //Insert a zero-width anchor span at the start of the preceding element
      //so the note aligns with the top of the paragraph it annotates
      const marker = document.createElement("span");
      marker.className = "margin-note-anchor";
      marker.dataset.noteId = id;
      marker.dataset.side = side;
      anchor.insertBefore(marker, anchor.firstChild);
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
