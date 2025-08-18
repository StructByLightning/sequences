"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import Availability from "@/app/1-map-and-territory/chapters/predictablyWrong/Availability";
import BurdensomeDetails from "@/app/1-map-and-territory/chapters/predictablyWrong/BurdensomeDetails";
import ExpectingShortInferentialDistances from "@/app/1-map-and-territory/chapters/predictablyWrong/ExpectingShortInferentialDistances";
import PredictablyWrong from "@/app/1-map-and-territory/chapters/predictablyWrong/FeelingRational";
import FeelingRational from "@/app/1-map-and-territory/chapters/predictablyWrong/FeelingRational";
import IllusionOfTransparency from "@/app/1-map-and-territory/chapters/predictablyWrong/IllusionOfTransparency";
import PlanningFallacy from "@/app/1-map-and-territory/chapters/predictablyWrong/PlanningFallacy";
import TheLensThatSeesItsOwnFlaws from "@/app/1-map-and-territory/chapters/predictablyWrong/TheLensThatSeesItsOwnFlaws";
import FakeBeliefs from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatDoIMeanByRationality";
import WhatDoIMeanByRationality from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatDoIMeanByRationality";
import MysteriousAnswers from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatsABias";
import WhatsABias from "@/app/1-map-and-territory/chapters/predictablyWrong/WhatsABias";
import NoticingConfusion from "@/app/1-map-and-territory/chapters/predictablyWrong/WhyTruth";
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
import css from "./page.module.scss";
import LesswrongSvg from "@/icons/lesswrong.svg"
import TableOfContents from "@/components/TableOfContents/TableOfContents";

export default function Home() {
  const contentRef = useRef(null);
  useEffect(() => {
    const loadPagedJS = async () => {
      try {
        if (contentRef.current) {
          //Remove any existing preview container first
          const existingPreview = document.getElementById("preview-container");
          if (existingPreview) {
            existingPreview.remove();
          }

          const paged = new Previewer();

          //Get the HTML content as a string
          const htmlContent = contentRef.current.innerHTML;

          //Create a container for the preview
          const previewContainer = document.createElement("div");
          previewContainer.id = "preview-container";
          document.body.appendChild(previewContainer);

          //Get all stylesheets - this is crucial for PagedJS to see your @page rules
          const stylesheets = [];
          for (let i = 0; i < document.styleSheets.length; i++) {
            const sheet = document.styleSheets[i];
            if (sheet.href) {
              stylesheets.push(sheet.href);
            }
          }

          console.log(stylesheets)

          //Preview the content with stylesheets
          await paged.preview(htmlContent, stylesheets, previewContainer).then((flow) => {
            //Hide the original content
            if (contentRef.current) {
              contentRef.current.style.display = "none";
            }
          });
        }
      } catch (error) {
        console.error("Failed to load PagedJS:", error);
      }
    };

    loadPagedJS();

    //Cleanup function to remove preview container
    return () => {
      const preview = document.getElementById("preview-container");
      if (preview) {
        preview.remove();
      }
      //Show original content again
      if (contentRef.current) {
        contentRef.current.style.display = "";
      }
    };
  }); //No dependency array - runs on every render

  return <div ref={contentRef}>
    <section className={`section ${css.titlePage}`}>
      <div className={css.inner}>
        <div className={css.sequences}>The Sequences</div>
        <div className={css.separator}>volume 1</div>
        <div className={css.subtitle}>Map and Territory</div>


        <div className={css.lesswrong}>
          <LesswrongSvg />
        </div>

        <div className={css.author}>Eliezer Yudkowsky</div>
      </div>
    </section>
    <TableOfContents items={[
      {
        sequence: "A",
        label: "Predictably Wrong",
        chapters: [
          { name: "What Do I Mean By Rationality?", page: "9" },
          { name: "Feeling Rational", page: "17" },
          { name: "Why Truth? And...", page: "21" },
          { name: "...What's a Bias, Again?", page: "25" },
          { name: "Availability", page: "29" },
          { name: "Burdensome Details", page: "33" },
          { name: "Planning Fallacy", page: "39" },
          { name: "Illusion of Transparency: Why No One Understands You", page: "45" },
          { name: "Expecting Short Inferential Distances", page: "49" },
          { name: "The Lens that Sees Its Own Flaws", page: "53" },
        ]
      },

      {
        sequence: "B",
        label: "Fake Beliefs",
        chapters: [
          { name: "Making Beliefs Pay Rent (in Anticipated Experiences)", page: "59" },
          { name: "A Fable of Science and Politics", page: "63" },
          { name: "Belief in Belief", page: "69" },
          { name: "Bayesian Judo", page: "75" },
          { name: "Pretending to be Wise", page: "77" },
          { name: "Religion's Claim to be Non-Disprovable", page: "83" },
          { name: "Professing and Cheering", page: "89" },
          { name: "Belief as Attire", page: "93" },
          { name: "Applause Lights", page: "95" },
        ]
      },

      {
        sequence: "C",
        label: "Noticing Confusion",
        chapters: [
          { name: "Focus Your Uncertainty", page: "101" },
          { name: "What Is Evidence", page: "105" },
          { name: "Scientific Evidence, Legal Evidence, Rational Evidence", page: "109" },
          { name: "How Much Evidence Does It Take?", page: "113" },
          { name: "Einstein's Arrogance", page: "117" },
          { name: "Occam's Razor", page: "121" },
          { name: "Your Strength as a Rationalist", page: "127" },
          { name: "Absence of Evidence Is Evidence of Absence", page: "131" },
          { name: "Conservation of Expected Evidence", page: "135" },
          { name: "Hindsight Devalues Science", page: "139" },
        ]
      },

      {
        sequence: "D",
        label: "Mysterious Answers",
        chapters: [
          { name: "Fake Explanations", page: "145" },
          { name: "Guessing the Teacher's Password", page: "149" },
          { name: "Science as Attire", page: "153" },
          { name: "Fake Causality", page: "157" },
          { name: "Semantic Stopsigns", page: "163" },
          { name: "Mysterious Answers to Mysterious Questions", page: "167" },
          { name: "The Futility of Emergence", page: "173" },
          { name: "Say Not “Complexity”", page: "177" },
          { name: "Positive Bias: Look Into the Dark", page: "181" },
          { name: "Lawful Uncertainty", page: "185" },
          { name: "My Wild and Reckless Youth", page: "191" },
          { name: "Failing to Learn From History", page: "195" },
          { name: "Making History Available", page: "197" },
          { name: "Explain/Worship/Ignore", page: "201" },
          { name: "“Science” as Curiosity-Stopper", page: "205" },
          { name: "Truly Part of You", page: "209" },
          { name: "The Simple Truth", page: "215" },
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
  </div>;
}
