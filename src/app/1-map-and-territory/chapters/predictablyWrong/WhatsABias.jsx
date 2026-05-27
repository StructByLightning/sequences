import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import MarginNote from "@/components/MarginNote/MarginNote";

export default function WhatsABias() {
  return <Chapter title={["...What's a Bias, Again?"]} marginNotes>

    <p>The availability heuristic is a cognitive shortcut humans use to reach conclusions; and where this shortcut reliably causes inaccurate conclusions, we can say that an availability bias is at work. Scope insensitivity is another example of a <em>cognitive bias.</em></p>


    <p>“Cognitive biases” are those obstacles to truth which are produced, not by the cost of information, nor by limited computing power, but by the <em>shape of our own mental machinery</em>. For example, our mental processes might be evolutionarily adapted to specifically believe some things that aren't true, so that we could win political arguments in a tribal context. Or the mental machinery might be adapted not to particularly care whether something is true, such as when we feel the urge to believe what others believe to get along socially. Or the bias may be a side-effect of a useful reasoning heuristic. The availability heuristic is not itself a bias, but it gives rise to them; the machinery uses an algorithm (give things more evidential weight if they come to mind more readily) that does some good cognitive work but also produces systematic errors.</p>

    <MarginNote side="right" author="Peter Wildeford">
      <p>Biases seem like they could be understood in terms of logical validity. Even if you reason solely from sound premises, you could still adopt an invalid argument (aka a fallacy; a conclusion that does not actually follow from the premises, no matter how true). I suggest the definition that biases are whatever cause people to adopt invalid arguments.</p>
    </MarginNote>

    <MarginNote side="right" author="Viktor Riabtsev">
      <p>False or incomplete/insufficient data can cause the adoption of invalid arguments.</p>
    </MarginNote>

    <p>Our brains are doing something wrong, and after a lot of experimentation and/or heavy thinking, someone identifies the problem verbally and concretely; then we call it a “(cognitive) bias.” Not to be confused with the colloquial “that person is biased,” which just means “that person has a skewed or prejudiced attitude toward something.”</p>

    <p>In cognitive science, “biases” are distinguished from errors that arise from <em>cognitive content</em>, such as learned false beliefs. These we call “mistakes” rather than “biases,” and they are much easier to correct, once we’ve noticed them for ourselves. (Though the source of the mistake, or the source of the source of the mistake, may ultimately be some bias.)</p>

    <MarginNote side="left" author="Arandur">
      <p>I had previously misunderstood the adopted meaning of the word "bias"... using the term as it's socially used, that is to say, a prior reason for holding a certain belief over another due to convenience. A judge might be biased because one side is paying him; a jury member might be biased because their sister is the one on trial. Are these "mistakes"? Or do they fall under a certain type of cognitive bias that is similar among all humans?</p>
    </MarginNote>

    <MarginNote side="left" author="MarkusRamikin">
      <p>I would call a judge who is favoring a side because they're paying him "biased", and not "mistaken" or any such thing. But it's not a <em>cognitive bias</em>. The word "bias" has legitimate meanings other than what EY is saying, so it would have been clearer if the article used the term "cognitive bias" at least at the outset.</p>
    </MarginNote>

    <MarginNote side="left" author="simonthedeer">
      <p>I would argue a corrupt judge only seems biased as biased people in my understanding are not aware of their underlying preferences. That also might be the common ground with a cognitive bias: you are never directly aware of its presence and can only deduce on it by analysis.</p>
    </MarginNote>

    <MarginNote side="left" author="Benjamin Kost">
      <p>You are confusing two definitions for the same word. The judge is biased by one definition of “bias”, but not by the other definition as used in cognitive or statistical bias.</p>
    </MarginNote>


    <MarginNote side="right" author="thomblake">
      <p>This definition of bias seems problematic. If a putative bias is caused by absorbed cultural mores, then supposedly it is not a bias. But that causal chain can be tricky to track down; we go on thinking something is a 'bias' until we find the black swan culture where the bias doesn't exist, and then realize that the problem was not inherent in our mental machinery. But is <em>that</em> distinction even worth making, if we <em>don't</em> know what caused the bias?</p>
    </MarginNote>
    <p>“Biases” are also distinguished from errors stemming from damage to an individual human brain, or from absorbed cultural mores; biases arise from machinery that is humanly universal.</p>


    <MarginNote side="right" author="Navanen">
      <p>I suspect the definition is worth making because even if we don't know what caused the bias, we can use the label of a bias "not inherent in our mental machinery" as a marker for study of what it's cause is in the future.</p>
    </MarginNote>

    <p>Plato wasn’t “biased” because he was ignorant of General Relativity—he had no way to gather that information, his ignorance did not arise from the shape of his mental machinery. But if Plato believed that philosophers would make better kings because he himself was a philosopher—and this belief, in turn, arose because of a universal adaptive political instinct for self-promotion, and not because Plato’s daddy told him that everyone has a moral duty to promote their own profession to governorship, or because Plato sniffed too much glue as a kid—then that was a bias, whether Plato was ever warned of it or not.</p>



    <p>While I am not averse (as you can see) to discussing definitions, I don’t want to suggest that the project of better wielding our own minds rests on a particular choice of terminology. If the term “cognitive bias” turns out to be unhelpful, we should just drop it.</p>

    <p>We don’t start out with a moral duty to “reduce bias,” simply because biases are bad and evil and Just Not Done. This is the sort of thinking someone might end up with if they acquired a deontological duty of “rationality” by social osmosis, which leads to people trying to execute techniques without appreciating the reason for them. (Which is bad and evil and Just Not Done, according to <em>Surely You’re Joking, Mr. Feynman</em>, which I read as a kid.) A bias is an obstacle to our goal of obtaining truth, and thus <em>in our way</em>.</p>

    <p>We are here to pursue the great human quest for truth: for we have desperate need of the knowledge, and besides, we're curious. To this end let us strive to overcome whatever obstacles lie in our way, whether we call them “biases” or not.</p>

  </Chapter>;
}
