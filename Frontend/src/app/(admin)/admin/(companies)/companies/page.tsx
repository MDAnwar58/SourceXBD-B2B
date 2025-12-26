import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const CompaniesContent = dynamic(
   () => import("./Components/CompaniesContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "Companies",
   description: "Companies",
};

export default function Companies() {
   return <CompaniesContent />;
}
