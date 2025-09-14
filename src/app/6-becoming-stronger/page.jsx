"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TitlePage from "@/components/TitlePage/TitlePage";

// Yudkowsky's Coming of Age chapters
import MyChildhoodDeathSpiral from "./chapters/yudkowskysComingOfAge/MyChildhoodDeathSpiral";
import MyBestAndWorstMistake from "./chapters/yudkowskysComingOfAge/MyBestAndWorstMistake";
import RaisedInTechnophilia from "./chapters/yudkowskysComingOfAge/RaisedInTechnophilia";
import AProdigyOfRefutation from "./chapters/yudkowskysComingOfAge/AProdigyOfRefutation";
import TheSheerFollyOfCallowYouth from "./chapters/yudkowskysComingOfAge/TheSheerFollyOfCallowYouth";
import ThatTinyNoteOfDiscord from "./chapters/yudkowskysComingOfAge/ThatTinyNoteOfDiscord";
import FightingARearguardActionAgainstTheTruth from "./chapters/yudkowskysComingOfAge/FightingARearguardActionAgainstTheTruth";
import MyNaturalisticAwakening from "./chapters/yudkowskysComingOfAge/MyNaturalisticAwakening";
import TheLevelAboveMine from "./chapters/yudkowskysComingOfAge/TheLevelAboveMine";
import TheMagnitudeOfHisOwnFolly from "./chapters/yudkowskysComingOfAge/TheMagnitudeOfHisOwnFolly";
import BeyondTheReachOfGod from "./chapters/yudkowskysComingOfAge/BeyondTheReachOfGod";
import MyBayesianEnlightenment from "./chapters/yudkowskysComingOfAge/MyBayesianEnlightenment";

// Challenging the Difficult chapters
import TsuyokuNaritai from "./chapters/challengingTheDifficult/TsuyokuNaritai";
import TsuyokuVsTheEgalitarianInstinct from "./chapters/challengingTheDifficult/TsuyokuVsTheEgalitarianInstinct";
import TryingToTry from "./chapters/challengingTheDifficult/TryingToTry";
import UseTheTryHarderLuke from "./chapters/challengingTheDifficult/UseTheTryHarderLuke";
import OnDoingTheImpossible from "./chapters/challengingTheDifficult/OnDoingTheImpossible";
import MakeAnExtraordinaryEffort from "./chapters/challengingTheDifficult/MakeAnExtraordinaryEffort";
import ShutUpAndDoTheImpossible from "./chapters/challengingTheDifficult/ShutUpAndDoTheImpossible";
import FinalWords from "./chapters/challengingTheDifficult/FinalWords";

// The Craft and the Community chapters
import RaisingTheSanityWaterline from "./chapters/theCraftAndTheCommunity/RaisingTheSanityWaterline";
import ASenseThatMoreIsPossible from "./chapters/theCraftAndTheCommunity/ASenseThatMoreIsPossible";
import EpistemicViciousness from "./chapters/theCraftAndTheCommunity/EpistemicViciousness";
import SchoolsProliferatingWithoutEvidence from "./chapters/theCraftAndTheCommunity/SchoolsProliferatingWithoutEvidence";
import ThreeLevelsOfRationalityVerification from "./chapters/theCraftAndTheCommunity/ThreeLevelsOfRationalityVerification";
import WhyOurKindCantCooperate from "./chapters/theCraftAndTheCommunity/WhyOurKindCantCooperate";
import TolerateTolerance from "./chapters/theCraftAndTheCommunity/TolerateTolerance";
import YourPriceForJoining from "./chapters/theCraftAndTheCommunity/YourPriceForJoining";
import CanHumanismMatchReligionsOutput from "./chapters/theCraftAndTheCommunity/CanHumanismMatchReligionsOutput";
import ChurchVsTaskforce from "./chapters/theCraftAndTheCommunity/ChurchVsTaskforce";
import RationalityCommonInterestOfManyCauses from "./chapters/theCraftAndTheCommunity/RationalityCommonInterestOfManyCauses";
import HelplessIndividuals from "./chapters/theCraftAndTheCommunity/HelplessIndividuals";
import MoneyTheUnitOfCaring from "./chapters/theCraftAndTheCommunity/MoneyTheUnitOfCaring";
import PurchaseFuzziesAndUtilonsSeparately from "./chapters/theCraftAndTheCommunity/PurchaseFuzziesAndUtilonsSeparately";
import BystanderApathy from "./chapters/theCraftAndTheCommunity/BystanderApathy";
import CollectiveApathyAndTheInternet from "./chapters/theCraftAndTheCommunity/CollectiveApathyAndTheInternet";
import IncrementalProgressAndTheValley from "./chapters/theCraftAndTheCommunity/IncrementalProgressAndTheValley";
import BayesiansVsBarbarians from "./chapters/theCraftAndTheCommunity/BayesiansVsBarbarians";
import BewareOfOtherOptimizing from "./chapters/theCraftAndTheCommunity/BewareOfOtherOptimizing";
import PracticalAdviceBackedByDeepTheories from "./chapters/theCraftAndTheCommunity/PracticalAdviceBackedByDeepTheories";
import TheSinOfUnderconfidence from "./chapters/theCraftAndTheCommunity/TheSinOfUnderconfidence";
import GoForthAndCreateTheArt from "./chapters/theCraftAndTheCommunity/GoForthAndCreateTheArt";

