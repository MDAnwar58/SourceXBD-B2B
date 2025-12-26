import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SupportContent = dynamic(() => import("./Components/SupportContent"));

export const metadata: Metadata = {
   title: "Support",
   description: "Support",
};

type Props = {
   params: {
      id: number;
   };
};

export default function Support({ params }: Props) {
   return <SupportContent params={params} />;
}
