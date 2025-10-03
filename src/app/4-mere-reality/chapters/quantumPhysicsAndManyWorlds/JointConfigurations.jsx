import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function JointConfigurations() {
  return <Chapter title={["Joint Configurations"]}>


    <p><span className="dropCap">T</span>he key to understanding configurations, and hence the key to understanding quantum mechanics, is realizing on a truly gut level that configurations are about more than one particle.</p>
    <figure>
      <img src="/JointConfigurations_diagram_1.svg" width="300px" height="auto" />
      <figcaption>Figure 1</figcaption>
    </figure>

    <p>Continuing from the previous essay, Figure 1 shows an altered version of the experiment where we send in <em>two</em> photons toward <em>D</em> at the same time, from the sources <em>B</em> and <em>C</em>.</p>
    <p>The starting configuration then is:</p>
    <p>"a photon going from <em>B</em> to <em>D</em>,  <br />
      and a photon going from <em>C</em> to <em>D</em>."</p>
    <p>Again, let's say the starting configuration has amplitude <Latex math="(-1 + 0i)" />.</p>
    <p>And remember, the rule of the half-silvered mirror (at <em>D</em>) is that a right-angle deflection multiplies by <Latex math="i" />, and a straight line multiplies by 1.</p>
    <p>So the amplitude flows from the starting configuration, separately considering the four cases of deflection/non-deflection of each photon, are:</p>
    <ol>
      <li>The "<em>B</em> to <em>D</em>" photon is deflected and the "<em>C</em> to <em>D</em>" photon is deflected. This amplitude flows to the configuration "a photon going from <em>D</em> to <em>E</em>, and a photon going from <em>D</em> to <em>F</em>." The amplitude flowing is <Latex math="(-1 + 0i) \times i \times i = (1 + 0i)" />.</li>
      <li>The "<em>B</em> to <em>D</em>" photon is deflected and the "<em>C</em> to <em>D</em>" photon goes straight. This amplitude flows to the configuration "two photons going from <em>D</em> to <em>E</em>." The amplitude flowing is <Latex math="(-1 + 0i) \times i \times 1 = (0 - i)" />.</li>
      <li>The "<em>B</em> to <em>D</em>" photon goes straight and the "<em>C</em> to <em>D</em>" photon is deflected. This amplitude flows to the configuration "two photons going from <em>D</em> to <em>F</em>." The amplitude flowing is <Latex math="(-1 + 0i) \times 1 \times i = (0 - i)" />.</li>
      <li>The "<em>B</em> to <em>D</em>" photon goes straight and the "<em>C</em> to <em>D</em>" photon goes straight. This amplitude flows to the configuration "a photon going from <em>D</em> to <em>F</em>, and a photon going from <em>D</em> to <em>E</em>." The amplitude flowing is <Latex math="(-1 + 0i) \times 1 \times 1 = (-1 + 0i)" />.</li>
    </ol>
    <p>Now—and this is a <em>very important and fundamental idea in quantum mechanics</em>—the amplitudes in cases 1 and 4 are flowing to the <em>same</em> configuration. Whether the <em>B</em> photon and <em>C</em> photon both go straight, or both are deflected, the resulting configuration is <em>one photon going toward E and another photon going toward F</em>.</p>
    <p>So we add up the two incoming amplitude flows from case 1 and case 4, and get a total amplitude of <Latex math="(1 + 0i) + (-1 + 0i) = 0" />.</p>
    <p>When we wave our magic squared-modulus-ratio reader over the three final configurations, we'll find that "two photons at Detector 1" and "two photons at Detector 2" have the same squared modulus, but "a photon at Detector 1 and a photon at Detector 2" has squared modulus zero.</p>
    <p>Way up at the level of experiment, we never find Detector 1 and Detector 2 both going off. We'll find Detector 1 going off twice, or Detector 2 going off twice, with equal frequency. (Assuming I've gotten the math and physics right. I didn't actually perform the experiment.)</p>
    <p>The configuration's identity is <em>not</em>, "the <em>B</em> photon going toward <em>E</em> and the <em>C</em> photon going toward <em>F</em>. " Then the resultant configurations in case 1 and case 4 would not be equal. Case 1 would be, "<em>B</em> photon to <em>E</em>, <em>C</em> photon to <em>F</em>" and case 4 would be "<em>B</em> photon to <em>F</em>, <em>C</em> photon to <em>E</em>." These would be two distinguishable configurations, if configurations had photon-tracking structure.</p>
    <p>So we would not add up the two amplitudes and cancel them out. We would keep the amplitudes in two separate configurations. The total amplitudes would have non-zero squared moduli. And when we ran the experiment, we would find (around half the time) that Detector 1 and Detector 2 each registered one photon. Which doesn't happen, if my calculations are correct.</p>
    <p>Configurations don't keep track of where particles come from. A configuration's identity is just, "a photon here, a photon there; an electron here, an electron there." No matter how you get into that situation, so long as there are the same species of particles in the same places, it counts as the same configuration.</p>
    <p>I say again that the question "What kind of information does the configuration's structure incorporate?" has <em>experimental consequences</em>. You can deduce, from experiment, the way that reality itself must be treating configurations.</p>
    <p>In a classical universe, there would be no experimental consequences. If the photon were like a little billiard ball that either went one way or the other, and the configurations were our beliefs about possible states the system could be in, and instead of amplitudes we had probabilities, it would not make a difference whether we tracked the origin of photons or threw the information away.</p>
    <p>In a classical universe, I could assign a 25% probability to both photons going to <em>E</em>, a 25% probability of both photons going to <em>F</em>, a 25% probability of the <em>B</em> photon going to <em>E</em> and the <em>C</em> photon going to <em>F</em>, and 25% probability of the <em>B</em> photon going to <em>F</em> and the <em>C</em> photon going to <em>E</em>. Or, since I <em>personally</em> don't care which of the two latter cases occurred, I could decide to collapse the two possibilities into one possibility and add up their probabilities, and just say, "a 50% probability that each detector gets one photon."</p>
    <p>With probabilities, we can aggregate events as we like—draw our boundaries around sets of possible worlds as we please—and the numbers will still work out the same. The probability of two mutually exclusive events always equals the probability of the first event plus the probability of the second event.</p>
    <p>But you can't arbitrarily collapse configurations together, or split them apart, in your model, and get the same experimental predictions. Our magical tool tells us the ratios of squared moduli. When you add two complex numbers, the squared modulus of the sum is not the sum of the squared moduli of the parts:</p>
    <Latex display="block" math="\text{Squared\_Modulus}(C_1 + C_2) \neq \text{Squared\_Modulus}(C_1) + \text{Squared\_Modulus}(C_2)" />
    <p>E.g.:</p>
    <Latex display="block" math="\begin{align}
\text{S\_M}((2 + i) + (1 - i)) &= \text{S\_M}(3 + 0i) \\
&= 3^2 + 0^2 \\
&= 9
\end{align}" />
    <Latex display="block" math="\begin{align}
\text{S\_M}(2 + i) + \text{S\_M}(1 - i) &= (2^2 + 1^2) + (1^2 + (-1)^2) \\
&= (4 + 1) + (1 + 1) \\
&= 7
\end{align}" />
    <p>Or in the current experiment of discourse, we had flows of <Latex math="(1 + 0i)" /> and <Latex math="(-1 + 0i)" /> cancel out, adding up to 0, whose squared modulus is 0, where the squared modulus of the parts would have been 1 and 1.</p>
    <p>If in place of Squared_Modulus, our magical tool was some linear function— any function where <Latex math="F(X + Y) = F(X) + F(Y)" />—then all the quantumness would instantly vanish and be replaced by a classical physics. (A <em>different</em> classical physics, not the same illusion of classicality we hallucinate from inside the higher levels of organization in our own quantum world.)</p>
    <p>If amplitudes were just probabilities, they couldn't cancel out when flows collided. If configurations were just states of knowledge, you could reorganize them however you liked.</p>
    <p>But the configurations are nailed in place, indivisible and unmergeable without changing the laws of physics.</p>
    <p>And part of what is nailed is the way that configurations treat multiple particles. A configuration says, "a photon here, a photon there," not "<em>this</em> photon here, <em>that</em> photon there." "<em>This</em> photon here, <em>that</em> photon there" does not have a different identity from "<em>that</em> photon here, <em>this</em> photon there."</p>
    <p>The result, visible in today's experiment, is that you can't factorize the physics of our universe to be about particles with individual identities.</p>
    <p>Part of the reason why humans have trouble coming to grips with <em>perfectly normal</em> quantum physics, is that humans bizarrely keep trying to factor reality into a sum of individually real billiard balls.</p>
    <p>Ha ha! Silly humans.</p>
  </Chapter>;
}