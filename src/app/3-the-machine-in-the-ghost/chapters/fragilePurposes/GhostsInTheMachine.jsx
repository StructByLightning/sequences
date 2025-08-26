import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function GhostsInTheMachine() {
  return <Chapter title={["Ghosts in the Machine"]}>


    <p><span className="dropCap tall">P</span>eople hear about Friendly AI and say—this is one of the top three initial reactions:</p>
    <p>“Oh, you can try to tell the AI to be Friendly, but if the AI can modify its own source code, it’ll just remove any constraints you try to place on it.”</p>
    <p>And where does <em>that</em> decision come from?</p>
    <p>Does it enter from outside causality, rather than being an effect of a lawful chain of causes that started with the source code as originally written? Is the AI the ultimate source of its own free will?</p>
    <p>A Friendly AI is not a selfish AI constrained by a special extra conscience module that overrides the AI’s natural impulses and tells it what to do. You just build the conscience, and that <em>is</em> the AI. If you have a program that computes which decision the AI should make, you’re done. The buck stops immediately.</p>
    <p>At this point, I shall take a moment to quote some case studies from the Computer Stupidities site and Programming subtopic. (I am not linking to this, because it is a fearsome time-trap; you can Google if you dare.)</p>
    <blockquote>
      <p>I tutored college students who were taking a computer programming course. A few of them didn’t understand that computers are not sentient. More than one person used comments in their Pascal programs to put detailed explanations such as, “Now I need you to put these letters on the screen.” I asked one of them what the deal was with those comments. The reply: “How else is the computer going to understand what I want it to do?” Apparently they would assume that since they couldn’t make sense of Pascal, neither could the computer.</p>

      <hr />

      <p>While in college, I used to tutor in the school’s math lab. A student came in because his basic program would not run. He was taking a beginner course, and his assignment was to write a program that would calculate the recipe for oatmeal cookies, depending upon the number of people you’re baking for. I looked at his program, and it went something like this:</p>

      <pre><span>10 Preheat oven to 350</span><br /><span>20 Combine all ingredients in a large mixing bowl</span><br /><span>30 Mix until smooth</span><br /></pre>

      <hr />

      <p>An introductory programming student once asked me to look at his program and figure out why it was always churning out zeroes as the result of a simple computation. I looked at the program, and it was pretty obvious:</p>

      <pre>
        <span>begin</span><br /><span>  read("Number of Apples", apples)</span><br /><span>  read("Number of Carrots", carrots)</span><br /><span>  read("Price for 1 Apple", a_price)</span><br /><span>  read("Price for 1 Carrot", c_price)</span><br /><span>  write("Total for Apples", a_total)</span><br /><span>  write("Total for Carrots", c_total)</span><br /><span>  write("Total", total)</span><br /><span>  total = a_total + c_total</span><br /><span>  a_total = apples * a_price</span><br /><span>  c_total = carrots * c_price</span><br /><span>end</span>
      </pre>

      <p>Me: “Well, your program can’t print correct results before they’re computed.”</p>
      <p>Him: “Huh? It’s logical what the right solution is, and the computer should reorder the instructions the right way.”</p>
    </blockquote>

    <p>There’s an instinctive way of imagining the scenario of “programming an AI.” It maps onto a similar-seeming human endeavor: Telling a human being what to do. Like the “program” is giving instructions to a little ghost that sits inside the machine, which will look over your instructions and decide whether it likes them or not.</p>
    <p>There is no ghost who looks over the instructions and decides how to follow them. The program <em>is</em> the AI.</p>
    <p>That doesn’t mean the ghost does anything you wish for, like a genie. It doesn’t mean the ghost does everything you want the way you want it, like a slave of exceeding docility. It means your instruction <em>is</em> the only ghost that’s there, at least at boot time.</p>
    <p>AI is much harder than people instinctively imagined, exactly because you can’t just <em>tell</em> the ghost what to do. You have to build the ghost from scratch, and everything that seems obvious to you, the ghost will not see unless you know how to make the ghost see it. You can’t just <em>tell</em> the ghost to see it. You have to create that-which-sees from scratch.</p>
    <p>If you don’t know how to build something that seems to have some strange ineffable elements like, say, “decision-making,” then you can’t just shrug your shoulders and let the ghost’s free will do the job. You’re left forlorn and ghostless.</p>
    <p>There’s more to building a chess-playing program than building a really fast processor—so the AI will be really smart—and then typing at the command prompt “Make whatever chess moves <em>you</em> think are best.” You might think that, since the programmers themselves are not very good chess players, any advice they tried to give the electronic superbrain would just slow the ghost down. But there is no ghost. You see the problem.</p>
    <p>And there isn’t a simple spell you can perform to—poof!—summon a complete ghost into the machine. You can’t say, “I summoned the ghost, and it appeared; that’s cause and effect for you.” (It doesn’t work if you use the notion of “emergence” or “complexity” as a substitute for “summon,” either.) You can’t give an instruction to the CPU, “Be a good chess player!” You have to see inside the mystery of chess-playing thoughts, and structure the whole ghost from scratch.</p>
    <p>No matter how common-sensical, no matter how logical, no matter how “obvious” or “right” or “self-evident” or “intelligent” something seems to you, it will not happen inside the ghost. <em>Unless</em> it happens at the end of a chain of cause and effect that began with the instructions that <em>you</em> had to decide on, plus any causal dependencies on sensory data that you built into the starting instructions.</p>
    <p>This doesn’t mean you program in every decision explicitly. Deep Blue was a chess player far superior to its programmers. Deep Blue made better chess moves than anything its makers could have explicitly programmed—but not because the programmers shrugged and left it up to the ghost. Deep Blue moved better than its programmers… at the end of a chain of cause and effect that began in the programmers’ code and proceeded lawfully from there. Nothing happened <em>just</em> because it was so obviously a good move that Deep Blue’s ghostly free will took over, without the code and its lawful consequences being involved.</p>
    <p>If you try to wash your hands of constraining the AI, you aren’t left with a free ghost like an emancipated slave. You are left with a heap of sand that no one has purified into silicon, shaped into a CPU and programmed to think.</p>
    <p>Go ahead, try telling a computer chip “Do whatever you want!” See what happens? Nothing. Because you haven’t constrained it to understand freedom.</p>
    <p>All it takes is one single step that is <em>so obvious, so logical, so self-evident</em> that your mind just skips right over it, and you’ve left the path of the AI programmer. It takes an effort like the one I illustrate in Grasping Slippery Things to prevent your mind from doing this.</p>
  </Chapter>;
}
