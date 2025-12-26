import React, { Fragment } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SubscriptionPlansList = dynamic(
   () => import("./Components/SubscriptionPlansList")
);

export const metadata: Metadata = {
   title: "Subscription Plans",
   description: "Subscription Plans",
};

export default function SubscriptionPlans() {
   return <SubscriptionPlansList />;
}
