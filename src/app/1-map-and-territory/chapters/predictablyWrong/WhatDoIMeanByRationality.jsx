import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";
import MarginNote from "@/components/MarginNote/MarginNote";

export default function WhatDoIMeanByRationality() {
  return <Chapter title={["What Do I Mean By Rationality?"]} marginNotes>

        <p>When I say 'rationality,' I mean two things: epistemic rationality (improving the accuracy of your beliefs) and instrumental rationality (achieving your values).</p>
        <MarginNote side="left">
          <p>The community that grew from these texts spent fifteen years focused on the epistemic side and neglected the instrumental. The culture rewarded finding flaws in arguments. You gained status by proving someone technically wrong. Truth serves winning, not the reverse. Always ask yourself "does what I'm doing further my goals".</p>
        </MarginNote>
        <MarginNote side="right">
          <p>You probably picked up this book expecting to learn a new way to think. Some explicit verbal procedure you run when you need to make a careful decision. While rationality does teach techniques for that, it's not the main point. The fast part of your mind—intuition, gut feeling, the one that locates the bookcase and flinches away from the hot stove—is already doing rationality dozens of times per second. The biases cataloged in the Sequences are bugs in the same machinery that correctly identifies the bookcase. The point of rationality is to train your intuitions, not to learn how to override them.</p>
        </MarginNote>

        <MarginNote side="right">
          <p>Surprise is what finding an error in your map feels like from the inside. When something happens that you didn't expect, that feeling isn't a distraction from rationality. Anger can be a signal too, that something is threatening your values. Fear, that a plan has a hole in it you haven't consciously identified yet. Emotions are your mind's attempt to tell you something about the world. They can also be wrong. The flinch that kept your ancestors alive around snakes triggers just as hard around a garden hose in dim light. The Art lies in learning which signals to trust and then retraining the others.</p>
        </MarginNote>
        <p>When you open your eyes and look at the room around you, you'll locate your laptop in relation to the table, and you'll locate a bookcase in relation to the wall. If something goes wrong with your eyes, or your brain, then your mental model might say there's a bookcase where no bookcase exists, and when you go over to get a book, you'll be disappointed.</p>

        <MarginNote side="left">
          <p>The dangerous thing about false beliefs is that they don't feel false. He describes it from the outside: a bookcase that isn't there, and you're disappointed when you reach for it. But most false beliefs aren't so easily disproven, like if the bookcase is in another room, out of sight. From the inside, it simply feels True that the bookcase exists. Your map doesn't come with a little red flag marking the errors. That's the entire problem. If false beliefs felt false, rationality would be trivial. Most of the Sequences are about engineering those rare moments where you actually catch yourself believing something that isn't so, and learning to seek them out instead of flinching away.</p>
        </MarginNote>


        <p>This is what it's like to have a false belief, a map of the world that doesn't correspond to the territory. Epistemic rationality is about building accurate maps instead. This correspondence between belief and reality is commonly called "truth," and I'm happy to call it that.</p>



        <p>Instrumental rationality, on the other hand, is about <em>steering</em> reality—sending the future where you want it to go. It's the art of choosing actions that lead to outcomes ranked higher in your preferences. I sometimes call this "winning."</p>
        <MarginNote side="left" author="anonym">
          <p>It seems to me though that instrumental rationality is what we really, really mean by rationality, and what you have referred to as epistemic rationality is one particular (astoundingly powerful) technique of instrumental rationality.</p>
        </MarginNote>


        <p>So rationality is about forming true beliefs and making winning decisions.</p>
        <MarginNote side="left">
          <p>Before maps, before updating, before any of the machinery introduced in later chapters: <em>what do you want?</em> This is the root question and it gets skipped constantly. The fundamental frame of rationality is simple. What do you have? What do you want? How do you use the first to get the second? Everything else in the Sequences is elaboration. Would-be rationalists who forget this and become obsessed with truth and epistemics tend to end up very sophisticated and very stuck.</p>
        </MarginNote>


        <p>Pursuing "truth" here doesn't mean dismissing uncertain or indirect evidence. Looking at the room around you and building a mental map of it isn't different, in principle, from believing that the Earth has a molten core, or that Julius Caesar was bald. Those questions, being distant from you in space and time, might seem more airy and abstract than questions about your bookcase. Yet there are facts of the matter about the state of the Earth's core in 2015 CE and about the state of Caesar's head in 50 BCE. These facts may have real effects upon you even if you never find a way to meet Caesar or the core face-to-face.</p>
        
        <MarginNote side="right">
          <p>Precision in language sharpens thought. When you force yourself to say exactly what you mean, you discover faster where your understanding has holes. But this practice has a dark side in group settings. In groups that reward finding flaws, such as the rationalist community, precision becomes a weapon. You score points by catching someone using a word slightly wrong. The original purpose, sharpening your own thinking, gets replaced by a status game that fragments the group and makes it harder to coordinate on larger goals. A good heuristic: pursue precision internally and relentlessly. Correct others on terminology rarely, and only when you're confident the correction doesn't detract from the overall goal.</p>
        </MarginNote>
        
        <p>And "winning" here need not come at the expense of others. The project of life can be about collaboration or self-sacrifice, rather than about competition. "Your values" here means <em>anything you care about</em>, including other people. It isn't restricted to <em>selfish</em> values or <em>unshared</em> values.</p>
        

        
        <p>When people say "<em>X</em> is rational!" it's usually just a more strident way of saying "I think <em>X</em> is true" or "I think <em>X</em> is good." So why have an additional word for "rational" as well as "true" and "good"?</p>


        <p>An analogous argument can be given against using "true." There is no need to say "it is true that snow is white" when you could just say "snow is white." What makes the idea of truth useful is that it allows us to talk about the general features of map-territory correspondence. "True models usually produce better experimental predictions than false models" is a useful generalization, and it's not one you can make without using a concept like "true" or "accurate."</p>
        <p>Similarly, "Rational agents make decisions that maximize the probabilistic expectation of a coherent utility function" is the kind of thought that depends on a concept of (instrumental) rationality, whereas "It's rational to eat vegetables" can probably be replaced with "It's useful to eat vegetables" or "It's in your interest to eat vegetables." We need a concept like "rational" in order to note general facts about those ways of thinking that systematically produce truth or value—and the systematic ways in which we fall short of those standards.</p>

        <p>Sometimes experimental psychologists uncover human reasoning that seems very strange. For example, someone rates the probability "Bill plays jazz" as <em>less</em> than the probability "Bill is an accountant who plays jazz." This seems like an odd judgment, since any particular jazz-playing accountant is obviously a jazz player. But to what higher vantage point do we appeal in saying that the judgment is <em>wrong</em>?</p>
        <MarginNote side="right">
          <p>The conjunction fallacy is one of the most robust findings in judgment research. Decades of replication confirm it, including under real-money conditions. The textbook version is easy to spot. Nobody is going to hand you a paragraph about Bill and ask you to rank probabilities. The real version looks like this: someone tells you a detailed story about why a startup will succeed, or why a political candidate will win, or why your relationship ended. The details makes it feel true. Each specific element adds texture and the texture feels like evidence. It isn't, and the more specific and vivid the narrative, the more suspicious you should be.</p>
        </MarginNote>

        <p>Experimental psychologists use two gold standards: <em>probability theory</em>, and <em>decision theory</em>.</p>
        <p>Probability theory is the set of laws underlying rational belief. The mathematics of probability describes equally and without distinction (a) figuring out where your bookcase is, (b) figuring out the temperature of the Earth's core, and (c) estimating how many hairs were on Julius Caesar's head. It's all the same problem of how to process the evidence and observations to revise ("update") one's beliefs. Similarly, decision theory is the set of laws underlying rational action, and is equally applicable regardless of what one's goals and available options are.</p>
        <p>Let "<Latex math="P(\textit{such-and-such})" />" stand for "the probability that such-and-such hap­pens," and <Latex math="P(A, B)" /> for "the probability that both <Latex math="A" /> and <Latex math="B" /> happen." Since it is a universal law of probability theory that <Latex math="P(A) \geq P(A, B)" />, this judgment is labeled incorrect:</p>

        <Latex math="P(\textit{Bill plays jazz}) < P(\textit{Bill plays jazz, Bill is an accountant})" display="block" />

        <p>To keep it technical, you would say that this probability judgment is <em>non-Bayesian</em>. Beliefs and actions that are rational in this mathematically welldefined sense are called "Bayesian."</p>
        <p>Note that the modern concept of rationality is not about reasoning in words. I gave the example of opening your eyes, looking around you, and building a mental model of a room containing a bookcase against the wall. The modern concept of rationality is general enough to include your eyes and your brain's visual areas as things-that-map. It includes your wordless intuitions as well. The math doesn't care whether we use the same English-language word, "rational," to refer to Spock and to refer to Bayesianism. The math models good ways of achieving goals or mapping the world, regardless of whether those ways fit our preconceptions and stereotypes about what "rationality" is supposed to be.</p>
        <p>This does not quite exhaust the problem of what is meant in practice by "rationality," for two major reasons:</p>
        <p>First, the Bayesian formalisms in their full form are computationally intractable on most real-world problems. No one can <em>actually</em> calculate and obey the math, any more than you can predict the stock market by calculating the movements of quarks.</p>

        <MarginNote side="right">
          <p>This is the most important paragraph in the chapter and the easiest to miss. He's telling you upfront: nobody can actually <em>do</em> the math. Everything that follows—every heuristic, every debiasing technique, every practical exercise—is an approximation to an ideal that no finite mind can reach. CFAR discovered empirically that the main bottleneck isn't computational: people are surprisingly good at approximate Bayesian reasoning once psychological blockers (flinching, motivated reasoning, learned helplessness) are removed. The Art is about training your mind to think in these patterns; not about sitting down with a calculator and punching through a bunch of multiplications.</p>
        </MarginNote>

        <MarginNote side="left" author="Annoyance">
          <p>Rationality is a property of our understanding of our thinking, not the thinking itself.</p>
        </MarginNote>    

        <p>This is why there is a whole site called "Less Wrong," rather than a single page that simply states the formal axioms and calls it a day. There's a whole further art to finding the truth and accomplishing value <em>from inside a human mind</em>: we have to learn our own flaws, overcome our biases, prevent ourselves from self-deceiving, get ourselves into good emotional shape to confront the truth and do what needs doing, et cetera, et cetera.</p>
        <MarginNote side="left">
        </MarginNote>

        <p>Second, sometimes the meaning of the math itself is called into question. The exact rules of probability theory are called into question by, e.g., anthropic problems in which the number of observers is uncertain. The exact rules of decision theory are called into question by, e.g., Newcomblike problems in which other agents may predict your decision before it happens<span className="footnote"><em>For a good introduction to Newcomb's Problem, see https://slate.com/culture/2002/02/robert-nozick-and-newcomb-s-problem.html.</em></span>.</p>
        
        <p>In cases like these, it is futile to try to settle the problem by coming up with some new definition of the word "rational" and saying, "Therefore my preferred answer, <em>by definition</em>, is what is meant by the word 'rational.' " This simply raises the question of why anyone should pay attention to your definition. I'm not interested in probability theory because it is the holy word handed down from Laplace. I'm interested in Bayesian-style belief-updating (with Occam priors) because I expect that this style of thinking gets us systematically closer to, you know, <em>accuracy</em>, the map that reflects the territory.</p>
        <p>And then there are questions of how to think that seem not quite answered by either probability theory or decision theory—like the question of how to feel about the truth once you have it. Here, again, trying to define "rationality" a particular way doesn't support an answer, but merely presumes one.</p>
        <p>I am not here to argue the meaning of a word, not even if that word is "rationality." The point of attaching sequences of letters to particular concepts is to let two people <em>communicate</em>—to help transport thoughts from one mind to another. You cannot change reality, or prove the thought, by manipulating which meanings go with which words.</p>

        <MarginNote side="right" author="Valentin2026">
          <p>
            How should we deal with the cases when epistemic rationality contradicts instrumental? For example, we may  want to use placebo effect because one of our values is that healthy is better than sick, and less pain is better than more pain. But placebo effect is based on the fact that we believe pill to be a working medicine that is wrong.
          </p>
        </MarginNote>


        <p>So if you understand what concept I am <em>generally getting at</em> with this word "rationality," and with the sub-terms "epistemic rationality" and "instrumental rationality," we <em>have communicated</em>: we have accomplished everything there is to accomplish by talking about how to define "rationality." What's left to discuss is not <em>what meaning</em> to attach to the syllables "ra-tio-na-li-ty"; what's left to discuss is <em>what is a good way to think</em>.</p>
        <p>If you say, "It's (epistemically) rational for me to believe <em>X</em>, but the truth is <em>Y</em>, " then you are probably using the word "rational" to mean something other than what I have in mind. (E.g., "rationality" should be <em>consistent under reflection</em>—"rationally" looking at the evidence, and "rationally" considering how your mind processes the evidence, shouldn't lead to two different conclusions.)</p>
        <p>Similarly, if you find yourself saying, "The (instrumentally) rational thing for me to do is <em>X</em>, but the right thing for me to do is <em>Y</em>," then you are almost certainly using some other meaning for the word "rational" or the word "right." I use the term "rationality" <em>normatively</em>, to pick out desirable patterns of thought.</p>
        <p>In this case—or in any other case where people disagree about word meanings—you should substitute more specific language in place of "rational": "The self-benefiting thing to do is to run away, but I hope I would at least try to drag the child off the railroad tracks," or "Causal decision theory as usually formulated says you should two-box on Newcomb's Problem, but I'd rather have a million dollars."</p>

        <MarginNote side="right">
          <p>
            He's tipping his hand here. "I'd rather have a million dollars." Good. That's the right instinct, but you don't need the formalism of decision theory to get it. The point of rationality is to win. If your decision theory tells you to leave a million dollars on the table, or to always escalate against an agent that will predictably out-escalate you, something has gone wrong with your decision theory. In real life, this shows up as clever arguments that sound airtight and lead to terrible outcomes. When the logic says to do something that obviously loses, check the logic, and ignore it if that's what it takes to win.
          </p>
        </MarginNote>




        <p>In fact, I recommend reading back through this essay, replacing every instance of "rational" with "foozal," and seeing if that changes the connotations of what I'm saying any. If so, I say: strive not for rationality, but for foozality.</p>

        <MarginNote side="left">
          <p>
            This is a rationality technique disguised as a joke. Taboo the word, keep the concept, see if the argument still works. This gets formalized later as <em>Taboo Your Words</em>, one of the most practically useful tools in the Sequences. If swapping in a nonsense word changes how an argument feels, you were being moved by connotations, not content.
          </p>
        </MarginNote>


        <p>The word "rational" has potential pitfalls, but there are plenty of <em>non</em>-borderline cases where "rational" works fine to communicate what I'm getting at. Likewise "irrational." In these cases I'm not afraid to use it.</p>
        <p>Yet one should be careful not to <em>overuse</em> that word. One receives no points merely for pronouncing it loudly. If you speak overmuch of the Way, you will not attain it.</p>
        <MarginNote side="right">
          <p>A reference to the opening of the <em>Tao Te Ching</em>: "The Tao that can be told is not the eternal Tao." The allusion is deliberate and earned — a warning against mistaking the vocabulary of rationality for the practice. The community's subsequent history vindicated the concern. The word "Bayesian" became a shibboleth; "rationalist" became a tribal label (prompting the LessWrong discussion "Should We Stop Using the Term 'Rationalist'?"); and Kaj Sotala observed that LessWrong-style rationality can produce epistemic paralysis — "an understanding of how every available option is somehow inadequate, but failed to suggest anything that would be adequate." The chapter's closing is its most prescient line.</p>
        </MarginNote>
  </Chapter>
}
