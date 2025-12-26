import React, { Fragment } from "react";
import dynamic from "next/dynamic";
const SubscriptionPlansList = dynamic(
   () => import("./Components/SubscriptionPlansList")
);

export default function SubscriptionPlans() {
   return <SubscriptionPlansList />;
}
