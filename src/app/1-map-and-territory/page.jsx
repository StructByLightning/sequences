"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import Availability from "@/app/1-map-and-territory/chapters/predictablyWrong/Availability";
import BurdensomeDetails from "@/app/1-map-and-territory/chapters/predictablyWrong/BurdensomeDetails";
import ExpectingShortInferentialDistances from "@/app/1-map-and-territory/chapters/predictablyWrong/ExpectingShortInferentialDistances";
import FeelingRational from "@/app/1-map-and-territory/chapters/predictablyWrong/FeelingRational";
import IllusionOfTransparency from "@/app/1-map-and-territory/chapters/predictablyWrong/IllusionOfTransparency";
import PlanningFallacy from "@/app/1-map-and-territory/chapters/predictablyWrong/PlanningFallacy";
import TheLensThatSeesItsOwnFlaws from "@/app/1-map-and-territory/chapters/predictablyWrong/TheLensThatSeesItsOwnFlaws";
import WhatDoIMeanByRationality from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatDoIMeanByRationality";
import WhatsABias from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatsABias";
import WhyTruth from "@/app/1-map-and-territory/chapters/predictablyWrong/WhyTruth";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import AFableOfScienceAndPolitics from "@/app/1-map-and-territory/chapters/fakeBeliefs/AFableOfScienceAndPolitics";
import ApplauseLights from "@/app/1-map-and-territory/chapters/fakeBeliefs/ApplauseLights";
import BayesianJudo from "@/app/1-map-and-territory/chapters/fakeBeliefs/BayesianJudo";
import BeliefAsAttire from "@/app/1-map-and-territory/chapters/fakeBeliefs/BeliefAsAttire";
import BeliefInBelief from "@/app/1-map-and-territory/chapters/fakeBeliefs/BeliefInBelief";
import MakingBeliefsPayRent from "@/app/1-map-and-territory/chapters/fakeBeliefs/MakingBeliefsPayRent";
import PretendingToBeWise from "@/app/1-map-and-territory/chapters/fakeBeliefs/PretendingToBeWise";
import ProfessingAndCheering from "@/app/1-map-and-territory/chapters/fakeBeliefs/ProfessingAndCheering";
import ReligionsClaimToBeNonDisprovable from "@/app/1-map-and-territory/chapters/fakeBeliefs/ReligionsClaimToBeNonDisprovable";
import FocusYourUncertainty from "@/app/1-map-and-territory/chapters/noticingConfusion/FocusYourUncertainty";
import WhatIsEvidence from "@/app/1-map-and-territory/chapters/noticingConfusion/WhatIsEvidence";
import ScientificEvidenceLegalEvidenceRationalEvidence from "@/app/1-map-and-territory/chapters/noticingConfusion/ScientificEvidenceLegalEvidenceRationalEvidence";
import HowMuchEvidenceDoesItTake from "@/app/1-map-and-territory/chapters/noticingConfusion/HowMuchEvidenceDoesItTake";
import EinsteinsArrogance from "@/app/1-map-and-territory/chapters/noticingConfusion/EinsteinsArrogance";
import OccamsRazor from "@/app/1-map-and-territory/chapters/noticingConfusion/OccamsRazor";
import YourStrengthAsARationalist from "@/app/1-map-and-territory/chapters/noticingConfusion/YourStrengthAsARationalist";
import AbsenceOfEvidence from "@/app/1-map-and-territory/chapters/noticingConfusion/AbsenceOfEvidence";
import ConservationOfExpectedEvidence from "@/app/1-map-and-territory/chapters/noticingConfusion/ConservationOfExpectedEvidence";
import HindsightDevaluesScience from "@/app/1-map-and-territory/chapters/noticingConfusion/HindsightDevaluesScience";
import FakeExplanations from "@/app/1-map-and-territory/chapters/mysteriousAnswers/FakeExplanations";
import GuessingTheTeachersPassword from "@/app/1-map-and-territory/chapters/mysteriousAnswers/GuessingTheTeachersPassword";
import ScienceAsAttire from "@/app/1-map-and-territory/chapters/mysteriousAnswers/ScienceAsAttire";
import FakeCausality from "@/app/1-map-and-territory/chapters/mysteriousAnswers/FakeCausality";
import SemanticStopsigns from "@/app/1-map-and-territory/chapters/mysteriousAnswers/SemanticStopsigns";
import MysteriousAnswersToMysteriousQuestions from "@/app/1-map-and-territory/chapters/mysteriousAnswers/MysteriousAnswersToMysteriousQuestions";
import TheFutilityOfEmergence from "@/app/1-map-and-territory/chapters/mysteriousAnswers/TheFutilityOfEmergence";
import SayNotComplexity from "@/app/1-map-and-territory/chapters/mysteriousAnswers/SayNotComplexity";
import PositiveBiasLookIntoTheDark from "@/app/1-map-and-territory/chapters/mysteriousAnswers/PositiveBiasLookIntoTheDark";
import LawfulUncertainty from "@/app/1-map-and-territory/chapters/mysteriousAnswers/LawfulUncertainty";
import MyWildAndRecklessYouth from "@/app/1-map-and-territory/chapters/mysteriousAnswers/MyWildAndRecklessYouth";
import FailingToLearnFromHistory from "@/app/1-map-and-territory/chapters/mysteriousAnswers/FailingToLearnFromHistory";
import MakingHistoryAvailable from "@/app/1-map-and-territory/chapters/mysteriousAnswers/MakingHistoryAvailable";
import ExplainWorshipIgnore from "@/app/1-map-and-territory/chapters/mysteriousAnswers/ExplainWorshipIgnore";
import ScienceAsCuriosityStopper from "@/app/1-map-and-territory/chapters/mysteriousAnswers/ScienceAsCuriosityStopper";
import TrulyPartOfYou from "@/app/1-map-and-territory/chapters/mysteriousAnswers/TrulyPartOfYou";
import TheSimpleTruth from "@/app/1-map-and-territory/chapters/mysteriousAnswers/TheSimpleTruth";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import TitlePage from "@/components/TitlePage/TitlePage";

