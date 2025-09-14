import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function MutualInformationAndDensityInThingspace() {
  return <Chapter title={["Mutual Information, and", "Density in Thingspace"]}>


    <p><span className="dropCap">S</span>uppose you have a system <Latex math="X" /> that can be in any of 8 states, which are all equally probable (relative to your current state of knowledge), and a system <Latex math="Y" /> that can be in any of 4 states, all equally probable. The entropy of <Latex math="X" />, as defined in the previous essay, is 3 bits; we'll need to ask 3 yes-or-no questions to find out <Latex math="X" />'s exact state. The entropy of <Latex math="Y" /> is 2 bits; we have to ask 2 yes-or-no questions to find out <Latex math="Y" />'s exact state. This may seem obvious since <Latex math="2^3 = 8" /> and <Latex math="2^2 = 4" />, so 3 questions can distinguish 8 possibilities and 2 questions can distinguish 4 possibilities; but remember that if the possibilities were not all equally likely, we could use a more clever code to discover <Latex math="Y" />'s state using e.g. 1.75 questions on average. In this case, though, <Latex math="X" />'s <em>probability mass is evenly distributed</em> over all its possible states, and likewise <Latex math="Y" />, so we can't use any clever codes.</p>
    <p>What is the entropy of the combined system <Latex math="(X,Y)" />?</p>
    <p>You might be tempted to answer, "It takes 3 questions to find out <Latex math="X" />, and then 2 questions to find out <Latex math="Y" />, so it takes 5 questions total to find out the state of <Latex math="X" /> and <Latex math="Y" />."</p>
    <p>But what if the two variables are entangled, so that learning the state of <Latex math="Y" /> tells us something about the state of <Latex math="X" />?</p>
    <p>In particular, let's suppose that <Latex math="X" /> and <Latex math="Y" /> are either both odd or both even.</p>
    <p>Now if we receive a 3-bit message (ask 3 questions) and learn that <Latex math="X" /> is in state <Latex math="X_5" />, we know that <Latex math="Y" /> is in state <Latex math="Y_1" /> or state <Latex math="Y_3" />, but not state <Latex math="Y_2" /> or state <Latex math="Y_4" />. So the single additional question "Is <Latex math="Y" /> in state <Latex math="Y_3" />?," answered "No," tells us the entire state of <Latex math="(X,Y)" />: <Latex math="X = X_5" />, <Latex math="Y = Y_1" />. And we learned this with a total of 4 questions.</p>
    <p>Conversely, if we learn that <Latex math="Y" /> is in state <Latex math="Y_4" /> using two questions, it will take us only an additional two questions to learn whether <Latex math="X" /> is in state <Latex math="X_2" />, <Latex math="X_4" />, <Latex math="X_6" />, or <Latex math="X_8" />. Again, four questions to learn the state of the joint system.</p>
    <p>The <em>mutual information</em> of two variables is defined as the difference between the entropy of the joint system and the entropy of the independent systems: <Latex math="I(X;Y) = H(X) + H(Y) - H(X,Y)" />.</p>
    <p>Here there is one bit of mutual information between the two systems: Learning <Latex math="X" /> tells us one bit of information about <Latex math="Y" /> (cuts down the space of possibilities from 4 possibilities to 2, a factor-of-2 decrease in the volume) and learning <Latex math="Y" /> tells us one bit of information about <Latex math="X" /> (cuts down the possibility space from 8 possibilities to 4).</p>
    <p>What about when probability mass is not evenly distributed? Last essay, for example, we discussed the case in which <Latex math="Y" /> had the probabilities 1/2, 1/4, 1/8, 1/8 for its four states. Let us take this to be our probability distribution over <Latex math="Y" />, considered independently—if we saw <Latex math="Y" />, without seeing anything else, this is what we'd expect to see. And suppose the variable <Latex math="Z" /> has two states, <Latex math="Z_1" /> and <Latex math="Z_2" />, with probabilities 3/8 and 5/8 respectively.</p>
    <p>Then if and only if the joint distribution of <Latex math="Y" /> and <Latex math="Z" /> is as follows, there is zero mutual information between <Latex math="Y" /> and <Latex math="Z" />:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="Z_1Y_1 : 3/16" /></td>
            <td><Latex math="Z_1Y_2 : 3/32" /></td>
            <td><Latex math="Z_1Y_3 : 3/64" /></td>
            <td><Latex math="Z_1Y_4 : 3/64" /></td>
          </tr>
          <tr>
            <td><Latex math="Z_2Y_1 : 5/16" /></td>
            <td><Latex math="Z_2Y_2 : 5/32" /></td>
            <td><Latex math="Z_2Y_3 : 5/64" /></td>
            <td><Latex math="Z_2Y_4 : 5/64" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>This distribution obeys the law</p>
    <Latex display="block" math="P(Y,Z) = P(Y)P(Z)" />
    <p>For example, <Latex math="P(Z_1Y_2) = P(Z_1)P(Y_2) = 3/8 \times 1/4 = 3/32" />.</p>
    <p>And observe that we can recover the marginal (independent) probabilities of <Latex math="Y" /> and <Latex math="Z" /> just by looking at the joint distribution:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="P(Y_1)" /></td>
            <td>=</td>
            <td>total probability of all the different ways <Latex math="Y_1" /> can happen</td>
          </tr>
          <tr>
            <td></td>
            <td>=</td>
            <td><Latex math="P(Z_1Y_1) + P(Z_2Y_1)" /></td>
          </tr>
          <tr>
            <td></td>
            <td>=</td>
            <td>3/16 + 5/16</td>
          </tr>
          <tr>
            <td></td>
            <td>=</td>
            <td>1/2 .</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>So, just by inspecting the joint distribution, we can determine whether the marginal variables <Latex math="Y" /> and <Latex math="Z" /> are independent; that is, whether the joint distribution factors into the product of the marginal distributions; whether, for all <Latex math="Y" /> and <Latex math="Z" />, we have <Latex math="P(Y,Z) = P(Y)P(Z)" />.</p>
    <p>This last is significant because, by Bayes's Rule,</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="P(Z_j Y_i)" /></td>
            <td>=</td>
            <td><Latex math="P(Y_i)P(Z_j)" /></td>
          </tr>
          <tr>
            <td><Latex math="P(Z_j Y_i)/P(Z_j)" /></td>
            <td>=</td>
            <td><Latex math="P(Y_i)" /></td>
          </tr>
          <tr>
            <td><Latex math="P(Y_i | Z_j)" /></td>
            <td>=</td>
            <td><Latex math="P(Y_i)" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>In English: "After you learn <Latex math="Z_j" />, your belief about <Latex math="Y_i" /> is just what it was before."</p>
    <p>So when the distribution factorizes—when <Latex math="P(Y,Z) = P(Y)P(Z)" />—this is <em>equivalent</em> to "Learning about <Latex math="Y" /> never tells us anything about <Latex math="Z" /> or vice versa."</p>
    <p>From which you might suspect, correctly, that there is no mutual information between <Latex math="Y" /> and <Latex math="Z" />. Where there is no mutual information, there is no Bayesian evidence, and vice versa.</p>
    <p>Suppose that in the distribution <Latex math="(Y,Z)" /> above, we treated each possible combination of <Latex math="Y" /> and <Latex math="Z" /> as a separate event—so that the distribution <Latex math="(Y,Z)" /> would have a total of 8 possibilities, with the probabilities shown—and then we calculated the entropy of the distribution <Latex math="(Y,Z)" /> the same way we would calculate the entropy of any distribution:</p>


    <Latex display="block" math="P(Z_1Y_1)\log_2(P(Z_1Y_1)) + P(Z_1Y_2)\log_2(P(Z_1Y_2)) +\\ P(Z_1Y_3)\log_2(P(Z_1Y_3)) + \ldots + P(Z_2Y_4)\log_2(P(Z_2Y_4))" />
    <Latex display="block" math="= (3/16)\log_2(3/16) + (3/32)\log_2(3/32) +\\ (3/64)\log_2(3/64) + \ldots + (5/64)\log_2(5/64)" />


    <p>You would end up with the same total you would get if you separately calculated the entropy of <Latex math="Y" /> plus the entropy of <Latex math="Z" />. There is no mutual information between the two variables, so our uncertainty about the joint system is not any less than our uncertainty about the two systems considered separately. (I am not showing the calculations, but you are welcome to do them; and I am not showing the proof that this is true in general, but you are welcome to Google on "Shannon entropy" and "mutual information.")</p>
    <p>What if the joint distribution doesn't factorize? For example:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="Z_1Y_1 : 12/64" /></td>
            <td><Latex math="Z_1Y_2 : 8/64" /></td>
            <td><Latex math="Z_1Y_3 : 1/64" /></td>
            <td><Latex math="Z_1Y_4 : 3/64" /></td>
          </tr>
          <tr>
            <td><Latex math="Z_2Y_1 : 20/64" /></td>
            <td><Latex math="Z_2Y_2 : 8/64" /></td>
            <td><Latex math="Z_2Y_3 : 7/64" /></td>
            <td><Latex math="Z_2Y_4 : 5/64" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>If you add up the joint probabilities to get marginal probabilities, you should find that <Latex math="P(Y_1) = 1/2" />, <Latex math="P(Z_1) = 3/8" />, and so on—the marginal probabilities are the same as before.</p>
    <p>But the joint probabilities do not always equal the product of the marginal probabilities. For example, the probability <Latex math="P(Z_1Y_2)" /> equals 8/64, where <Latex math="P(Z_1)P(Y_2)" /> would equal <Latex math="3/8 \times 1/4 = 6/64" />. That is, the probability of running into <Latex math="Z_1Y_2" /> together is greater than you'd expect based on the probabilities of running into <Latex math="Z_1" /> or <Latex math="Y_2" /> separately.</p>
    <p>Which in turn implies:</p>

    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="P(Z_1Y_2)" /></td>
            <td>&gt;</td>
            <td><Latex math="P(Z_1)P(Y_2)" /></td>
          </tr>
          <tr>
            <td><Latex math="P(Z_1Y_2)/P(Y_2)" /></td>
            <td>&gt;</td>
            <td><Latex math="P(Z_1)" /></td>
          </tr>
          <tr>
            <td><Latex math="P(Z_1|Y_2)" /></td>
            <td>&gt;</td>
            <td><Latex math="P(Z_1)" /></td>
          </tr>
        </tbody>
      </table>
    </figure>

    <p>Since there's an "unusually high" probability for <Latex math="P(Z_1Y_2)" />—defined as a probability higher than the marginal probabilities would indicate by default—it follows that observing <Latex math="Y_2" /> is evidence that increases the probability of <Latex math="Z_1" />. And by a symmetrical argument, observing <Latex math="Z_1" /> must favor <Latex math="Y_2" />.</p>
    <p>As there are at least some values of <Latex math="Y" /> that tell us about <Latex math="Z" /> (and vice versa) there must be mutual information between the two variables; and so you will find—I am confident, though I haven't actually checked—that calculating the entropy of <Latex math="(Y,Z)" /> yields less total uncertainty than the sum of the independent entropies of <Latex math="Y" /> and <Latex math="Z" />. That is, <Latex math="H(Y,Z) = H(Y) + H(Z) - I(Y;Z)" />, with all quantities necessarily positive.</p>
    <p>(I digress here to remark that the symmetry of the expression for the mutual information shows that <Latex math="Y" /> <em>must</em> tell us as much about <Latex math="Z" />, on average, as <Latex math="Z" /> tells us about <Latex math="Y" />. I leave it as an exercise to the reader to reconcile this with anything they were taught in logic class about how, if all ravens are black, being allowed to reason Raven(<Latex math="x" />) ⇒ Black(<Latex math="x" />) doesn't mean you're allowed to reason Black(<Latex math="x" />) ⇒ Raven(<Latex math="x" />). How different seem the symmetrical probability flows of the Bayesian, from the sharp lurches of logic—even though the latter is just a degenerate case of the former.)</p>
    <p>"But," you ask, "what has all this to do with the proper use of words?"</p>
    <p>In Empty Labels and then Replace the Symbol with the Substance, we saw the technique of replacing a word with its definition—the example being given:</p>
    <blockquote>
      <p>All [mortal, ¬feathers, bipedal] are mortal.</p>
      <p>Socrates is a [mortal, ¬feathers, bipedal].</p>
      <p>Therefore, Socrates is mortal.</p>
    </blockquote>
    <p>Why, then, would you even want to have a word for "human"? Why not just say "Socrates is a mortal featherless biped"?</p>
    <p>Because it's helpful to have shorter words for things that you encounter often. If your code for describing single properties is already efficient, then there will not be an advantage to having a special word for a conjunction—like "human" for "mortal featherless biped"—unless things that are mortal <em>and</em> featherless <em>and</em> bipedal, are found more often than the marginal probabilities would lead you to expect.</p>
    <p>In efficient codes, word length corresponds to probability—so the code for <Latex math="Z_1Y_2" /> will be just as long as the code for <Latex math="Z_1" /> plus the code for <Latex math="Y_2" />, unless <Latex math="P(Z_1Y_2) > P(Z_1)P(Y_2)" />, in which case the code for the word can be shorter than the codes for its parts.</p>
    <p>And this in turn corresponds exactly to the case where we can infer some of the properties of the thing from seeing its other properties. It must be more likely than the default that featherless bipedal things will also be mortal.</p>
    <p>Of course the word "human" really describes many, many more properties— when you see a human-shaped entity that talks and wears clothes, you can infer whole hosts of biochemical and anatomical and cognitive facts about it. To replace the word "human" with a description of everything we know about humans would require us to spend an inordinate amount of time talking. But this is true <em>only</em> because a featherless talking biped is far more likely than default to be poisonable by hemlock, or have broad nails, or be overconfident.</p>
    <p>Having a word for a thing, rather than just listing its properties, is a more compact code precisely in those cases where we can infer some of those properties from the other properties. (With the exception perhaps of very primitive words, like "red," that we would use to send an entirely uncompressed description of our sensory experiences. But by the time you encounter a bug, or even a rock, you're dealing with nonsimple property collections, far above the primitive level.)</p>
    <p>So having a word "wiggin" for green-eyed black-haired people is more useful than just saying "green-eyed black-haired person" precisely when:</p>
    <ol>
      <li>Green-eyed people are more likely than average to be black-haired (and vice versa), meaning that we can probabilistically infer green eyes from black hair or vice versa; <em>or</em></li>
      <li>Wiggins share other properties that can be inferred at greater-than-default probability. In this case we have to separately observe the green eyes and black hair; but then, after observing both these properties independently, we can probabilistically infer other properties (like a taste for ketchup).</li>
    </ol>
    <p>One may even consider the act of defining a word as a promise to this effect. Telling someone, "I define the word 'wiggin' to mean a person with green eyes and black hair," by Gricean implication, asserts that the word "wiggin" will somehow help you make inferences / shorten your messages.</p>
    <p>If green-eyes and black hair have no greater than default probability to be found together, nor does any other property occur at greater than default probability along with them, then the word "wiggin" is a lie: The word claims that certain people are worth distinguishing as a group, but they're not.</p>
    <p>In this case the word "wiggin" does not help describe reality more compactly—it is not defined by someone sending the shortest message—it has no role in the simplest explanation. Equivalently, the word "wiggin" will be of no help to you in doing any Bayesian inference. Even if you do not call the word a lie, it is surely an error.</p>
    <p>And the way to carve reality at its joints is to draw your boundaries around concentrations of unusually high probability density in Thingspace.</p>
  </Chapter>;
}