import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function EntropyAndShortCodes() {
  return <Chapter title={["Entropy, and Short Codes"]}>


    <p><span className="dropCap">I</span>f you aren't familiar with Bayesian inference, this may be a good time to read An Intuitive Explanation of Bayes's Theorem.</p>
    <p>Suppose you have a system <Latex math="X" /> that's equally likely to be in any of 8 possible states:</p>
    <Latex display="block" math="\{X_1, X_2, X_3, X_4, X_5, X_6, X_7, X_8\}" />
    <p>There's an extraordinarily ubiquitous quantity—in physics, mathematics, and even biology—called <em>entropy</em>; and the entropy of <Latex math="X" /> is 3 bits. This means that, on average, we'll have to ask 3 yes-or-no questions to find out <Latex math="X" />'s value. For example, someone could tell us <Latex math="X" />'s value using this code:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="X_1" /> : 001</td>
            <td><Latex math="X_2" /> : 010</td>
            <td><Latex math="X_3" /> : 011</td>
            <td><Latex math="X_4" /> : 100</td>
          </tr>
          <tr>
            <td><Latex math="X_5" /> : 101</td>
            <td><Latex math="X_6" /> : 110</td>
            <td><Latex math="X_7" /> : 111</td>
            <td><Latex math="X_8" /> : 000.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>So if I asked "Is the first symbol 1?" and heard "yes," then asked "Is the second symbol 1?" and heard "no," then asked "Is the third symbol 1?" and heard "no," I would know that <Latex math="X" /> was in state 4.</p>
    <p>Now suppose that the system <Latex math="Y" /> has four possible states with the following probabilities:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="Y_1" /> : <Latex math="1/2" /> (50%)</td>
            <td><Latex math="Y_2" /> : <Latex math="1/4" /> (25%)</td>
          </tr>
          <tr>
            <td><Latex math="Y_3" /> : <Latex math="1/8" /> (12.5%)</td>
            <td><Latex math="Y_4" /> : <Latex math="1/8" /> (12.5%).</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>Then the entropy of <Latex math="Y" /> would be 1.75 bits, meaning that we can find out its value by asking 1.75 yes-or-no questions.</p>
    <p>What does it mean to talk about asking one and three-fourths of a question? Imagine that we designate the states of Y using the following code:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="Y_1" /> : 1</td>
            <td><Latex math="Y_2" /> : 01</td>
            <td><Latex math="Y_3" /> : 001</td>
            <td><Latex math="Y_4" /> : 000.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>First you ask, "Is the first symbol 1?" If the answer is "yes," you're done: <Latex math="Y" /> is in state 1. This happens half the time, so 50% of the time, it takes 1 yes-or-no question to find out <Latex math="Y" />'s state.</p>
    <p>Suppose that instead the answer is "No." Then you ask, "Is the second symbol 1?" If the answer is "yes," you're done: <Latex math="Y" /> is in state 2. The system <Latex math="Y" /> is in state 2 with probability <Latex math="1/4" />, and each time <Latex math="Y" /> is in state 2 we discover this fact using two yes-or-no questions, so 25% of the time it takes 2 questions to discover <Latex math="Y" />'s state.</p>
    <p>If the answer is "No" twice in a row, you ask "Is the third symbol 1?" If "yes," you're done and <Latex math="Y" /> is in state 3; if "no," you're done and <Latex math="Y" /> is in state 4. The <Latex math="1/8" /> of the time that <Latex math="Y" /> is in state 3, it takes three questions; and the <Latex math="1/8" /> of the time that <Latex math="Y" /> is in state 4, it takes three questions.</p>

    <Latex display="block" math="(1/2 \times 1) + (1/4 \times 2) + (1/8 \times 3) + (1/8 \times 3)" />
    <Latex display="block" math="= 0.5 + 0.5 + 0.375 + 0.375" />
    <Latex display="block" math="= 1.75" />

    <p>The general formula for the entropy <Latex math="H(S)" /> of a system <Latex math="S" /> is the sum, over all <Latex math="S_i" />, of <Latex math="-P(S_i)\log_2(P(S_i))" />.</p>
    <p>For example, the log (base 2) of <Latex math="1/8" /> is <Latex math="-3" />. So <Latex math="-(1/8 \times -3) = 0.375" /> is the contribution of state <Latex math="S_4" /> to the total entropy: <Latex math="1/8" /> of the time, we have to ask 3 questions.</p>
    <p>You can't always devise a perfect code for a system, but if you have to tell someone the state of arbitrarily many copies of <Latex math="S" /> in a single message, you can get arbitrarily close to a perfect code. (Google "arithmetic coding" for a simple method.)</p>
    <p>Now, you might ask: "Why not use the code 10 for <Latex math="Y_4" />, instead of 000? Wouldn't that let us transmit messages more quickly?"</p>
    <p>But if you use the code 10 for <Latex math="Y_4" />, then when someone answers "Yes" to the question "Is the first symbol 1?," you won't know yet whether the system state is <Latex math="Y_1" /> (1) or <Latex math="Y_4" /> (10). In fact, if you change the code this way, the whole system falls apart—because if you hear "1001," you don't know if it means "<Latex math="Y_4" />, followed by <Latex math="Y_2" />" or "<Latex math="Y_1" />, followed by <Latex math="Y_3" />."</p>


    <p>The moral is that <em>short words are a conserved resource</em>.</p>
    <p>The key to creating a good code—a code that transmits messages as compactly as possible—is to reserve short words for things that you'll need to say frequently, and use longer words for things that you won't need to say as often.</p>
    <p>When you take this art to its limit, the length of the message you need to describe something corresponds exactly or almost exactly to its probability. This is the Minimum Description Length or Minimum Message Length formalization of Occam's Razor.</p>
    <p>And so even the <em>labels</em> that we use for words are not quite arbitrary. The sounds that we attach to our concepts can be better or worse, wiser or more foolish. Even apart from considerations of common usage!</p>
    <p>I say all this, because the idea that "You can <Latex math="X" /> any way you like" is a huge obstacle to learning how to <Latex math="X" /> wisely. "It's a free country; I have a right to my own opinion" obstructs the art of finding truth. "I can define a word any way I like" obstructs the art of carving reality at its joints. And even the sensible-sounding "The labels we attach to words are arbitrary" obstructs awareness of compactness. Prosody too, for that matter—Tolkien once observed what a beautiful sound the phrase "cellar door" makes; that is the kind of awareness it takes to use language like Tolkien.</p>
    <p>The length of words also plays a nontrivial role in the cognitive science of language:</p>
    <p>Consider the phrases "recliner," "chair," and "furniture." Recliner is a more specific category than chair; furniture is a more general category than chair. But the vast majority of chairs have a common use—you use the same sort of motor actions to sit down in them, and you sit down in them for the same sort of purpose (to take your weight off your feet while you eat, or read, or type, or rest). Recliners do not depart from this theme. "Furniture," on the other hand, includes things like beds and tables which have different uses, and call up different motor functions, from chairs.</p>
    <p>In the terminology of cognitive psychology, "chair" is a <em>basic-level category</em>.</p>
    <p>People have a tendency to talk, and presumably think, at the basic level of categorization—to draw the boundary around "chairs," rather than around the more specific category "recliner," or the more general category "furniture." People are more likely to say "You can sit in that chair" than "You can sit in that recliner" or "You can sit in that furniture."</p>
    <p>And it is no coincidence that the word for "chair" contains fewer syllables than either "recliner" or "furniture." Basic-level categories, in general, tend to have short names; and nouns with short names tend to refer to basic-level categories. Not a perfect rule, of course, but a definite tendency. Frequent use goes along with short words; short words go along with frequent use.</p>
    <p>Or as Douglas Hofstadter put it, there's a reason why the English language uses "the" to mean "the" and "antidisestablishmentarianism" to mean "antidisestablishmentarianism" instead of antidisestablishmentarianism other way around.</p>
  </Chapter >;
}
