import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ReviewContent = dynamic(() => import("./Components/ReviewContent"));

export const metadata: Metadata = {
   title: "Reviews",
   description: "Reviews",
};

export default function Reviews() {
   return <ReviewContent />;
}
