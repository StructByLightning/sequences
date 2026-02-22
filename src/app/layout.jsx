"use client"

import "@/styles/core.scss";
import { useRef, useEffect } from "react";
import { Previewer } from "pagedjs";


/**
 * Injects talmud commentary columns into rendered paged.js pages.
 * For each talmud chapter, finds all pages containing its main text
 * and fills left/right columns with commentary that flows across pages.
 *
 * @param container    - The paged.js preview container element
 * @param commentaryData - Map of chapterId to {left, right} HTML strings
 */
function injectTalmudCommentary(container, commentaryData) {
  for (const [chapterId, commentary] of Object.entries(commentaryData)) {
    //Find pages containing this specific chapter's talmud content
    //Uses data-chapter-id on .talmud-main-text since paged.js fragments
    //don't preserve the parent section's id on subsequent pages
    const pages = [];
    const allPages = container.querySelectorAll(".pagedjs_page");

    allPages.forEach((page) => {
      const content = page.querySelector(".pagedjs_page_content");
      if (content && content.querySelector(`.talmud-main-text[data-chapter-id="${chapterId}"]`)) {
        pages.push(page);
      }
    });

    if (pages.length === 0) {
      //No pages found for this chapter, skip to next
    } else {
      //Get the content area height for offset calculations
      const firstArea = pages[0].querySelector(".pagedjs_area");
      const areaHeight = firstArea.clientHeight;

      //On the first page, measure where the main text starts to align commentary
      const areaRect = firstArea.getBoundingClientRect();
      const mainTextEl = pages[0].querySelector(".talmud-main-text");
      const headerHeight = mainTextEl
        ? mainTextEl.getBoundingClientRect().top - areaRect.top
        : 0;

      //Measure actual rendered line height so we can snap column heights
      //to line boundaries and avoid clipping text mid-glyph
      firstArea.style.position = "relative";
      const measureEl = document.createElement("div");
      measureEl.className = "talmud-column talmud-column-left";
      measureEl.style.visibility = "hidden";
      measureEl.innerHTML = "<p>X</p>";
      firstArea.appendChild(measureEl);
      const lineHeight = parseFloat(getComputedStyle(measureEl.querySelector("p")).lineHeight);
      measureEl.remove();

      //Track how much commentary content has been shown across pages
      let contentShown = 0;

      pages.forEach((page, index) => {
        const area = page.querySelector(".pagedjs_area");
        area.style.position = "relative";

        //First page: commentary starts below header. Subsequent: full height.
        const topOffset = index === 0 ? headerHeight : 0;
        const rawHeight = areaHeight - topOffset;
        //Snap column height down to nearest line boundary to prevent mid-line clipping
        const columnHeight = Math.floor(rawHeight / lineHeight) * lineHeight;

        const scrollOffset = contentShown;

        if (commentary.left) {
          const leftCol = document.createElement("div");
          leftCol.className = "talmud-column talmud-column-left";
          leftCol.style.top = topOffset + "px";
          leftCol.style.height = columnHeight + "px";
          leftCol.innerHTML = `<div style="margin-top: -${scrollOffset}px">${commentary.left}</div>`;
          area.appendChild(leftCol);
        }

        if (commentary.right) {
          const rightCol = document.createElement("div");
          rightCol.className = "talmud-column talmud-column-right";
          rightCol.style.top = topOffset + "px";
          rightCol.style.height = columnHeight + "px";
          rightCol.innerHTML = `<div style="margin-top: -${scrollOffset}px">${commentary.right}</div>`;
          area.appendChild(rightCol);
        }

        contentShown += columnHeight;
      });
    }
  }
}


export default function RootLayout({ children }) {

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
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = htmlContent;

          //Find all chapter elements
          const chapters = tempDiv.querySelectorAll('.chapter');

          chapters.forEach((chapter) => {
            //Create a blank page element that will force a page break
            const blankPage = document.createElement('div');
            blankPage.className = 'forced-blank-page';
            blankPage.style.cssText = 'page-break-before: always; page-break-after: always; height: 1px;';
            blankPage.innerHTML = '&nbsp;'; //Non-breaking space to ensure the element renders

            //Insert the blank page before the chapter
            chapter.parentNode.insertBefore(blankPage, chapter);
          });

          //Extract talmud commentary before paged.js processes the content
          const talmudChapters = tempDiv.querySelectorAll("[data-talmud]");
          const commentaryData = {};
          talmudChapters.forEach((chapter) => {
            const id = chapter.id;
            const leftEl = chapter.querySelector(".talmud-commentary-left");
            const rightEl = chapter.querySelector(".talmud-commentary-right");
            commentaryData[id] = {
              left: leftEl ? leftEl.innerHTML : "",
              right: rightEl ? rightEl.innerHTML : "",
            };
            //Remove commentary from the flow so paged.js only paginates the main text
            if (leftEl) leftEl.remove();
            if (rightEl) rightEl.remove();

            //Tag the main text div with the chapter id so we can find it after fragmentation
            const mainTextEl = chapter.querySelector(".talmud-main-text");
            if (mainTextEl) mainTextEl.setAttribute("data-chapter-id", id);
          });

          //Update the HTML content with the blank pages
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
            const chapterElements = previewContainer.querySelectorAll('.chapter');
            chapterElements.forEach((chapter) => {
              chapter.style.height = '100%';
            });

            //Inject talmud commentary columns into rendered pages
            if (Object.keys(commentaryData).length > 0) {
              injectTalmudCommentary(previewContainer, commentaryData);
            }

          });

          // Update TOC page numbers after a short delay to ensure DOM is ready
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
