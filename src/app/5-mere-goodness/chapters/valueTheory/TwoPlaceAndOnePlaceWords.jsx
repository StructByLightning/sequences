import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function TwoPlaceAndOnePlaceWords() {
  return <Chapter title={["2-Place and 1-Place Words"]}>



    <p><span className="dropCap">I</span> have previously spoken of the ancient, pulp-era magazine covers that showed a bug-eyed monster carrying off a girl in a torn dress; and about how people think as if sexiness is an inherent property of a sexy entity, without dependence on the admirer.</p>
    <p>“Of <em>course</em> the bug-eyed monster will prefer human females to its own kind,” says the artist (who we’ll call Fred); “it can see that human females have soft, pleasant skin instead of slimy scales. It may be an alien, but it’s not <em>stupid</em>—why are you expecting it to make such a basic mistake about sexiness?”</p>
    <p>What is Fred’s error? It is treating a function of 2 arguments (“2-place function”):</p>
    <p><code>Sexiness: Admirer, Entity ➝ [0, ∞)</code></p>
    <p>as though it were a function of 1 argument (“1-place function”):</p>
    <p><code>Sexiness: Entity ➝ [0, ∞)</code></p>
    <p>If <code>Sexiness</code> is treated as a function that accepts only one <code>Entity</code> as its argument, then of course <code>Sexiness</code> will appear to depend only on the <code>Entity</code>, with nothing else being relevant.</p>
    <p>When you think about a two-place function as though it were a one-place function, you end up with a Variable Question Fallacy / Mind Projection Fallacy. Like trying to determine whether a building is <em>intrinsically</em> on the left or on the right side of the road, independent of anyone’s travel direction.</p>
    <p>An alternative and equally valid standpoint is that “sexiness” <em>does</em> refer to a one-place function—but each speaker uses a <em>different</em> one-place function to decide who to kidnap and ravish. Who says that just because Fred, the artist, and Bloogah, the bug-eyed monster, both use the word “sexy,” they must mean the same thing by it?</p>
    <p>If you take this viewpoint, there is no paradox in speaking of some woman intrinsically having 5 units of <code>Fred::Sexiness</code>. All onlookers can agree on this fact, once <code>Fred::Sexiness</code> has been specified in terms of curves, skin texture, clothing, status cues, etc. This specification need <em>make no mention of Fred</em>, only the woman to be evaluated.</p>
    <p>It so happens that Fred, himself, <em>uses</em> this algorithm to select flirtation targets. But that doesn’t mean the algorithm itself has to <em>mention</em> Fred. So Fred’s <code>Sexiness</code> function really <em>is</em> a function of one argument—the woman—on this view. I called it <code>Fred::Sexiness</code>, but remember that this name refers to a function that is being described independently of Fred. Maybe it would be better to write:</p>
    <p><code>Fred::Sexiness  Sexiness_20934</code> .</p>
    <p>It is an empirical fact about Fred that he uses the function <code>Sexiness_20934</code> to evaluate potential mates. Perhaps John uses exactly the same algorithm; it doesn’t matter where it comes from once we have it.</p>
    <p>And similarly, the same woman has only 0.01 units of <code>Sexiness_72546</code>, whereas a slime mold has 3 units of <code>Sexiness_72546</code>. It happens to be an empirical fact that Bloogah uses <code>Sexiness_72546</code> to decide who to kidnap; that is, <code>Bloogah::Sexiness</code> names the fixed Bloogah-independent mathematical object that is the function <code>Sexiness_72546</code>.</p>
    <p>Once we say that the woman has 0.01 units of <code>Sexiness_72546</code> and 5 units of <code>Sexiness_20934</code>, all observers can agree on this without paradox.</p>
    <p>And the two 2-place and 1-place views can be unified using the concept of “currying,” named after the mathematician Haskell Curry. Currying is a technique allowed in certain programming languages, where e.g. instead of writing</p>
    <p><code>x = plus(2, 3)</code> (<em>x</em> = 5)</p>
    <p>you can also write</p>
    <p><code>y = plus(2)</code></p>
    <p>(<code>y</code> is now a “curried” form of the function <code>plus</code>, which has eaten a 2)</p>
    <p><code>x = y(3)</code> (<em>x</em> = 5)</p>
    <p><code>z = y(7)</code> (<em>z</em> = 9)</p>
    <p>So <code>plus</code> is a 2-place function, but currying <code>plus</code>—letting it eat only one of its two required arguments—turns it into a 1-place function that adds 2 to any input. (Similarly, you could start with a 7-place function, feed it 4 arguments, and the result would be a 3-place function, etc.)</p>
    <p>A true purist would insist that all functions should be viewed, by definition, as taking exactly one argument. On this view, <code>plus</code> accepts one numeric input, and outputs a <em>new</em> function; and this <em>new</em> function has one numeric input and finally outputs a number. On this view, when we write <code>plus(2,3)</code> we are really computing <code>plus(2)</code> to get a function that adds 2 to any input, and then applying the result to 3. A programmer would write this as:</p>
    <p><code>plus: int ➝ (int ➝ int)</code></p>
    <p>This says that <code>plus</code> takes an <code>int</code> as an argument, and returns a function of type <code>int ➝ int</code>.</p>
    <p>Translating the metaphor back into the human use of words, we could imagine that “sexiness” starts by eating an <code>Admirer</code>, and spits out the fixed <em>mathematical</em> object that describes how the <code>Admirer</code> currently evaluates pulchritude. It is an <em>empirical</em> fact about the Admirer that their intuitions of desirability are computed in a way that is isomorphic to this <em>mathematical</em> function.</p>
    <p>Then the mathematical object spit out by currying <code>Sexiness(Admirer)</code> can be applied to the <code>Woman</code>. If the <code>Admirer</code> was originally Fred, <code>Sexiness(Fred)</code> will first return <code>Sexiness_20934</code>. We can then say it is an empirical fact about the <code>Woman</code>, independently of Fred, that <code>Sexiness_20934(Woman) = 5</code>.</p>
    <p>In Hilary Putnam’s “Twin Earth” thought experiment, there was a tremendous philosophical brouhaha over whether it makes sense to postulate a Twin Earth that is just like our own, except that instead of water being H2O, water is a different transparent flowing substance, XYZ. And furthermore, set the time of the thought experiment a few centuries ago, so in neither our Earth nor the Twin Earth does anyone know how to test the alternative hypotheses of H2O vs. XYZ. Does the word “water” mean the same thing in that world as in this one?</p>
    <p>Some said, “Yes, because when an Earth person and a Twin Earth person utter the word ‘water,’ they have the same sensory test in mind.”</p>
    <p>Some said, “No, because ‘water’ in our Earth means H2O and ‘water’ in the Twin Earth means XYZ.”</p>
    <p>If you think of “water” as a concept that <em>begins</em> by eating a world to find out the empirical true nature of that transparent flowing stuff, and <em>returns</em> a new fixed concept Water42 or H2O, then this world-eating concept is the same in our Earth and the Twin Earth; it just returns different answers in different places.</p>
    <p>If you think of “water” as meaning H2O, then the concept does nothing different when we transport it between worlds, and the Twin Earth contains no H2O.</p>
    <p>And of course there is no point in arguing over what the sound of the syllables “wa-ter” really means.</p>
    <p>So should you pick one definition and use it consistently? But it’s not that easy to save yourself from confusion. You have to train yourself to be <em>deliberately aware</em> of the distinction between the curried and uncurried forms of concepts.</p>
    <p>When you take the uncurried water concept and apply it in a different world, it is the same concept but it <em>refers</em> to a different thing; that is, we are applying a constant world-eating function to a different world and obtaining a different return value. In the Twin Earth, XYZ is “water” and H2O is not; in our Earth, H2O is “water” and XYZ is not.</p>
    <p>On the other hand, if you take “water” to refer to what the prior thinker would call “the result of applying ‘water’ to our Earth,” then in the Twin Earth, XYZ is not water and H2O is.</p>
    <p>The whole confusingness of the subsequent philosophical debate rested on a tendency to <em>instinctively</em> curry concepts or <em>instinctively</em> uncurry them.</p>
    <p>Similarly it takes an extra step for Fred to realize that other agents, like the Bug-Eyed-Monster agent, will choose kidnappees for ravishing based on <code>Sexiness_BEM(Woman)</code>, not <code>Sexiness_Fred(Woman)</code>. To do this, Fred must consciously re-envision <code>Sexiness</code> as a function with two arguments. All Fred’s brain does by instinct is evaluate <code>Woman.sexiness</code>—that is, <code>Sexiness_Fred(Woman)</code>; but it’s simply labeled <code>Woman.sexiness</code>.</p>
    <p>The fixed mathematical function <code>Sexiness_20934</code> makes no mention of Fred or the BEM, only women, so Fred does not <em>instinctively</em> see why the BEM would evaluate “sexiness” any differently. And indeed the BEM would <em>not</em> evaluate <code>Sexiness_20934</code> any differently, if for some odd reason it cared about the result of that particular function; but it is an <em>empirical</em> fact about the BEM that it uses a different function <em>to decide who to kidnap</em>.</p>
    <p>If you’re wondering as to the point of this analysis, try putting the above distinctions to work to Taboo such confusing words as “objective,” “subjective,” and “arbitrary.”</p>
  </Chapter>;
}