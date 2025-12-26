import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ViewPlatFormAnalyticsContent = dynamic(
   () => import("./Components/ViewPlatFormAnalyticsContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "View Platform Analytics",
   description: "View Platform Analytics",
};

export default function ViewPlatFormAnalytics() {
   return <ViewPlatFormAnalyticsContent />;
}
