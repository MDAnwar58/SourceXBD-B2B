import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const AccessControlCreateContent = dynamic(
   () => import("./Components/AccessControlCreateContent")
);

export const metadata: Metadata = {
   title: "Access Control Create",
   description: "Access Control Create",
};

export default function AccessControlCreate() {
   return <AccessControlCreateContent />;
}
