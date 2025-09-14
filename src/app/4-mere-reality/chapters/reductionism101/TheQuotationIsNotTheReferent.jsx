import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function TheQuotationIsNotTheReferent() {
  return <Chapter title={["The Quotation is Not the Referent"]}>
    <p><span className="dropCap">I</span>n classical logic, the operational definition of identity is that whenever <Latex math="A = B" /> is a theorem, you can substitute <Latex math="A" /> for <Latex math="B" /> in any theorem where <Latex math="B" /> appears. For example, if <Latex math="(2 + 2) = 4" /> is a theorem, and <Latex math="((2 + 2) + 3) = 7" /> is a theorem, then <Latex math="(4 + 3) = 7" /> is a theorem.</p>
    <p>This leads to a problem that is usually phrased in the following terms: The morning star and the evening star happen to be the same object, the planet Venus. Suppose John knows that the morning star and evening star are the same object. Mary, however, believes that the morning star is the god Lucifer, but the evening star is the god Venus. John believes Mary believes that the morning star is Lucifer. Must John therefore (by substitution) believe that Mary believes that the evening star is Lucifer?</p>
    <p>Or here's an even simpler version of the problem. The statement <Latex math="2 + 2 = 4" /> is true; it is a theorem that <Latex math="(((2 + 2) = 4) = \text{true})" />. Fermat's Last Theorem is also true. So: <Latex math="\text{I  believe } 2 + 2 = 4 \Rightarrow \text{I believe true} \Rightarrow \text{I believe Fermat's Last Theorem}" />.</p>
    <p>Yes, I know this seems <em>obviously</em> wrong. But imagine someone writing a logical reasoning program using the principle "equal terms can always be substituted," and this happening to them. Now imagine them writing a paper about how to prevent it from happening. Now imagine someone else disagreeing with their solution. The argument is still going on.</p>
    <p>P'rsnally, I would say that John is committing a type error, like trying to subtract 5 grams from 20 meters. "The morning star" is not the same <em>type</em> as the morning star, let alone the same thing. Beliefs are not planets.</p>
    <Latex display="block" math="\text{morning star} = \text{evening star}" />
    <Latex display="block" math="\text{``morning star''} \neq \text{``evening star''}" />
    <p>The problem, in my view, stems from the failure to enforce the type distinction between beliefs and things. The original error was writing an AI that stores its beliefs about Mary's beliefs about "the morning star" using the same representation as in its beliefs about the morning star.</p>
    <p>If Mary believes the "morning star" is Lucifer, that doesn't mean Mary believes the "evening star" is Lucifer, because <Latex math="\text{``morning star''} \neq \text{``evening star''}" />. The whole paradox stems from the failure to use quote marks in appropriate places.</p>
    <p>You may recall that this is not the first time I've talked about enforcing type discipline—the last time was when I spoke about the error of confusing expected utilities with utilities. It is immensely helpful, when one is first learning physics, to learn to keep track of one's units—it may seem like a bother to keep writing down "cm" and "kg" and so on, until you notice that (a) your answer seems to be the wrong order of magnitude and (b) it is expressed in seconds per square gram.</p>
    <p>Similarly, beliefs are different things than planets. If we're talking about human beliefs, at least, then: Beliefs live in brains, planets live in space. Beliefs weigh a few micrograms, planets weigh a lot more. Planets are larger than beliefs… but you get the idea.</p>
    <p>Merely putting quote marks around "morning star" seems insufficient to prevent people from confusing it with the morning star, due to the visual similarity of the text. So perhaps a better way to enforce type discipline would be with a visibly different encoding:</p>
    <Latex display="block" math="\text{morning star} = \text{evening star}" />
    <Latex display="block" math="13.15.18.14.9.14.7.0.19.20.1.18 \neq 5.22.5.14.9.14.7.0.19.20.1.18" />
    <p>Studying mathematical logic may also help you learn to distinguish the quote and the referent. In mathematical logic, <Latex math="\vdash P" /> (<Latex math="P" /> is a theorem) and <Latex math="\vdash \Box \ulcorner P \urcorner" /> (it is provable that there exists an encoded proof of the encoded sentence <Latex math="P" /> in some encoded proof system) are very distinct propositions. If you drop a level of quotation in mathematical logic, it's like dropping a metric unit in physics—you can derive visibly ridiculous results, like "The speed of light is 299,792,458 meters long."</p>
    <p>Alfred Tarski once tried to define the meaning of "true" using an infinite family of sentences:</p>
    <span className="newpage"></span>
    <Latex display="block" math="(\text{``Snow is white''} \text{ is true}) \text{ if and only if } (\text{snow is white})" />
    <Latex display="block" math="(\text{``Weasels are green''} \text{ is true}) \text{ if and only if } (\text{weasels are green})" />
    <Latex display="block" math="\vdots" />
    <p>When sentences like these start seeming meaningful, you'll know that you've started to distinguish between encoded sentences and states of the outside world.</p>
    <p>Similarly, the notion of truth is quite different from the notion of <em>reality</em>. Saying "true" <em>compares</em> a belief to reality. Reality itself does not need to be compared to any beliefs in order to be real. Remember this the next time someone claims that nothing is true.</p>
  </Chapter>;
}