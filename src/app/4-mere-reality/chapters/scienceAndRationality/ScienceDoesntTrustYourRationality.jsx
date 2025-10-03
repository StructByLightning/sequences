import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function ScienceDoesntTrustYourRationality() {
  return <Chapter title={["Science Doesn't Trust", "Your Rationality"]}>


    <p><span className="dropCap">S</span>cott Aaronson suggests that many-worlds and libertarianism are similar in that they are both cases of bullet-swallowing, rather than bullet-dodging:</p>
    <blockquote>
      <p>Libertarianism and MWI are both grand philosophical theories that start from premises that almost all educated people accept (quantum mechanics in the one case, Econ 101 in the other), and claim to reach conclusions that most educated people reject, or are at least puzzled by (the existence of parallel universes / the desirability of eliminating fire departments).</p>
    </blockquote>
    <p>Now <em>there’s</em> an analogy that would never have occurred to me.</p>
    <p>I’ve previously argued that Science rejects Many-Worlds but Bayes accepts it. (Here, “Science” is capitalized because we are talking about the idealized form of Science, not just the actual social process of science.)</p>
    <p>It furthermore seems to me that there is a <em>deep</em> analogy between (small-“l”) libertarianism and Science:</p>
    <ol>
      <li>Both are based on a pragmatic distrust of reasonable-sounding arguments.</li>
      <li>Both try to build systems that are more trustworthy than the people in them.</li>
      <li>Both accept that people are flawed, and try to harness their flaws to power the system.</li>
    </ol>
    <p>The core argument for libertarianism is historically motivated distrust of lovely theories of “How much <em>better</em> society would be, if we just made a rule that said XYZ.” If that sort of trick actually <em>worked</em>, then more regulations would correlate to higher economic growth as society moved from local to global optima. But when some person or interest group gets enough power to start doing everything they think is a good idea, history says that what actually <em>happens</em> is Revolutionary France or Soviet Russia.</p>
    <p>The plans that in lovely theory should have made everyone happy ever after, don’t have the results predicted by reasonable-sounding arguments. And power corrupts, and attracts the corrupt.</p>
    <p>So you regulate as little as possible, because you can’t trust the lovely theories and you can’t trust the people who implement them.</p>
    <p>You don’t shake your finger at people for being selfish. You try to build an efficient system of production out of selfish participants, by requiring transactions to be voluntary. So people are forced to play positive-sum games, because that’s how they get the <em>other</em> party to sign the contract. With violence restrained and contracts enforced, individual selfishness can power a globally productive system.</p>
    <p>Of course none of this works quite so well in practice as in theory, and I’m not going to go into market failures, commons problems, etc. The core argument for libertarianism is not that libertarianism would work in a perfect world, but that it degrades gracefully into real life. Or rather, degrades less awkwardly than any other known economic principle. (People who see Libertarianism as the perfect solution for perfect people strike me as kinda missing the point of the “pragmatic distrust” thing.)</p>
    <p>Science first came to know itself as a rebellion against trusting the word of Aristotle. If the people of that revolution had merely said, “Let us trust ourselves, not Aristotle!” they would have flashed and faded like the French Revolution.</p>
    <p>But the Scientific Revolution lasted because—like the American Revolution—the architects propounded a stranger philosophy: “Let us trust no one! Not even ourselves!”</p>
    <p>In the beginning came the idea that we can’t just toss out Aristotle’s armchair reasoning and replace it with <em>different</em> armchair reasoning. We need to talk to Nature, and actually <em>listen</em> to what It says in reply. This, itself, was a stroke of genius.</p>
    <p>But then came the challenge of implementation. People are stubborn, and may not want to accept the verdict of experiment. Shall we shake a disapproving finger at them, and say “Naughty”?</p>
    <p>No; we assume and accept that each individual scientist may be crazily attached to their personal theories. Nor do we assume that anyone can be trained out of this tendency—we don’t try to choose Eminent Judges who are supposed to be impartial.</p>
    <p>Instead, we try to <em>harness</em> the individual scientist’s stubborn desire to prove their personal theory, by saying: “Make a new experimental prediction, and do the experiment. If you’re right, and the experiment is replicated, you win.” So long as scientists believe this is true, they have a motive to do experiments that can <em>falsify</em> their own theories. Only by accepting the possibility of defeat is it possible to win. And any great claim will require replication; this gives scientists a motive to be honest, on pain of great embarrassment.</p>
    <p>And so the stubbornness of individual scientists is harnessed to produce a steady stream of knowledge at the group level. The System is <em>somewhat</em> more trustworthy than its parts.</p>
    <p>Libertarianism secretly relies on most individuals being prosocial enough to tip at a restaurant they won’t ever visit again. An economy of genuinely selfish human-level agents would implode. Similarly, Science relies on most scientists not committing sins so egregious that they can’t rationalize them away.</p>
    <p>To the extent that scientists believe they can promote their theories by playing academic politics—or game the statistical methods to potentially win without a chance of losing—or to the extent that nobody bothers to replicate claims—science degrades in effectiveness. But it degrades gracefully, as such things go.</p>
    <p>The part where the successful predictions belong to the theory and theorists who originally made them, and cannot just be stolen by a theory that comes along later—<em>without</em> a novel experimental prediction—is an important feature of this social process.</p>
    <p>The final upshot is that Science is not easily reconciled with probability theory. If you do a probability-theoretic calculation <em>correctly</em>, you’re going to get the <em>rational</em> answer. Science doesn’t trust your rationality, and it doesn’t rely on your ability to use probability theory as the arbiter of truth. It wants you to set up a definitive experiment.</p>
    <p>Regarding Science as a mere approximation to some probability-theoretic ideal of rationality… would certainly seem to be <em>rational</em>. There seems to be an extremely reasonable-sounding argument that Bayes’s Theorem is the hidden structure that explains why Science works. But to subordinate Science to the grand schema of Bayesianism, and let Bayesianism come in and override Science’s verdict when that seems appropriate, is not a trivial step!</p>
    <p>Science is built around the assumption that <em>you’re too stupid and self-deceiving</em> to just use Solomonoff induction. After all, if it was that simple, we wouldn’t need a social process of science… right?</p>
    <p>So, are you going to believe in faster-than-light quantum “collapse” fairies after all? Or do you think you’re smarter than that?</p>
  </Chapter>;
}