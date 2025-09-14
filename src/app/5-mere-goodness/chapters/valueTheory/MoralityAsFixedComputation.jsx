import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function MoralityAsFixedComputation() {
  return <Chapter title={["Morality as Fixed Computation"]}>



    <p>Toby Ord commented:</p>
    <blockquote>
      <p>Eliezer, I’ve just reread your article and was wondering if this is a good quick summary of your position (leaving apart how you got to it):</p>
      <p>“I should <em>X</em>” means that I would attempt to <em>X</em> were I fully informed.</p>
    </blockquote>
    <p><span className="dropCap">T</span>oby’s a pro, so if he didn’t get it, I’d better try again. Let me try a different tack of explanation—one closer to the historical way that I arrived at my own position.</p>
    <p>Suppose you build an AI, and—leaving aside that AI goal systems cannot be built around English statements, and all such descriptions are only dreams— you try to infuse the AI with the action-determining principle, “Do what I want.”</p>
    <p>And suppose you get the AI design close <em>enough</em>—it doesn’t just end up tiling the universe with paperclips, cheesecake or tiny molecular copies of satisfied programmers—that its utility function actually assigns utilities as follows, to the world-states we would describe in English as:</p>
    <pre><code>&lt;Programmer weakly desires “X,” quantity 20 of X exists&gt;:    +20</code><br /><code>&lt;Programmer strongly desires “Y,” quantity 20 of X exists&gt;:  0</code><br /><code>&lt;Programmer weakly desires “X,”  quantity 30 of Y exists&gt;:   0</code><br /><code>&lt;Programmer strongly desires “Y,”  quantity 30 of Y exists&gt;: +60</code></pre>
    <p>You perceive, of course, that this destroys the world.</p>
    <p>… since if the programmer initially weakly wants “<em>X</em>” and <em>X</em> is hard to obtain, the AI will modify the programmer to strongly want “<em>Y</em>,” which is easy to create, and then bring about lots of <em>Y</em>. The referent of “<em>Y</em>” might be, say, iron atoms—those are highly stable.</p>
    <p>Can you patch this problem? No. As a general rule, it is not possible to patch flawed Friendly AI designs.</p>
    <p>If you try to bound the utility function, or make the AI not care about how <em>much</em> the programmer wants things, the AI still has a motive (as an <em>expected</em> utility maximizer) to make the programmer want something that can be obtained with a very high degree of certainty.</p>
    <p>If you try to make it so that the AI can’t modify the programmer, then the AI can’t talk to the programmer (talking to someone modifies them).</p>
    <p>If you try to rule out a specific class of ways the AI could modify the programmer, the AI has a motive to superintelligently seek out loopholes and ways to modify the programmer indirectly.</p>
    <p>As a general rule, it is not possible to patch flawed FAI designs.</p>
    <p>We, ourselves, do not imagine the future and judge that any future in which our brains want something, and that thing exists, is a good future. If we did think this way, we would say: “Yay! Go ahead and modify us to strongly want something cheap!” But we do not say this, which means that this AI design is <em>fundamentally</em> flawed: it will choose things very unlike what we would choose; it will judge desirability very differently from how we judge it. This core disharmony cannot be patched by ruling out a handful of specific failure modes.</p>
    <p>There’s also a duality between Friendly AI problems and moral philosophy problems—though you’ve got to structure that duality in exactly the right way. So if you prefer, the core problem is that the AI will choose in a way very unlike the structure of what is, y’know, actually <em>right</em>—never mind the way we choose. Isn’t the whole point of this problem that merely <em>wanting</em> something doesn’t <em>make</em> it right?</p>
    <p>So this is the paradoxical-seeming issue which I have analogized to the difference between:</p>
    <blockquote>
      <p>A calculator that, when you press “2,” “+,” and “3,” tries to compute:</p>
      <p>“What is 2 + 3?”</p>
      <p>A calculator that, when you press “2,” “+,” and “3,” tries to compute:</p>
      <p>“What does this calculator output when you press ‘2,’ ‘+,’ and ‘3’?”</p>
    </blockquote>
    <p>The Type 1 calculator, as it were, <em>wants</em> to output 5.</p>
    <p>The Type 2 “calculator” could return any result; and in the act of returning that result, it <em>becomes</em> the correct answer to the question that was internally asked.</p>
    <p>We ourselves are like unto the Type 1 calculator. But the putative AI is being built as though it were to reflect the Type 2 calculator.</p>
    <p>Now imagine that the Type 1 calculator is trying to build an AI, only the Type 1 calculator doesn’t <em>know</em> its own question. The calculator continually asks the question by its very nature—it was born to ask that question, created already in motion around that question—but the calculator has no insight into its own transistors; it cannot print out the question, which is extremely complicated and has no simple approximation.</p>
    <p>So the calculator wants to build an AI (it’s a pretty smart calculator, it just doesn’t have access to its own transistors) and have the AI give the right answer. Only the calculator can’t print out the question. So the calculator wants to have the AI look at the calculator, where the question is written, and answer the question that the AI will discover implicit in those transistors. But this cannot be done by the cheap shortcut of a utility function that says “All <em>X</em>: ⟨calculator asks ‘<em>X</em>?,’ answer <em>X</em>⟩: utility 1; else: utility 0” because that actually mirrors the utility function of a Type 2 calculator, not a Type 1 calculator.</p>
    <p>This gets us into FAI issues that I am not going into (some of which I’m still working out myself).</p>
    <p>However, when you back out of the details of FAI design, and swap back to the perspective of moral philosophy, then <em>what we were just talking about</em> was the dual of the moral issue: “But if what’s ‘right’ is a mere preference, then anything that anyone wants is ‘right.’ ”</p>
    <p>The key notion is the idea that what we name by “right” is a <em>fixed</em> question, or perhaps a <em>fixed framework</em>. We can encounter moral arguments that modify our terminal values, and even encounter moral arguments that modify what we count as a moral argument; nonetheless, it all grows out of a particular starting point. We do not experience ourselves as embodying the question “What will I decide to do?” which would be a Type 2 calculator; anything we decided would thereby become right. We experience ourselves as asking the embodied question: “What will save my friends, and my people, from getting hurt? How can we all have more fun? …” where the “…” is around a thousand other things.</p>
    <p>So “I should <em>X</em>” does not mean that I would attempt to <em>X</em> were I fully informed.</p>
    <p>“I should <em>X</em>” means that <em>X</em> answers the question, “What will save my people? How can we all have more fun? How can we get more control over our own lives? What’s the funniest jokes we can tell? …”</p>
    <p>And I may not <em>know</em> what this question <em>is</em>, actually; I may not be able to print out my current guess nor my surrounding framework; but I know, as all non-moral-relativists instinctively know, that the question surely is not just “How can I do whatever I want?”</p>
    <p>When these two formulations begin to seem as entirely distinct as “snow” and snow, then you shall have created distinct buckets for the quotation and the referent.</p>
  </Chapter>;
}