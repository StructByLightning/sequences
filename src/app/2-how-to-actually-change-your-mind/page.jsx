"use client";
import { React } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import TitlePage from "@/components/TitlePage/TitlePage";

// Overly Convenient Excuses
import TheProperUseOfHumility from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/TheProperUseOfHumility";
import TheThirdAlternative from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/TheThirdAlternative";
import LotteriesAWasteOfHope from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/LotteriesAWasteOfHope";
import NewImprovedLottery from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/NewImprovedLottery";
import ButTheresStillAChanceRight from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/ButTheresStillAChanceRight";
import TheFallacyOfGray from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/TheFallacyOfGray";
import AbsoluteAuthority from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/AbsoluteAuthority";
import HowToConvinceMeThat2Plus2Equals3 from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/HowToConvinceMeThat2Plus2Equals3";
import InfiniteCertainty from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/InfiniteCertainty";
import ZeroAndOneAreNotProbabilities from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/ZeroAndOneAreNotProbabilities";
import YourRationalityIsMyBusiness from "@/app/2-how-to-actually-change-your-mind/chapters/overlyConvenientExcuses/YourRationalityIsMyBusiness";

// Politics and Rationality
import PoliticsIsTheMindKiller from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/PoliticsIsTheMindKiller";
import PolicyDebatesShouldNotAppearOneSided from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/PolicyDebatesShouldNotAppearOneSided";
import TheScalesOfJusticeTheNotebookOfRationality from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/TheScalesOfJusticeTheNotebookOfRationality";
import CorrespondenceBias from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/CorrespondenceBias";
import AreYourEnemiesInnatelyEvil from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/AreYourEnemiesInnatelyEvil";
import ReversedStupidityIsNotIntelligence from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/ReversedStupidityIsNotIntelligence";
import ArgumentScreensOffAuthority from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/ArgumentScreensOffAuthority";
import HugTheQuery from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/HugTheQuery";
import RationalityAndTheEnglishLanguage from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/RationalityAndTheEnglishLanguage";
import HumanEvilAndMuddledThinking from "@/app/2-how-to-actually-change-your-mind/chapters/politicsAndRationality/HumanEvilAndMuddledThinking";

// Against Rationalization
import KnowingAboutBiasesCanHurtPeople from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/KnowingAboutBiasesCanHurtPeople";
import UpdateYourselfIncrementally from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/UpdateYourselfIncrementally";
import OneArgumentAgainstAnArmy from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/OneArgumentAgainstAnArmy";
import TheBottomLine from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/TheBottomLine";
import WhatEvidenceFilteredEvidence from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/WhatEvidenceFilteredEvidence";
import Rationalization from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/Rationalization";
import ARationalArgument from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/ARationalArgument";
import AvoidingYourBeliefsRealWeakPoints from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/AvoidingYourBeliefsRealWeakPoints";
import MotivatedStoppingAndMotivatingContinuation from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/MotivatedStoppingAndMotivatingContinuation";
import FakeJustification from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/FakeJustification";
import IsThatYourTrueRejection from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/IsThatYourTrueRejection";
import EntangledTruthsContagiousLies from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/EntangledTruthsContagiousLies";
import OfLiesAndBlackSwanBlowups from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/OfLiesAndBlackSwanBlowups";
import DarkSideEpistemology from "@/app/2-how-to-actually-change-your-mind/chapters/againstRationalization/DarkSideEpistemology";

// Against Doublethink
import Singlethink from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/Singlethink";
import DoublethinkChoosingToBeBiased from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/DoublethinkChoosingToBeBiased";
import NoReallyIveDeceivedMyself from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/NoReallyIveDeceivedMyself";
import BeliefInSelfDeception from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/BeliefInSelfDeception";
import MooresParadox from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/MooresParadox";
import DontBelieveYoullSelfDeceive from "@/app/2-how-to-actually-change-your-mind/chapters/againstDoublethink/DontBelieveYoullSelfDeceive";

