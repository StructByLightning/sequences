"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TitlePage from "@/components/TitlePage/TitlePage";

// Lawful Truth chapters
import UniversalFire from "./chapters/lawfulTruth/UniversalFire";
import UniversalLaw from "./chapters/lawfulTruth/UniversalLaw";
import IsRealityUgly from "./chapters/lawfulTruth/IsRealityUgly";
import BeautifulProbability from "./chapters/lawfulTruth/BeautifulProbability";
import OutsideTheLaboratory from "./chapters/lawfulTruth/OutsideTheLaboratory";
import TheSecondLawOfThermodynamicsAndEnginesOfCognition from "./chapters/lawfulTruth/TheSecondLawOfThermodynamicsAndEnginesOfCognition";
import PerpetualMotionBeliefs from "./chapters/lawfulTruth/PerpetualMotionBeliefs";
import SearchingForBayesStructure from "./chapters/lawfulTruth/SearchingForBayesStructure";

// Reductionism 101 chapters
import DissolvingTheQuestion from "./chapters/reductionism101/DissolvingTheQuestion";
import WrongQuestions from "./chapters/reductionism101/WrongQuestions";
import RightingAWrongQuestion from "./chapters/reductionism101/RightingAWrongQuestion";
import MindProjectionFallacy from "./chapters/reductionism101/MindProjectionFallacy";
import ProbabilityIsInTheMind from "./chapters/reductionism101/ProbabilityIsInTheMind";
import TheQuotationIsNotTheReferent from "./chapters/reductionism101/TheQuotationIsNotTheReferent";
import QualitativelyConfused from "./chapters/reductionism101/QualitativelyConfused";
import ThinkLikeReality from "./chapters/reductionism101/ThinkLikeReality";
import ChaoticInversion from "./chapters/reductionism101/ChaoticInversion";
import Reductionism from "./chapters/reductionism101/Reductionism";
import ExplainingVsExplainingAway from "./chapters/reductionism101/ExplainingVsExplainingAway";
import FakeReductionism from "./chapters/reductionism101/FakeReductionism";
import SavannahPoets from "./chapters/reductionism101/SavannahPoets";

// Joy in the Merely Real chapters
import JoyInTheMerelyReal from "./chapters/joyInTheMerelyReal/JoyInTheMerelyReal";
import JoyInDiscovery from "./chapters/joyInTheMerelyReal/JoyInDiscovery";
import BindYourselfToReality from "./chapters/joyInTheMerelyReal/BindYourselfToReality";
import IfYouDemandMagicMagicWontHelp from "./chapters/joyInTheMerelyReal/IfYouDemandMagicMagicWontHelp";
import MundaneMagic from "./chapters/joyInTheMerelyReal/MundaneMagic";
import TheBeautyOfSettledScience from "./chapters/joyInTheMerelyReal/TheBeautyOfSettledScience";
import AmazingBreakthroughDayApril1st from "./chapters/joyInTheMerelyReal/AmazingBreakthroughDayApril1st";
import IsHumanismAReligionSubstitute from "./chapters/joyInTheMerelyReal/IsHumanismAReligionSubstitute";
import Scarcity from "./chapters/joyInTheMerelyReal/Scarcity";
import TheSacredMundane from "./chapters/joyInTheMerelyReal/TheSacredMundane";
import ToSpreadScienceKeepItSecret from "./chapters/joyInTheMerelyReal/ToSpreadScienceKeepItSecret";
import InitiationCeremony from "./chapters/joyInTheMerelyReal/InitiationCeremony";

