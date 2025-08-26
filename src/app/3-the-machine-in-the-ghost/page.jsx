"use client";
import { React } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import TitlePage from "@/components/TitlePage/TitlePage";

// The Simple Math of Evolution
import ThePowerOfIntelligence from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/ThePowerOfIntelligence";
import AnAlienGod from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/AnAlienGod";
import TheWonderOfEvolution from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/TheWonderOfEvolution";
import EvolutionsAreStupid from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/EvolutionsAreStupid";
import NoEvolutionsForCorporationsOrNanodevices from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/NoEvolutionsForCorporationsOrNanodevices";
import EvolvingToExtinction from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/EvolvingToExtinction";
import TheTragedyOfGroupSelectionism from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/TheTragedyOfGroupSelectionism";
import FakeOptimizationCriteria from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/FakeOptimizationCriteria";
import AdaptationExecutersNotFitnessMaximizers from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/AdaptationExecutersNotFitnessMaximizers";
import EvolutionaryPsychology from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/EvolutionaryPsychology";
import AnEspeciallyElegantEvolutionaryPsychologyExperiment from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/AnEspeciallyElegantEvolutionaryPsychologyExperiment";
import SuperstimuliAndTheCollapseOfWesternCivilization from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/SuperstimuliAndTheCollapseOfWesternCivilization";
import ThouArtGodshatter from "@/app/3-the-machine-in-the-ghost/chapters/theSimpleMathOfEvolution/ThouArtGodshatter";

// Fragile Purposes
import BeliefInIntelligence from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/BeliefInIntelligence";
import HumansInFunnySuits from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/HumansInFunnySuits";
import OptimizationAndTheIntelligenceExplosion from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/OptimizationAndTheIntelligenceExplosion";
import GhostsInTheMachine from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/GhostsInTheMachine";
import ArtificialAddition from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/ArtificialAddition";
import TerminalValuesAndInstrumentalValues from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/TerminalValuesAndInstrumentalValues";
import LeakyGeneralizations from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/LeakyGeneralizations";
import TheHiddenComplexityOfWishes from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/TheHiddenComplexityOfWishes";
import AnthropomorphicOptimism from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/AnthropomorphicOptimism";
import LostPurposes from "@/app/3-the-machine-in-the-ghost/chapters/fragilePurposes/LostPurposes";

// A Human's Guide to Words
import TheParableOfTheDagger from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TheParableOfTheDagger";
import TheParableOfHemlock from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TheParableOfHemlock";
import WordsAsHiddenInferences from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/WordsAsHiddenInferences";
import ExtensionsAndIntensions from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/ExtensionsAndIntensions";
import SimilarityClusters from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/SimilarityClusters";
import TypicalityAndAsymmetricalSimilarity from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TypicalityAndAsymmetricalSimilarity";
import TheClusterStructureOfThingspace from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TheClusterStructureOfThingspace";
import DisguisedQueries from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/DisguisedQueries";
import NeuralCategories from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/NeuralCategories";
import HowAnAlgorithmFeelsFromInside from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/HowAnAlgorithmFeelsFromInside";
import DisputingDefinitions from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/DisputingDefinitions";
import FeelTheMeaning from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/FeelTheMeaning";
import TheArgumentFromCommonUsage from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TheArgumentFromCommonUsage";
import EmptyLabels from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/EmptyLabels";
import TabooYourWords from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/TabooYourWords";
import ReplaceTheSymbolWithTheSubstance from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/ReplaceTheSymbolWithTheSubstance";
import FallaciesOfCompression from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/FallaciesOfCompression";
import CategorizingHasConsequences from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/CategorizingHasConsequences";
import SneakingInConnotations from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/SneakingInConnotations";
import ArguingByDefinition from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/ArguingByDefinition";
import WhereToDrawTheBoundary from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/WhereToDrawTheBoundary";
import EntropyAndShortCodes from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/EntropyAndShortCodes";
import MutualInformationAndDensityInThingspace from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/MutualInformationAndDensityInThingspace";
import SuperexponentialConceptspaceAndSimpleWords from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/SuperexponentialConceptspaceAndSimpleWords";
import ConditionalIndependenceAndNaiveBayes from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/ConditionalIndependenceAndNaiveBayes";
import WordsAsMentalPaintbrushHandles from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/WordsAsMentalPaintbrushHandles";
import VariableQuestionFallacies from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/VariableQuestionFallacies";
import ThirtySevenWaysThatWordsCanBeWrong from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/ThirtySevenWaysThatWordsCanBeWrong";
import AnIntuitiveExplanationOfBayessTheorem from "@/app/3-the-machine-in-the-ghost/chapters/aHumansGuideToWords/AnIntuitiveExplanationOfBayessTheorem";

