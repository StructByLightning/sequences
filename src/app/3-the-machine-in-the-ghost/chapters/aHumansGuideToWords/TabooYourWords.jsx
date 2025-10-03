import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function TabooYourWords() {
  return <Chapter title={["Taboo Your Words"]}>


    <p><span className="dropCap">I</span>n the game <em>Taboo</em> (by Hasbro), the objective is for a player to have their partner guess a word written on a card, without using that word or five additional words listed on the card. For example, you might have to get your partner to say “baseball” without using the words “sport,” “bat,” “hit,” “pitch,” “base” or of course “baseball.”</p>
    <p>As soon as I see a problem like that, I at once think, “An artificial group conflict in which you use a long wooden cylinder to whack a thrown spheroid, and then run between four safe positions.” It might not be the most efficient strategy to convey the word “baseball” under the stated rules—that might be, “It’s what the Yankees play”—but the general skill of <em>blanking a word out of my mind</em> was one I’d practiced for years, albeit with a different purpose.</p>
    <p>In the previous essay we saw how replacing terms with definitions could reveal the empirical unproductivity of the classical Aristotelian syllogism. All humans are mortal (and also, apparently, featherless bipeds); Socrates is human; therefore Socrates is mortal. When we replace the word “human” by its apparent definition, the following underlying reasoning is revealed:</p>
    <blockquote>
      <p>All [mortal, ¬feathers, biped] are mortal;</p>
      <p>Socrates is a [mortal, ¬feathers, biped];</p>
      <p>Therefore Socrates is mortal.</p>
    </blockquote>
    <p>But the principle of replacing words by definitions applies much more broadly:</p>
    <blockquote>
      <p><span className="smallCaps">Albert:</span> “A tree falling in a deserted forest makes a sound.”</p>
      <p><span className="smallCaps">Barry:</span> “A tree falling in a deserted forest does not make a sound.”</p>
    </blockquote>
    <p>Clearly, since one says “sound” and one says “not sound,” we must have a contradiction, right? But suppose that they both dereference their pointers before speaking:</p>
    <blockquote>
      <p><span className="smallCaps">Albert:</span> “A tree falling in a deserted forest matches [membership test: this event generates acoustic vibrations].”</p>
      <p><span className="smallCaps">Barry:</span> “A tree falling in a deserted forest does not match [membership test: this event generates auditory experiences].”</p>
    </blockquote>
    <p>Now there is no longer an apparent collision—all they had to do was prohibit themselves from using the word <em>sound</em>. If “acoustic vibrations” came into dispute, we would just play Taboo again and say “pressure waves in a material medium”; if necessary we would play Taboo again on the word “wave” and replace it with the wave equation. (Play Taboo on “auditory experience” and you get “That form of sensory processing, within the human brain, that takes as input a linear time series of frequency mixes…”)</p>
    <p>But suppose, on the other hand, that Albert and Barry were to have the argument:</p>
    <blockquote>
      <p><span className="smallCaps">Albert:</span> “Socrates matches the concept [membership test: this person will die after drinking hemlock].”</p>
      <p><span className="smallCaps">Barry:</span> “Socrates matches the concept [membership test: this person will not die after drinking hemlock].”</p>
    </blockquote>
    <p>Now Albert and Barry have a substantive clash of expectations; a difference in what they anticipate seeing after Socrates drinks hemlock. But they might not notice this, if they happened to use the same word “human” for their different concepts.</p>
    <p>You get a very different picture of what people agree or disagree about, depending on whether you take a label’s-eye-view (Albert says “sound” and Barry says “not sound,” so they must disagree) or taking the test’s-eye-view (Albert’s membership test is acoustic vibrations, Barry’s is auditory experience).</p>
    <p>Get together a pack of <em>soi-disant</em> futurists and ask them if they believe we’ll have Artificial Intelligence in thirty years, and I would guess that at least half of them will say yes. If you leave it at that, they’ll shake hands and congratulate themselves on their consensus. But make the term “Artificial Intelligence” taboo, and ask them to describe <em>what</em> they expect to see, without ever using words like “computers” or “think,” and you might find quite a conflict of expectations hiding under that featureless standard word. See also Shane Legg’s compilation of 71 definitions of “intelligence.”</p>
    <p>The illusion of unity across religions can be dispelled by making the term “God” taboo, and asking them to say what it is they believe in; or making the word “faith” taboo, and asking them why they believe it. Though mostly they won’t be able to answer at all, because it is mostly profession in the first place, and you cannot cognitively zoom in on an audio recording.</p>
    <p>When you find yourself in philosophical difficulties, <em>the first line of defense is not to define your problematic terms, but to see whether you can think without using those terms at all</em>. Or any of their short synonyms. And be careful not to let yourself invent a new word to use instead. Describe outward observables and interior mechanisms; don’t use a single handle, whatever that handle may be.</p>
    <p>Albert says that people have “free will.” Barry says that people don’t have “free will.” Well, that will certainly generate an apparent conflict. Most philosophers would advise Albert and Barry to try to define exactly what they mean by “free will,” on which topic they will certainly be able to discourse at great length. I would advise Albert and Barry to describe what it is that they think people do, or do not have, without using the phrase “free will” at all. (If you want to try this at home, you should also avoid the words “choose,” “act,” “decide,” “determined,” “responsible,” or any of their synonyms.)</p>
    <p>This is one of the nonstandard tools in my toolbox, and in my humble opinion, it works <em>way way</em> better than the standard one. It also requires more effort to use; you get what you pay for.</p>
  </Chapter>;
}
