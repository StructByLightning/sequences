import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function ConfigurationsAndAmplitude() {
  return <Chapter title={["Configurations and Amplitude"]}>


    <p><span className="dropCap">S</span>o the universe isn't made of little billiard balls, and it isn't made of crests and troughs in a pool of aether… Then what is the stuff that stuff is made of?</p>
    <figure>
      <img src="/ConfigurationsAndAmplitude_diagram_1.svg" width="100px" height="auto" />
      <figcaption>Figure 1</figcaption>
    </figure>

    <p>In Figure 1, we see, at <em>A</em>, a half-silvered mirror, and two photon detectors, Detector 1 and Detector 2.</p>
    <p>Early scientists, when they ran experiments like this, became confused about what the results meant. They would send a photon toward the half-silvered mirror, and half the time they would see Detector 1 click, and the other half of the time they would see Detector 2 click.</p>
    <p>The early scientists—you're going to laugh at this—thought that the silver mirror deflected the photon half the time, and let it through half the time.</p>
    <p>Ha, ha! As if the half-silvered mirror did different things on different occasions! I want you to let go of this idea, because if you cling to what early scientists thought, you will become extremely confused. The half-silvered mirror obeys the same rule every time.</p>
    <p>If you were going to write a computer program that <em>was</em> this experiment—not a computer program that <em>predicted</em> the result of the experiment, but a computer program that resembled the underlying reality—it might look sort of like this:</p>
    <p>At the start of the program (the start of the experiment, the start of time) there's a certain mathematical entity, called a <em>configuration</em>. You can think of this configuration as corresponding to "there is one photon heading from the photon source toward the half-silvered mirror," or just "a photon heading toward <em>A</em>."</p>
    <p>A configuration can store a single complex value—"complex" as in the complex numbers <Latex math="(a + bi)" />, with <Latex math="i" /> defined as <Latex math="\sqrt{-1}" />. At the start of the program, there's already a complex number stored in the configuration "a photon heading toward <em>A</em>." The exact value doesn't matter so long as it's not zero. We'll let the configuration "a photon heading toward <em>A</em>" have a value of <Latex math="(-1 + 0i)" />.</p>
    <p>All this is a fact within the territory, not a description of anyone's knowledge. A configuration isn't a proposition or a possible way the world could be. A configuration is a variable in the program—you can think of it as a kind of memory location whose index is "a photon heading toward <em>A</em>"—and it's out there in the territory.</p>
    <p>As the complex numbers that get assigned to configurations are not positive real numbers between 0 and 1, there is no danger of confusing them with probabilities. "A photon heading toward <em>A</em>" has complex value <Latex math="-1" />, which is hard to see as a degree of belief. The complex numbers are values within the program, again out there in the territory. We'll call the complex numbers <em>amplitudes</em>.</p>
    <p>There are two other configurations, which we'll call "a photon going from <em>A</em> to Detector 1" and "a photon going from <em>A</em> to Detector 2." These configurations don't have a complex value yet; it gets assigned as the program runs.</p>
    <p>We are going to calculate the amplitudes of "a photon going from <em>A</em> toward 1" and "a photon going from A toward 2" using the value of "a photon going toward <em>A</em>," and the rule that describes the half-silvered mirror at <em>A</em>.</p>
    <p>Roughly speaking, the half-silvered mirror rule is "multiply by 1 when the photon goes straight, and multiply by <Latex math="i" /> when the photon turns at a right angle." This is the universal rule that relates the amplitude of the configuration of "a photon going in," to the amplitude that goes to the configurations of "a photon coming out straight" or "a photon being deflected."<span class="footnote">[<strong>Editor's Note:</strong> Strictly speaking, a standard half-silvered mirror would yield a rule "multiply by <Latex math="-1" /> when the photon turns at a right angle," not "multiply by <Latex math="i" />." The basic scenario described by the author is not physically impossible, and its use does not affect the substantive argument. However, physics students may come away confused if they compare the discussion here to textbook discussions of Mach–Zehnder interferometers. We've left this idiosyncrasy in the text because it eliminates any need to specify which side of the mirror is half-silvered, simplifying the experiment.]</span></p>
    <p>So we pipe the amplitude of the configuration "a photon going toward <em>A</em>," which is <Latex math="(-1 + 0i)" />, into the half-silvered mirror at <em>A</em>, and this transmits an amplitude of <Latex math="(-1 + 0i) \times i = (0 - i)" /> to "a photon going from <em>A</em> toward 1," and also transmits an amplitude of <Latex math="(-1 + 0i) \times 1 = (-1 + 0i)" /> to "a photon going from <em>A</em> toward 2."</p>
    <p>In the Figure 1 experiment, these are all the configurations and all the transmitted amplitude we need to worry about, so we're done. Or, if you want to think of "Detector 1 gets a photon" and "Detector 2 gets a photon" as separate configurations, they'd just inherit their values from "<em>A</em> to 1" and "<em>A</em> to 2" respectively. (Actually, the values inherited should be multiplied by another complex factor, corresponding to the distance from <em>A</em> to the detector; but we will ignore that for now, and suppose that all distances traveled in our experiments happen to correspond to a complex factor of 1.)</p>
    <p>So the final program state is:</p>
    <p>Configuration "a photon going toward <em>A</em>": <Latex math="(-1 + 0i)" /></p>
    <p>Configuration "a photon going from A toward 1": <Latex math="(0 - i)" /></p>
    <p>Configuration "a photon going from A toward 2": <Latex math="(-1 + 0i)" /></p>
    <p><em>and optionally</em></p>
    <p>Configuration "Detector 1 gets a photon": <Latex math="(0 - i)" /></p>
    <p>Configuration "Detector 2 gets a photon": <Latex math="(-1 + 0i)" />.</p>
    <p>This same result occurs—the same amplitudes stored in the same configurations—every time you run the program (every time you do the experiment).</p>
    <p>Now, for <em>complicated</em> reasons that we aren't going to go into here—considerations that belong on a higher level of organization than fundamental quantum mechanics, the same way that atoms are more complicated than quarks—there's no <em>simple</em> measuring instrument that can directly tell us the exact amplitudes of each configuration. We can't directly see the program state.</p>
    <p>So how do physicists know what the amplitudes are?</p>
    <p>We <em>do</em> have a magical measuring tool that can tell us the <em>squared modulus</em> of a configuration's amplitude. If the original complex amplitude is <Latex math="(a + bi)" />, we can get the positive real number <Latex math="a^2 + b^2" />. Think of the Pythagorean theorem: if you imagine the complex number as a little arrow stretching out from the origin on a two-dimensional plane, then the magic tool tells us the squared length of the little arrow, but it doesn't tell us the direction the arrow is pointing.</p>
    <p>To be more precise, the magic tool actually just tells us the <em>ratios</em> of the squared lengths of the amplitudes in some configurations. We don't know how long the arrows are in an absolute sense, just how long they are relative to each other. But this turns out to be enough information to let us reconstruct the laws of physics—the rules of the program. And so I can talk about amplitudes, not just ratios of squared moduli.</p>
    <p>When we wave the magic tool over "Detector 1 gets a photon" and "Detector 2 gets a photon," we discover that these configurations have the same squared modulus—the lengths of the arrows are the same. Thus speaks the magic tool. By doing more <em>complicated</em> experiments (to be seen shortly), we can tell that the original complex numbers had a ratio of <Latex math="i" /> to 1.</p>
    <p>And what is this magical measuring tool?</p>
    <p>Well, from the perspective of everyday life—way, way, way above the quantum level and a lot more complicated—the magical measuring tool is that we send some photons toward the half-silvered mirror, one at a time, and count up how many photons arrive at Detector 1 versus Detector 2 over a few thousand trials. The ratio of these values is the ratio of the squared moduli of the amplitudes. But the reason for this is <em>not</em> something we are going to consider yet. Walk before you run. It is not possible to understand what happens <em>all the way up</em> at the level of everyday life, before you understand what goes on in much simpler cases.</p>
    <p>For today's purposes, we have a magical squared-modulus-ratio reader. And the magic tool tells us that the little two-dimensional arrow for the configuration "Detector 1 gets a photon" has the same squared length as for "Detector 2 gets a photon." That's all.</p>
    <p>You may wonder, "Given that the magic tool works this way, what motivates us to use quantum theory, instead of thinking that the half-silvered mirror reflects the photon around half the time?"</p>
    <p>Well, that's just begging to be confused—putting yourself into a historically realistic frame of mind like that and using everyday intuitions. Did I say anything about a little billiard ball going one way or the other and possibly bouncing off a mirror? That's not how reality works. <em>Reality</em> is about complex amplitudes flowing between configurations, and the laws of the flow are stable.</p>
    <p>But if you insist on seeing a more complicated situation that billiard-ball ways of thinking can't handle, here's a more complicated experiment.</p>
    <figure>
      <img src="/ConfigurationsAndAmplitude_diagram_2.svg" />
      <figcaption>Figure 2</figcaption>
    </figure>

    <p>In Figure 2, <em>B</em> and <em>C</em> are full mirrors, and <em>A</em> and <em>D</em> are half-mirrors. The line from <em>D</em> to <em>E</em> is dashed for reasons that will become apparent, but amplitude is flowing from <em>D</em> to <em>E</em> under exactly the same laws.</p>
    <p>Now let's apply the rules we learned before:</p>
    <p>At the beginning of time "a photon heading toward <em>A</em>" has amplitude <Latex math="(-1 + 0i)" />.</p>
    <p>We proceed to compute the amplitude for the configurations "a photon going from <em>A</em> to <em>B</em>" and "a photon going from <em>A</em> to <em>C</em>":</p>
    <table>
      <tbody>
        <tr>
          <td>"a photon going from <em>A</em> to <em>B</em>"</td>
          <td>=</td>
          <td><Latex math="i \times" /> "a photon heading toward <em>A</em>"</td>
        </tr>
        <tr>
          <td></td>
          <td>=</td>
          <td><Latex math="(0 - i)" />.</td>
        </tr>
      </tbody>
    </table>
    <p>Similarly,</p>
    <table>
      <tbody>
        <tr>
          <td>"a photon going from <em>A</em> to <em>C</em>"</td>
          <td>=</td>
          <td><Latex math="1 \times" /> "a photon heading toward <em>A</em>"</td>
        </tr>
        <tr>
          <td></td>
          <td>=</td>
          <td><Latex math="(-1 + 0i)" />.</td>
        </tr>
      </tbody>
    </table>
    <p>The full mirrors behave (as one would expect) like half of a half-silvered mirror—a full mirror just bends things by right angles and multiplies them by <Latex math="i" />. (To state this slightly more precisely: For a full mirror, the amplitude that flows, from the configuration of a photon heading in, to the configuration of a photon heading out at a right angle, is multiplied by a factor of <Latex math="i" />.)</p>
    <p>So:</p>
    <table>
      <tbody>
        <tr>
          <td>"a photon going from <em>B</em> to <em>D</em>"</td>
          <td>=</td>
          <td><Latex math="i \times" /> "a photon going from <em>A</em> to <em>B</em>"</td>
        </tr>
        <tr>
          <td></td>
          <td>=</td>
          <td><Latex math="(1 + 0i)" />,</td>
        </tr>
        <tr>
          <td>"a photon going from <em>C</em> to <em>D</em>"</td>
          <td>=</td>
          <td><Latex math="i \times" /> "a photon going from <em>A</em> to <em>C</em>"</td>
        </tr>
        <tr>
          <td></td>
          <td>=</td>
          <td><Latex math="(0 - i)" />.</td>
        </tr>
      </tbody>
    </table>
    <p>"<em>B</em> to <em>D</em>" and "<em>C</em> to <em>D</em>" are two different configurations—we don't simply write "a photon at <em>D</em>"—because the photons are arriving at two different angles in these two different configurations. And what <em>D</em> does to a photon depends on the angle at which the photon arrives.</p>
    <p>Again, the rule (speaking loosely) is that when a half-silvered mirror bends light at a right angle, the amplitude that flows from the photon-going-in configuration to the photon-going-out configuration, is the amplitude of the photon-going-in configuration multiplied by <Latex math="i" />. And when two configurations are related by a half-silvered mirror letting light straight through, the amplitude that flows from the photon-going-in configuration is multiplied by 1.</p>
    <p>So:</p>
    <ul>
      <li>From the configuration "a photon going from <em>B</em> to <em>D</em>," with original amplitude <Latex math="(1 + 0i)" />:<ul>
        <li>Amplitude of <Latex math="(1 + 0i) \times i = (0 + i)" /> flows to "a photon going from <em>D</em> to <em>E</em>."</li>
        <li>Amplitude of <Latex math="(1 + 0i) \times 1 = (1 + 0i)" /> flows to "a photon going from <em>D</em> to <em>F</em>."</li></ul></li>
      <li>From the configuration "a photon going from <em>C</em> to <em>D</em>," with original amplitude <Latex math="(0 - i)" />:<ul>
        <li>Amplitude of <Latex math="(0 - i) \times i = (1 + 0i)" /> flows to "a photon going from <em>D</em> to <em>F</em>."</li>
        <li>Amplitude of <Latex math="(0 - i) \times 1 = (0 - i)" /> flows to "a photon going from <em>D</em> to <em>E</em>."</li></ul></li>
    </ul>
    <p>Therefore:</p>
    <ul>
      <li>The <em>total</em> amplitude flowing to configuration "a photon going from <em>D</em> to <em>E</em>" is <Latex math="(0 + i) + (0 - i) = (0 + 0i) = 0" />.</li>
      <li>The total amplitude flowing to configuration "a photon going from <em>D</em> to <em>F</em>" is <Latex math="(1 + 0i) + (1 + 0i) = (2 + 0i)" />.</li>
    </ul>
    <p>(You may want to try working this out yourself on pen and paper if you lost track at any point.)</p>
    <p>But the upshot, from that super-high-level "experimental" perspective that we think of as normal life, is that we see <em>no</em> photons detected at <em>E</em>. Every photon seems to end up at <em>F</em>. The ratio of squared moduli between "<em>D</em> to <em>E</em>" and "<em>D</em> to <em>F</em>" is 0 to 4. That's why the line from <em>D</em> to <em>E</em> is dashed, in this figure.</p>
    <p>This is not something it is possible to explain by thinking of half-silvered mirrors deflecting little incoming billiard balls half the time. You've <em>got</em> to think in terms of amplitude flows.</p>
    <p>If half-silvered mirrors deflected a little billiard ball half the time, in this setup, the little ball would end up at Detector 1 around half the time and Detector 2 around half the time. Which it doesn't. So don't think that.</p>
    <p>You may say, "But wait a minute! I can think of another hypothesis that accounts for this result. What if, when a half-silvered mirror reflects a photon, it does something to the photon that ensures it doesn't get reflected next time? And when it lets a photon go through straight, it does something to the photon so it gets reflected next time."</p>
    <p>Now really, there's no need to go making the rules so complicated. Occam's Razor, remember. Just stick with simple, normal amplitude flows between configurations.</p>
    <p>But if you want <em>another</em> experiment that disproves your <em>new</em> alternative hypothesis, it's Figure 3.</p>
    <figure>
      <img src="/ConfigurationsAndAmplitude_diagram_3.svg" />
      <figcaption>Figure 3</figcaption>
    </figure>
    <p>Here, we've left the whole experimental setup the same, and just put a little blocking object between <em>B</em> and <em>D</em>. This ensures that the amplitude of "a photon going from <em>B</em> to <em>D</em>" is 0.</p>
    <p>Once you eliminate the amplitude contributions from that configuration, you end up with totals of <Latex math="(1 + 0i)" /> in "a photon going from <em>D</em> to <em>F</em>," and <Latex math="(0 - i)" /> in "a photon going from <em>D</em> to <em>E</em>."</p>
    <p>The squared moduli of <Latex math="(1 + 0i)" /> and <Latex math="(0 - i)" /> are both 1, so the magic measuring tool should tell us that the ratio of squared moduli is 1. Way back up at the level where physicists exist, we should find that Detector 1 goes off half the time, and Detector 2 half the time.</p>
    <p>The same thing happens if we put the block between <em>C</em> and <em>D</em>. The amplitudes are different, but the ratio of the squared moduli is still 1, so Detector 1 goes off half the time and Detector 2 goes off half the time.</p>
    <p>This cannot <em>possibly</em> happen with a little billiard ball that either does or doesn't get reflected by the half-silvered mirrors.</p>
    <p>Because complex numbers can have opposite directions, like 1 and <Latex math="-1" />, or <Latex math="i" /> and <Latex math="-i" />, amplitude flows can cancel each other out. Amplitude flowing from configuration <em>X</em> into configuration <em>Y</em> can be canceled out by an equal and opposite amplitude flowing from configuration <em>Z</em> into configuration <em>Y</em>. In fact, that's exactly what happens in this experiment.</p>
    <p>In probability theory, when something can either happen one way or another, <em>X</em> or <Latex math="\neg X" />, then <Latex math="P(Z) = P(Z|X)P(X) + P(Z|\neg X)P(\neg X)" />. And all probabilities are positive. So if you establish that the probability of <em>Z</em> happening given <em>X</em> is <Latex math="1/2" />, and the probability of <em>X</em> happening is <Latex math="1/3" />, then the total probability of <em>Z</em> happening is <em>at least</em> <Latex math="1/6" /> no matter <em>what</em> goes on in the case of <Latex math="\neg X" />. There's no such thing as negative probability, less-than-impossible credence, or <Latex math="(0 + i)" /> credibility, so <em>degrees of belief</em> can't cancel each other out like amplitudes do.</p>
    <p>Not to mention that probability is in the mind to begin with; and we are talking <em>about</em> the territory, the program-that-is-reality, not talking <em>about</em> human cognition or states of partial knowledge.</p>
    <p>By the same token, configurations are not <em>propositions</em>, not <em>statements</em>, not <em>ways the world could conceivably be</em>. Configurations are not semantic constructs. Adjectives like <em>probable</em> do not apply to them; they are not beliefs or sentences or possible worlds. They are not <em>true</em> or <em>false</em> but simply <em>real</em>.</p>
    <p>In the experiment of Figure 2, do not be tempted to think anything like: "The photon goes to either <em>B</em> or <em>C</em>, but it <em>could</em> have gone the other way, and this possibility interferes with its ability to go to <em>E</em>…"</p>
    <p>It makes no sense to think of something that "could have happened but didn't" exerting an effect on the world. We can <em>imagine</em> things that could have happened but didn't—like thinking, "Gosh, that car almost hit me"—and our imagination can have an effect on our future behavior. But the event of imagination is a real event, that actually happens, and <em>that</em> is what has the effect. It's your imagination of the unreal event—your very real imagination, implemented within a quite physical brain—that affects your behavior.</p>
    <p>To think that the <em>actual event</em> of a car hitting you—this event which could have happened to you, but in fact didn't—is directly exerting a <em>causal</em> effect on your behavior, is mixing up the map with the territory.</p>
    <p>What affects the world is real. (If things can affect the world without being "real," it's hard to see what the word "real" means.) Configurations and amplitude flows are causes, and they have visible effects; they are real. Configurations are not possible worlds and amplitudes are not degrees of belief, any more than your chair is a possible world or the sky is a degree of belief.</p>
    <p>So what <em>is</em> a configuration, then?</p>
    <p>Well, you'll be getting a clearer idea of that in later essays.</p>
    <p>But to give you a quick idea of how the real picture differs from the simplified version we saw in this essay…</p>
    <p>Our experimental setup only dealt with one moving particle, a single photon. Real configurations are about multiple particles. The next essay will deal with the case of more than one particle, and that should give you a much clearer idea of what a configuration is.</p>
    <p>Each configuration we talked about <em>should</em> have described a joint position of all the particles in the mirrors and detectors, not just the position of one photon bopping around.</p>
    <p>In fact, the <em>really real</em> configurations are over joint positions of all the particles in the universe, including the particles making up the experimenters. You can see why I'm saving the notion of <em>experimental results</em> for later essays.</p>
    <p>In the real world, amplitude is a continuous distribution over a continuous <em>space</em> of configurations. This essay's "configurations" were blocky and digital, and so were our "amplitude flows." It was as if we were talking about a photon teleporting from one place to another.</p>
    <p>If none of that made sense, don't worry. It will be cleared up in later essays. Just wanted to give you some idea of where this was heading.</p>
  </Chapter>;
}