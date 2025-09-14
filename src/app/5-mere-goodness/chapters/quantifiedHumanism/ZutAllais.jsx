import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function ZutAllais() {
  return <Chapter title={["Zut Allais!"]}>



    <p><span className="dropCap">H</span>uh! I was not expecting so many commenters to defend the preference reversal. Looks like I ran into an&nbsp;inferential distance.</p>
    <p>It probably helps in interpreting the&nbsp;Allais Paradox&nbsp;to have absorbed more of the&nbsp;<em>gestalt</em>&nbsp;of the field of heuristics and biases, such as:</p>
    <ul>
      <li>Experimental subjects tend to defend incoherent preferences even when they’re&nbsp;<em>really</em>&nbsp;silly.</li>
      <li>People put very high values on small shifts in probability away from 0 or 1 (the certainty effect).</li>
    </ul>
    <p>Let’s start with the issue of incoherent preferences—preference reversals, dynamic inconsistency, money pumps, that sort of thing.</p>
    <p>Anyone who knows a little prospect theory will have no trouble constructing cases where people say they would prefer to play gamble A rather than gamble B; but when you ask them to price the gambles they put a higher value on gamble B than gamble A. There are different perceptual features that become salient when you ask “Which do you prefer?” in a direct comparison, and “How much would you pay?” with a single item.</p>
    <p>This choice of gambles typically generates a preference reversal:</p>
    <ol>
      <li>1⁄3&nbsp;chance to win $16 and&nbsp;2⁄3&nbsp;chance to lose $2.</li>
      <li>99⁄100&nbsp;chance to win $4 and&nbsp;1⁄100&nbsp;chance to lose $1.</li>
    </ol>
    <p>Most people will rather play 2 than 1. But if you ask them to price the bets separately—ask for a price at which they would be indifferent between having that amount of money, and having a chance to play the gamble—people will put a higher price on 1 than on 2.<span class="footnote">Sarah Lichtenstein and Paul Slovic, “Reversals of Preference Between Bids and Choices in Gambing Decisions,”&nbsp;<em>Journal of Experimental Psychology</em>&nbsp;89, no. 1 (1971): 46–55.</span></p>
    <p>So first you sell them a chance to play bet 1, at their stated price. Then you offer to trade bet 1 for bet 2. Then you buy bet 2 back from them, at their stated price. Then you do it again. Hence the phrase, “money pump.”</p>
    <p>Or to paraphrase Steve Omohundro: If you would rather be in Oakland than San Francisco, and you would rather be in San Jose than Oakland, and you would rather be in San Francisco than San Jose, you’re going to spend an awful lot of money on taxi rides.</p>
    <p>Amazingly, people&nbsp;<em>defend</em>&nbsp;these preference patterns. Some subjects abandon them after the money-pump effect is pointed out—revise their price or revise their preference—but some subjects defend them.</p>
    <p>On one occasion, gamblers in Las Vegas played these kinds of bets for real money, using a roulette wheel. And afterward, one of the researchers tried to explain the problem with the incoherence between their pricing and their choices. From the&nbsp;transcript:<span class="footnote">William Poundstone,&nbsp;<em>Priceless: The Myth of Fair Value (and How to Take Advantage of It)</em>&nbsp;(Hill & Wang, 2010).</span><span class="footnote spaceBefore">Sarah Lichtenstein and Paul Slovic, eds.,&nbsp;<em>The Construction of Preference</em>&nbsp;(Cambridge University Press, 2006).</span></p>
    <blockquote>
      <p>Sarah Lichtenstein:&nbsp;“Well, how about the bid for Bet A? Do you have any further feelings about it now that you know you are choosing one but bidding more for the other one?”</p>
      <p>Subject:&nbsp;“It’s kind of strange, but no, I don’t have any feelings at all whatsoever really about it. It’s just one of those things. It shows my reasoning process isn’t so good, but, other than that, I… no qualms.”</p>
      <p>...</p>
      <p>Lichtenstein:&nbsp;“Can I persuade you that it is an irrational pattern?”</p>
      <p>Subject:&nbsp;“No, I don’t think you probably could, but you could try.”</p>
      <p>...</p>
      <p>Lichtenstein:&nbsp;“Well, now let me suggest what has been called a money-pump game and try this out on you and see how you like it. If you think Bet A is worth 550 points [points were converted to dollars after the game, though not on a one-to-one basis] then you ought to be willing to give me 550 points if I give you the bet…”</p>
      <p>...</p>
      <p>Lichtenstein:&nbsp;“So you have Bet A, and I say, ‘Oh, you’d rather have Bet B wouldn’t you?’ ”</p>
      <p>...</p>
      <p>Subject:&nbsp;“I’m losing money.”</p>
      <p>Lichtenstein:&nbsp;“I’ll buy Bet B from you. I’ll be generous; I’ll pay you more than 400 points. I’ll pay you 401 points. Are you willing to sell me Bet B for 401 points?”</p>
      <p>Subject:&nbsp;“Well, certainly.”</p>
      <p>...</p>
      <p>Lichtenstein:&nbsp;“I’m now ahead 149 points.”</p>
      <p>Subject:&nbsp;“That’s good reasoning on my part. (laughs) How many times are we going to go through this?” ...</p>
      <p>Lichtenstein:&nbsp;“Well, I think I’ve pushed you as far as I know how to push you short of actually insulting you.”</p>
      <p>Subject:&nbsp;“That’s right.”</p>
    </blockquote>
    <p>You want to scream, “Just&nbsp;<em>give up already!</em>&nbsp;Intuition&nbsp;<em>isn’t always right!</em>”</p>
    <p>And then there’s the business of the strange value that people attach to certainty. My books are packed up for the move, but I believe that one experiment showed that a shift from 100% probability to 99% probability weighed larger in people’s minds than a shift from 80% probability to 20% probability.</p>
    <p>The problem with attaching a huge extra value to certainty is that&nbsp;<em>one time’s certainty</em>&nbsp;is&nbsp;<em>another time’s probability</em>.</p>
    <p>In the last essay, I talked about the Allais Paradox:</p>
    <ul>
      <li><strong>1A.</strong>&nbsp;$24,000, with certainty.</li>
      <li><strong>1B.</strong>&nbsp;33⁄34&nbsp;chance of winning $27,000, and&nbsp;1⁄34&nbsp;chance of winning nothing.</li>
      <li><strong>2A.</strong>&nbsp;34% chance of winning $24,000, and 66% chance of winning nothing.</li>
      <li><strong>2B.</strong>&nbsp;33% chance of winning $27,000, and 67% chance of winning nothing.</li>
    </ul>
    <p>The naive preference pattern on the Allais Paradox is&nbsp;<strong>1A</strong>&nbsp;&gt;&nbsp;<strong>1B</strong>&nbsp;and&nbsp;<strong>2B</strong>&nbsp;&gt;&nbsp;<strong>2A</strong>. Then you will pay me to throw a switch from A to B because you’d rather have a 33% chance of winning $27,000 than a 34% chance of winning $24,000. Then a die roll eliminates a chunk of the probability mass. In both cases you had&nbsp;<em>at least</em>&nbsp;a 66% chance of winning nothing. This die roll eliminates that 66%. So now option B is a&nbsp;33/34&nbsp;chance of winning $27,000, but option A is a&nbsp;<em>certainty</em>&nbsp;of winning $24,000. Oh, glorious certainty! So you pay me to throw the switch back from B to A.</p>
    <p>Now, if I’ve told you in advance that I’m going to do all that, do you really want to pay me to throw the switch, and then pay me to throw it back? Or would you prefer to reconsider?</p>
    <p>Whenever you try to price a probability shift from 24% to 23% as being less important than a shift from ∼1 to 99%—every time you try to make an increment of probability have more value when it’s near an end of the scale—you open yourself up to this kind of exploitation. I can always set up a chain of events that eliminates the probability mass, a bit at a time, until you’re left with “certainty” that flips your preferences. One time’s certainty is another time’s uncertainty, and if you insist on treating the distance from ∼1 to 0.99 as special, I can cause you to invert your preferences over time and pump some money out of you.</p>
    <p>Can I persuade you, perhaps, that this is an irrational pattern?</p>
    <p>Surely, if you’ve been reading this book for a while, you realize that&nbsp;<em>you</em>—the very system and process that reads these very words—are a flawed piece of machinery. Your intuitions are not giving you direct, veridical information about good choices. If you don’t believe that, there are some gambling games I’d like to play with you.</p>
    <p>There are various other games you can also play with certainty effects. For example, if you offer someone a certainty of $400, or an 80% probability of $500 and a 20% probability of $300, they’ll usually take the $400. But if you ask people to imagine themselves $500 richer, and ask if they would prefer a certain loss of $100 or a 20% chance of losing $200, they’ll usually take the chance of losing $200.<span class="footnote">Kahneman and Tversky, “Prospect Theory: An Analysis of Decision Under Risk.”</span>&nbsp;Same probability distribution over outcomes, different descriptions, different choices.</p>
    <p>Yes, Virginia, you really should try to multiply the utility of outcomes by their probability. You really should. Don’t be embarrassed to use clean math.</p>
    <p>In the Allais paradox, figure out whether 1 unit of the difference between getting $24,000 and getting nothing outweighs 33 units of the difference between getting $24,000 and $27,000. If it does, prefer&nbsp;<strong>1A</strong>&nbsp;to&nbsp;<strong>1B</strong>&nbsp;and&nbsp;<strong>2A</strong>&nbsp;to 2B. If the 33 units outweigh the 1 unit, prefer&nbsp;<strong>1B</strong>&nbsp;to&nbsp;<strong>1A</strong>&nbsp;and&nbsp;<strong>2B</strong>&nbsp;to&nbsp;<strong>2A</strong>. As for calculating the utility of money, I would suggest using an approximation that assumes money is logarithmic in utility. If you’ve got plenty of money already, pick B. If $24,000 would double your existing assets, pick A. Case 2 or case 1, makes no difference. Oh, and be sure to assess the utility of total asset values—the utility of final outcome states of the world—not changes in assets, or you’ll end up inconsistent again.</p>
    <p>A number of commenters claimed that the preference pattern wasn’t irrational because of “the utility of certainty,” or something like that. One commenter even wrote&nbsp;U(Certainty)&nbsp;into an expected utility equation.</p>
    <p>Does anyone remember that whole business about&nbsp;<em>expected utility</em>&nbsp;and&nbsp;<em>utility</em>&nbsp;being of&nbsp;fundamentally different types? Utilities are over&nbsp;<em>outcomes</em>. They are values you attach to&nbsp;<em>particular, solid states of the world</em>. You cannot feed a probability of 1 into a utility function. It makes no sense.</p>
    <p>And before you sniff, “Hmph… you just want the math to be neat and tidy,” remember that, in this case, the price of departing the Bayesian Way was paying someone to throw a switch and then throw it back.</p>
    <p>But what about that&nbsp;solid, warm feeling of reassurance? Isn’t&nbsp;<em>that</em>&nbsp;a utility?</p>
    <p>That’s being human. Humans are not expected utility maximizers. Whether you want to relax and have fun, or pay some extra money for a feeling of certainty, depends on whether you care more about satisfying your intuitions or&nbsp;<em>actually achieving the goal</em>.</p>
    <p>If you’re gambling at Las Vegas for fun, then by all means, don’t think about the expected utility—you’re going to lose money anyway.</p>
    <p>But what if it were&nbsp;24,000 lives at stake, instead of $24,000? The certainty effect is even stronger over human lives. Will you pay one human life to throw the switch, and another to switch it back?</p>
    <p>Tolerating preference reversals makes a mockery of claims to optimization. If you drive from San Jose to San Francisco to Oakland to San Jose, over and over again, then you may get a lot of warm fuzzy feelings out of it, but you can’t be interpreted as having a&nbsp;<em>destination</em>—as trying to go&nbsp;<em>somewhere</em>.</p>
    <p>When you have circular preferences, you’re not&nbsp;<em>steering the future</em>—just running in circles. If you enjoy running for its own sake, then fine. But if you have a goal—something you’re trying to actually accomplish—a preference reversal reveals a big problem. At least one of the choices you’re making must not be working to actually optimize the future in any coherent sense.</p>
    <p>If what you care about is the&nbsp;warm fuzzy feeling of certainty, then fine. If someone’s life is at stake, then you had best realize that your intuitions are a greasy&nbsp;lens&nbsp;through which to see the world. Your feelings are not providing you with direct, veridical information about strategic consequences—it&nbsp;<em>feels</em>&nbsp;that way, but they’re&nbsp;<em>not</em>. Warm fuzzies can lead you far astray.</p>
    <p>There are&nbsp;mathematical laws&nbsp;governing efficient strategies for steering the future. When something&nbsp;<em>truly</em>&nbsp;important is at stake—something more important than your feelings of happiness about the decision—then you should care about the math, if you truly care at all.</p>
  </Chapter>;
}