import css from "./TableOfContents.module.scss";
import React, { useEffect, useRef, useState } from 'react';
import md5 from "md5";
import hashChapterTitle from "@/utils/hashChapterTitle";

/**
 * TOC that updates page numbers after paged.js completes pagination.
 * Uses data attributes to store chapter IDs for post-pagination lookup.
 * 
 * @param items - Array of sequences containing chapters with id and name
 * @returns     TOC with dynamically updated page numbers
 */
export default function TableOfContents({ items }) {
  const tocRef = useRef(null);


  useEffect(() => {
    // Store a reference on window so the main page can trigger updates
    window.updateTableOfContents = () => {
      if (!tocRef.current) return;

      // Look for the paged.js preview container
      const previewContainer = document.getElementById('preview-container');
      if (!previewContainer) {
        console.error("Preview container not found");
        return;
      }

      const pageNumbers = previewContainer.querySelectorAll('[data-chapter-id]');
      console.log("Updating TOC, found elements:", pageNumbers.length);

      pageNumbers.forEach(span => {
        const chapterId = span.dataset.chapterId;
        // IMPORTANT: Search within the preview container, not the whole document
        const chapterElement = previewContainer.querySelector(`#${chapterId}`);

        if (chapterElement) {
          // Find which page the chapter element is on
          const pageElement = chapterElement.closest('.pagedjs_page');
          if (pageElement) {
            // Get the page number - paged.js stores it in different ways
            let pageNumber = '?';

            // Method 1: Check data attributes
            if (pageElement.dataset.pageNumber) {
              pageNumber = pageElement.dataset.pageNumber;
            }
            // Method 2: Count position
            else {
              const allPages = previewContainer.querySelectorAll('.pagedjs_page');
              const pageIndex = Array.from(allPages).indexOf(pageElement);
              if (pageIndex !== -1) {
                pageNumber = pageIndex + 1;
              }
            }

            console.log(`Chapter ${chapterId} is on page ${pageNumber}`);
            span.textContent = pageNumber;
          } else {
            console.log(`No pagedjs_page found for chapter ${chapterId}`);
            // Let's check what classes the parent elements have
            let parent = chapterElement.parentElement;
            while (parent && parent !== previewContainer) {
              console.log("Parent classes:", parent.className);
              parent = parent.parentElement;
            }
          }
        } else {
          console.log(`Chapter element not found in preview: ${chapterId}`);
        }
      });
    };
  }, []);

  return (
    <section className={`plainPage ${css.toc}`} ref={tocRef}>
      <div className={css.inner}>
        <div className={css.title}>Contents</div>

        <div className={css.items}>
          {items.map((item) => <div key={item.sequence} className={css.sequence}>
            <div className={css.label}>
              <div className={css.letter}>{item.sequence}</div>
              <div className={css.label}>{item.label}</div>
            </div>

            {item.chapters.map((chapter) => <a
              key={hashChapterTitle(chapter.name)}
              href={`#${hashChapterTitle(chapter.name)}`}
              className={css.entry}
            >
              <span>{chapter.name}</span>
              <span className={css.dots}> — </span>
              <span
                className={css.pageNumber}
                data-chapter-id={hashChapterTitle(chapter.name)}
              >
                [ERROR - CHAPTER TITLE MISMATCH]
              </span>
            </a>
            )}
          </div>
          )}
        </div>
      </div>
    </section>
  );
}