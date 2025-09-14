import React from "react";
import Chapter from "@/components/Chapter/Chapter";

export default function TheParableOfTheDagger() {
  return <Chapter title={["The Parable of the Dagger"]}>
    <p><em>(Adapted from Raymond Smullyan.)</em><span class="footnote">Raymond M. Smullyan,&nbsp;<em>What Is the Name of This Book?: The Riddle of Dracula and Other Logical Puzzles</em>&nbsp;(Penguin Books, 1990).</span></p>
    <p><span className="dropCap">O</span>nce upon a time, there was a court jester who dabbled in logic. The jester presented the king with two boxes. Upon the first box was inscribed:</p>
    <blockquote>
      <p>Either this box contains an angry frog, or the box with a false inscription contains an angry frog, but not both.</p>
    </blockquote>
    <p>On the second box was inscribed:</p>
    <blockquote>
      <p>Either this box contains gold and the box with a false inscription contains an angry frog, or this box contains an angry frog and the box with a true inscription contains gold.</p>
    </blockquote>
    <p>And the jester said to the king: “One box contains an angry frog, the other box gold; and one, and only one, of the inscriptions is true.”</p>
    <p>The king opened the wrong box, and was savaged by an angry frog.</p>
    <p>“You see,” the jester said, “let us hypothesize that the first inscription is the true one. Then suppose the first box contains gold. Then the other box would have an angry frog, while the box with a true inscription would contain gold, which would make the second statement true as well. Now hypothesize that the first inscription is false, and that the first box contains gold. Then the second inscription would be—”</p>
    <p>The king ordered the jester thrown in the dungeons.</p>
    <p>A day later, the jester was brought before the king in chains and shown two boxes.</p>
    <p>“One box contains a key,” said the king, “to unlock your chains; and if you find the key you are free. But the other box contains a dagger for your heart if you fail.”</p>
    <p>And the first box was inscribed:</p>
    <blockquote>
      <p>Either both inscriptions are true, or both inscriptions are false.</p>
    </blockquote>
    <p>And the second box was inscribed:</p>
    <blockquote>
      <p>This box contains the key.</p>
    </blockquote>
    <p>The jester reasoned thusly: “Suppose the first inscription is true. Then the second inscription must also be true. Now suppose the first inscription is false. Then again the second inscription must be true. So the second box must contain the key, if the first inscription is true, and also if the first inscription is false. Therefore, the second box must logically contain the key.”</p>
    <p>The jester opened the second box, and found a dagger.</p>
    <p>“How?!” cried the jester in horror, as he was dragged away. “It’s logically impossible!”</p>
    <p>“It is entirely possible,” replied the king. “I merely wrote those inscriptions on two boxes, and then I put the dagger in the second one.”</p>
  </Chapter>;
}
