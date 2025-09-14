import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function CreatedAlreadyInMotion() {
  return <Chapter title={["Created Already in Motion"]}>
    <p><span className="dropCap">L</span>ewis Carroll, who was also a mathematician, once wrote a short dialogue called "What the Tortoise said to Achilles." If you have not yet read this ancient classic, consider doing so now.</p>
    <p>The Tortoise offers Achilles a step of reasoning drawn from Euclid's First Proposition:</p>
    <blockquote>
      <p>(<em>A</em>) Things that are equal to the same are equal to each other.</p>
      <p>(<em>B</em>) The two sides of this Triangle are things that are equal to the same.</p>
      <p>(<em>Z</em>) The two sides of this Triangle are equal to each other.</p>
    </blockquote>
    <p>Tortoise: "And if some reader had <em>not</em> yet accepted A and B as true, he might still accept the <em>sequence</em> as a <em>valid</em> one, I suppose?"</p>
    <p>Achilles: "No doubt such a reader might exist. He might say, 'I accept as true the Hypothetical Proposition that, <em>if</em> <em>A</em> and <em>B</em> be true, <em>Z</em> must be true; but, I <em>don't</em> accept <em>A</em> and <em>B</em> as true.' Such a reader would do wisely in abandoning Euclid, and taking to football."</p>
    <p>Tortoise: "And might there not <em>also</em> be some reader who would say, 'I accept <em>A</em> and <em>B</em> as true, but I <em>don't</em> accept the Hypothetical'?"</p>
    <p>Achilles, unwisely, concedes this; and so asks the Tortoise to accept another proposition:</p>
    <blockquote>
      <p>(<em>C</em>) If <em>A</em> and <em>B</em> are true, <em>Z</em> must be true.</p>
    </blockquote>
    <p>But, asks, the Tortoise, suppose that he accepts <em>A</em> and <em>B</em> and <em>C</em>, but not <em>Z</em>?</p>
    <p>Then, says, Achilles, he must ask the Tortoise to accept one more hypothetical:</p>
    <blockquote>
      <p>(<em>D</em>) If <em>A</em> and <em>B</em> and <em>C</em> are true, <em>Z</em> must be true.</p>
    </blockquote>
    <p>Douglas Hofstadter paraphrased the argument some time later:</p>
    <blockquote>
      <p>Achilles: "If you have <Latex math="[(A \land B) \to Z]" />, and you also have (<em>A</em> and <em>B</em>), then surely you have <em>Z</em>."</p>
      <p>Tortoise: "Oh! You mean</p>
      <p><Latex math="\Big\{(A \land B) \land [(A \land B) \to Z]\Big\} \to Z" />,</p>
      <p>don't you?"</p>
    </blockquote>
    <p>As Hofstadter says, "Whatever Achilles considers a rule of inference, the Tortoise immediately flattens into a mere string of the system. If you use only the letters <em>A</em>, <em>B</em>, and <em>Z</em>, you will get a recursive pattern of longer and longer strings."</p>
    <p>This is the anti-pattern I call Passing the Recursive Buck; and though the counterspell is sometimes hard to find, when found, it generally takes the form The Buck Stops Immediately.</p>
    <p>The Tortoise's mind needs the <em>dynamic</em> of adding <em>Y</em> to the belief pool when <em>X</em> and (<em>X</em> → <em>Y</em>) are previously in the belief pool. If this dynamic is not present—a rock, for example, lacks it—then you can go on adding in <em>X</em> and (<em>X</em> → <em>Y</em>) and <Latex math="\big((X \land (X \to Y)) \to Y\big)" /> until the end of eternity, without ever getting to <em>Y</em>.</p>
    <p>The phrase that once came into my mind to describe this requirement is that a mind must be <em>created already in motion</em>. There is no argument so compelling that it will give dynamics to a static thing. There is no computer program so <em>persuasive</em> that you can run it on a rock.</p>
    <p>And even if you have a mind that <em>does</em> carry out modus ponens, it is futile for it to have such beliefs as…</p>
    <blockquote>
      <p>(<em>A</em>) If a toddler is on the train tracks, then pulling them off is fuzzle.</p>
      <p>(<em>B</em>) There is a toddler on the train tracks.</p>
    </blockquote>
    <p>… unless the mind also implements:</p>
    <blockquote>
      <p><em>Dynamic:</em> When the belief pool contains "<em>X</em> is fuzzle," send <em>X</em> to the action system.</p>
    </blockquote>
    <p>By "dynamic" I mean a property of a physically implemented cognitive system's <em>development over time</em>. A "dynamic" is something that <em>happens inside</em> a cognitive system, not data that it stores in memory and manipulates. Dynamics are the manipulations. There is no way to write a dynamic on a piece of paper, because the paper will just lie there. So the text immediately above, which says "dynamic," is not dynamic. If I wanted the text to <em>be</em> dynamic and not just <em>say</em> "dynamic," I would have to write a Java applet.</p>
    <p>Needless to say, having the belief…</p>
    <blockquote>
      <p>(<em>C</em>) If the belief pool contains "<em>X</em> is fuzzle," then "send '<em>X</em>' to the action system" is fuzzle.</p>
    </blockquote>
    <p>… won't help unless the mind already implements the <em>behavior</em> of translating hypothetical actions labeled "fuzzle" into actual motor actions.</p>
    <p>By dint of careful arguments about the nature of cognitive systems, you might be able to prove…</p>
    <blockquote>
      <p>(<em>D</em>) A mind with a dynamic that sends plans labeled "fuzzle" to the action system is more fuzzle than minds that don't.</p>
    </blockquote>
    <p>… but that <em>still</em> won't help, unless the listening mind <em>previously</em> possessed the <em>dynamic</em> of swapping out its current source code for alternative source code that is believed to be more fuzzle.</p>
    <p>This is why you can't argue fuzzleness into a rock.</p>
  </Chapter>;
}