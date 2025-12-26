import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SupportsContent = dynamic(() => import("./Components/SupportsContent"));

export const metadata: Metadata = {
   title: "Supports",
   description: "Supports",
};

export default function Supports() {
   return <SupportsContent />;
}