import TableOfContents from "@/components/TableOfContents/TableOfContents";

export default function Home() {

  return <>

    <TitlePage volume="6" name="Becoming Stronger" />

    <TableOfContents items={[
      {
        sequence: "X",
        label: "Yudkowsky's Coming of Age",
        chapters: [
          { name: "My Childhood Death Spiral" },
          { name: "My Best and Worst Mistake" },
          { name: "Raised in Technophilia" },
          { name: "A Prodigy of Refutation" },
          { name: "The Sheer Folly of Callow Youth" },
          { name: "That Tiny Note of Discord" },
          { name: "Fighting a Rearguard Action Against the Truth" },
          { name: "My Naturalistic Awakening" },
          { name: "The Level Above Mine" },
          { name: "The Magnitude of His Own Folly" },
          { name: "Beyond the Reach of God" },
          { name: "My Bayesian Enlightenment" },
        ]
      },
      {
        sequence: "Y",
        label: "Challenging the Difficult",
        chapters: [
          { name: "Tsuyoku Naritai! (I Want to Become Stronger)" },
          { name: "Tsuyoku vs. the Egalitarian Instinct" },
          { name: "Trying to Try" },
          { name: "Use the Try Harder, Luke" },
          { name: "On Doing the Impossible" },
          { name: "Make an Extraordinary Effort" },
          { name: "Shut Up and Do the Impossible!" },
          { name: "Final Words" },
        ]
      },
      {
        sequence: "Z",
        label: "The Craft and the Community",
        chapters: [
          { name: "Raising the Sanity Waterline" },
          { name: "A Sense That More Is Possible" },
          { name: "Epistemic Viciousness" },
          { name: "Schools Proliferating Without Evidence" },
          { name: "Three Levels of Rationality Verification" },
          { name: "Why Our Kind Can't Cooperate" },
          { name: "Tolerate Tolerance" },
          { name: "Your Price for Joining" },
          { name: "Can Humanism Match Religion's Output?" },
          { name: "Church vs. Taskforce" },
          { name: "Rationality: Common Interest of Many Causes" },
          { name: "Helpless Individuals" },
          { name: "Money: The Unit of Caring" },
          { name: "Purchase Fuzzies and Utilons Separately" },
          { name: "Bystander Apathy" },
          { name: "Collective Apathy and the Internet" },
          { name: "Incremental Progress and the Valley" },
          { name: "Bayesians vs. Barbarians" },
          { name: "Beware of Other-Optimizing" },
          { name: "Practical Advice Backed by Deep Theories" },
          { name: "The Sin of Underconfidence" },
          { name: "Go Forth and Create the Art!" },
        ]
      }
    ]} />


    <SequenceHeader title="Yudkowsky's Coming of Age" letter="X" />
    <MyChildhoodDeathSpiral />
    <MyBestAndWorstMistake />
    <RaisedInTechnophilia />
    <AProdigyOfRefutation />
    <TheSheerFollyOfCallowYouth />
    <ThatTinyNoteOfDiscord />
    <FightingARearguardActionAgainstTheTruth />
    <MyNaturalisticAwakening />
    <TheLevelAboveMine />
    <TheMagnitudeOfHisOwnFolly />
    <BeyondTheReachOfGod />
    <MyBayesianEnlightenment />

    <SequenceHeader title="Challenging the Difficult" letter="Y" />
    <TsuyokuNaritai />
    <TsuyokuVsTheEgalitarianInstinct />
    <TryingToTry />
    <UseTheTryHarderLuke />
    <OnDoingTheImpossible />
    <MakeAnExtraordinaryEffort />
    <ShutUpAndDoTheImpossible />
    <FinalWords />

    <SequenceHeader title="The Craft and the Community" letter="Z" />
    <RaisingTheSanityWaterline />
    <ASenseThatMoreIsPossible />
    <EpistemicViciousness />
    <SchoolsProliferatingWithoutEvidence />
    <ThreeLevelsOfRationalityVerification />
    <WhyOurKindCantCooperate />
    <TolerateTolerance />
    <YourPriceForJoining />
    <CanHumanismMatchReligionsOutput />
    <ChurchVsTaskforce />
    <RationalityCommonInterestOfManyCauses />
    <HelplessIndividuals />
    <MoneyTheUnitOfCaring />
    <PurchaseFuzziesAndUtilonsSeparately />
    <BystanderApathy />
    <CollectiveApathyAndTheInternet />
    <IncrementalProgressAndTheValley />
    <BayesiansVsBarbarians />
    <BewareOfOtherOptimizing />
    <PracticalAdviceBackedByDeepTheories />
    <TheSinOfUnderconfidence />
    <GoForthAndCreateTheArt />

  </>
}
