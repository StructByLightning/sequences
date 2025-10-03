import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function DisguisedQueries() {
  return <Chapter title={["Disguised Queries"]}>


    <p><span className="dropCap">I</span>magine that you have a peculiar job in a peculiar factory: Your task is to take objects from a mysterious conveyor belt, and sort the objects into two bins. When you first arrive, Susan the Senior Sorter explains to you that blue egg-shaped objects are called “bleggs” and go in the “blegg bin,” while red cubes are called “rubes” and go in the “rube bin.”</p>
    <p>Once you start working, you notice that bleggs and rubes differ in ways besides color and shape. Bleggs have fur on their surface, while rubes are smooth. Bleggs flex slightly to the touch; rubes are hard. Bleggs are opaque, the rube’s surface slightly translucent.</p>
    <p>Soon after you begin working, you encounter a blegg shaded an unusually dark blue—in fact, on closer examination, the color proves to be purple, halfway between red and blue.</p>
    <p>Yet wait! Why are you calling this object a “blegg”? A “blegg” was originally defined as blue and egg-shaped—the qualification of blueness appears in the very name “blegg,” in fact. This object is not blue. One of the necessary qualifications is missing; you should call this a “purple egg-shaped object,” not a “blegg.”</p>
    <p>But it so happens that, in addition to being purple and egg-shaped, the object is also furred, flexible, and opaque. So when you saw the object, you thought, “Oh, a strangely colored blegg.” It certainly isn’t a rube… right?</p>
    <p>Still, you aren’t quite sure what to do next. So you call over Susan the Senior Sorter.</p>
    <blockquote>
      <p>“Oh, yes, it’s a blegg,” Susan says, “you can put it in the blegg bin.”</p>
      <p>You start to toss the purple blegg into the blegg bin, but pause for a moment. “Susan,” you say, “how do you <em>know</em> this is a blegg?”</p>
      <p>Susan looks at you oddly. “Isn’t it obvious? This object may be purple, but it’s still egg-shaped, furred, flexible, and opaque, like all the other bleggs. You’ve got to expect a few color defects. Or is this one of those philosophical conundrums, like ‘How do you know the world wasn’t created five minutes ago complete with false memories?’ In a philosophical sense I’m not <em>absolutely certain</em> that this is a blegg, but it seems like a good guess.”</p>
      <p>“No, I mean…” You pause, searching for words. “<em>Why</em> is there a blegg bin and a rube bin? What’s the <em>difference</em> between bleggs and rubes?”</p>
      <p>“Bleggs are blue and egg-shaped, rubes are red and cube-shaped,” Susan says patiently. “You got the standard orientation lecture, right?”</p>
      <p>“Why do bleggs and rubes <em>need</em> to be sorted?”</p>
      <p>“Er… because otherwise they’d be all mixed up?” says Susan. “Because nobody will pay us to sit around all day and <em>not</em> sort bleggs and rubes?”</p>
      <p>“Who originally determined that the first blue egg-shaped object was a ‘blegg,’ and how did they determine that?”</p>
      <p>Susan shrugs. “I suppose you could just as easily call the red cube-shaped objects ‘bleggs’ and the blue egg-shaped objects ‘rubes,’ but it seems easier to remember this way.”</p>
      <p>You think for a moment. “Suppose a completely mixed-up object came off the conveyor. Like, an orange sphere-shaped furred translucent object with writhing green tentacles. How could I tell whether it was a blegg or a rube?”</p>
      <p>“Wow, no one’s ever found an object <em>that</em> mixed up,” says Susan, “but I guess we’d take it to the sorting scanner.”</p>
      <p>“How does the sorting scanner work?” you inquire. “X-rays? Magnetic resonance imaging? Fast neutron transmission spectroscopy?”</p>
      <p>“I’m told it works by Bayes’s Rule, but I don’t quite understand how,” says Susan. “I like to say it, though. Bayes Bayes Bayes Bayes Bayes.”</p>
      <p>“What does the sorting scanner <em>tell</em> you?”</p>
      <p>“It tells you whether to put the object into the blegg bin or the rube bin. That’s why it’s called a sorting scanner.”</p>
      <p>At this point you fall silent.</p>
      <p>“Incidentally,” Susan says casually, “it may interest you to know that bleggs contain small nuggets of vanadium ore, and rubes contain shreds of palladium, both of which are useful industrially.”</p>
      <p>“Susan, you are pure evil.”</p>
      <p>“Thank you.”</p>
    </blockquote>
    <p>So now it seems we’ve discovered the heart and essence of bleggness: a blegg is an object that contains a nugget of vanadium ore. Surface characteristics, like blue color and furredness, do not <em>determine</em> whether an object is a blegg; surface characteristics only matter because they help you <em>infer</em> whether an object is a blegg, that is, whether the object contains vanadium.</p>
    <p>Containing vanadium is a necessary and sufficient definition: all bleggs contain vanadium and everything that contains vanadium is a blegg: “blegg” is just a shorthand way of saying “vanadium-containing object.” Right?</p>
    <p>Not so fast, says Susan: Around 98% of bleggs contain vanadium, but 2% contain palladium instead. To be precise (Susan continues) around 98% of blue egg-shaped furred flexible opaque objects contain vanadium. For unusual bleggs, it may be a different percentage: 95% of purple bleggs contain vanadium, 92% of hard bleggs contain vanadium, etc.</p>
    <p>Now suppose you find a blue egg-shaped furred flexible opaque object, an ordinary blegg in every visible way, and just for kicks you take it to the sorting scanner, and the scanner says “palladium”—this is one of the rare 2%. Is it a blegg?</p>
    <p>At first you might answer that, since you intend to throw this object in the rube bin, you might as well call it a “rube.” However, it turns out that almost all bleggs, if you switch off the lights, glow faintly in the dark, while almost all rubes do not glow in the dark. And the percentage of bleggs that glow in the dark is not significantly different for blue egg-shaped furred flexible opaque objects that contain palladium, instead of vanadium. Thus, if you want to guess whether the object glows like a blegg, or remains dark like a rube, you should guess that it glows like a blegg.</p>
    <p>So is the object <em>really</em> a blegg or a rube?</p>
    <p>On one hand, you’ll throw the object in the rube bin no matter what else you learn. On the other hand, if there are any unknown characteristics of the object you need to infer, you’ll infer them as if the object were a blegg, not a rube—group it into the similarity cluster of blue egg-shaped furred flexible opaque things, and not the similarity cluster of red cube-shaped smooth hard translucent things.</p>
    <p>The question “Is this object a blegg?” may stand in for different queries on different occasions.</p>
    <p>If it weren’t standing in for <em>some</em> query, you’d have no reason to care.</p>
    <p>Is atheism a “religion”? Is transhumanism a “cult”? People who argue that atheism is a religion “because it states beliefs about God” are really trying to argue (I think) that the reasoning methods used in atheism are on a par with the reasoning methods used in religion, or that atheism is no safer than religion in terms of the probability of causally engendering violence, etc… What’s really at stake is an atheist’s claim of substantial difference and superiority relative to religion, which the religious person is trying to reject by denying the difference rather than the superiority(!).</p>
    <p>But that’s not the a priori irrational part: The a priori irrational part is where, in the course of the argument, someone pulls out a dictionary and looks up the definition of “atheism” or “religion.” (And yes, it’s just as silly whether an atheist or religionist does it.) How could a dictionary <em>possibly</em> decide whether an empirical cluster of atheists is really substantially different from an empirical cluster of theologians? How can reality vary with the meaning of a word? The points in thingspace don’t move around when we redraw a boundary.</p>
    <p>But people often don’t <em>realize</em> that their argument about where to draw a definitional boundary, is really a dispute over whether to infer a characteristic shared by most things inside an empirical cluster…</p>
    <p>Hence the phrase, “disguised query.”</p>
  </Chapter>;
}
