"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TitlePage from "@/components/TitlePage/TitlePage";

// Fake Preferences chapters
import NotForTheSakeOfHappinessAlone from "./chapters/fakePreferences/NotForTheSakeOfHappinessAlone";
import FakeSelfishness from "./chapters/fakePreferences/FakeSelfishness";
import FakeMorality from "./chapters/fakePreferences/FakeMorality";
import FakeUtilityFunctions from "./chapters/fakePreferences/FakeUtilityFunctions";
import DetachedLeverFallacy from "./chapters/fakePreferences/DetachedLeverFallacy";
import DreamsOfAIDesign from "./chapters/fakePreferences/DreamsOfAIDesign";
import TheDesignSpaceOfMindsInGeneral from "./chapters/fakePreferences/TheDesignSpaceOfMindsInGeneral";

// Value Theory chapters
import WhereRecursiveJustificationHitsBottom from "./chapters/valueTheory/WhereRecursiveJustificationHitsBottom";
import MyKindOfReflection from "./chapters/valueTheory/MyKindOfReflection";
import NoUniversallyCompellingArguments from "./chapters/valueTheory/NoUniversallyCompellingArguments";
import CreatedAlreadyInMotion from "./chapters/valueTheory/CreatedAlreadyInMotion";
import SortingPebblesIntoCorrectHeaps from "./chapters/valueTheory/SortingPebblesIntoCorrectHeaps";
import TwoPlaceAndOnePlaceWords from "./chapters/valueTheory/TwoPlaceAndOnePlaceWords";
import WhatWouldYouDoWithoutMorality from "./chapters/valueTheory/WhatWouldYouDoWithoutMorality";
import ChangingYourMetaethics from "./chapters/valueTheory/ChangingYourMetaethics";
import CouldAnythingBeRight from "./chapters/valueTheory/CouldAnythingBeRight";
import MoralityAsFixedComputation from "./chapters/valueTheory/MoralityAsFixedComputation";
import MagicalCategories from "./chapters/valueTheory/MagicalCategories";
import TheTruePrisonersDilemma from "./chapters/valueTheory/TheTruePrisonersDilemma";
import SympatheticMinds from "./chapters/valueTheory/SympatheticMinds";
import HighChallenge from "./chapters/valueTheory/HighChallenge";
import SeriousStories from "./chapters/valueTheory/SeriousStories";
import ValueIsFragile from "./chapters/valueTheory/ValueIsFragile";
import TheGiftWeGiveToTomorrow from "./chapters/valueTheory/TheGiftWeGiveToTomorrow";

// Quantified Humanism chapters
import ScopeInsensitivity from "./chapters/quantifiedHumanism/ScopeInsensitivity";
import OneLifeAgainstTheWorld from "./chapters/quantifiedHumanism/OneLifeAgainstTheWorld";
import TheAllaisParadox from "./chapters/quantifiedHumanism/TheAllaisParadox";
import ZutAllais from "./chapters/quantifiedHumanism/ZutAllais";
import FeelingMoral from "./chapters/quantifiedHumanism/FeelingMoral";
import TheIntuitionsBehindUtilitarianism from "./chapters/quantifiedHumanism/TheIntuitionsBehindUtilitarianism";
import EndsDontJustifyMeansAmongHumans from "./chapters/quantifiedHumanism/EndsDontJustifyMeansAmongHumans";
import EthicalInjunctions from "./chapters/quantifiedHumanism/EthicalInjunctions";
import SomethingToProtect from "./chapters/quantifiedHumanism/SomethingToProtect";
import WhenNotToUseProbabilities from "./chapters/quantifiedHumanism/WhenNotToUseProbabilities";
import NewcombsProblemAndRegretOfRationality from "./chapters/quantifiedHumanism/NewcombsProblemAndRegretOfRationality";

// Interlude
import TheTwelveVirtuesOfRationality from "./chapters/interlude/TheTwelveVirtuesOfRationality";
import TableOfContents from "@/components/TableOfContents/TableOfContents";

