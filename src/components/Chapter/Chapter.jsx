import React from "react";
import hashChapterTitle from "@/utils/hashChapterTitle";

export default function Chapter({ title, children }) {
  // Convert children to array and add className to last child
  const childrenArray = React.Children.toArray(children);
  const modifiedChildren = childrenArray.map((child, index) => {
    if (index === childrenArray.length - 1 && React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: child.props.className
          ? `${child.props.className} last`
          : "last"
      });
    }
    return child;
  });

  return <section className="chapter" id={hashChapterTitle(title.join(" "))}>
    <div className="chapterHeader">
      <h2 className="title">
        {title.length > 0 && title.map((segment) => { return <div key={segment}>{segment} </div> })}
      </h2>
    </div>

    {modifiedChildren}

  </section>;
}