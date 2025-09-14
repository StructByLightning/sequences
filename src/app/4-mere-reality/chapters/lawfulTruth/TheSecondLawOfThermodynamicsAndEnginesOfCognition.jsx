import React from "react";
import Chapter from "@/components/Chapter/Chapter";
import Latex from "@/components/Latex/Latex";

export default function TheSecondLawOfThermodynamicsAndEnginesOfCognition() {
  return <Chapter title={["The Second Law of Thermodynamics,", "and Engines of Cognition"]}>


    <p><span className="dropCap">T</span>he First Law of Thermodynamics, better known as Conservation of Energy, says that you can't create energy from nothing: it prohibits perpetual motion machines of the first type, which run and run indefinitely without consuming fuel or any other resource. According to our modern view of physics, energy is conserved in each <em>individual</em> interaction of particles. By mathematical induction, we see that no matter how large an assemblage of particles may be, it cannot produce energy from nothing—not without violating what we presently believe to be the laws of physics.</p>
    <p>This is why the US Patent Office will summarily reject your amazingly clever proposal for an assemblage of wheels and gears that cause one spring to wind up another as the first runs down, and so continue to do work forever, according to your calculations. There's a <em>fully general</em> proof that at least one wheel must violate (our standard model of) the laws of physics for this to happen. So unless you can explain how <em>one</em> wheel violates the laws of physics, the <em>assembly</em> of wheels can't do it either.</p>
    <p>A similar argument applies to a "reactionless drive," a propulsion system that violates Conservation of Momentum. In standard physics, momentum is conserved for all individual particles and their interactions; by mathematical induction, momentum is conserved for physical systems whatever their size. If you can visualize two particles knocking into each other and always coming out with the same total momentum that they started with, then you can see how scaling it up from particles to a gigantic complicated collection of gears won't change anything. Even if there's a trillion quadrillion atoms involved, <Latex math="0 + 0 + \ldots + 0 = 0" />.</p>
    <p>But Conservation of Energy, as such, cannot prohibit converting heat into work. You can, in fact, build a sealed box that converts ice cubes and stored electricity into warm water. It isn't even difficult. Energy cannot be created or destroyed: the net change in energy, from transforming (ice cubes + electricity) to (warm water), must be 0. So it couldn't violate Conservation of Energy, as such, if you did it the other way around…</p>
    <p>Perpetual motion machines of the second type, which convert warm water into electrical current and ice cubes, are prohibited by the <em>Second</em> Law of Thermodynamics.</p>
    <p>The second law is a bit harder to understand, as it is essentially Bayesian in nature.</p>
    <p>Yes, really.</p>
    <p>The essential <em>physical</em> law underlying the Second Law of Thermodynamics is a theorem which can be proven within the standard model of physics: <em>In the development over time of any closed system, phase space volume is conserved</em>.</p>
    <p>Let's say you're holding a ball high above the ground. We can describe this state of affairs as a point in a multidimensional space, at least one of whose dimensions is "height of ball above the ground." Then, when you drop the ball, it moves, and so does the dimensionless point in phase space that describes the entire system that includes you and the ball. "Phase space," in physics-speak, means that there are dimensions for the momentum of the particles, not just their position—e.g., a system of 2 particles would have 12 dimensions, 3 dimensions for each particle's position, and 3 dimensions for each particle's momentum.</p>
    <p>If you had a multidimensional space, each of whose dimensions described the position of a gear in a huge assemblage of gears, then as you turned the gears a single point would swoop and dart around in a rather high-dimensional phase space. Which is to say, just as you can view a great big complex machine as a single point in a very-high-dimensional space, so too you can view the laws of physics describing the behavior of this machine over time as describing the trajectory of its point through the phase space.</p>
    <p>The Second Law of Thermodynamics is a consequence of a theorem which can be proven in the standard model of physics: If you take a volume of phase space, and develop it forward in time using standard physics, the total volume of the phase space is conserved.</p>
    <p>For example, let there be two systems, <Latex math="X" /> and <Latex math="Y" />, where <Latex math="X" /> has 8 possible states, <Latex math="Y" /> has 4 possible states, and the joint system (<Latex math="X" />,<Latex math="Y" />) has 32 possible states.</p>
    <p>The development of the joint system over time can be described as a rule that maps initial points onto future points. For example, the system could start out in <Latex math="X_7Y_2" />, then develop (under some set of physical laws) into the state <Latex math="X_3Y_3" /> a minute later. Which is to say: if <Latex math="X" /> started in state <Latex math="X_7" />, and <Latex math="Y" /> started in state <Latex math="Y_2" /> and we watched it for 1 minute, we would see <Latex math="X" /> go to <Latex math="X_3" /> and <Latex math="Y" /> go to <Latex math="Y_3" />. Such are the laws of physics.</p>
    <p>Next, let's carve out a subspace <Latex math="S" /> of the joint system state. The space <Latex math="S" /> will be the subspace bounded by <Latex math="X" /> being in state <Latex math="X_1" /> and <Latex math="Y" /> being in states <Latex math="Y_1" /> through <Latex math="Y_4" />. So the total volume of <Latex math="S" /> is 4 states.</p>
    <p>And let's suppose that, under the laws of physics governing (<Latex math="X" />, <Latex math="Y" />), the states initially in <Latex math="S" /> behave as follows:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="X_1Y_1" /></td>
            <td>→</td>
            <td><Latex math="X_2Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_1Y_2" /></td>
            <td>→</td>
            <td><Latex math="X_4Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_1Y_3" /></td>
            <td>→</td>
            <td><Latex math="X_6Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_1Y_4" /></td>
            <td>→</td>
            <td><Latex math="X_8Y_1" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>That, in a nutshell, is how a refrigerator works.</p>
    <p>The <Latex math="X" /> subsystem began in a narrow region of state space—the single state <Latex math="X_1" /> in fact—and <Latex math="Y" /> began distributed over a wider region of space, states <Latex math="Y_1" /> through <Latex math="Y_4" />. By interacting with each other, <Latex math="Y" /> went into a narrow region, and <Latex math="X" /> ended up in a wide region; <em>but the total phase space volume was conserved</em>. Four initial states mapped to four end states.</p>
    <p>Clearly, so long as total phase space volume is conserved by physics over time, you can't squeeze <Latex math="Y" /> harder than <Latex math="X" /> expands, or vice versa—for every subsystem you squeeze into a narrower region of state space, some other subsystem has to expand into a wider region of state space.</p>
    <p>Now let's say that we're <em>uncertain</em> about the joint system (<Latex math="X" />,<Latex math="Y" />), and our <em>uncertainty</em> is described by an equiprobable distribution over <Latex math="S" />. That is, we're pretty sure <Latex math="X" /> is in state <Latex math="X_1" />, but <Latex math="Y" /> is equally likely to be in any of the states <Latex math="Y_1" /> through <Latex math="Y_4" />. If we shut our eyes for a minute and then open them again, we will expect to see <Latex math="Y" /> in state <Latex math="Y_1" />, but <Latex math="X" /> might be in any of the states <Latex math="X_2" /> through <Latex math="X_8" />. Actually, <Latex math="X" /> can only be in <em>some</em> of the states <Latex math="X_2" /> through <Latex math="X_8" />, but it would be too costly to think out exactly which states these might be, so we'll just say <Latex math="X_2" /> through <Latex math="X_8" />.</p>
    <p>If you consider the Shannon entropy of our uncertainty about <Latex math="X" /> and <Latex math="Y" /> as individual systems, <Latex math="X" /> began with 0 bits of entropy because it had a single definite state, and <Latex math="Y" /> began with 2 bits of entropy because it was equally likely to be in any of 4 possible states. (There's no mutual information between <Latex math="X" /> and <Latex math="Y" />.) A bit of physics occurred, and lo, the entropy of <Latex math="Y" /> went to 0, but the entropy of <Latex math="X" /> went to <Latex math="\log_2(7) = 2.8" /> bits. So entropy was transferred from one system to another, and decreased <em>within</em> the <Latex math="Y" /> subsystem; but due to the cost of bookkeeping, we didn't bother to track some information, and hence (from our perspective) the overall entropy increased.</p>
    <p>Suppose there was a physical process that mapped past states onto future states like this:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="X_2Y_1" /></td>
            <td>→</td>
            <td><Latex math="X_2Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_2Y_2" /></td>
            <td>→</td>
            <td><Latex math="X_2Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_2Y_3" /></td>
            <td>→</td>
            <td><Latex math="X_2Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="X_2Y_4" /></td>
            <td>→</td>
            <td><Latex math="X_2Y_1" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>Then you could have a physical process that would actually <em>decrease entropy</em>, because no matter where you started out, you would end up at the same place. The laws of physics, developing over time, would compress the phase space.</p>
    <p>But there is a theorem, Liouville's Theorem, which can be proven true of our laws of physics, which says that this never happens: phase space is conserved.</p>
    <p>The Second Law of Thermodynamics is a corollary of Liouville's Theorem: no matter how clever your configuration of wheels and gears, you'll never be able to decrease entropy in one subsystem without increasing it somewhere else. When the phase space of one subsystem narrows, the phase space of another subsystem must widen, and the joint space keeps the same volume.</p>
    <p>Except that what was initially a <em>compact</em> phase space, may develop squiggles and wiggles and convolutions; so that to draw a simple boundary around the whole mess, you must draw a much larger boundary than before—this is what gives the appearance of entropy increasing. (And in quantum systems, where different universes go different ways, entropy actually does increase in any local universe. But omit this complication for now.)</p>
    <p>The Second Law of Thermodynamics is actually probabilistic in nature—if you ask about the probability of hot water spontaneously entering the "cold water and electricity" state, the probability does exist, it's just very small. This doesn't mean Liouville's Theorem is violated with small probability; a theorem's a theorem, after all. It means that if you're in a great big phase space volume at the start, but you <em>don't know where</em>, you may assess a tiny little <em>probability</em> of ending up in some particular phase space volume. <em>So far as you know</em>, with infinitesimal probability, this particular glass of hot water may be the kind that spontaneously transforms itself to electrical current and ice cubes. (Neglecting, as usual, quantum effects.)</p>
    <p>So the Second Law really <em>is</em> inherently Bayesian. When it comes to any real thermodynamic system, it's a strictly lawful statement of your <em>beliefs about</em> the system, but only a probabilistic statement about the system itself.</p>
    <p>"Hold on," you say. "That's not what I learned in physics class," you say. "In the lectures <em>I</em> heard, thermodynamics is about, you know, temperatures. Uncertainty is a subjective state of mind! The temperature of a glass of water is an objective property of the water! What does heat have to do with probability?"</p>
    <p>Oh ye of little trust.</p>
    <p>In one direction, the connection between heat and probability is relatively straightforward: If the only fact you know about a glass of water is its temperature, then you are much more uncertain about a hot glass of water than a cold glass of water.</p>
    <p>Heat is the zipping around of lots of tiny molecules; the hotter they are, the faster they can go. Not all the molecules in hot water are travelling at the same speed—the "temperature" isn't a uniform speed of all the molecules, it's an average speed of the molecules, which in turn corresponds to a predictable statistical distribution of speeds—anyway, the point is that, the hotter the water, the faster the water molecules <em>could</em> be going, and hence, the more uncertain you are about the velocity (not just speed) of any <em>individual</em> molecule. When you multiply together your uncertainties about all the individual molecules, you will be <em>exponentially</em> more uncertain about the whole glass of water.</p>
    <p>We take the logarithm of this exponential volume of uncertainty, and call that the entropy. So it all works out, you see.</p>
    <p>The connection in the other direction is less obvious. Suppose there was a glass of water, about which, initially, you knew only that its temperature was 72 degrees. Then, suddenly, Saint Laplace reveals to you the exact locations and velocities of all the atoms in the water. You now know perfectly the state of the water, so, by the information-theoretic definition of entropy, its entropy is zero. Does that make its <em>thermodynamic</em> entropy zero? Is the water colder, because we know more about it?</p>
    <p>Ignoring quantumness for the moment, the answer is: Yes! Yes it is!</p>
    <p>Maxwell once asked: Why can't we take a uniformly hot gas, and partition it into two volumes <Latex math="A" /> and <Latex math="B" />, and let only fast-moving molecules pass from <Latex math="B" /> to <Latex math="A" />, while only slow-moving molecules are allowed to pass from <Latex math="A" /> to <Latex math="B" />? If you could build a gate like this, soon you would have hot gas on the <Latex math="A" /> side, and cold gas on the <Latex math="B" /> side. That would be a cheap way to refrigerate food, right?</p>
    <p>The agent who inspects each gas molecule, and decides whether to let it through, is known as "Maxwell's Demon." And the reason you can't build an efficient refrigerator this way, is that Maxwell's Demon generates entropy in the process of inspecting the gas molecules and deciding which ones to let through.</p>
    <p>But suppose you already <em>knew</em> where all the gas molecules were?</p>
    <p>Then you actually <em>could</em> run Maxwell's Demon and extract useful work.</p>
    <p>So (again ignoring quantum effects for the moment), if you <em>know</em> the states of all the molecules in a glass of hot water, it is cold in a genuinely thermodynamic sense: you can take electricity out of it and leave behind an ice cube.</p>
    <p>This doesn't violate Liouville's Theorem, because if <Latex math="Y" /> is the water, and you are Maxwell's Demon (denoted <Latex math="M" />), the physical process behaves as:</p>
    <figure>
      <table>
        <tbody>
          <tr>
            <td><Latex math="M_1Y_1" /></td>
            <td>→</td>
            <td><Latex math="M_1Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="M_2Y_2" /></td>
            <td>→</td>
            <td><Latex math="M_2Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="M_3Y_3" /></td>
            <td>→</td>
            <td><Latex math="M_3Y_1" /></td>
          </tr>
          <tr>
            <td><Latex math="M_4Y_4" /></td>
            <td>→</td>
            <td><Latex math="M_4Y_1" />.</td>
          </tr>
        </tbody>
      </table>
    </figure>
    <p>Because Maxwell's demon <em>knows</em> the exact state of <Latex math="Y" />, this is mutual information between <Latex math="M" /> and <Latex math="Y" />. The mutual information decreases the joint entropy of (<Latex math="M" />,<Latex math="Y" />): we have <Latex math="H(M,Y) = H(M) + H(Y) - I(M;Y)" />. The demon <Latex math="M" /> has 2 bits of entropy, <Latex math="Y" /> has two bits of entropy, and their mutual information is 2 bits, so (<Latex math="M" />,<Latex math="Y" />) has a total of <Latex math="2 + 2 - 2 = 2" /> bits of entropy. The physical process just transforms the "coldness" (negative entropy, or negentropy) of the mutual information to make the actual water cold—afterward, <Latex math="M" /> has 2 bits of entropy, <Latex math="Y" /> has 0 bits of entropy, and the mutual information is 0. Nothing wrong with that!</p>
    <p>And don't tell me that knowledge is "subjective." Knowledge has to be represented in a brain, and that makes it as physical as anything else. For <Latex math="M" /> to physically represent an accurate picture of the state of <Latex math="Y" />, it must be that <Latex math="M" />'s physical state correlates with the state of <Latex math="Y" />. You can take thermodynamic advantage of that—it's called a Szilárd engine.</p>
    <p>Or as E. T. Jaynes put it, "The old adage 'knowledge is power' is a very cogent truth, both in human relations and in thermodynamics."</p>
    <p>And conversely, <em>one subsystem cannot increase in mutual information with another subsystem, without (a) interacting with it and (b) doing thermodynamic work</em>.</p>
    <p>Otherwise you could build a Maxwell's Demon and violate the Second Law of Thermodynamics—which in turn would violate Liouville's Theorem—which is prohibited in the standard model of physics.</p>
    <p>Which is to say: <strong>To form accurate beliefs about something, you <em>really do</em> have to observe it</strong>. It's a very physical, very real process: any rational mind does "work" in the thermodynamic sense, not just the sense of mental effort.</p>
    <p>(It is sometimes said that it is erasing bits in order to prepare for the next observation that takes the thermodynamic work—but that distinction is just a matter of words and perspective; the math is unambiguous.)</p>
    <p>(Discovering logical "truths" is a complication which I will not, for now, consider—at least in part because I am still thinking through the exact formalism myself. In thermodynamics, knowledge of logical truths does not count as negentropy; as would be expected, since a reversible computer can compute logical truths at arbitrarily low cost. All this that I have said is true of the logically omniscient: any lesser mind will necessarily be less efficient.)</p>
    <p>"Forming accurate beliefs requires a corresponding amount of evidence" is a very cogent truth both in human relations and in thermodynamics: if blind faith actually worked as a method of investigation, you could turn warm water into electricity and ice cubes. Just build a Maxwell's Demon that has blind faith in molecule velocities.</p>
    <p>Engines of cognition are not so different from heat engines, though they manipulate entropy in a more subtle form than burning gasoline. For example, to the extent that an engine of cognition is not perfectly efficient, it must radiate waste heat, just like a car engine or refrigerator.</p>
    <p>"Cold rationality" is true in a sense that Hollywood scriptwriters never dreamed (and false in the sense that they did dream).</p>
    <p>So unless you can tell me which <em>specific step</em> in your argument violates the laws of physics by giving you true knowledge of the unseen, don't expect me to believe that a big, elaborate clever argument can do it either.</p>
  </Chapter>;
}