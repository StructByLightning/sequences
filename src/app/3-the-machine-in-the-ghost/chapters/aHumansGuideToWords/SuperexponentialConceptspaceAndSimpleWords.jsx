import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function SuperexponentialConceptspaceAndSimpleWords() {
  return <Chapter title={["Superexponential Conceptspace,", "and Simple Words"]}>


    <p><span className="dropCap">T</span>hingspace, you might think, is a rather huge space. Much larger than reality, for where reality only contains things that actually exist, Thingspace contains everything that <em>could</em> exist.</p>
    <p>Actually, the way I "defined" Thingspace to have dimensions for every possible attribute—including correlated attributes like density and volume and mass—Thingspace may be too poorly defined to have anything you could call a <em>size</em>. But it's important to be able to visualize Thingspace <em>anyway</em>. Surely, no one can <em>really</em> understand a flock of sparrows if all they see is a cloud of flapping cawing things, rather than a cluster of points in Thingspace.</p>
    <p>But as vast as Thingspace may be, it doesn't hold a candle to the size of Conceptspace.</p>
    <p>"Concept," in machine learning, means a rule that includes or excludes examples. If you see the data &#123;2:+, 3:-, 14:+, 23:-, 8:+, 9:-&#125; then you might guess that the concept was "even numbers." There is a rather large literature (as one might expect) on how to learn concepts from data… given random examples, given chosen examples… given possible errors in classification… and most importantly, given different spaces of possible rules.</p>
    <p>Suppose, for example, that we want to learn the concept "good days on which to play tennis." The possible attributes of Days are</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><code>Sky:</code></td>
            <td><code>&#123;Sunny, Cloudy, Rainy&#125;</code></td>
          </tr>
          <tr>
            <td><code>AirTemp:</code></td>
            <td><code>&#123;Warm, Cold&#125;</code></td>
          </tr>
          <tr>
            <td><code>Humidity:</code></td>
            <td><code>&#123;Normal, High&#125;</code></td>
          </tr>
          <tr>
            <td><code>Wind:</code></td>
            <td><code>&#123;Strong, Weak&#125;.</code></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>We're then presented with the following data, where + indicates a positive example of the concept, and − indicates a negative classification:</p>

    <figure>
      <table>
        <tbody>
          <tr>
            <td><code>+</code></td>
            <td><code>Sky: Sunny;</code></td>
            <td><code>AirTemp: Warm;</code></td>
          </tr>
          <tr>
            <td></td>
            <td><code>Humidity: High;</code></td>
            <td><code>Wind: Strong.</code></td>
          </tr>
          <tr>
            <td><code>−</code></td>
            <td><code>Sky: Rainy;</code></td>
            <td><code>AirTemp: Cold;</code></td>
          </tr>
          <tr>
            <td></td>
            <td><code>Humidity: High;</code></td>
            <td><code>Wind: Strong.</code></td>
          </tr>
          <tr>
            <td><code>+</code></td>
            <td><code>Sky: Sunny;</code></td>
            <td><code>AirTemp: Warm;</code></td>
          </tr>
          <tr>
            <td></td>
            <td><code>Humidity: High;</code></td>
            <td><code>Wind: Weak.</code></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>What should an algorithm infer from this?</p>
    <p>A machine learner might represent <em>one</em> concept that fits this data as follows:</p>
    <p><code>&#123;Sky: ?; AirTemp: Warm; Humidity: High; Wind: ?&#125;</code></p>
    <p>In this format, to determine whether this concept accepts or rejects an example, we compare element-by-element: ? accepts anything, but a specific value accepts only that specific value.</p>
    <p>So the concept above will accept only <code>Days</code> with <code>AirTemp = Warm</code> and <code>Humidity = High</code>, but the <code>Sky</code> and the <code>Wind</code> can take on any value. This fits both the negative and the positive classifications in the data so far—though it isn't the <em>only</em> concept that does so.</p>
    <p>We can also simplify the above concept representation to</p>
    <p><code>&#123;?, Warm, High, ?&#125;</code></p>
    <p>Without going into details, the classic algorithm would be:</p>
    <ul>
      <li>Maintain the set of the most general hypotheses that fit the data—those that positively classify as many examples as possible, while still fitting the facts.</li>
      <li>Maintain another set of the most specific hypotheses that fit the data— those that negatively classify as many examples as possible, while still fitting the facts.</li>
      <li>Each time we see a new negative example, we strengthen all the most general hypotheses as little as possible, so that the new set is again as general as possible while fitting the facts.</li>
      <li>Each time we see a new positive example, we relax all the most specific hypotheses as little as possible, so that the new set is again as specific as possible while fitting the facts.</li>
      <li>We continue until we have only a single hypothesis left. This will be the answer <em>if</em> the target concept was in our hypothesis space at all.</li>
    </ul>
    <p>In the case above, the set of most general hypotheses would be</p>
    <p><code>&#123;&#123;?, Warm, ?, ?&#125;,&#123;Sunny, ?, ?, ?&#125;&#125;,</code></p>
    <p>while the set of most specific hypotheses contains the single member <code>&#123;Sunny, Warm, High, ?&#125;</code>.</p>
    <p>Any other concept you can find that fits the data will be strictly more specific than one of the most general hypotheses, and strictly more general than the most specific hypothesis.</p>
    <p>(For more on this, I recommend Tom Mitchell's <em>Machine Learning</em>, from which this example was adapted.<span class="footnote">Tom M. Mitchell, <em>Machine Learning</em> (McGraw-Hill Science/Engineering/Math, 1997).</span>)</p>
    <p>Now you may notice that the format above <em>cannot</em> represent all possible concepts. E.g., "Play tennis when the sky is sunny <em>or</em> the air is warm." That fits the data, but in the concept representation defined above, there's no quadruplet of values that describes the rule.</p>
    <p>Clearly our machine learner is not very general. Why not allow it to represent <em>all possible</em> concepts, so that it can learn with the greatest possible flexibility?</p>
    <p><code>Days</code> are composed of these four variables, one variable with 3 values and three variables with 2 values. So there are <Latex math="3 \times 2 \times 2 \times 2 = 24" /> possible <code>Days</code> that we could encounter.</p>
    <p>The format given for representing concepts allows us to require any of these values for a variable, or leave the variable open. So there are <Latex math="4 \times 3 \times 3 \times 3 = 108" /> concepts in that representation. For the most-general/most-specific algorithm to work, we need to start with the most specific hypothesis "no example is ever positively classified." If we add that, it makes a total of 109 concepts.</p>
    <p>Is it suspicious that there are more possible concepts than possible <code>Days</code>? Surely not: After all, a concept can be viewed as a <em>collection</em> of Days. A concept can be viewed as the set of days that it classifies positively, or isomorphically, the set of days that it classifies negatively.</p>
    <p>So the space of <em>all possible</em> concepts that classify <code>Days</code> is the set of all possible sets of <code>Days</code>, whose size is <Latex math="2^{24} = 16{,}777{,}216" />.</p>
    <p>This complete space includes all the concepts we have discussed so far. But it also includes concepts like "Positively classify only the examples <code>&#123;Sunny, Warm, High, Strong&#125;</code> and <code>&#123;Sunny, Warm, High, Weak&#125;</code> and reject everything else" or "Negatively classify only the example <code>&#123;Rainy, Cold, High, Strong&#125;</code> and accept everything else." It includes concepts with no compact representation, just a flat list of what is and isn't allowed.</p>
    <p>That's the problem with trying to build a "fully general" inductive learner: They can't learn concepts until they've seen every possible example in the instance space.</p>
    <p>If we add on more attributes to <code>Days</code>—like the <code>Water</code> temperature, or the <code>Forecast</code> for tomorrow—then the number of possible days will grow exponentially in the number of attributes. But this isn't a problem with our restricted concept space, because you can narrow down a large space using a logarithmic number of examples.</p>
    <p>Let's say we add the <code>Water: &#123;Warm, Cold&#125;</code> attribute to days, which will make for 48 possible <code>Days</code> and 325 possible concepts. Let's say that each <code>Day</code> we see is, usually, classified positive by around half of the currently-plausible concepts, and classified negative by the other half. Then when we learn the actual classification of the example, it will cut the space of compatible concepts in half. So it might only take 9 examples (<Latex math="2^9 = 512" />) to narrow 325 possible concepts down to one.</p>
    <p>Even if <code>Days</code> had forty binary attributes, it should still only take a manageable amount of data to narrow down the possible concepts to one. Sixty-four examples, if each example is classified positive by half the remaining concepts. <em>Assuming</em>, of course, that the <em>actual</em> rule is one we can represent at all!</p>
    <p>If you want to think of all the possibilities, well, good luck with that. The space of <em>all possible</em> concepts grows <em>super</em>exponentially in the number of attributes.</p>
    <p>By the time you're talking about data with forty binary attributes, the number of possible examples is past a trillion—but the number of possible <em>concepts</em> is past <Latex math="2^{(\text{trillion})}" />. To narrow down that <em>super</em>exponential concept space, you'd have to see over a trillion examples before you could say what was In, and what was Out. You'd have to see every possible example, in fact.</p>
    <p>That's with forty binary attributes, mind you. Forty bits, or 5 bytes, to be classified simply "Yes" or "No." Forty bits implies <Latex math="2^{40}" /> possible examples, and <Latex math="2^{2^{40}}" /> possible concepts that classify those examples as positive or negative.</p>
    <p>So, here in the real world, where objects take more than 5 bytes to describe <em>and</em> a trillion examples are not available <em>and</em> there is noise in the training data, we only even <em>think</em> about <em>highly regular</em> concepts. A human mind—or the whole observable universe—is not nearly large enough to consider all the other hypotheses.</p>
    <p>From this perspective, learning doesn't just <em>rely on</em> inductive bias, it is <em>nearly all</em> inductive bias—when you compare the number of concepts ruled out a priori, to those ruled out by mere evidence.</p>
    <p>But what has this (you inquire) to do with the proper use of words?</p>
    <p>It's the whole reason that words have intensions as well as extensions.</p>
    <p>In the last essay, I concluded:</p>
    <blockquote>
      <p>The way to carve reality at its joints is to draw boundaries around concentrations of unusually high probability density.</p>
    </blockquote>
    <p>I deliberately left out a key qualification in that (slightly edited) statement, because I couldn't explain it until now. A better statement would be:</p>
    <blockquote>
      <p>The way to carve reality at its joints, is to draw <em>simple</em> boundaries around concentrations of unusually high probability density in Thingspace.</p>
    </blockquote>
    <p>Otherwise you would just gerrymander Thingspace. You would create really odd noncontiguous boundaries that collected the observed examples, examples that couldn't be described in any shorter message than your observations themselves, and say: "This is what I've seen before, and what I expect to see more of in the future."</p>
    <p>In the real world, nothing above the level of molecules repeats itself <em>exactly</em>. Socrates is shaped a lot like all those other humans who were vulnerable to hemlock, but he isn't shaped <em>exactly</em> like them. So your guess that Socrates is a "human" relies on drawing <em>simple</em> boundaries around the human cluster in Thingspace. Rather than, "Things shaped exactly like [5-megabyte shape specification 1] and with [lots of other characteristics], <em>or</em> exactly like [5-megabyte shape specification 2] and [lots of other characteristics], … , are human."</p>
    <p>If you don't draw <em>simple</em> boundaries around your experiences, you can't do inference with them. So you try to describe "art" with intensional definitions like "that which is intended to inspire any complex emotion for the sake of inspiring it," rather than just pointing at a long list of things that are, or aren't art.</p>
    <p>In fact, the above statement about "how to carve reality at its joints" is a bit chicken-and-eggish: You can't assess the <em>density</em> of actual observations until you've already done at least a little carving. And the probability distribution comes from drawing the boundaries, not the other way around—if you already <em>had</em> the probability distribution, you'd have everything necessary for inference, so why would you bother drawing boundaries?</p>
    <p>And this suggests another—yes, yet another—reason to be suspicious of the claim that "you can define a word any way you like." When you consider the superexponential size of Conceptspace, it becomes clear that singling out one particular concept for consideration is an act of no small audacity—not just for us, but for any mind of bounded computing power.</p>
    <p>Presenting us with the word "wiggin," defined as "a black-haired green-eyed person," without some reason for raising <em>this particular concept</em> to the level of our deliberate attention, is rather like a detective saying: "Well, I haven't the slightest shred of support one way or the other for who could've murdered those orphans… not even an intuition, mind you… but have we considered John Q. Wiffleheim of 1234 Norkle Rd as a suspect?"</p>
  </Chapter>;
}