"use client"

import "@/styles/core.scss";
import { useRef, useEffect } from "react";
import { Previewer } from "pagedjs";



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
