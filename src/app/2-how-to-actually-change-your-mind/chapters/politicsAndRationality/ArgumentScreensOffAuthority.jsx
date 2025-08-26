import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function ArgumentScreensOffAuthority() {
  return <Chapter title={["Argument Screens", "Off Authority"]}>
    <p><span className="dropCap">S</span><em>cenario 1:</em> Barry is a famous geologist. Charles is a fourteen-year-old juvenile delinquent with a long arrest record and occasional psychotic episodes. Barry flatly asserts to Arthur some counterintuitive statement about rocks, and Arthur judges it 90% probable. Then Charles makes an equally counterintuitive flat assertion about rocks, and Arthur judges it 10% probable. Clearly, Arthur is taking the speaker’s <em>authority</em> into account in deciding whether to believe the speaker’s assertions.</p>
    <p><em>Scenario 2:</em> David makes a counterintuitive statement about physics and gives Arthur a detailed explanation of the arguments, including references. Ernie makes an equally counterintuitive statement, but gives an unconvincing argument involving several leaps of faith. Both David and Ernie assert that this is the best explanation they can possibly give (to anyone, not just Arthur). Arthur assigns 90% probability to David’s statement after hearing his explanation, but assigns a 10% probability to Ernie’s statement.</p>
    <p>It might seem like these two scenarios are roughly symmetrical: both involve taking into account useful evidence, whether strong versus weak authority, or strong versus weak argument.</p>
    <p>But now suppose that Arthur asks Barry and Charles to make full technical cases, with references; and that Barry and Charles present equally good cases, and Arthur looks up the references and they check out. Then Arthur asks David and Ernie for their credentials, and it turns out that David and Ernie have roughly the same credentials—maybe they’re both clowns, maybe they’re both physicists.</p>
    <p>Assuming that Arthur is knowledgeable enough to understand all the technical arguments—otherwise they’re just impressive noises—it seems that Arthur should view David as having a great advantage in plausibility over Ernie, while Barry has at best a minor advantage over Charles.</p>
    <p>Indeed, if the technical arguments are good enough, Barry’s advantage over Charles may not be worth tracking. A good technical argument is one that <em>eliminates</em> reliance on the personal authority of the speaker.</p>


    <p>Similarly, if we really believe Ernie that the argument he gave is the best argument he <em>could</em> give, which includes all of the inferential steps that Ernie executed, and all of the support that Ernie took into account—citing any authorities that Ernie may have listened to himself—then we can pretty much ignore any information about Ernie’s credentials. Ernie can be a physicist or a clown, it shouldn’t matter. (Again, this assumes we have enough technical ability to process the argument. Otherwise, Ernie is simply uttering mystical syllables, and whether we “believe” these syllables depends a great deal on his authority.)</p>
    <p>So it seems there’s an asymmetry between argument and authority. If we know authority we are still interested in hearing the arguments; but if we know the arguments fully, we have very little left to learn from authority.</p>
    <p>Clearly (says the novice) authority and argument are fundamentally different kinds of evidence, a difference unaccountable in the boringly clean methods of Bayesian probability theory. For while the strength of the evidences—90% versus 10%—is just the same in both cases, they do not behave similarly when combined. How will we account for this?</p>
    <p>Here’s half a technical demonstration of how to represent this difference in probability theory. (The rest you can take on my personal authority, or look up in the references.)</p>
    <p>If <Latex math="P(H|E_1) = 90\%" /> and <Latex math="P(H|E_2) = 9\%" />, what is the probability <Latex math="P(H|E_1, E_2)" />? If learning <Latex math="E_1" /> is true leads us to assign 90% probability to <Latex math="H" />, and learning <Latex math="E_2" /> is true leads us to assign 9% probability to <Latex math="H" />, then what probability should we assign to <Latex math="H" /> if we learn both <Latex math="E_1" /> and <Latex math="E_2" />? This is simply not something you can calculate in probability theory from the information given. No, the missing information is not the prior probability of <Latex math="H" />. The events <Latex math="E_1" /> and <Latex math="E_2" /> may not be independent of each other.</p>

    <p>Suppose that <Latex math="H" /> is "My sidewalk is slippery," <Latex math="E_1" /> is "My sprinkler is running," and <Latex math="E_2" /> is "It's night." The sidewalk is slippery starting from one minute after the sprinkler starts, until just after the sprinkler finishes, and the sprinkler runs for ten minutes. So if we know the sprinkler is on, the probability is 90% that the sidewalk is slippery. The sprinkler is on during 10% of the nighttime, so if we know that it's night, the probability of the sidewalk being slippery is 9%. If we know that it's night and the sprinkler is on—that is, if we know both facts—the probability of the sidewalk being slippery is 90%.</p>
    <p>We can represent this in a graphical model as follows:</p>

    <figure>
      <img src="/ArgumentScreensOffAuthority_diagram_1.svg" alt="" />
    </figure>


    <p>Whether or not it’s Night <em>causes</em> the Sprinkler to be on or off, and whether the Sprinkler is on <em>causes</em> the sidewalk to be Slippery or unSlippery.</p>
    <p>The direction of the arrows is meaningful. Say we had:</p>

    <figure>
      <img src="/ArgumentScreensOffAuthority_diagram_2.svg" alt="" />
    </figure>


    <p>This would mean that, if I <em>didn’t</em> know anything about the sprinkler, the probability of Nighttime and Slipperiness would be independent of each other. For example, suppose that I roll Die One and Die Two, and add up the showing numbers to get the Sum:</p>
    <figure>
      <img src="/ArgumentScreensOffAuthority_diagram_3.svg" alt="" />
    </figure>
    <p>If you don’t tell me the sum of the two numbers, and you tell me the first die showed 6, this doesn’t tell me anything about the result of the second die, yet. But if you now also tell me the sum is 7, I know the second die showed 1.</p>
    <p>Figuring out when various pieces of information are dependent or independent of each other, given various background knowledge, actually turns into a quite technical topic. The books to read are Judea Pearl’s <em>Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference</em><span className="footnote">Pearl, <em>Probabilistic Reasoning in Intelligent Systems</em>.</span> and <em>Causality: Models, Reasoning, and Inference</em>.<span className="footnote">Judea Pearl, <em>Causality: Models, Reasoning, and Inference</em>, 2nd ed. (New York: Cambridge University Press, 2009).</span> (If you only have time to read one book, read the first one.)</p>
    <p>If you know how to read causal graphs, then you look at the dice-roll graph and immediately see:</p>
    <p><Latex math="P(\text{Die 1}, \text{Die 2}) = P(\text{Die 1}) \times P(\text{Die 2})" display="block" /></p>
    <p><Latex math="P(\text{Die 1}, \text{Die 2}|\text{Sum}) \neq P(\text{Die 1}|\text{Sum}) \times P(\text{Die 2}|\text{Sum})" display="block" /></p>
    <p>If you look at the correct sidewalk diagram, you see facts like:</p>
    <p><Latex math="P(\text{Slippery}|\text{Night}) \neq P(\text{Slippery})" display="block" /></p>
    <p><Latex math="P(\text{Slippery}|\text{Sprinkler}) \neq P(\text{Slippery})" display="block" /></p>
    <p><Latex math="P(\text{Slippery}|\text{Night}, \text{Sprinkler}) = P(\text{Slippery}|\text{Sprinkler})" display="block" /></p>
    <p>That is, the probability of the sidewalk being Slippery, given knowledge about the Sprinkler and the Night, is the same probability we would assign if we knew only about the Sprinkler. Knowledge of the Sprinkler has made knowledge of the Night irrelevant to inferences about Slipperiness.</p>
    <p>This is known as <em>screening off</em>, and the criterion that lets us read such conditional independences off causal graphs is known as <em>D-separation</em>.</p>
    <p>For the case of argument and authority, the causal diagram looks like this:</p>
    <figure>
      <img src="/ArgumentScreensOffAuthority_diagram_4.svg" alt="" />
    </figure>
    <p>If something is true, then it therefore tends to have arguments in favor of it, and the experts therefore observe these evidences and change their opinions. (In theory!)</p>
    <p>If we see that an expert believes something, we infer back to the existence of evidence-in-the-abstract (even though we don’t know what that evidence is exactly), and from the existence of this abstract evidence, we infer back to the truth of the proposition.</p>
    <p>But if we know the value of the Argument node, this D-separates the node “Truth” from the node “Expert Belief” by blocking all paths between them, according to certain technical criteria for “path blocking” that seem pretty obvious in this case. So even without checking the exact probability distribution, we can read off from the graph that:</p>
    <p>But if we know the value of the Argument node, this D-separates the node "Truth" from the node "Expert Belief" by blocking all paths between them, according to certain technical criteria for "path blocking" that seem pretty obvious in this case. So even without checking the exact probability distribution, we can read off from the graph that:</p>
    <p><Latex math="P(\text{truth}|\text{argument}, \text{expert}) = P(\text{truth}|\text{argument})" display="block" /></p>
    <p>This does not represent a contradiction of ordinary probability theory. It’s just a more compact way of expressing certain probabilistic facts. You could read the same equalities and inequalities off an unadorned probability distribution—but it would be harder to see it by eyeballing. Authority and argument don’t need two different kinds of probability, any more than sprinklers are made out of ontologically different stuff than sunlight.</p>
    <p>In practice you can never <em>completely</em> eliminate reliance on authority. Good authorities are more likely to know about any counterevidence that exists and should be taken into account; a lesser authority is less likely to know this, which makes their arguments less reliable. This is not a factor you can eliminate merely by hearing the evidence they <em>did</em> take into account.</p>
    <p>It’s also very hard to reduce arguments to <em>pure</em> math; and otherwise, judging the strength of an inferential step may rely on intuitions you can’t duplicate without the same thirty years of experience.</p>
    <p>There is an ineradicable legitimacy to assigning <em>slightly</em> higher probability to what E. T. Jaynes tells you about Bayesian probability, than you assign to Eliezer Yudkowsky making the exact same statement. Fifty additional years of experience should not count for literally <em>zero</em> influence.</p>
    <p>But this slight strength of authority is only <em>ceteris paribus</em>, and can easily be overwhelmed by stronger arguments. I have a minor erratum in one of Jaynes’s books—because algebra trumps authority.</p>
  </Chapter >;
}