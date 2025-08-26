import hashChapterTitle from "@/utils/hashChapterTitle";

export default function Chapter({ title, children }) {
  return <section className="chapter" id={hashChapterTitle(title.join(" "))}>
    <div className="chapterHeader">
      <h2 className="title">
        {title.length > 0 && title.map((segment) => { return <div key={segment}>{segment} </div> })}
      </h2>
    </div>

    {children}

  </section>;

}