export default function Home() {

  return <>

    <TitlePage volume="5" name="Mere Goodness" />

    <TableOfContents items={[
      {
        sequence: "U",
        label: "Fake Preferences",
        chapters: [
          { name: "Not for the Sake of Happiness (Alone)" },
          { name: "Fake Selfishness" },
          { name: "Fake Morality" },
          { name: "Fake Utility Functions" },
          { name: "Detached Lever Fallacy" },
          { name: "Dreams of AI Design" },
          { name: "The Design Space of Minds-in-General" },
        ]
      },
      {
        sequence: "V",
        label: "Value Theory",
        chapters: [
          { name: "Where Recursive Justification Hits Bottom" },
          { name: "My Kind of Reflection" },
          { name: "No Universally Compelling Arguments" },
          { name: "Created Already in Motion" },
          { name: "Sorting Pebbles into Correct Heaps" },
          { name: "2-Place and 1-Place Words" },
          { name: "What Would You Do Without Morality?" },
          { name: "Changing Your Metaethics" },
          { name: "Could Anything Be Right?" },
          { name: "Morality as Fixed Computation" },
          { name: "Magical Categories" },
          { name: "The True Prisoner's Dilemma" },
          { name: "Sympathetic Minds" },
          { name: "High Challenge" },
          { name: "Serious Stories" },
          { name: "Value is Fragile" },
          { name: "The Gift We Give to Tomorrow" },
        ]
      },
      {
        sequence: "W",
        label: "Quantified Humanism",
        chapters: [
          { name: "Scope Insensitivity" },
          { name: "One Life Against the World" },
          { name: "The Allais Paradox" },
          { name: "Zut Allais!" },
          { name: "Feeling Moral" },
          { name: "The \"Intuitions\" Behind \"Utilitarianism\"" },
          { name: "Ends Don't Justify Means (Among Humans)" },
          { name: "Ethical Injunctions" },
          { name: "Something to Protect" },
          { name: "When (Not) to Use Probabilities" },
          { name: "Newcomb's Problem and Regret of Rationality" },
        ]
      },
      {
        sequence: "",
        label: "Interlude",
        chapters: [
          { name: "The Twelve Virtues of Rationality" },
        ]
      }
    ]} />


    <SequenceHeader title="Fake Preferences" letter="U" />
    <NotForTheSakeOfHappinessAlone />
    <FakeSelfishness />
    <FakeMorality />
    <FakeUtilityFunctions />
    <DetachedLeverFallacy />
    <DreamsOfAIDesign />
    <TheDesignSpaceOfMindsInGeneral />

    <SequenceHeader title="Value Theory" letter="V" />
    <WhereRecursiveJustificationHitsBottom />
    <MyKindOfReflection />
    <NoUniversallyCompellingArguments />
    <CreatedAlreadyInMotion />
    <SortingPebblesIntoCorrectHeaps />
    <TwoPlaceAndOnePlaceWords />
    <WhatWouldYouDoWithoutMorality />
    <ChangingYourMetaethics />
    <CouldAnythingBeRight />
    <MoralityAsFixedComputation />
    <MagicalCategories />
    <TheTruePrisonersDilemma />
    <SympatheticMinds />
    <HighChallenge />
    <SeriousStories />
    <ValueIsFragile />
    <TheGiftWeGiveToTomorrow />

    <SequenceHeader title="Quantified Humanism" letter="W" />
    <ScopeInsensitivity />
    <OneLifeAgainstTheWorld />
    <TheAllaisParadox />
    <ZutAllais />
    <FeelingMoral />
    <TheIntuitionsBehindUtilitarianism />
    <EndsDontJustifyMeansAmongHumans />
    <EthicalInjunctions />
    <SomethingToProtect />
    <WhenNotToUseProbabilities />
    <NewcombsProblemAndRegretOfRationality />

    <SequenceHeader title="Interlude" letter="" />
    <TheTwelveVirtuesOfRationality />

  </>
}