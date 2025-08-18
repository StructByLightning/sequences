export default function Chapter({ title, children }) {
  return <section className="chapter">
    <div className="chapterHeader">
      <h2 className="title">
        {title.length > 0 && title.map((segment) => { return <div key={segment}>{segment} </div> })}
      </h2>
    </div>

    {children}

  </section>;

}