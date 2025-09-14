import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function CollectiveApathyAndTheInternet() {
  return <Chapter title={["Collective Apathy and the Internet"]}>


    <p><span className="dropCap">I</span>n the last essay I covered the bystander effect, a.k.a. bystander apathy: given a fixed problem situation, a <em>group</em> of bystanders is actually <em>less</em> likely to act than a <em>single</em> bystander. The standard explanation for this result is in terms of pluralistic ignorance (if it’s not clear whether the situation is an emergency, each person tries to <em>look</em> calm while darting their eyes at the other bystanders, and sees other people <em>looking</em> calm) and diffusion of responsibility (everyone hopes that someone else will be first to act; being part of a crowd diminishes the individual pressure to the point where no one acts).</p>
    <p>Which may be a symptom of our hunter-gatherer coordination mechanisms being defeated by modern conditions. You didn’t usually form task-forces with strangers back in the ancestral environment; it was mostly people you knew. And in fact, when all the subjects know each other, the bystander effect diminishes.</p>
    <p>So I know this is an amazing and revolutionary observation, and I hope that I don’t kill any readers outright from shock by saying this: but people seem to have a hard time reacting constructively to problems encountered over the Internet.</p>
    <p>Perhaps because our innate coordination instincts are not tuned for:</p>
    <ul>
      <li>Being part of a group of strangers. (When all subjects know each other, the bystander effect diminishes.)</li>
      <li>Being part of a group of unknown size, of strangers of unknown identity.</li>
      <li>Not being in physical contact (or visual contact); not being able to exchange meaningful glances.</li>
      <li>Not communicating in real time.</li>
      <li>Not being much beholden to each other for other forms of help; not being codependent on the group you’re in.</li>
      <li>Being shielded from reputational damage, or the fear of reputational damage, by your own apparent anonymity; no one is visibly looking at you, before whom your reputation might suffer from inaction.</li>
      <li>Being part of a large collective of other inactives; no one will single out you to blame.</li>
      <li>Not hearing a voiced plea for help.</li>
    </ul>
    <p>Et cetera. I don’t have a brilliant solution to this problem. But it’s the sort of thing that I would wish for potential dot-com cofounders to ponder explicitly, rather than wondering how to throw sheep on Facebook. (Yes, I’m looking at <em>you</em>, Hacker News.) There are online activism web apps, but they tend to be along the lines of sig_n this petition! yay, you signed something!<em> rather than _how can we counteract the bystander effect, restore motivation, and work with native group-coordination instincts, over the Internet?</em></p>
    <p>Some of the things that come to mind:</p>
    <ul>
      <li>Put a video of someone asking for help online.</li>
      <li>Put up names and photos or even brief videos if available of the <em>first</em> people who helped (or have some reddit-ish priority algorithm that depends on a combination of amount-helped and recency).</li>
      <li>Give helpers a video thank-you from the founder of the cause that they can put up on their “people I’ve helped” page, which with enough standardization could be partially or wholly assembled automatically and easily embedded in their home webpage or Facebook account.</li>
      <li>Find a <em>non-annoying</em> idiom for “Tell a friend about cause <em>X</em>”; allow referrer link codes; then show people how many others they’ve evangelized (how many people who initially got here using referrer code <em>X</em> actually contributed or took some other action).</li>
      <li>(All of the above applies not just to donations, but to open-source projects to which people have contributed code. Or if people really do want nothing but signatures on a petition, then for signatures. There are ways to help besides money—even though money is usually the most effective. The main thing is that the form of help has to be verifiable online.)</li>
      <li>Make it easier for people to offer monetary bounties on subtasks whose performance is verifiable.</li>
    </ul>
    <p>But mostly I just hand you an open, unsolved problem: make it possible/easier for groups of strangers to coalesce into an effective task force over the Internet, in defiance of the usual failure modes and the default reasons why this is a non-ancestral problem. Think of that old statistic about Wikipedia representing 1/2,000 of the time spent in the US alone on watching television. There’s quite a lot of fuel out there, if there were only such a thing as an effective engine…</p>

  </Chapter>;
}