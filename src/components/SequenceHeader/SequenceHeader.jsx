import React from "react";
import css from "./SequenceHeader.module.scss";

export default function SequenceHeader({letter, title}){
  return <section className={`section ${css.sequenceHeader}`}>
    <div className={css.inner}>
      <div className={css.letter}>{letter}</div>
      <h1>{title}</h1>
    </div>
  </section>;
}
