import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SubscriptionsHistoryContent = dynamic(
   () => import("./Components/SubscriptionsHistoryContent")
);

export const metadata: Metadata = {
   title: "Subscriptions History",
   description: "Subscriptions Histories",
};

export default function TransactionHistory() {
   return <SubscriptionsHistoryContent />;
}