// Physicalism 201 chapters
import HandVsFingers from "./chapters/physicalism201/HandVsFingers";
import AngryAtoms from "./chapters/physicalism201/AngryAtoms";
import HeatVsMotion from "./chapters/physicalism201/HeatVsMotion";
import BrainBreakthroughItsMadeOfNeurons from "./chapters/physicalism201/BrainBreakthroughItsMadeOfNeurons";
import WhenAnthropomorphismBecameStupid from "./chapters/physicalism201/WhenAnthropomorphismBecameStupid";
import APriori from "./chapters/physicalism201/APriori";
import ReductiveReference from "./chapters/physicalism201/ReductiveReference";
import ZombiesZombies from "./chapters/physicalism201/ZombiesZombies";
import ZombieResponses from "./chapters/physicalism201/ZombieResponses";
import TheGeneralizedAntiZombiePrinciple from "./chapters/physicalism201/TheGeneralizedAntiZombiePrinciple";
import GAZPVsGLUT from "./chapters/physicalism201/GAZPVsGLUT";
import BeliefInTheImpliedInvisible from "./chapters/physicalism201/BeliefInTheImpliedInvisible";
import ZombiesTheMovie from "./chapters/physicalism201/ZombiesTheMovie";
import ExcludingTheSupernatural from "./chapters/physicalism201/ExcludingTheSupernatural";
import PsychicPowers from "./chapters/physicalism201/PsychicPowers";

// Quantum Physics and Many Worlds chapters
import QuantumExplanations from "./chapters/quantumPhysicsAndManyWorlds/QuantumExplanations";
import ConfigurationsAndAmplitude from "./chapters/quantumPhysicsAndManyWorlds/ConfigurationsAndAmplitude";
import JointConfigurations from "./chapters/quantumPhysicsAndManyWorlds/JointConfigurations";
import DistinctConfigurations from "./chapters/quantumPhysicsAndManyWorlds/DistinctConfigurations";
import CollapsePostulates from "./chapters/quantumPhysicsAndManyWorlds/CollapsePostulates";
import DecoherenceIsSimple from "./chapters/quantumPhysicsAndManyWorlds/DecoherenceIsSimple";
import DecoherenceIsFalsifiableAndTestable from "./chapters/quantumPhysicsAndManyWorlds/DecoherenceIsFalsifiableAndTestable";
import PrivilegingTheHypothesis from "./chapters/quantumPhysicsAndManyWorlds/PrivilegingTheHypothesis";
import LivingInManyWorlds from "./chapters/quantumPhysicsAndManyWorlds/LivingInManyWorlds";
import QuantumNonRealism from "./chapters/quantumPhysicsAndManyWorlds/QuantumNonRealism";
import IfManyWorldsHadComeFirst from "./chapters/quantumPhysicsAndManyWorlds/IfManyWorldsHadComeFirst";
import WherePhilosophyMeetsScience from "./chapters/quantumPhysicsAndManyWorlds/WherePhilosophyMeetsScience";
import ThouArtPhysics from "./chapters/quantumPhysicsAndManyWorlds/ThouArtPhysics";
import ManyWorldsOneBestGuess from "./chapters/quantumPhysicsAndManyWorlds/ManyWorldsOneBestGuess";

// Science and Rationality chapters
import TheFailuresOfEldScience from "./chapters/scienceAndRationality/TheFailuresOfEldScience";
import TheDilemmaScienceOrBayes from "./chapters/scienceAndRationality/TheDilemmaScienceOrBayes";
import ScienceDoesntTrustYourRationality from "./chapters/scienceAndRationality/ScienceDoesntTrustYourRationality";
import WhenScienceCantHelp from "./chapters/scienceAndRationality/WhenScienceCantHelp";
import ScienceIsntStrictEnough from "./chapters/scienceAndRationality/ScienceIsntStrictEnough";
import DoScientistsAlreadyKnowThisStuff from "./chapters/scienceAndRationality/DoScientistsAlreadyKnowThisStuff";
import NoSafeDefenseNotEvenScience from "./chapters/scienceAndRationality/NoSafeDefenseNotEvenScience";
import ChangingTheDefinitionOfScience from "./chapters/scienceAndRationality/ChangingTheDefinitionOfScience";
import FasterThanScience from "./chapters/scienceAndRationality/FasterThanScience";
import EinsteinsSpeed from "./chapters/scienceAndRationality/EinsteinsSpeed";
import ThatAlienMessage from "./chapters/scienceAndRationality/ThatAlienMessage";
import MyChildhoodRoleModel from "./chapters/scienceAndRationality/MyChildhoodRoleModel";
import EinsteinsSuperpowers from "./chapters/scienceAndRationality/EinsteinsSuperpowers";
import ClassProject from "./chapters/scienceAndRationality/ClassProject";

