import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const OrganisationPageContent = dynamic(
   () => import("./Components/OrganisationPageContent")
);

export const metadata: Metadata = {
   title: "Organisation",
};

type Props = {
   params: {
      id: string;
   };
};

export default function Organisation({ params }: Props) {
   return <OrganisationPageContent params={params} />;
}
