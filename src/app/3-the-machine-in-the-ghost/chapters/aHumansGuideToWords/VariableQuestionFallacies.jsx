import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function VariableQuestionFallacies() {
  return <Chapter title={["Variable Question Fallacies"]}>


    <blockquote>
      <p><span className="smallCaps">Albert:</span> “Every time I’ve listened to a tree fall, it made a sound, so I’ll guess that other trees falling also make sounds. I don’t believe the world changes around when I’m not looking.”</p>
      <p><span className="smallCaps">Barry:</span> “Wait a minute. If no one hears it, how can it be a sound?”</p>
    </blockquote>
    <p><span className="dropCap">W</span>hile writing the dialogue of Albert and Barry in their dispute over whether a falling tree in a deserted forest makes a sound, I sometimes found myself losing empathy with my characters. I would start to lose the gut feel of why <em>anyone</em> would ever argue like that, even though I’d seen it happen many times.</p>
    <p>On these occasions, I would repeat to myself, “Either the falling tree makes a sound, or it does not!” to restore my borrowed sense of indignation.</p>
    <p>(<em>P</em> or ¬<em>P</em>) is not always a reliable heuristic, if you substitute arbitrary English sentences for <em>P</em>. “This sentence is false” cannot be consistently viewed as true or false. And then there’s the old classic, “Have you stopped beating your wife?”</p>
    <p>Now if you are a mathematician, and one who believes in classical (rather than intuitionistic) logic, there are ways to continue insisting that (<em>P</em> or ¬<em>P</em>) is a theorem: for example, saying that “This sentence is false” is not a sentence.</p>
    <p>But such resolutions are subtle, which suffices to demonstrate a need for subtlety. You cannot just bull ahead on every occasion with “Either it does or it doesn’t!”</p>
    <p>So does the falling tree make a sound, or not, or…?</p>
    <p>Surely, 2 + 2 = <em>X</em> or it does not? Well, maybe, if it’s really the same <em>X</em>, the same 2, and the same + and =. If <em>X</em> evaluates to 5 on some occasions and 4 on another, your indignation may be misplaced.</p>
    <p>To even begin claiming that (<em>P</em> or ¬<em>P</em>) ought to be a necessary truth, the symbol P must stand for <em>exactly</em> the same thing in both halves of the dilemma. “Either the fall makes a sound, or not!”—but if Albert::sound is not the same as Barry::sound, there is nothing paradoxical about the tree making an Albert::sound but not a Barry::sound.</p>
    <p>(The :: idiom is something I picked up in my C++ days for avoiding namespace collisions. If you’ve got two different packages that define a class Sound, you can write Package1::Sound to specify which Sound you mean. The idiom is not widely known, I think; which is a pity, because I often wish I could use it in writing.)</p>
    <p>The variability may be subtle: Albert and Barry may carefully verify that it is the same tree, in the same forest, and the same occasion of falling, just to ensure that they really do have a substantive disagreement about exactly the same event. And then forget to check that they are matching this event against exactly the same concept.</p>
    <p>Think about the grocery store that you visit most often: Is it on the left side of the street, or the right? But of course there is no “<em>the</em> left side” of the street, only <em>your</em> left side, as you travel along it from some particular direction. Many of the words we use are really functions of implicit variables supplied by context.</p>
    <p>It’s actually one heck of a pain, requiring one heck of a lot of work, to handle this kind of problem in an Artificial Intelligence program intended to parse language—the phenomenon going by the name of “speaker deixis.”</p>
    <p>“Martin told Bob the building was on his left.” But “left” is a function-word that evaluates with a speaker-dependent variable invisibly grabbed from the surrounding context. Whose “left” is meant, Bob’s or Martin’s?</p>
    <p>The variables in a variable question fallacy often aren’t neatly labeled—it’s not as simple as “Say, do you think <em>Z</em> + 2 equals 6?”</p>
    <p>If a namespace collision introduces two different concepts that look like “the same concept” because they have the same name—or a map compression introduces two different events that look like the same event because they don’t have separate mental files—or the same function evaluates in different contexts—then reality itself becomes protean, changeable. At least that’s what the algorithm feels like from inside. Your mind’s eye sees the map, not the territory directly.</p>
    <p>If you have a question with a hidden variable, that evaluates to different expressions in different contexts, it <em>feels like</em> reality itself is unstable—what your mind’s eye sees, shifts around depending on where it looks.</p>
    <p>This often confuses undergraduates (and postmodernist professors) who discover a sentence with more than one interpretation; they think they have discovered an unstable portion of reality.</p>
    <p>“Oh my gosh! ‘The Sun goes around the Earth’ is true for Hunga Huntergatherer, but for Amara Astronomer, ‘The Sun goes around the Earth’ is false! There is no fixed truth!” The deconstruction of this sophomoric nitwittery is left as an exercise to the reader.</p>
    <p>And yet, even I initially found myself writing “If <em>X</em> is 5 on some occasions and 4 on another, the sentence ‘2 + 2 = <em>X</em>’ may have no fixed truth-value.” There is not <em>one</em> sentence with a <em>variable</em> truth-value. “2 + 2 = <em>X</em>” <em>has no</em> truth-value. It is not a <em>proposition</em>, not yet, not as mathematicians define proposition-ness, any more than “2 + 2 =” is a proposition, or “Fred jumped over the” is a grammatical sentence.</p>
    <p>But this fallacy tends to sneak in, even when you allegedly know better, because, well, that’s how the algorithm feels from inside.</p>
  </Chapter>;
}
