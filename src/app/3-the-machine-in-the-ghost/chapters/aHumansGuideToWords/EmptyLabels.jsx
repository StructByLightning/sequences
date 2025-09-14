import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function EmptyLabels() {
  return <Chapter title={["Empty Labels"]}>


    <p><span className="dropCap">C</span>onsider (yet again) the Aristotelian idea of categories. Let’s say that there’s some object with properties <em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>, and <em>E</em>, or at least it looks <em>E</em>-ish.</p>
    <blockquote>
      <p><span className="smallCaps">Fred:</span> “You mean that thing over there is blue, round, fuzzy, and—”</p>
      <p><span className="smallCaps">Me:</span> “In Aristotelian logic, it’s not supposed to make a difference what the properties are, or what I call them. That’s why I’m just using the letters.”</p>
    </blockquote>
    <p>Next, I invent the Aristotelian category “zawa,” which describes those objects, all those objects, and only those objects, that have properties <em>A</em>, <em>C</em>, and <em>D</em>.</p>
    <blockquote>
      <p><span className="smallCaps">Me:</span> “Object 1 is zawa, <em>B</em>, and <em>E</em>.”</p>
      <p><span className="smallCaps">Fred:</span> “And it’s blue—I mean, <em>A</em>—too, right?”</p>
      <p><span className="smallCaps">Me:</span> “That’s implied when I say it’s zawa.”</p>
      <p><span className="smallCaps">Fred:</span> “Still, I’d like you to say it explicitly.”</p>
      <p><span className="smallCaps">Me:</span> “Okay. Object 1 is <em>A</em>, <em>B</em>, zawa, and <em>E</em>.”</p>
    </blockquote>
    <p>Then I add another word, “yokie,” which describes all and only objects that are <em>B</em> and <em>E</em>; and the word “xippo,” which describes all and only objects which are <em>E</em> but not <em>D</em>.</p>
    <blockquote>
      <p><span className="smallCaps">Me:</span> “Object 1 is zawa and yokie, but not xippo.”</p>
      <p><span className="smallCaps">Fred:</span> “Wait, is it luminescent? I mean, is it <em>E</em>?”</p>
      <p><span className="smallCaps">Me:</span> “Yes. That is the only possibility on the information given.”</p>
      <p><span className="smallCaps">Fred:</span> “I’d rather you spelled it out.”</p>
      <p><span className="smallCaps">Me:</span> “Fine: Object 1 is <em>A</em>, zawa, <em>B</em>, yokie, <em>C</em>, <em>D</em>, <em>E</em>, and not xippo.”</p>
      <p><span className="smallCaps">Fred:</span> “Amazing! You can tell all that just by looking?”</p>
    </blockquote>
    <p>Impressive, isn’t it? Let’s invent even more new words: “Bolo” is <em>A</em>, <em>C</em>, and yokie; “mun” is <em>A</em>, <em>C</em>, and xippo; and “merlacdonian” is bolo and mun.</p>
    <p>Pointlessly confusing? I think so too. Let’s replace the labels with the definitions:</p>
    <p>“Zawa, B, and E” becomes [<em>A</em>, <em>C</em>, <em>D</em>], <em>B</em>, <em>E</em></p>
    <p>“Bolo and A” becomes [<em>A</em>, <em>C</em>, [<em>B</em>, <em>E</em>]], <em>A</em></p>
    <p>“Merlacdonian” becomes [<em>A</em>, <em>C</em>, [<em>B</em>, <em>E</em>]], [<em>A</em>, <em>C</em>, [<em>E</em>, ¬<em>D</em>]].</p>
    <p>And the thing to remember about the Aristotelian idea of categories is that [<em>A</em>, <em>C</em>, <em>D</em>] is the <em>entire</em> information of “zawa.” It’s not just that I can vary the label, but that I can get along just fine without any label at all—the rules for Aristotelian classes work purely on structures like [<em>A</em>, <em>C</em>, <em>D</em>]. To call one of these structures “zawa,” or attach any other label to it, is a human convenience (or inconvenience) which makes not the slightest difference to the Aristotelian rules.</p>
    <p>Let’s say that “human” is to be defined as a mortal featherless biped. Then the classic syllogism would have the form:</p>
    <blockquote>
      <p>All [mortal, ¬feathers, bipedal] are mortal.</p>
      <p>Socrates is a [mortal, ¬feathers, bipedal].</p>
      <p>Therefore, Socrates is mortal.</p>
    </blockquote>
    <p>The feat of reasoning looks a lot less impressive now, doesn’t it?</p>
    <p>Here the <em>illusion of inference</em> comes from the labels, which conceal the premises, and pretend to novelty in the conclusion. Replacing labels with definitions reveals the illusion, making visible the tautology’s empirical unhelpfulness. You can never say that Socrates is a [mortal, ¬feathers, biped] until you have observed him to be mortal.</p>
    <p>There’s an idea, which you may have noticed I hate, that “you can define a word any way you like.” This idea came from the Aristotelian notion of categories; since, if you follow the Aristotelian rules <em>exactly</em> and <em>without flaw</em>—which humans never do; Aristotle knew perfectly well that Socrates was human, even though that wasn’t justified under his rules—but, <em>if</em> some imaginary nonhuman entity were to follow the rules exactly, they would never arrive at a contradiction. They wouldn’t arrive at much of anything: they couldn’t say that Socrates is a [mortal, ¬feathers, biped] until they observed him to be mortal.</p>
    <p>But it’s not so much that labels are <em>arbitrary</em> in the Aristotelian system, as that the Aristotelian system works fine without <em>any labels at all</em>—it cranks out exactly the same stream of tautologies, they just look a lot less impressive. The labels are only there to create the <em>illusion</em> of inference.</p>
    <p>So if you’re going to have an Aristotelian proverb at all, the proverb should be, not “I can define a word any way I like,” nor even, “Defining a word never has any consequences,” but rather, “Definitions don’t need words.”</p>
  </Chapter>;
}
