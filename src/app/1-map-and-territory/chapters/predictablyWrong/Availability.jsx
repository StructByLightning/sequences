import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import MarginNote from "@/components/MarginNote/MarginNote";

export default function Availability() {
  return <Chapter title={["Availability"]} marginNotes>
    <p>The <em>availability heuristic</em> is judging the frequency or probability of an event by the ease with which examples of the event come to mind.</p>

    <MarginNote side="right" author="KA">
      <p>The bias probably results because risks that people have less control over (homicide) would be more important to remember than the ones that are primarily due to one's own life decisions (suicide, health practices). The former risks seem unjust and avoidance practices still need to be learned as a means of living adaptively in an uncertain environment, vs. the latter risks, which already seem to be under our control.</p>
    </MarginNote>
    <MarginNote side="right" author="Pseudonymous2">
      <p>I imagine it is a lot easier to avoid an accident than avoid most modern diseases eg cancer. So it make sense to concentrate on the risks you can do most about.</p>
    </MarginNote>
    <MarginNote side="right" author="zorbix365">
      <p>Whilst it is true that it is a lot easier to avoid an accident than a disease, you can probably do more about your risk of dying of disease. For example, you could verse yourself in the symptoms of various diseases; then you would be more likely to know if you caught one. With a lot of diseases, catching it early will vastly increase your odds of surviving. Combine that with the fact that dying of an accident isn't a common cause of death in the first place; and even if you were able to cut your risk of disease death by only one-fifteenth, that would be more than completely eliminating the risk of accidents.</p>
    </MarginNote>


    <p>A famous 1978 study by Lichtenstein, Slovic, Fischhoff, Layman, and Combs, “Judged Frequency of Lethal Events,” studied errors in quantifying the severity of risks, or judging which of two dangers occurred more frequently<span className="footnote">Sarah Lichtenstein et al., “Judged Frequency of Lethal Events,” <em>Journal of Experimental Psychology: Human Learning and Memory</em> 4, no. 6 (1978): 551–578, doi:10.1037/0278-7393.4.6.551.</span>. Subjects thought that accidents caused about as many deaths as disease; thought that homicide was a more frequent cause of death than suicide. Actually, diseases cause about sixteen times as many deaths as accidents, and suicide is twice as frequent as homicide.</p>

    <p>An obvious hypothesis to account for these skewed beliefs is that murders are more likely to be talked about than suicides—thus, someone is more likely to recall hearing about a murder than hearing about a suicide. Accidents are more dramatic than diseases—perhaps this makes people more likely to remember, or more likely to recall, an accident. In 1979, a followup study by Combs and Slovic showed that the skewed probability judgments correlated strongly (0.85 and 0.89) with skewed reporting frequencies in two newspapers<span className="footnote">Barbara Combs and Paul Slovic, “Newspaper Coverage of Causes of Death,” <em>Journalism & Mass Communication Quarterly</em> 56, no. 4 (1979): 837–849, doi:10.1177/107769907905600420.</span>. This doesn’t disentangle whether murders are more available to memory because they are more reported-on, or whether newspapers report more on murders because murders are more vivid (hence also more remembered). But either way, an availability bias is at work. Selective reporting is one major source of availability biases. In the ancestral environment, much of what you knew, you experienced yourself; or you heard it directly from a fellow tribe-member who had seen it. There was usually at most one layer of selective reporting between you, and the event itself. With today’s Internet, you may see reports that have passed through the hands of six bloggers on the way to you—six successive filters. Compared to our ancestors, we live in a larger world, in which far more happens, and far less of it reaches us—a much stronger selection effect, which can create much larger availability biases.</p>

    <MarginNote side="left" author="Anonymous">
      <p>Multi-hop transmission was the rule rather than the exception in the ancestral environment. Hunter-gatherer gossip is usually third-party, and Polly Wiessner's content analysis of Ju/'hoansi conversation found 81% of nighttime talk consisted of stories about absent people. Hadza and Ache men today encounter on the order of 300 tool-making models across many bands over a lifetime, and oral traditions documented among Aboriginal Australians and the Klamath have transmitted reports of sea-level rise and volcanic eruptions across hundreds of generations.</p>
    </MarginNote>
    <MarginNote side="left" author="Anonymous">
      <p>The 0.85 and 0.89 figures are partial correlations controlling for actual death frequency. The raw correlation between subjects' frequency judgments and newspaper coverage was about 0.70. Slovic describes them in this partial-correlation form in his own later writings; the chapter elides the distinction. A 2024 Bayesian reanalysis in Cognition also finds the broader media-shapes-judgment pattern doesn't replicate outside the original 1978 dataset.</p>
    </MarginNote>

    <p>In real life, you’re unlikely to ever meet Bill Gates. But thanks to selective reporting by the media, you may be tempted to compare your life success to his—and suffer hedonic penalties accordingly. The objective frequency of Bill Gates is 0.00000000015, but you hear about him much more often. Conversely, 50% of the planet lives on less than $10/day, and I doubt that one half of the blog posts you read are written by them.</p>
    <MarginNote side="right" author="JC Scaly">
      <p>I found an action-plan to fighting this bias My personal advice is to use our motivation to combat it in the following way: notice whenever we form a belief and ask ourselves: <em>am I generalizing a limited-set of examples that come into mind from memories and past experiences? am I falling to the availability heuristic?</em> When you catch yourself, like I now do daily, rate how important the conclusion is, and if so - avoid reaching it through this heuristic (and choose deliberate, rational analysis instead.) If not, you may reach it using this generalization as long as you label that belief as non-trustworthy.</p>
    </MarginNote>


    <p>Using availability seems to give rise to an absurdity bias; events that have never happened are not recalled, and hence deemed to have probability zero. When no flooding has recently occurred (and yet the probabilities are still fairly calculable), people refuse to buy flood insurance even when it is heavily subsidized and priced far below an actuarially fair value. Kunreuther et al. suggest underreaction to threats of flooding may arise from “the inability of individuals to conceptualize floods that have never occurred… Men on flood plains appear to be very much prisoners of their experience… Recently experienced floods appear to set an upward bound to the size of loss with which managers believe they ought to be concerned.”<span className="footnote">Howard Kunreuther, Robin Hogarth, and Jacqueline Meszaros, “Insurer Ambiguity and Market Failure,” <em>Journal of Risk and Uncertainty</em> 7 (1 1993): 71–87, doi:10.1007/BF01065315. </span></p>
    <MarginNote side="right" author="Anonymous">
      <p>"Absurdity bias" doesn't appear in mainstream cognitive-psychology literature outside this essay's downstream citations. The behavioral phenomenon being described, where people round very-low-probability events to zero in protective decisions, is real and goes by names like "probability neglect" and "threshold of concern" in the literature, where it's attributed less to availability per se than to a separate threshold-based mechanism in Kunreuther's later work.</p>
    </MarginNote>
    <MarginNote side="right" author="Anonymous">
      <p>Take-up is lower than it should be but not the near-zero refusal the framing implies. Kates found about 48% of households in 100-year floodplains carry NFIP coverage as of 2019, and willingness-to-pay studies put the average bid for low-probability disaster insurance at roughly 87% of expected losses across the meta-analytic literature. The post-flood take-up spike often attributed to availability is also partly mechanical, since federal disaster aid recipients are required to purchase coverage.</p>
    </MarginNote>
    <MarginNote side="left" author="gwern">
      <p>I don't think they realize flood insurance is subsidized. Recently in my area some flood maps were updated to take account of new data suggesting increased risks, with subsequent increases in the subsidized flood insurance rates. The affected households raised a hue and cry, enlisting senators in their cause, and many got the increases reversed. Nothing in the rhetoric I read suggested that they realized they were <em>already</em> getting a great deal; instead, here and in the Florida articles I read (where the government objected to the remaining insurer increasing rates after recent hurricanes), the unstated assumption seemed to be that the rates were "unfair" and profitable.</p>
    </MarginNote>
    <MarginNote side="left" author="Pseudonymous2">
      <p>How do they <em>know</em> flood insurance is heavily subsidized and priced far below an actuarially fair value? Is it worth going to all the trouble of finding out?</p>
    </MarginNote>

    <p>Burton et al. report that when dams and levees are built, they reduce the frequency of floods, and thus apparently create a false sense of security, leading to reduced precautions<span className="footnote">Ian Burton, Robert W. Kates, and Gilbert F. White, <em>The Environment as Hazard</em>, 1st ed. (New York: Oxford University Press, 1978).</span>. While building dams decreases the <em>frequency</em> of floods, damage <em>per flood</em> is afterward so much greater that average yearly damage <em>increases</em>. The wise would extrapolate from a memory of small hazards to the possibility of large hazards. Instead, past experience of small hazards seems to set a perceived upper bound on risk. A society well-protected against minor hazards takes no action against major risks, building on flood plains once the regular minor floods are eliminated. A society subject to regular minor hazards treats those minor hazards as an upper bound on the size of the risks, guarding against regular minor floods but not occasional major floods.</p>

    <MarginNote side="left" author="Anonymous">
      <p>US absolute and per-capita flood damages did rise across the 20th century despite massive structural protection, with average annual losses climbing from about $1.4 billion in the 1900s to $5.6 billion in the 1990s in constant dollars. When normalized by national wealth-at-risk, though, damages per unit wealth have been roughly flat or slightly declining since 1934, and a 2023 Nature Sustainability paper finds the US levee effect itself has reversed since the late 1970s as floodplain-development regulation tightened.</p>
    </MarginNote>
    <p>Memory is not always a good guide to probabilities in the past, let alone in the future.</p>



  </Chapter>;
}
