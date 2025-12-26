import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const FAQContent = dynamic(() => import("./Components/FAQContent"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "FAQs",
   description: "FAQs",
};

export default function FAQs() {
   return <FAQContent />;
}
