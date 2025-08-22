"use client";
import { Previewer } from "pagedjs";
import { React, useEffect, useRef } from "react";
import SequenceHeader from "@/components/SequenceHeader/SequenceHeader";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import TitlePage from "@/components/TitlePage/TitlePage";

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

    <TitlePage volume="2" name="How to Actually Change Your Mind" />

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


    <SequenceHeader title="Overly Convenient Excuses" letter="E" />





    <SequenceHeader title="Politics and Rationality" letter="F" />




    <SequenceHeader title="Against Rationalization" letter="G" />






    <SequenceHeader title="Against Doublethink" letter="H" />
    <SequenceHeader title="Seeing With Fresh Eyes" letter="H" />
    <SequenceHeader title="Death Spirals" letter="H" />
    <SequenceHeader title="Letting Go" letter="H" />


  </div>;
}
