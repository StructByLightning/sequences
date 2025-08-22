import React from "react";
import css from "./TitlePage.module.scss";
import LesswrongSvg from "@/icons/lesswrong.svg"

export default function TitlePage({ volume, name }) {
  return <section className={`section ${css.titlePage}`}>
    <div className={css.inner}>
      <div className={css.sequences}>The Sequences</div>
      <div className={css.separator}>volume {volume}</div>
      <div className={css.subtitle}>{name}</div>


      <div className={css.lesswrong}>
        <LesswrongSvg />
      </div>

      <div className={css.author}>Eliezer Yudkowsky</div>
    </div>
  </section>
}
