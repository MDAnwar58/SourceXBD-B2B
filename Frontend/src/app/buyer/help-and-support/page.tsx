import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const HelpAndSupportContent = dynamic(
   () => import("./Components/HelpAndSupportContent")
);

export const metadata: Metadata = {
   title: "Help & Support",
};

export default function HelpAndSupport() {
   return <HelpAndSupportContent />;
}
