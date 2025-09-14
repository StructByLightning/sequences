import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function ConditionalIndependenceAndNaiveBayes() {
  return <Chapter title={["Conditional Independence,", "and Naive Bayes"]}>

    <p><span className="dropCap tall">P</span>reviously I spoke of mutual information between <Latex math="X" /> and <Latex math="Y" />, written <Latex math="I(X;Y)" />, which is the difference between the entropy of the joint probability distribution, <Latex math="H(X,Y)" />, and the entropies of the marginal distributions, <Latex math="H(X) + H(Y)" />.</p>

    <p>I gave the example of a variable <Latex math="X" />, having eight states, <Latex math="X_1" /> through <Latex math="X_8" />, which are all equally probable if we have not yet encountered any evidence; and a variable <Latex math="Y" />, with states <Latex math="Y_1" /> through <Latex math="Y_4" />, which are all equally probable if we have not yet encountered any evidence. Then if we calculate the marginal entropies <Latex math="H(X)" /> and <Latex math="H(Y)" />, we will find that <Latex math="X" /> has 3 bits of entropy, and <Latex math="Y" /> has 2 bits.</p>

    <p>However, we also know that <Latex math="X" /> and <Latex math="Y" /> are both even or both odd; and this is all we know about the relation between them. So for the joint distribution <Latex math="(X,Y)" /> there are only 16 possible states, all equally probable, for a joint entropy of 4 bits. This is a 1-bit entropy defect, compared to 5 bits of entropy if <Latex math="X" /> and <Latex math="Y" /> were independent. This entropy defect is the mutual information—the information that <Latex math="X" /> tells us about <Latex math="Y" />, or vice versa, so that we are not as uncertain about one after having learned the other.</p>

    <p>Suppose, however, that there exists a third variable <Latex math="Z" />. The variable <Latex math="Z" /> has two states, "even" and "odd," perfectly correlated to the evenness or oddness of <Latex math="(X,Y)" />. In fact, we'll suppose that <Latex math="Z" /> is just the question "Are <Latex math="X" /> and <Latex math="Y" /> even or odd?"</p>

    <p>If we have no evidence about <Latex math="X" /> and <Latex math="Y" />, then <Latex math="Z" /> itself necessarily has 1 bit of entropy on the information given. There is 1 bit of mutual information between <Latex math="Z" /> and <Latex math="X" />, and 1 bit of mutual information between <Latex math="Z" /> and <Latex math="Y" />. And, as previously noted, 1 bit of mutual information between <Latex math="X" /> and <Latex math="Y" />. So how much entropy for the whole system <Latex math="(X,Y,Z)" />? You might naively expect that</p>

    <Latex math="H(X,Y,Z) = H(X) + H(Y) + H(Z) - I(X;Z) - I(Z;Y) - I(X;Y)" display="block" />

    <p>but this turns out not to be the case.</p>

    <p>The joint system <Latex math="(X,Y,Z)" /> only has 16 possible states—since <Latex math="Z" /> is just the question "Are <Latex math="X" /> and <Latex math="Y" /> even or odd?"—so <Latex math="H(X,Y,Z) = 4" /> bits. But if you calculate the formula just given, you get</p>

    <p><Latex math="(3 + 2 + 1 - 1 - 1 - 1)" /> bits <Latex math="= 3" /> bits = <span className="smallCaps">Wrong</span>!</p>

    <p>Why? Because if you have the mutual information between <Latex math="X" /> and <Latex math="Z" />, and the mutual information between <Latex math="Z" /> and <Latex math="Y" />, that may include some of the same mutual information that we'll calculate exists between <Latex math="X" /> and <Latex math="Y" />. In this case, for example, knowing that <Latex math="X" /> is even tells us that <Latex math="Z" /> is even, and knowing that <Latex math="Z" /> is even tells us that <Latex math="Y" /> is even, but this is the same information that <Latex math="X" /> would tell us about <Latex math="Y" />. We double-counted some of our knowledge, and so came up with too little entropy.</p>

    <p>The correct formula is (I believe):</p>

    <Latex math="H(X,Y,Z) = H(X) + H(Y) + H(Z) - I(X;Z) - I(Z;Y) - I(X;Y|Z)" display="block" />

    <p>Here the last term, <Latex math="I(X;Y|Z)" />, means, "the information that <Latex math="X" /> tells us about <Latex math="Y" />, given that we already know <Latex math="Z" />." In this case, <Latex math="X" /> doesn't tell us anything about <Latex math="Y" />, given that we already know <Latex math="Z" />, so the term comes out as zero—and the equation gives the correct answer. There, isn't that nice?</p>

    <p>"No," you correctly reply, "for you have not told me how to calculate <Latex math="I(X;Y|Z)" />, only given me a verbal argument that it ought to be zero."</p>

    <p>We calculate <Latex math="I(X;Y|Z)" /> just the way you would expect. We know <Latex math="I(X;Y) = H(X) + H(Y) - H(X,Y)" />, so</p>

    <Latex math="I(X;Y|Z) = H(X|Z) + H(Y|Z) - H(X,Y|Z)" display="block" />

    <p>And now, I suppose, you want to know how to calculate the conditional entropy? Well, the <em>original</em> formula for the entropy is</p>

    <Latex math="H(S) = \sum_i -P(S_i) \times \log_2(P(S_i))" display="block" />

    <p>If we then learned a new fact <Latex math="Z_0" />, our remaining uncertainty about <Latex math="S" /> would be</p>

    <Latex math="H(S|Z_0) = \sum_i -P(S_i|Z_0) \log_2(P(S_i|Z_0))" display="block" />

    <p>So if we're going to learn a new fact <Latex math="Z" />, but we don't know which <Latex math="Z" /> yet, then, on average, we expect to be around this uncertain of <Latex math="S" /> afterward:</p>

    <Latex math="H(S|Z) = \sum_j \left( P(Z_j) \sum_i -P(S_i|Z_j) \log_2(P(S_i|Z_j)) \right)" display="block" />

    <p>And that's how one calculates conditional entropies; from which, in turn, we can get the conditional mutual information.</p>

    <p>There are <em>all sorts</em> of ancillary theorems here, like</p>

    <Latex math="H(X|Y) = H(X,Y) - H(Y)" display="block" />

    <p>and</p>

    <p>if <Latex math="I(X;Z) = 0" /> and <Latex math="I(Y;X|Z) = 0" /> then <Latex math="I(X;Y) = 0" />,</p>

    <p>but I'm not going to go into those.</p>

    <p>"But," you ask, "what does <em>this</em> have to do with the nature of words and their hidden Bayesian structure?"</p>

    <p>I am just so <em>unspeakably</em> glad that you asked that question, because I was planning to tell you whether you liked it or not. But first there are a couple more preliminaries.</p>

    <p>You will remember—yes, you <em>will</em> remember—that there is a duality between mutual information and Bayesian evidence. Mutual information is positive if and only if the probability of at least some joint events <Latex math="P(x,y)" /> does not equal the product of the probabilities of the separate events <Latex math="P(x)P(y)" />. This, in turn, is exactly equivalent to the condition that Bayesian evidence exists between <Latex math="x" /> and <Latex math="y" />:</p>

    <div style={{ marginLeft: '2em' }}>
      <p><Latex math="I(X;Y) > 0" /> ⇒</p>
      <p><Latex math="P(x,y) \neq P(x)P(y)" /></p>
      <p><Latex math="\frac{P(x,y)}{P(y)} \neq P(x)" /></p>
      <p><Latex math="P(x|y) \neq P(x)" /></p>
    </div>

    <p>If you're conditioning on <Latex math="Z" />, you just adjust the whole derivation accordingly:</p>

    <div style={{ marginLeft: '2em' }}>
      <p><Latex math="I(X;Y|Z) > 0" /> ⇒</p>
      <p><Latex math="P(x,y|z) \neq P(x|z)P(y|z)" /></p>
      <p><Latex math="\frac{P(x,y|z)}{P(y|z)} \neq P(x|z)" /></p>
      <p><Latex math="\frac{P(x,y,z)/P(z)}{P(y,z)/P(z)} \neq P(x|z)" /></p>
      <p><Latex math="\frac{P(x,y,z)}{P(y,z)} \neq P(x|z)" /></p>
      <p><Latex math="P(x|y,z) \neq P(x|z)" /></p>
    </div>

    <p>Which last line reads "Even knowing <Latex math="Z" />, learning <Latex math="Y" /> still changes our beliefs about <Latex math="X" />."</p>

    <p>Conversely, as in our original case of <Latex math="Z" /> being "even" or "odd," <Latex math="Z" /> screens off <Latex math="X" /> from <Latex math="Y" />—that is, if we know that <Latex math="Z" /> is "even," learning that <Latex math="Y" /> is in state <Latex math="Y_4" /> tells us <em>nothing more</em> about whether <Latex math="X" /> is <Latex math="X_2" />, <Latex math="X_4" />, <Latex math="X_6" />, or <Latex math="X_8" />. Or if we know that <Latex math="Z" /> is "odd," then learning that <Latex math="X" /> is <Latex math="X_5" /> tells us nothing more about whether <Latex math="Y" /> is <Latex math="Y_1" /> or <Latex math="Y_3" />. Learning <Latex math="Z" /> has rendered <Latex math="X" /> and <Latex math="Y" /> <em>conditionally independent</em>.</p>

    <p>Conditional independence is a hugely important concept in probability theory—to cite just one example, without conditional independence, the universe would have no structure.</p>

    <p>Here, though, I only intend to talk about one particular kind of conditional independence—the case of a central variable that screens off other variables surrounding it, like a central body with tentacles.</p>

    <p>Let there be five variables <Latex math="U" />, <Latex math="V" />, <Latex math="W" />, <Latex math="X" />, and <Latex math="Y" />; and moreover, suppose that for every pair of these variables, one variable is evidence about the other. If you select <Latex math="U" /> and <Latex math="W" />, for example, then learning <Latex math="U = U_1" /> will tell you something you didn't know before about the probability that <Latex math="W = W_1" />.</p>

    <p>An unmanageable inferential mess? Evidence gone wild? Not necessarily.</p>

    <p>Maybe <Latex math="U" /> is "Speaks a language," <Latex math="V" /> is "Two arms and ten digits," <Latex math="W" /> is "Wears clothes," <Latex math="X" /> is "Poisonable by hemlock," and <Latex math="Y" /> is "Red blood." Now if you encounter a thing-in-the-world, that might be an apple and might be a rock, and you learn that this thing speaks Chinese, you are liable to assess a much higher probability that it wears clothes; and if you learn that the thing is not poisonable by hemlock, you will assess a somewhat lower probability that it has red blood.</p>

    <p>Now some of these rules are stronger than others. There is the case of Fred, who is missing a finger due to a volcano accident, and the case of Barney the Baby who doesn't speak yet, and the case of Irving the IRCBot who emits sentences but has no blood. So if we learn that a certain thing is not wearing clothes, that doesn't screen off everything that its speech capability can tell us about its blood color. If the thing doesn't wear clothes but <em>does</em> talk, maybe it's Nude Nellie.</p>

    <p>This makes the case more interesting than, say, five integer variables that are all odd or all even, but otherwise uncorrelated. In that case, knowing any one of the variables would screen off everything that knowing a second variable could tell us about a third variable.</p>

    <p>But here, we have dependencies that don't go away as soon as we learn just one variable, as the case of Nude Nellie shows. So is it an unmanageable inferential inconvenience?</p>

    <p>Fear not! For there may be some <em>sixth</em> variable <Latex math="Z" />, which, if we knew it, really <em>would</em> screen off every pair of variables from each other. There may be some variable <Latex math="Z" />—even if we have to <em>construct</em> <Latex math="Z" /> rather than observing it directly—such that:</p>

    <div style={{ marginLeft: '2em' }}>
      <Latex math="P(U|V,W,X,Y,Z) = P(U|Z)\\P(V|U,W,X,Y,Z) = P(V|Z)\\P(W|U,V,X,Y,Z) = P(W|Z)" display="block" />
      <div style={{ textAlign: 'center' }}>⋮</div>
    </div>

    <p>Perhaps, <em>given that</em> a thing is "human," then the probabilities of it speaking, wearing clothes, and having the standard number of fingers, are all independent. Fred may be missing a finger—but he is no more likely to be a nudist than the next person; Nude Nellie never wears clothes, but knowing this doesn't make it any less likely that she speaks; and Baby Barney doesn't talk yet, but is not missing any limbs.</p>

    <p>This is called the "Naive Bayes" method, because it usually isn't quite true, but <em>pretending</em> that it's true can simplify the living daylights out of your calculations. We don't keep separate track of the influence of clothed-ness on speech capability given finger number. We just use all the information we've observed to keep track of the probability that this thingy is a human (or alternatively, something else, like a chimpanzee or robot) and then use our beliefs about the central class to predict anything we haven't seen yet, like vulnerability to hemlock.</p>

    <p>Any observations of <Latex math="U" />, <Latex math="V" />, <Latex math="W" />, <Latex math="X" />, and <Latex math="Y" /> just act as evidence for the central class variable <Latex math="Z" />, and then we use the posterior distribution on <Latex math="Z" /> to make any predictions that need making about unobserved variables in <Latex math="U" />, <Latex math="V" />, <Latex math="W" />, <Latex math="X" />, and <Latex math="Y" />.</p>

    <p>Sound familiar? It should:</p>

    <figure>
      <img src="/NeuralCategories_diagram_3.svg" style={{ width: "250px" }} />
      <figcaption>Network 2</figcaption>
    </figure>

    <p>As a matter of fact, if you use the right kind of neural network units, this "neural network" ends up <em>exactly, mathematically</em> equivalent to Naive Bayes. The central unit just needs a logistic threshold—an S-curve response—and the weights of the inputs just need to match the logarithms of the likelihood ratios, et cetera. In fact, it's a good guess that this is one of the reasons why logistic response often works so well in neural networks—it lets the algorithm sneak in a little Bayesian reasoning while the designers aren't looking.</p>

    <p>Just because someone is presenting you with an algorithm that they call a "neural network" with buzzwords like "scruffy" and "emergent" plastered all over it, disclaiming proudly that they have no idea how the learned network works—well, don't assume that their little AI algorithm <em>really is</em> Beyond the Realms of Logic. For this paradigm of adhockery, if it works, will turn out to have Bayesian structure; it may even be exactly equivalent to an algorithm of the sort called "Bayesian."</p>

    <p>Even if it doesn't <em>look</em> Bayesian, on the surface.</p>

    <p>And then you just <em>know</em> that the Bayesians are going to start explaining exactly how the algorithm works, what underlying assumptions it reflects, which environmental regularities it exploits, where it works and where it fails, and even attaching understandable meanings to the learned network weights.</p>

    <p>Disappointing, isn't it?</p>
  </Chapter>;
}