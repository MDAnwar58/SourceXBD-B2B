import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ReviewMessagesContent = dynamic(
   () => import("./Components/ReviewMessagesContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "Review New Messages",
   description: "Review Messages",
};

export default function ReviewMessages() {
   return <ReviewMessagesContent />;
}