// Seeing with Fresh Eyes
import AnchoringAndAdjustment from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/AnchoringAndAdjustment";
import PrimingAndContamination from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/PrimingAndContamination";
import DoWeBelieveEverythingWereTold from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/DoWeBelieveEverythingWereTold";
import CachedThoughts from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/CachedThoughts";
import TheOutsideTheBoxBox from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/TheOutsideTheBoxBox";
import OriginalSeeing from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/OriginalSeeing";
import StrangerThanHistory from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/StrangerThanHistory";
import TheLogicalFallacyOfGeneralizationFromFictionalEvidence from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/TheLogicalFallacyOfGeneralizationFromFictionalEvidence";
import TheVirtueOfNarrowness from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/TheVirtueOfNarrowness";
import HowToSeemAndBeDeep from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/HowToSeemAndBeDeep";
import WeChangeOurMindsLessOftenThanWeThink from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/WeChangeOurMindsLessOftenThanWeThink";
import HoldOffOnProposingSolutions from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/HoldOffOnProposingSolutions";
import TheGeneticFallacy from "@/app/2-how-to-actually-change-your-mind/chapters/seeingWithFreshEyes/TheGeneticFallacy";

// Death Spirals
import TheAffectHeuristic from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/TheAffectHeuristic";
import EvaluabilityAndCheapHolidayShopping from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/EvaluabilityAndCheapHolidayShopping";
import UnboundedScalesHugeJuryAwardsAndFuturism from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/UnboundedScalesHugeJuryAwardsAndFuturism";
import TheHaloEffect from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/TheHaloEffect";
import SuperheroBias from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/SuperheroBias";
import MereMessiahs from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/MereMessiahs";
import AffectiveDeathSpirals from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/AffectiveDeathSpirals";
import ResistTheHappyDeathSpiral from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/ResistTheHappyDeathSpiral";
import UncriticalSupercriticality from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/UncriticalSupercriticality";
import EvaporativeCoolingOfGroupBeliefs from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/EvaporativeCoolingOfGroupBeliefs";
import WhenNoneDareUrgeRestraint from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/WhenNoneDareUrgeRestraint";
import TheRobbersCaveExperiment from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/TheRobbersCaveExperiment";
import EveryCauseWantsToBeACult from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/EveryCauseWantsToBeACult";
import GuardiansOfTheTruth from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/GuardiansOfTheTruth";
import GuardiansOfTheGenePool from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/GuardiansOfTheGenePool";
import GuardiansOfAynRand from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/GuardiansOfAynRand";
import TwoCultKoans from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/TwoCultKoans";
import AschsConformityExperiment from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/AschsConformityExperiment";
import OnExpressingYourConcerns from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/OnExpressingYourConcerns";
import LonelyDissent from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/LonelyDissent";
import CultishCountercultishness from "@/app/2-how-to-actually-change-your-mind/chapters/deathSpirals/CultishCountercultishness";

// Letting Go
import TheImportanceOfSayingOops from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/TheImportanceOfSayingOops";
import TheCrackpotOffer from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/TheCrackpotOffer";
import JustLoseHopeAlready from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/JustLoseHopeAlready";
import TheProperUseOfDoubt from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/TheProperUseOfDoubt";
import YouCanFaceReality from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/YouCanFaceReality";
import TheMeditationOnCuriosity from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/TheMeditationOnCuriosity";
import NoOneCanExemptYouFromRationalitysLaws from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/NoOneCanExemptYouFromRationalitysLaws";
import LeaveALineOfRetreat from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/LeaveALineOfRetreat";
import CrisisOfFaith from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/CrisisOfFaith";
import TheRitual from "@/app/2-how-to-actually-change-your-mind/chapters/lettingGo/TheRitual";

