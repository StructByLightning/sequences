import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function QualitativelyConfused() {
  return <Chapter title={["Qualitatively Confused"]}>

    <p><span className="dropCap">I</span> suggest that a primary cause of confusion about the distinction between "belief," "truth," and "reality" is qualitative thinking about beliefs.</p>
    <p>Consider the archetypal postmodernist attempt to be clever:</p>
    <blockquote>
      <p>"The Sun goes around the Earth" is true for Hunga Huntergatherer, but "The Earth goes around the Sun" is true for Amara Astronomer! Different societies have different truths!</p>
    </blockquote>
    <p>No, different societies have different <em>beliefs</em>. Belief is of a different type than truth; it's like comparing apples and probabilities.</p>
    <blockquote>
      <p>Ah, but there's no difference between the way you use the word "belief " and the way you use the word "truth"! Whether you say, "I believe 'snow is white,' " or you say, " 'Snow is white' is true," you're expressing exactly the same opinion.</p>
    </blockquote>
    <p>No, these sentences mean quite different things, which is how I can <em>conceive</em> of the possibility that my beliefs are false.</p>
    <blockquote>
      <p>Oh, you claim to <em>conceive</em> it, but you never <em>believe</em> it. As Wittgenstein said, "If there were a verb meaning 'to believe falsely,' it would not have any significant first person, present indicative."</p>
    </blockquote>
    <p>And that's what I mean by putting my finger on qualitative reasoning as the source of the problem. The dichotomy between belief and disbelief, being binary, is confusingly similar to the dichotomy between truth and untruth.</p>
    <p>So let's use quantitative reasoning instead. Suppose that I assign a 70% probability to the proposition that snow is white. It follows that I think there's around a 70% chance that the sentence "snow is white" will turn out to be true. If the sentence "snow is white" is true, is my 70% probability assignment to the proposition, also "true"? Well, it's more true than it would have been if I'd assigned 60% probability, but not so true as if I'd assigned 80% probability.</p>
    <p>When talking about the correspondence between a probability assignment and reality, a better word than "truth" would be "accuracy." "Accuracy" sounds more quantitative, like an archer shooting an arrow: how close did your probability assignment strike to the center of the target?</p>
    <p>To make a long story short, it turns out that there's a very natural way of scoring the accuracy of a probability assignment, as compared to reality: just take the logarithm of the probability assigned to the real state of affairs.</p>
    <p>So if snow is white, my belief "70%: 'snow is white' " will score −0.51 bits: <Latex math="\log_2(0.7) = -0.51" />.</p>
    <p>But what if snow is not white, as I have conceded a 30% probability is the case? If "snow is white" is false, my belief "30% probability: 'snow is not white' " will score −1.73 bits. Note that −1.73 &lt; −0.51, so I have done worse.</p>
    <p>About how accurate do I think my own beliefs are? Well, my expectation over the score is <Latex math="70\% \times -0.51 + 30\% \times -1.73 = -0.88" /> bits. If snow is white, then my beliefs will be more accurate than I expected; and if snow is not white, my beliefs will be less accurate than I expected; but in neither case will my belief be <em>exactly</em> as accurate as I expected on average.</p>
    <p>All this should not be confused with the statement "I assign 70% credence that 'snow is white.' " I may well believe <em>that</em> proposition with probability <Latex math="\sim 1" />— be quite certain that this is in fact my belief. If so I'll expect my meta-belief "~1: 'I assign 70% credence that "snow is white" ' " to score <Latex math="\sim 0" /> bits of accuracy, which is as good as it gets.</p>
    <p>Just because I am uncertain about snow, does not mean I am uncertain about my <em>quoted probabilistic beliefs</em>. Snow is out there, my beliefs are inside me. I may be a great deal less uncertain about how uncertain I am about snow, than I am uncertain about snow. (Though beliefs about beliefs are not always accurate.)</p>
    <p>Contrast this probabilistic situation to the qualitative reasoning where I just believe that snow is white, and believe that I believe that snow is white, and believe " 'snow is white' is true," and believe "my belief ' "snow is white" is true' is correct," etc. Since all the quantities involved are 1, it's easy to mix them up.</p>
    <p>Yet the nice distinctions of quantitative reasoning will be short-circuited if you start thinking " ' "snow is white" with 70% probability' is <em>true</em>," which is a type error. It is a true fact about you, that you <em>believe</em> "70% probability: 'snow is white' "; but that does not mean the probability assignment <em>itself</em> can possibly be "true." The belief scores either −0.51 bits or −1.73 bits of accuracy, depending on the actual state of reality.</p>
    <p>The cognoscenti will recognize " ' "snow is white" with 70% probability' is true" as the mistake of thinking that probabilities are inherent properties of things.</p>
    <p>From the inside, our beliefs about the world look like the world, and our beliefs about our beliefs look like beliefs. When you see the world, you are experiencing a belief from the inside. When you notice yourself believing something, you are experiencing a belief about belief from the inside. So if your internal representations of belief, and belief about belief, are dissimilar, then you are less likely to mix them up and commit the Mind Projection Fallacy—I hope.</p>
    <p>When you think in probabilities, your beliefs, and your beliefs about your beliefs, will hopefully not be represented similarly enough that you mix up belief and accuracy, or mix up accuracy and reality. When you think in probabilities <em>about the world</em>, your beliefs will be represented with probabilities in the range <Latex math="(0, 1)" />. Unlike the truth-values of propositions, which are in the set <Latex math="\{\text{true}, \text{false}\}" />. As for the accuracy of your probabilistic belief, you can represent that in the range <Latex math="(-\infty, 0)" />. Your probabilities <em>about your beliefs</em> will typically be extreme. And things themselves—why, they're just red, or blue, or weighing 20 pounds, or whatever.</p>
    <p>Thus we will be less likely, perhaps, to mix up the map with the territory.</p>
    <p>This type distinction may also help us remember that <em>uncertainty</em> is a state of mind. A coin is not <em>inherently</em> 50% uncertain of which way it will land. The coin is not a belief processor, and does not have partial information about itself. In qualitative reasoning you can create a belief that corresponds very straightforwardly to the coin, like "The coin will land heads." This belief will be true or false <em>depending</em> on the coin, and there will be a transparent implication from the truth or falsity of the belief, to the facing side of the coin.</p>
    <p>But even under qualitative reasoning, to say that the coin <em>itself</em> is "true" or "false" would be a severe type error. The coin is not a belief. It is a coin. The territory is not the map.</p>
    <p>If a coin cannot be true or false, how much less can it assign a 50% probability to itself?</p>
  </Chapter>;
}