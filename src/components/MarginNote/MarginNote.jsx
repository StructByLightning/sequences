import React from "react";

/**
 * A margin note that gets positioned in the left or right margin alongside the main text.
 * Place as a sibling after the paragraph it annotates. Can contain block-level content.
 * When author is provided, it's injected inline at the start of the first child element.
 *
 * @param author   - [optional] Author name, displayed in smallcaps before the note
 * @param children - Note content
 * @param side     - Which margin to place the note in ("left" or "right")
 */
export default function MarginNote({author, children, side}) {
  const authorTag = author
    ? <span className="margin-note-author">{author}</span>
    : null;
  const childArray = React.Children.toArray(children);
  const rendered = authorTag && childArray.length > 0 && React.isValidElement(childArray[0])
    ? [React.cloneElement(childArray[0], {}, authorTag, ...React.Children.toArray(childArray[0].props.children)), ...childArray.slice(1)]
    : [authorTag, ...childArray];

  return <aside className="margin-note" data-side={side}>
    {rendered}
  </aside>;
}
