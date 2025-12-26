import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SubscriptionHistoryContent = dynamic(
   () => import("./Components/SubscriptionHistoryContent")
);

export const metadata: Metadata = {
   title: "Subscription Plan Histories",
   description: "Subscription Plan Popularities",
};

export default function SubscriptionPlanPopularity() {
   return <SubscriptionHistoryContent />;
}
