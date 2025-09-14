import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function TheTruePrisonersDilemma() {
  return <Chapter title={["The True Prisoner's Dilemma"]}>



    <p><span className="dropCap">I</span>t occurred to me one day that the standard visualization of the Prisoner's Dilemma is fake.</p>
    <p>The core of the Prisoner's Dilemma is this symmetric payoff matrix:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><Latex math="1 : C" /></td>
            <td><Latex math="1 : D" /></td>
          </tr>
          <tr>
            <td><Latex math="2 : C" /></td>
            <td><Latex math="(3, 3)" /></td>
            <td><Latex math="(5, 0)" /></td>
          </tr>
          <tr>
            <td><Latex math="2 : D" /></td>
            <td><Latex math="(0, 5)" /></td>
            <td><Latex math="(2, 2)" /></td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>Player 1, and Player 2, can each choose <Latex math="C" /> or <Latex math="D" />. Player 1's and Player 2's utilities for the final outcome are given by the first and second number in the pair. For reasons that will become apparent, "<Latex math="C" />" stands for "cooperate" and <Latex math="D" /> stands for "defect."</p>
    <p>Observe that a player in this game (regarding themselves as the first player) has this preference ordering over outcomes: <Latex math="(D,C) > (C,C) > (D,D) > (C,D)" />.</p>
    <p>Option <Latex math="D" />, it would seem, dominates <Latex math="C" />: If the other player chooses <Latex math="C" />, you prefer <Latex math="(D,C)" /> to <Latex math="(C,C)" />; and if the other player chooses <Latex math="D" />, you prefer <Latex math="(D,D)" /> to <Latex math="(C,D)" />. So you wisely choose <Latex math="D" />, and as the payoff table is symmetric, the other player likewise chooses <Latex math="D" />.</p>
    <p>If only you'd both been less wise! You <em>both</em> prefer <Latex math="(C,C)" /> to <Latex math="(D,D)" />. That is, you both prefer mutual cooperation to mutual defection.</p>
    <p>The Prisoner's Dilemma is one of the great foundational issues in decision theory, and enormous volumes of material have been written about it. Which makes it an audacious assertion of mine, that the usual way of <em>visualizing</em> the Prisoner's Dilemma has a severe flaw, at least if you happen to be human.</p>
    <p>The classic visualization of the Prisoner's Dilemma is as follows: you are a criminal, and you and your confederate in crime have both been captured by the authorities.</p>
    <p>Independently, without communicating, and without being able to change your mind afterward, you have to decide whether to give testimony against your confederate (<Latex math="D" />) or remain silent (<Latex math="C" />).</p>
    <p>Both of you, right now, are facing one-year prison sentences; testifying (<Latex math="D" />) takes one year off your prison sentence, and adds two years to your confederate's sentence.</p>
    <p>Or maybe you and some stranger are, only once, and without knowing the other player's history or finding out who the player was afterward, deciding whether to play <Latex math="C" /> or <Latex math="D" />, for a payoff in dollars matching the standard chart.</p>
    <p>And, oh yes—in the classic visualization you're supposed to <em>pretend that you're entirely selfish</em>, that you don't care about your confederate criminal, or the player in the other room.</p>
    <p>It's this last specification that makes the classic visualization, in my view, fake.</p>
    <p>You can't avoid hindsight bias by instructing a jury to pretend not to know the real outcome of a set of events. And without a complicated effort backed up by considerable knowledge, a neurologically intact human being cannot pretend to be genuinely, truly selfish.</p>
    <p>We're born with a sense of fairness, honor, empathy, sympathy, and even altruism—the result of our ancestors' adapting to play the <em>iterated</em> Prisoner's Dilemma. We don't really, truly, absolutely and entirely prefer <Latex math="(D,C)" /> to <Latex math="(C,C)" />, though we may entirely prefer <Latex math="(C,C)" /> to <Latex math="(D,D)" /> and <Latex math="(D,D)" /> to <Latex math="(C,D)" />. The thought of our confederate spending three years in prison does not entirely fail to move us.</p>
    <p>In that locked cell where we play a simple game under the supervision of economic psychologists, we are not entirely and absolutely without sympathy for the stranger who might cooperate. We aren't entirely happy to think that we might defect and the stranger cooperate, getting five dollars while the stranger gets nothing.</p>
    <p>We fixate instinctively on the <Latex math="(C,C)" /> outcome and search for ways to argue that it should be the mutual decision: "How can we ensure mutual cooperation?" is the instinctive thought. Not "How can I trick the other player into playing <Latex math="C" /> while I play <Latex math="D" /> for the maximum payoff?"</p>
    <p>For someone with an impulse toward altruism, or honor, or fairness, the Prisoner's Dilemma doesn't really have the critical payoff matrix—whatever the financial payoff to individuals. The outcome <Latex math="(C,C)" /> is preferable to the outcome <Latex math="(D,C)" />, and the key question is whether the other player sees it the same way.</p>
    <p>And no, you can't instruct people being initially introduced to game theory to pretend they're completely selfish—any more than you can instruct human beings being introduced to anthropomorphism to pretend they're expected paperclip maximizers.</p>
    <p>To construct the True Prisoner's Dilemma, the situation has to be something like this:</p>
    <p>Player 1: Human beings, Friendly AI, or other humane intelligence.</p>
    <p>Player 2: Unfriendly AI, or an alien that only cares about sorting pebbles.</p>
    <p>Let's suppose that four billion human beings—not the whole human species, but a significant part of it—are currently progressing through a fatal disease that can only be cured by substance <Latex math="S" />.</p>
    <p>However, substance <Latex math="S" /> can only be produced by working with a paperclip maximizer from another dimension—substance <Latex math="S" /> can also be used to produce paperclips. The paperclip maximizer only cares about the number of paperclips in its own universe, not in ours, so we can't offer to produce or threaten to destroy paperclips here. We have never interacted with the paperclip maximizer before, and will never interact with it again.</p>
    <p>Both humanity and the paperclip maximizer will get a single chance to seize some additional part of substance <Latex math="S" /> for themselves, just before the dimensional nexus collapses; but the seizure process destroys some of substance <Latex math="S" />.</p>
    <p>The payoff matrix is as follows:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td></td>
            <td><Latex math="1 : C" /></td>
            <td><Latex math="1 : D" /></td>
          </tr>
          <tr>
            <td><Latex math="2 : C" /></td>
            <td>(+2 billion human lives saved,  <br />+2 paperclips gained)</td>
            <td>(+3 billion lives,  <br />+0 paperclips)</td>
          </tr>
          <tr>
            <td><Latex math="2 : D" /></td>
            <td>(+0 lives,  <br />+3 paperclips)</td>
            <td>(+1 billion lives,  <br />+1 paperclip)</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>I've chosen this payoff matrix to produce a sense of <em>indignation</em> at the thought that the paperclip maximizer wants to trade off billions of human lives against a couple of paperclips. Clearly the paperclip maximizer <em>should</em> just let us have all of substance <Latex math="S" />. But a paperclip maximizer doesn't do what it <em>should</em>; it just maximizes paperclips.</p>
    <p>In this case, we <em>really do</em> prefer the outcome <Latex math="(D,C)" /> to the outcome <Latex math="(C,C)" />, leaving aside the actions that produced it. We would vastly rather live in a universe where 3 billion humans were cured of their disease and no paperclips were produced, rather than sacrifice a billion human lives to produce 2 paperclips. It doesn't seem <em>right</em> to cooperate, in a case like this. It doesn't even seem <em>fair</em>—so great a sacrifice by us, for so little gain by the paperclip maximizer? And let us specify that the paperclip-agent experiences no pain or pleasure—it just outputs actions that steer its universe to contain more paperclips. The paperclip-agent will experience no pleasure at gaining paperclips, no hurt from losing paperclips, and no painful sense of betrayal if we betray it.</p>
    <p>What do you do then? Do you cooperate when you really, definitely, truly and absolutely do want the highest reward you can get, and you don't care a tiny bit by comparison about what happens to the other player? When it seems <em>right</em> to defect even if the other player cooperates?</p>
    <p>That's what the payoff matrix for the <em>true</em> Prisoner's Dilemma looks like—a situation where <Latex math="(D,C)" /> seems <em>righter</em> than <Latex math="(C,C)" />.</p>
    <p>But all the rest of the logic—everything about what happens if both agents think that way, and both agents defect—is the same. For the paperclip maximizer cares as little about human deaths, or human pain, or a human sense of betrayal, as we care about paperclips. Yet we both prefer <Latex math="(C,C)" /> to <Latex math="(D,D)" />.</p>
    <p>So if you've ever prided yourself on cooperating in the Prisoner's Dilemma… or questioned the verdict of classical game theory that the "rational" choice is to defect… then what do you say to the True Prisoner's Dilemma above?</p>
    <p><em>P.S.:</em> In fact, I <em>don't</em> think rational agents should always defect in one-shot Prisoner's Dilemmas, when the other player will cooperate if it expects you to do the same. I think there are situations where two agents can rationally achieve <Latex math="(C,C)" /> as opposed to <Latex math="(D,D)" />, and reap the associated benefits.<span class="footnote">Eliezer Yudkowsky, <em>Timeless Decision Theory</em>, Unpublished manuscript (Machine Intelligence Research Institute, Berkeley, CA, 2010), http://intelligence.org/files/TDT.pdf.</span></p>
    <p>I'll explain some of my reasoning when I discuss Newcomb's Problem. But we can't talk about whether rational cooperation is possible in this dilemma until we've dispensed with the visceral sense that the <Latex math="(C,C)" /> outcome is <em>nice</em> or <em>good</em> in itself. We have to see past the prosocial label "mutual cooperation" if we are to grasp the math. If you intuit that <Latex math="(C,C)" /> trumps <Latex math="(D,D)" /> from Player 1's perspective, but don't intuit that <Latex math="(D,C)" /> also trumps <Latex math="(C,C)" />, you haven't yet appreciated what makes this problem difficult.</p>
  </Chapter>;
}