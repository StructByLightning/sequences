import React from "react";
import hashChapterTitle from "@/utils/hashChapterTitle";
import css from "./Chapter.module.scss";

export default function Chapter({children, leftCommentary, rightCommentary, title}) {
  //Convert children to array and add className to last child
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

  const hasTalmud = Boolean(leftCommentary || rightCommentary);

  return <section
    className={"chapter " + css.chapter}
    id={hashChapterTitle(title.join(" "))}
    data-talmud={hasTalmud ? "true" : undefined}
  >
    <div className="chapterHeader">
      <h2 className="title">
        {title.length > 0 && title.map((segment) => <div key={segment}>{segment}</div>)}
      </h2>
    </div>

    {hasTalmud && leftCommentary && <div className={"talmud-commentary-left "+css.commentary}>
      {leftCommentary}
    </div>}

    <div className={hasTalmud ? "talmud-main-text" : undefined}>
      {modifiedChildren}
    </div>

    {hasTalmud && rightCommentary && <div className={"talmud-commentary-right "+css.commentary}>
      {rightCommentary}
    </div>}
  </section>;
}
