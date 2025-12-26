import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const PrivacyPolicyHeroSection = dynamic(
   () => import("./Components/PrivacyPolicyHeroSection")
);
const CollectionOfInformation = dynamic(
   () => import("./Components/CollectionOfInformation")
);
const OnlyText = dynamic(() => import("./Components/OnlyText"));
const PurposeAndUsageOfInformation = dynamic(
   () => import("./Components/PurposeAndUsageOfInformation")
);
const DisclosureOfInformation = dynamic(
   () => import("./Components/DisclosureOfInformation")
);
const ReasonableProtectionOfInformation = dynamic(
   () => import("./Components/ReasonableProtectionOfInformation")
);
const Questions = dynamic(() => import("./Components/Questions"));
const GrievanceOfficer = dynamic(() => import("./Components/GrievanceOfficer"));
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Privacy Policy",
};

export default function PrivacyPolicy() {
   return (
      <Fragment>
         <PrivacyPolicyHeroSection />
         <div className="container pt-16">
            <div className="lg:max-w-4xl max-w-full mx-auto">
               <OnlyText />
               <CollectionOfInformation />
               <PurposeAndUsageOfInformation />
               <DisclosureOfInformation />
               <ReasonableProtectionOfInformation />
               <Questions />
               <GrievanceOfficer />
            </div>
         </div>
      </Fragment>
   );
}
