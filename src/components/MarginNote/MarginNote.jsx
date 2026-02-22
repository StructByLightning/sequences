import React from "react";

/**
 * A margin note that gets positioned in the left or right margin alongside the main text.
 * Place as a sibling after the paragraph it annotates. Can contain block-level content.
 *
 * @param children - Note content
 * @param side     - Which margin to place the note in ("left" or "right")
 */
export default function MarginNote({children, side}) {
  return <aside className="margin-note" data-side={side}>
    {children}
  </aside>;
}
