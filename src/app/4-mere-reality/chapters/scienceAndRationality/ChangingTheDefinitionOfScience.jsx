import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function ChangingTheDefinitionOfScience() {
  return <Chapter title={["Changing the Definition", "of Science"]}>


    <p><em>New Scientist</em> on changing the definition of science, ungated here:<span class="footnote">Robert Matthews, “Do We Need to Change the Definition of Science?,” New Scientist (May 2008).</span></p>
    <blockquote>
      <p>Others believe such criticism is based on a misunderstanding. “Some people say that the multiverse concept isn’t falsifiable because it’s unobservable—but that’s a fallacy,” says cosmologist Max Tegmark of the Massachusetts Institute of Technology. He argues that the multiverse is a natural consequence of such eminently falsifiable theories as quantum theory and General Relativity. As such, the multiverse theory stands or fails according to how well these other theories stand up to observational tests.</p>
      <p>[...]</p>
      <p>So if the simplicity of falsification is misleading, what should scientists be doing instead? Howson believes it is time to ditch Popper’s notion of capturing the scientific process using deductive logic. Instead, the focus should be on reflecting what scientists actually do: gathering the weight of evidence for rival theories and assessing their relative plausibility.</p>
      <p>Howson is a leading advocate for an alternative view of science based not on simplistic true/false logic, but on the far more subtle concept of degrees of belief. At its heart is a fundamental connection between the subjective concept of belief and the cold, hard mathematics of probability.</p>
    </blockquote>
    <p><span className="dropCap">I</span>’m a good deal less of a lonely iconoclast than I seem. Maybe it’s just the way I talk.</p>
    <p>The points of departure between myself and <em>mainstream</em> let’s-reformulate-Science-as-Bayesianism is that:</p>
    <p><strong>(1)</strong> I’m not in academia and can censor myself a <em>lot</em> less when it comes to saying “extreme” things that others might well already be thinking.</p>
    <p><strong>(2)</strong> I think that <strong>just teaching probability theory won’t be nearly enough</strong>. We’ll have to synthesize lessons from multiple sciences, like cognitive biases and social psychology, forming a new coherent Art of Bayescraft, before we are actually going to do any better <em>in the real world</em> than modern science. Science tolerates errors; Bayescraft does not. Nobel laureate Robert Aumann, who first proved that Bayesians with the same priors cannot agree to disagree, is a believing Orthodox Jew. Probability theory alone won’t do the trick, when it comes to really teaching scientists. <em>This is my primary point of departure, and it is not something I’ve seen suggested elsewhere.</em></p>
    <p><strong>(3)</strong> I think it <em>is</em> possible to do better in the real world. In the extreme case, a Bayesian superintelligence could use <em>enormously</em> less sensory information than a human scientist to come to correct conclusions. First time you ever see an apple fall down, you observe the position goes as the square of time, invent calculus, generalize Newton’s Laws… and see that Newton’s Laws involve action at a distance, look for alternative explanations with increased locality, invent relativistic covariance around a hypothetical speed limit, and consider that General Relativity might be worth testing.</p>
    <p>Humans do not process evidence <em>efficiently</em>—our minds are so noisy that it requires orders of magnitude more <em>extra</em> evidence to set us back on track after we derail. Our collective, academia, is even slower.</p>

  </Chapter>;
}