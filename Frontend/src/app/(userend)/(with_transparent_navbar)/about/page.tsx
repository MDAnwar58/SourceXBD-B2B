import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const AboutHeroSection = dynamic(() => import("./Components/AboutHeroSection"));
const OurStorySection = dynamic(() => import("./Components/OurStorySection"));
const OurMissionAndVisionSection = dynamic(
   () => import("./Components/OurMissionAndVisionSection")
);
const MeetOurForceSection = dynamic(
   () => import("./Components/MeetOurForceSection")
);

export const metadata: Metadata = {
   title: "About",
};

export default function About() {
   return (
      <Fragment>
         <AboutHeroSection />
         <OurStorySection />
         <OurMissionAndVisionSection />
         <MeetOurForceSection />
      </Fragment>
   );
}