export default function Home() {
  return <>
    <TitlePage volume="1" name="Map and Territory" />

    <TableOfContents items={[
      {
        sequence: "A",
        label: "Predictably Wrong",
        chapters: [
          { name: "What Do I Mean By Rationality?" },
          { name: "Feeling Rational" },
          { name: "Why Truth? And..." },
          { name: "...What's a Bias, Again?" },
          { name: "Availability" },
          { name: "Burdensome Details" },
          { name: "Planning Fallacy" },
          { name: "Illusion of Transparency: Why No One Understands You" },
          { name: "Expecting Short Inferential Distances" },
          { name: "The Lens that Sees Its Own Flaws" },
        ]
      },

      {
        sequence: "B",
        label: "Fake Beliefs",
        chapters: [
          { name: "Making Beliefs Pay Rent (in Anticipated Experiences)" },
          { name: "A Fable of Science and Politics" },
          { name: "Belief in Belief" },
          { name: "Bayesian Judo" },
          { name: "Pretending to be Wise" },
          { name: "Religion's Claim to be Non-Disprovable" },
          { name: "Professing and Cheering" },
          { name: "Belief as Attire" },
          { name: "Applause Lights" },
        ]
      },

      {
        sequence: "C",
        label: "Noticing Confusion",
        chapters: [
          { name: "Focus Your Uncertainty" },
          { name: "What Is Evidence?" },
          { name: "Scientific Evidence, Legal Evidence, Rational Evidence" },
          { name: "How Much Evidence Does It Take?" },
          { name: "Einstein's Arrogance" },
          { name: "Occam's Razor" },
          { name: "Your Strength as a Rationalist" },
          { name: "Absence of Evidence Is Evidence of Absence" },
          { name: "Conservation of Expected Evidence" },
          { name: "Hindsight Devalues Science" },
        ]
      },

      {
        sequence: "D",
        label: "Mysterious Answers",
        chapters: [
          { name: "Fake Explanations" },
          { name: "Guessing the Teacher's Password" },
          { name: "Science as Attire" },
          { name: "Fake Causality" },
          { name: "Semantic Stopsigns" },
          { name: "Mysterious Answers to Mysterious Questions" },
          { name: "The Futility of Emergence" },
          { name: "Say Not “Complexity”" },
          { name: "Positive Bias: Look Into the Dark" },
          { name: "Lawful Uncertainty" },
          { name: "My Wild and Reckless Youth" },
          { name: "Failing to Learn from History" },
          { name: "Making History Available" },
          { name: "Explain/Worship/Ignore" },
          { name: "“Science” as Curiosity-Stopper" },
          { name: "Truly Part of You" },
          { name: "The Simple Truth" },
        ]
      }

    ]} />


    <SequenceHeader title="Predictably Wrong" letter="A" />


    <WhatDoIMeanByRationality />
    <FeelingRational />
    <WhyTruth />
    <WhatsABias />
    <Availability />
    <BurdensomeDetails />
    <PlanningFallacy />
    <IllusionOfTransparency />
    <ExpectingShortInferentialDistances />
    <TheLensThatSeesItsOwnFlaws />


    <SequenceHeader title="Fake Beliefs" letter="B" />

    <MakingBeliefsPayRent />
    <AFableOfScienceAndPolitics />
    <BeliefInBelief />
    <BayesianJudo />
    <PretendingToBeWise />
    <ReligionsClaimToBeNonDisprovable />
    <ProfessingAndCheering />
    <BeliefAsAttire />
    <ApplauseLights />



    <SequenceHeader title="Noticing Confusion" letter="C" />

    <FocusYourUncertainty />
    <WhatIsEvidence />
    <ScientificEvidenceLegalEvidenceRationalEvidence />
    <HowMuchEvidenceDoesItTake />
    <EinsteinsArrogance />
    <OccamsRazor />
    <YourStrengthAsARationalist />
    <AbsenceOfEvidence />
    <ConservationOfExpectedEvidence />
    <HindsightDevaluesScience />




    <SequenceHeader title="Mysterious Answers" letter="D" />

    <FakeExplanations />
    <GuessingTheTeachersPassword />
    <ScienceAsAttire />
    <FakeCausality />
    <SemanticStopsigns />
    <MysteriousAnswersToMysteriousQuestions />
    <TheFutilityOfEmergence />
    <SayNotComplexity />
    <PositiveBiasLookIntoTheDark />
    <LawfulUncertainty />
    <MyWildAndRecklessYouth />
    <FailingToLearnFromHistory />
    <MakingHistoryAvailable />
    <ExplainWorshipIgnore />
    <ScienceAsCuriosityStopper />
    <TrulyPartOfYou />
    <TheSimpleTruth />
  </>;
}
