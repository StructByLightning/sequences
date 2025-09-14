import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function TheAllaisParadox() {
  return <Chapter title={["The Allais Paradox"]}>



    <p>Choose between the following two options:</p>
    <p><strong>1A.</strong> $24,000, with certainty.</p>
    <p><strong>1B.</strong> 33/34 chance of winning $27,000, and 1/34 chance of winning nothing.</p>
    <p><span className="dropCap">W</span>hich seems more intuitively appealing? And which one would you choose in real life? Now which of these two options would you intuitively prefer, and which would you choose in real life?</p>
    <p><strong>2A.</strong> 34% chance of winning $24,000, and 66% chance of winning nothing.</p>
    <p><strong>2B.</strong> 33% chance of winning $27,000, and 67% chance of winning nothing.</p>
    <p>The Allais Paradox—as Allais called it, though it's not really a paradox—was one of the first conflicts between decision theory and human reasoning to be experimentally exposed, in 1953.<span class="footnote">Maurice Allais, "Le Comportement de l'Homme Rationnel devant le Risque: Critique des Postulats et Axiomes de l'Ecole Americaine," <em>Econometrica</em> 21, no. 4 (1953): 2, doi:10.2307/1907921; Daniel Kahneman and Amos Tversky, "Prospect Theory: An Analysis of Decision Under Risk," <em>Econometrica</em> 47 (1979): 263–292.</span>&lt; I've modified it slightly for ease of math, but the essential problem is the same: Most people prefer <strong>1A</strong> to <strong>1B</strong>, and most people prefer <strong>2B</strong> to <strong>2A</strong>. Indeed, in within-subject comparisons, a majority of subjects express both preferences simultaneously.</p>
    <p>This is a problem because the 2s are equal to a one-third chance of playing the 1s. That is, <strong>2A</strong> is equivalent to playing gamble <strong>1A</strong> with 34% probability, and <strong>2B</strong> is equivalent to playing <strong>1B</strong> with 34% probability.</p>
    <p>Among the axioms used to prove that "consistent" decisionmakers can be viewed as maximizing expected utility is the Axiom of Independence: If <Latex math="X" /> is strictly preferred to <Latex math="Y" />, then a probability <Latex math="P" /> of <Latex math="X" /> and <Latex math="(1 - P)" /> of <Latex math="Z" /> should be strictly preferred to <Latex math="P" /> chance of <Latex math="Y" /> and <Latex math="(1 - P)" /> chance of <Latex math="Z" />.</p>
    <p>All the axioms are consequences, as well as antecedents, of a consistent utility function. So it must be possible to prove that the experimental subjects above <em>can't</em> have a consistent utility function over outcomes. And indeed, you can't simultaneously have:</p>
    <p><Latex display="block" math="U(\$24{,}000) > \frac{33}{34} \times U(\$27{,}000) + \frac{1}{34} \times U(\$0)" /></p>
    <p><Latex display="block" math="0.34 \times U(\$24{,}000) + 0.66 \times U(\$0) < 0.33 \times U(\$27{,}000) + 0.67 \times U(\$0)" /></p>
    <p>These two equations are algebraically inconsistent, regardless of <Latex math="U" />, so the Allais Paradox has nothing to do with the diminishing marginal utility of money.</p>
    <p>Maurice Allais initially defended the revealed preferences of the experimental subjects—he saw the experiment as exposing a flaw in the conventional ideas of utility, rather than exposing a flaw in human psychology. This was 1953, after all, and the heuristics-and-biases movement wouldn't really get started for another two decades. Allais thought his experiment just showed that the Axiom of Independence clearly wasn't a good idea in real life.</p>
    <p>(How naive, how foolish, how simplistic is Bayesian decision theory…)</p>
    <p>Surely the <em>certainty</em> of having $24,000 should count for something. You can <em>feel</em> the difference, right? The solid reassurance?</p>
    <p>(I'm starting to think of this as "naive philosophical realism"—supposing that our intuitions directly expose truths about which strategies are wiser, as though it were a directly perceived fact that "<strong>1A</strong> is superior to <strong>1B</strong>." Intuitions <em>directly</em> expose truths about human cognitive functions, and only <em>indirectly</em> expose (after we reflect on the cognitive functions themselves) truths about rationality.)</p>
    <p>"But come now," you say, "is it really such a terrible thing to depart from Bayesian beauty?" Okay, so the subjects didn't follow the neat little "independence axiom" espoused by the likes of von Neumann and Morgenstern. Yet who says that things <em>must</em> be neat and tidy?</p>
    <p>Why fret about elegance, if it makes us take risks we don't want? Expected utility tells us that we ought to assign some kind of number to an outcome, and then multiply that value by the outcome's probability, add them up, etc. Okay, but why do we <em>have</em> to do that? Why not make up more palatable rules instead?</p>
    <p>There is always a price for leaving the Bayesian Way. That's what coherence and uniqueness theorems are all about.</p>
    <p>In this case, if an agent prefers <strong>1A</strong> to <strong>1B</strong>, and <strong>2B</strong> to <strong>2A</strong>, it introduces a form of <em>preference reversal</em>—a <em>dynamic inconsistency</em> in the agent's planning. You become a <em>money pump</em>.</p>
    <p>Suppose that at 12:00 p.m. I roll a hundred-sided die. If the die shows a number greater than 34, the game terminates. Otherwise, at 12:05 p.m. I consult a switch with two settings, A and B. If the setting is A, I pay you $24,000. If the setting is B, I roll a 34-sided die and pay you $27,000 unless the die shows "34," in which case I pay you nothing.</p>
    <p>Let's say you prefer <strong>1A</strong> over <strong>1B</strong>, and <strong>2B</strong> over <strong>2A</strong>, and you would pay a single penny to indulge each preference. The switch starts in state A. Before 12:00 p.m., you pay me a penny to throw the switch to B. The die comes up 12. After 12:00 p.m. and before 12:05 p.m., you pay me a penny to throw the switch to A.</p>
    <p>I have taken your two cents on the subject. If you indulge your intuitions, and dismiss mere elegance as a pointless obsession with neatness, then don't be surprised when your pennies get taken from you…</p>
    <p>(I think the same failure to proportionally devalue the emotional impact of small probabilities is responsible for the lottery.)</p>
  </Chapter>;
}
