import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const AccessControlContent = dynamic(
   () => import("./Components/AccessControlContent")
);

export const metadata: Metadata = {
   title: "Access Control",
   description: "Access Control",
};

export default function AccessControl() {
   return <AccessControlContent />;
}