// Interlude
import ATechnicalExplanationOfTechnicalExplanation from "./chapters/scienceAndRationality/ATechnicalExplanationOfTechnicalExplanation";
import TableOfContents from "@/components/TableOfContents/TableOfContents";

export default function Home() {

  return <>

    <TitlePage volume="4" name="Mere Reality" />

    <TableOfContents items={[
      {
        sequence: "O",
        label: "Lawful Truth",
        chapters: [
          { name: "Universal Fire" },
          { name: "Universal Law" },
          { name: "Is Reality Ugly?" },
          { name: "Beautiful Probability" },
          { name: "Outside the Laboratory" },
          { name: "The Second Law of Thermodynamics, and Engines of Cognition" },
          { name: "Perpetual Motion Beliefs" },
          { name: "Searching for Bayes-Structure" },
        ]
      },
      {
        sequence: "P",
        label: "Reductionism 101",
        chapters: [
          { name: "Dissolving the Question" },
          { name: "Wrong Questions" },
          { name: "Righting a Wrong Question" },
          { name: "Mind Projection Fallacy" },
          { name: "Probability is in the Mind" },
          { name: "The Quotation is Not the Referent" },
          { name: "Qualitatively Confused" },
          { name: "Think Like Reality" },
          { name: "Chaotic Inversion" },
          { name: "Reductionism" },
          { name: "Explaining vs. Explaining Away" },
          { name: "Fake Reductionism" },
          { name: "Savannah Poets" },
        ]
      },
      {
        sequence: "Q",
        label: "Joy in the Merely Real",
        chapters: [
          { name: "Joy in the Merely Real" },
          { name: "Joy in Discovery" },
          { name: "Bind Yourself to Reality" },
          { name: "If You Demand Magic, Magic Won't Help" },
          { name: "Mundane Magic" },
          { name: "The Beauty of Settled Science" },
          { name: "Amazing Breakthrough Day: April 1st" },
          { name: "Is Humanism a Religion Substitute?" },
          { name: "Scarcity" },
          { name: "The Sacred Mundane" },
          { name: "To Spread Science, Keep It Secret" },
          { name: "Initiation Ceremony" },
        ]
      },
      {
        sequence: "R",
        label: "Physicalism 201",
        chapters: [
          { name: "Hand vs. Fingers" },
          { name: "Angry Atoms" },
          { name: "Heat vs. Motion" },
          { name: "Brain Breakthrough! It's Made of Neurons!" },
          { name: "When Anthropomorphism Became Stupid" },
          { name: "A Priori" },
          { name: "Reductive Reference" },
          { name: "Zombies! Zombies?" },
          { name: "Zombie Responses" },
          { name: "The Generalized Anti-Zombie Principle" },
          { name: "GAZP vs. GLUT" },
          { name: "Belief in the Implied Invisible" },
          { name: "Zombies: The Movie" },
          { name: "Excluding the Supernatural" },
          { name: "Psychic Powers" },
        ]
      },
      {
        sequence: "S",
        label: "Quantum Physics and Many Worlds",
        chapters: [
          { name: "Quantum Explanations" },
          { name: "Configurations and Amplitude" },
          { name: "Joint Configurations" },
          { name: "Distinct Configurations" },
          { name: "Collapse Postulates" },
          { name: "Decoherence is Simple" },
          { name: "Decoherence is Falsifiable and Testable" },
          { name: "Privileging the Hypothesis" },
          { name: "Living in Many Worlds" },
          { name: "Quantum Non-Realism" },
          { name: "If Many-Worlds Had Come First" },
          { name: "Where Philosophy Meets Science" },
          { name: "Thou Art Physics" },
          { name: "Many Worlds, One Best Guess" },
        ]
      },
      {
        sequence: "T",
        label: "Science and Rationality",
        chapters: [
          { name: "The Failures of Eld Science" },
          { name: "The Dilemma: Science or Bayes?" },
          { name: "Science Doesn't Trust Your Rationality" },
          { name: "When Science Can't Help" },
          { name: "Science Isn't Strict Enough" },
          { name: "Do Scientists Already Know This Stuff?" },
          { name: "No Safe Defense, Not Even Science" },
          { name: "Changing the Definition of Science" },
          { name: "Faster Than Science" },
          { name: "Einstein's Speed" },
          { name: "That Alien Message" },
          { name: "My Childhood Role Model" },
          { name: "Einstein's Superpowers" },
          { name: "Class Project" },
          { name: "A Technical Explanation of Technical Explanation" },
        ]
      }
    ]} />


    <SequenceHeader title="Lawful Truth" letter="O" />
    <UniversalFire />
    <UniversalLaw />
    <IsRealityUgly />
    <BeautifulProbability />
    <OutsideTheLaboratory />
    <TheSecondLawOfThermodynamicsAndEnginesOfCognition />
    <PerpetualMotionBeliefs />
    <SearchingForBayesStructure />

    <SequenceHeader title="Reductionism 101" letter="P" />
    <DissolvingTheQuestion />
    <WrongQuestions />
    <RightingAWrongQuestion />
    <MindProjectionFallacy />
    <ProbabilityIsInTheMind />
    <TheQuotationIsNotTheReferent />
    <QualitativelyConfused />
    <ThinkLikeReality />
    <ChaoticInversion />
    <Reductionism />
    <ExplainingVsExplainingAway />
    <FakeReductionism />
    <SavannahPoets />

    <SequenceHeader title="Joy in the Merely Real" letter="Q" />
    <JoyInTheMerelyReal />
    <JoyInDiscovery />
    <BindYourselfToReality />
    <IfYouDemandMagicMagicWontHelp />
    <MundaneMagic />
    <TheBeautyOfSettledScience />
    <AmazingBreakthroughDayApril1st />
    <IsHumanismAReligionSubstitute />
    <Scarcity />
    <TheSacredMundane />
    <ToSpreadScienceKeepItSecret />
    <InitiationCeremony />

    <SequenceHeader title="Physicalism 201" letter="R" />
    <HandVsFingers />
    <AngryAtoms />
    <HeatVsMotion />
    <BrainBreakthroughItsMadeOfNeurons />
    <WhenAnthropomorphismBecameStupid />
    <APriori />
    <ReductiveReference />
    <ZombiesZombies />
    <ZombieResponses />
    <TheGeneralizedAntiZombiePrinciple />
    <GAZPVsGLUT />
    <BeliefInTheImpliedInvisible />
    <ZombiesTheMovie />
    <ExcludingTheSupernatural />
    <PsychicPowers />

    <SequenceHeader title="Quantum Physics and Many Worlds" letter="S" />
    <QuantumExplanations />
    <ConfigurationsAndAmplitude />
    <JointConfigurations />
    <DistinctConfigurations />
    <CollapsePostulates />
    <DecoherenceIsSimple />
    <DecoherenceIsFalsifiableAndTestable />
    <PrivilegingTheHypothesis />
    <LivingInManyWorlds />
    <QuantumNonRealism />
    <IfManyWorldsHadComeFirst />
    <WherePhilosophyMeetsScience />
    <ThouArtPhysics />
    <ManyWorldsOneBestGuess />

    <SequenceHeader title="Science and Rationality" letter="T" />
    <TheFailuresOfEldScience />
    <TheDilemmaScienceOrBayes />
    <ScienceDoesntTrustYourRationality />
    <WhenScienceCantHelp />
    <ScienceIsntStrictEnough />
    <DoScientistsAlreadyKnowThisStuff />
    <NoSafeDefenseNotEvenScience />
    <ChangingTheDefinitionOfScience />
    <FasterThanScience />
    <EinsteinsSpeed />
    <ThatAlienMessage />
    <MyChildhoodRoleModel />
    <EinsteinsSuperpowers />
    <ClassProject />
    <SequenceHeader title="Interlude" letter="" />
    <ATechnicalExplanationOfTechnicalExplanation />

  </>
}