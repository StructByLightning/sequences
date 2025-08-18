"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";


export default function Home() {
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
          const htmlContent = contentRef.current.innerHTML;

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

          //Preview the content with stylesheets
          await paged.preview(htmlContent, stylesheets, previewContainer).then((flow) => {
            //Hide the original content
            if (contentRef.current) {
              contentRef.current.style.display = "none";
            }
          });
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

  return <div ref={contentRef}>


    <SequenceHeader title="" letter="A" />




    <SequenceHeader title="" letter="B" />





    <SequenceHeader title="" letter="C" />





    <SequenceHeader title="" letter="D" />


  </div>;
}
