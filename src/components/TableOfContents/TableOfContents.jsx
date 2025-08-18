import css from "./TableOfContents.module.scss"

export default function TableOfContents({ items }) {
  console.log(items)
  return <section className={`plainPage ${css.toc}`}>
    <div className={css.inner}>
      <div className={css.title}>Contents</div>

      <div className={css.items}>
        {items.map((item) => <div key={item.sequence}>
          <div className={css.label}>
            <div className={css.letter}>{item.sequence}</div>
            <div className={css.label}>{item.label}</div>
          </div>

          <div className={css.chapters}>
            {item.chapters.map((chapter) => <div key={chapter.className}>
              {chapter.name} — {chapter.page}
            </div>)}
          </div>
        </div>)}
      </div>

    </div>
  </section>


}