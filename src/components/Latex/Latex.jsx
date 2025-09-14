"use client";

import katex from "katex";
import React, { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";
import css from "./Latex.module.scss";

/**
 * Renders LaTeX mathematical expressions using the KaTeX library.
 * Supports both inline and block display modes for mathematical content.
 *
 * @param latex   - The LaTeX expression to render
 * @param display - [optional] Display mode: "inline" or "block" (defaults to "inline")
 * @returns       A span element containing the rendered LaTeX expression
 */
export default function Latex({ display = "inline", math }) {
  const containerRef = useRef();

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          displayMode: display === "block",
          throwOnError: false,
          output: "html",
          strict: false,
        });
      } catch (error) {
        console.error("KaTeX rendering error:", error);
        if (containerRef.current) {
          containerRef.current.textContent = `[LaTeX Error: ${math}]`;
        }
      }
    }
  }, [math, display]);

  const className = display === "block" ? css.block : css.inline;

  return <span
    ref={containerRef}
    className={className}
  />;
}
