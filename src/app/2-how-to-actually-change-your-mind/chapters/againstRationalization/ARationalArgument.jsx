import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function ARationalArgument() {
  return <Chapter title={["A Rational Argument"]}>

    <p><span className="dropCap tall">Y</span>ou are, by occupation, a campaign manager, and you’ve just been hired by Mortimer Q. Snodgrass, the Green candidate for Mayor of Hadleyburg. As a campaign manager reading a book on rationality, one question lies foremost on your mind: “How can I construct an impeccable rational argument that Mortimer Q. Snodgrass is the best candidate for Mayor of Hadleyburg?”</p>
    <p>Sorry. It can’t be done.</p>
    <p>“What?” you cry. “But what if I use only valid support to construct my structure of reason? What if every fact I cite is true to the best of my knowledge, and relevant evidence under Bayes’s Rule?”</p>
    <p>Sorry. It still can’t be done. You defeated yourself the instant you specified your argument’s conclusion in advance.</p>
    <p>This year, the <em>Hadleyburg Trumpet</em> sent out a 16-item questionnaire to all mayoral candidates, with questions like “Can you paint with all the colors of the wind?” and “Did you inhale?” Alas, the <em>Trumpet’s</em> offices are destroyed by a meteorite before publication. It’s a pity, since your own candidate, Mortimer Q. Snodgrass, compares well to his opponents on 15 out of 16 questions. The only sticking point was Question 11, “Are you now, or have you ever been, a supervillain?”</p>
    <p>So you are tempted to publish the questionnaire as part of your own campaign literature… with the 11th question omitted, of course.</p>
    <p>Which crosses the line between <em>rationality</em> and <em>rationalization</em>. It is no longer possible for the voters to condition on the facts alone; they must condition on the additional fact of their presentation, and infer the existence of hidden evidence.</p>
    <p>Indeed, you crossed the line at the point where you considered whether the questionnaire was favorable or unfavorable to your candidate, before deciding whether to publish it. “What!” you cry. “A campaign should publish facts unfavorable to their candidate?” But put yourself in the shoes of a voter, still trying to select a candidate—why would you censor useful information? You wouldn’t, if you were genuinely curious. If you were flowing <em>forward</em> from the evidence to an unknown choice of candidate, rather than flowing <em>backward</em> from a fixed candidate to determine the arguments.</p>
    <p>A “logical” argument is one that follows from its premises. Thus the following argument is <em>illogical</em>:</p>
    <ul>
      <li>All rectangles are quadrilaterals.</li>
      <li>All squares are quadrilaterals.</li>
      <li><em>Therefore</em>, all squares are rectangles.</li>
    </ul>
    <p>This syllogism is not rescued from illogic by the truth of its premises or even the truth of its conclusion. It is worth distinguishing logical deductions from illogical ones, and to refuse to excuse them even if their conclusions happen to be true. For one thing, the distinction may affect how we revise our beliefs in light of future evidence. For another, sloppiness is habit-forming.</p>
    <p>Above all, the syllogism fails to state the real explanation. Maybe all squares are rectangles, but, if so, it’s not <em>because</em> they are both quadrilaterals. You might call it a hypocritical syllogism—one with a disconnect between its stated reasons and real reasons.</p>
    <p>If you really want to present an honest, rational argument <em>for your candidate</em>, in a political campaign, there is only one way to do it:</p>
    <ul>
      <li><em>Before anyone hires you</em>, gather up all the evidence you can about the different candidates.</li>
      <li>Make a checklist which you, yourself, will use to decide which candidate seems best.</li>
      <li>Process the checklist.</li>
      <li>Go to the winning candidate.</li>
      <li>Offer to become their campaign manager.</li>
      <li>When they ask for campaign literature, print out your checklist.</li>
    </ul>
    <p>Only in this way can you offer a <em>rational</em> chain of argument, one whose bottom line was written flowing <em>forward</em> from the lines above it. Whatever <em>actually</em> decides your bottom line, is the only thing you can <em>honestly</em> write on the lines above.</p>
  </Chapter>;
}