export default function Home() {

  return <>
    {/* 
    <TitlePage volume="3" name="The Machine in the Ghost" />

    <TableOfContents items={[
      {
        sequence: "L",
        label: "The Simple Math of Evolution",
        chapters: [
          { name: "The Power of Intelligence" },
          { name: "An Alien God" },
          { name: "The Wonder of Evolution" },
          { name: "Evolutions Are Stupid (But Work Anyway)" },
          { name: "No Evolutions for Corporations or Nanodevices" },
          { name: "Evolving to Extinction" },
          { name: "The Tragedy of Group Selectionism" },
          { name: "Fake Optimization Criteria" },
          { name: "Adaptation-Executers, Not Fitness-Maximizers" },
          { name: "Evolutionary Psychology" },
          { name: "An Especially Elegant Evolutionary Psychology Experiment" },
          { name: "Superstimuli and the Collapse of Western Civilization" },
          { name: "Thou Art Godshatter" },
        ]
      },

      {
        sequence: "M",
        label: "Fragile Purposes",
        chapters: [
          { name: "Belief in Intelligence" },
          { name: "Humans in Funny Suits" },
          { name: "Optimization and the Intelligence Explosion" },
          { name: "Ghosts in the Machine" },
          { name: "Artificial Addition" },
          { name: "Terminal Values and Instrumental Values" },
          { name: "Leaky Generalizations" },
          { name: "The Hidden Complexity of Wishes" },
          { name: "Anthropomorphic Optimism" },
          { name: "Lost Purposes" },
        ]
      },

      {
        sequence: "N",
        label: "A Human's Guide to Words",
        chapters: [
          { name: "The Parable of the Dagger" },
          { name: "The Parable of Hemlock" },
          { name: "Words as Hidden Inferences" },
          { name: "Extensions and Intensions" },
          { name: "Similarity Clusters" },
          { name: "Typicality and Asymmetrical Similarity" },
          { name: "The Cluster Structure of Thingspace" },
          { name: "Disguised Queries" },
          { name: "Neural Categories" },
          { name: "How An Algorithm Feels From Inside" },
          { name: "Disputing Definitions" },
          { name: "Feel the Meaning" },
          { name: "The Argument from Common Usage" },
          { name: "Empty Labels" },
          { name: "Taboo Your Words" },
          { name: "Replace the Symbol with the Substance" },
          { name: "Fallacies of Compression" },
          { name: "Categorizing Has Consequences" },
          { name: "Sneaking in Connotations" },
          { name: "Arguing \"By Definition\"" },
          { name: "Where to Draw the Boundary?" },
          { name: "Entropy, and Short Codes" },
          { name: "Mutual Information, and Density in Thingspace" },
          { name: "Superexponential Conceptspace, and Simple Words" },
          { name: "Conditional Independence, and Naive Bayes" },
          { name: "Words as Mental Paintbrush Handles" },
          { name: "Variable Question Fallacies" },
          { name: "37 Ways That Words Can Be Wrong" },
          { name: "An Intuitive Explanation of Bayes's Theorem" },
        ]
      }

    ]} /> */}



    {/* <SequenceHeader title="The Simple Math of Evolution" letter="L" /> */}

    {/* <ThePowerOfIntelligence /> */}
    {/* <AnAlienGod /> */}
    {/* <TheWonderOfEvolution /> */}
    {/* <EvolutionsAreStupid /> */}
    {/* <NoEvolutionsForCorporationsOrNanodevices /> */}
    {/* <EvolvingToExtinction /> */}
    {/* <TheTragedyOfGroupSelectionism /> */}
    {/* <FakeOptimizationCriteria /> */}
    {/* <AdaptationExecutersNotFitnessMaximizers /> */}
    {/* <EvolutionaryPsychology /> */}
    {/* <AnEspeciallyElegantEvolutionaryPsychologyExperiment /> */}
    {/* <SuperstimuliAndTheCollapseOfWesternCivilization /> */}
    {/* <ThouArtGodshatter /> */}

    {/* <SequenceHeader title="Fragile Purposes" letter="M" /> */}

    {/* <BeliefInIntelligence /> */}
    {/* <HumansInFunnySuits /> */}
    {/* <OptimizationAndTheIntelligenceExplosion /> */}
    {/* <GhostsInTheMachine /> */}
    {/* <ArtificialAddition /> */}
    {/* <TerminalValuesAndInstrumentalValues /> */}
    {/* <LeakyGeneralizations /> */}
    {/* <TheHiddenComplexityOfWishes /> */}
    {/* <AnthropomorphicOptimism /> */}
    {/* <LostPurposes /> */}

    <SequenceHeader title="A Human's Guide to Words" letter="N" />

    <TheParableOfTheDagger />
    <TheParableOfHemlock />
    <WordsAsHiddenInferences />
    <ExtensionsAndIntensions />
    <SimilarityClusters />
    <TypicalityAndAsymmetricalSimilarity />
    <TheClusterStructureOfThingspace />
    <DisguisedQueries />
    <NeuralCategories />
    <HowAnAlgorithmFeelsFromInside />
    <DisputingDefinitions />
    <FeelTheMeaning />
    <TheArgumentFromCommonUsage />
    <EmptyLabels />
    <TabooYourWords />
    <ReplaceTheSymbolWithTheSubstance />
    <FallaciesOfCompression />
    <CategorizingHasConsequences />
    <SneakingInConnotations />
    <ArguingByDefinition />
    <WhereToDrawTheBoundary />
    <EntropyAndShortCodes />
    <MutualInformationAndDensityInThingspace />
    <SuperexponentialConceptspaceAndSimpleWords />
    <ConditionalIndependenceAndNaiveBayes />
    <WordsAsMentalPaintbrushHandles />
    <VariableQuestionFallacies />
    <ThirtySevenWaysThatWordsCanBeWrong />
    <AnIntuitiveExplanationOfBayessTheorem />


  </>
}
