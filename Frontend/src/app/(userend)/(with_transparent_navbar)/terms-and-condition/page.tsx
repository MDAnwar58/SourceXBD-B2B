import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const TermsAndConditionHeroSection = dynamic(
   () => import("./Components/TermsAndConditionHeroSection")
);
const TermsAndConditionTab = dynamic(
   () => import("./Components/TermsAndConditionTab")
);
const DefinedTerms = dynamic(() => import("./Components/DefinedTerms"));

export const metadata: Metadata = {
   title: "Terms & Condition",
};

export default function TermsAndCondition() {
   return (
      <Fragment>
         <TermsAndConditionHeroSection />
         <div className="container">
            <TermsAndConditionTab />
            <DefinedTerms />
         </div>
      </Fragment>
   );
}
