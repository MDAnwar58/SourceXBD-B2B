import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const AccessControlEditContent = dynamic(
   () => import("./Components/AccessControlEditContent")
);

export const metadata: Metadata = {
   title: "Access Control Create",
   description: "Access Control Create",
};

type Props = {
   params: {
      id: string;
   };
};

export default function AccessControlEdit({ params }: Props) {
   return <AccessControlEditContent params={params} />;
}