export default function Home() {

  return <>

    <TitlePage volume="2" name="How to Actually Change Your Mind" />

    <TableOfContents items={[
      {
        sequence: "E",
        label: "Overly Convenient Excuses",
        chapters: [
          { name: "The Proper Use of Humility" },
          { name: "The Third Alternative" },
          { name: "Lotteries: A Waste of Hope" },
          { name: "New Improved Lottery" },
          { name: "But There's Still a Chance, Right?" },
          { name: "The Fallacy of Gray" },
          { name: "Absolute Authority" },
          { name: "How to Convince Me That 2 + 2 = 3" },
          { name: "Infinite Certainty" },
          { name: "0 And 1 Are Not Probabilities" },
          { name: "Your Rationality Is My Business" },
        ]
      },

      {
        sequence: "F",
        label: "Politics and Rationality",
        chapters: [
          { name: "Politics is the Mind-Killer" },
          { name: "Policy Debates Should Not Appear One-Sided" },
          { name: "The Scales of Justice, the Notebook of Rationality" },
          { name: "Correspondence Bias" },
          { name: "Are Your Enemies Innately Evil?" },
          { name: "Reversed Stupidity Is Not Intelligence" },
          { name: "Argument Screens Off Authority" },
          { name: "Hug the Query" },
          { name: "Rationality and the English Language" },
          { name: "Human Evil and Muddled Thinking" },
        ]
      },

      {
        sequence: "G",
        label: "Against Rationalization",
        chapters: [
          { name: "Knowing About Biases Can Hurt People" },
          { name: "Update Yourself Incrementally" },
          { name: "One Argument Against An Army" },
          { name: "The Bottom Line" },
          { name: "What Evidence Filtered Evidence?" },
          { name: "Rationalization" },
          { name: "A Rational Argument" },
          { name: "Avoiding Your Belief's Real Weak Points" },
          { name: "Motivated Stopping and Motivating Continuation" },
          { name: "Fake Justification" },
          { name: "Is That Your True Rejection?" },
          { name: "Entangled Truths, Contagious Lies" },
          { name: "Of Lies and Black Swan Blowups" },
          { name: "Dark Side Epistemology" },
        ]
      },

      {
        sequence: "H",
        label: "Against Doublethink",
        chapters: [
          { name: "Singlethink" },
          { name: "Doublethink (Choosing to be Biased)" },
          { name: "No, Really, I've Deceived Myself" },
          { name: "Belief in Self-Deception" },
          { name: "Moore's Paradox" },
          { name: "Don't Believe You'll Self-Deceive" },
        ]
      },

      {
        sequence: "I",
        label: "Seeing with Fresh Eyes",
        chapters: [
          { name: "Anchoring and Adjustment" },
          { name: "Priming and Contamination" },
          { name: "Do We Believe Everything We're Told?" },
          { name: "Cached Thoughts" },
          { name: "The \"Outside the Box\" Box" },
          { name: "Original Seeing" },
          { name: "Stranger than History" },
          { name: "The Logical Fallacy of Generalization from Fictional Evidence" },
          { name: "The Virtue of Narrowness" },
          { name: "How to Seem (and Be) Deep" },
          { name: "We Change Our Minds Less Often Than We Think" },
          { name: "Hold Off On Proposing Solutions" },
          { name: "The Genetic Fallacy" },
        ]
      },

      {
        sequence: "J",
        label: "Death Spirals",
        chapters: [
          { name: "The Affect Heuristic" },
          { name: "Evaluability (and Cheap Holiday Shopping)" },
          { name: "Unbounded Scales, Huge Jury Awards, and Futurism" },
          { name: "The Halo Effect" },
          { name: "Superhero Bias" },
          { name: "Mere Messiahs" },
          { name: "Affective Death Spirals" },
          { name: "Resist the Happy Death Spiral" },
          { name: "Uncritical Supercriticality" },
          { name: "Evaporative Cooling of Group Beliefs" },
          { name: "When None Dare Urge Restraint" },
          { name: "The Robbers Cave Experiment" },
          { name: "Every Cause Wants to Be a Cult" },
          { name: "Guardians of the Truth" },
          { name: "Guardians of the Gene Pool" },
          { name: "Guardians of Ayn Rand" },
          { name: "Two Cult Koans" },
          { name: "Asch's Conformity Experiment" },
          { name: "On Expressing Your Concerns" },
          { name: "Lonely Dissent" },
          { name: "Cultish Countercultishness" },
        ]
      },

      {
        sequence: "K",
        label: "Letting Go",
        chapters: [
          { name: "The Importance of Saying \"Oops\"" },
          { name: "The Crackpot Offer" },
          { name: "Just Lose Hope Already" },
          { name: "The Proper Use of Doubt" },
          { name: "You Can Face Reality" },
          { name: "The Meditation on Curiosity" },
          { name: "No One Can Exempt You From Rationality's Laws" },
          { name: "Leave a Line of Retreat" },
          { name: "Crisis of Faith" },
          { name: "The Ritual" },
        ]
      }

    ]} />



    <SequenceHeader title="Overly Convenient Excuses" letter="E" />

    <TheProperUseOfHumility />
    <TheThirdAlternative />
    <LotteriesAWasteOfHope />
    <NewImprovedLottery />
    <ButTheresStillAChanceRight />
    <TheFallacyOfGray />
    <AbsoluteAuthority />
    <HowToConvinceMeThat2Plus2Equals3 />
    <InfiniteCertainty />
    <ZeroAndOneAreNotProbabilities />
    <YourRationalityIsMyBusiness />

    <SequenceHeader title="Politics and Rationality" letter="F" />

    <PoliticsIsTheMindKiller />
    <PolicyDebatesShouldNotAppearOneSided />
    <TheScalesOfJusticeTheNotebookOfRationality />
    <CorrespondenceBias />
    <AreYourEnemiesInnatelyEvil />
    <ReversedStupidityIsNotIntelligence />
    <ArgumentScreensOffAuthority />
    <HugTheQuery />
    <RationalityAndTheEnglishLanguage />
    <HumanEvilAndMuddledThinking />

    <SequenceHeader title="Against Rationalization" letter="G" />

    <KnowingAboutBiasesCanHurtPeople />
    <UpdateYourselfIncrementally />
    <OneArgumentAgainstAnArmy />
    <TheBottomLine />
    <WhatEvidenceFilteredEvidence />
    <Rationalization />
    <ARationalArgument />
    <AvoidingYourBeliefsRealWeakPoints />
    <MotivatedStoppingAndMotivatingContinuation />
    <FakeJustification />
    <IsThatYourTrueRejection />
    <EntangledTruthsContagiousLies />
    <OfLiesAndBlackSwanBlowups />
    <DarkSideEpistemology />

    <SequenceHeader title="Against Doublethink" letter="H" />

    <Singlethink />
    <DoublethinkChoosingToBeBiased />
    <NoReallyIveDeceivedMyself />
    <BeliefInSelfDeception />
    <MooresParadox />
    <DontBelieveYoullSelfDeceive />

    <SequenceHeader title="Seeing With Fresh Eyes" letter="I" />

    <AnchoringAndAdjustment />
    <PrimingAndContamination />
    <DoWeBelieveEverythingWereTold />
    <CachedThoughts />
    <TheOutsideTheBoxBox />
    <OriginalSeeing />
    <StrangerThanHistory />
    <TheLogicalFallacyOfGeneralizationFromFictionalEvidence />
    <TheVirtueOfNarrowness />
    <HowToSeemAndBeDeep />
    <WeChangeOurMindsLessOftenThanWeThink />
    <HoldOffOnProposingSolutions />
    <TheGeneticFallacy />

    <SequenceHeader title="Death Spirals" letter="J" />

    <TheAffectHeuristic />
    <EvaluabilityAndCheapHolidayShopping />
    <UnboundedScalesHugeJuryAwardsAndFuturism />
    <TheHaloEffect />
    <SuperheroBias />
    <MereMessiahs />
    <AffectiveDeathSpirals />
    <ResistTheHappyDeathSpiral />
    <UncriticalSupercriticality />
    <EvaporativeCoolingOfGroupBeliefs />
    <WhenNoneDareUrgeRestraint />
    <TheRobbersCaveExperiment />
    <EveryCauseWantsToBeACult />
    <GuardiansOfTheTruth />
    <GuardiansOfTheGenePool />
    <GuardiansOfAynRand />
    <TwoCultKoans />
    <AschsConformityExperiment />
    <OnExpressingYourConcerns />
    <LonelyDissent />
    <CultishCountercultishness />

    <SequenceHeader title="Letting Go" letter="K" />

    <TheImportanceOfSayingOops />
    <TheCrackpotOffer />
    <JustLoseHopeAlready />
    <TheProperUseOfDoubt />
    <YouCanFaceReality />
    <TheMeditationOnCuriosity />
    <NoOneCanExemptYouFromRationalitysLaws />
    <LeaveALineOfRetreat />
    <CrisisOfFaith />
    <TheRitual />


  </>
}
