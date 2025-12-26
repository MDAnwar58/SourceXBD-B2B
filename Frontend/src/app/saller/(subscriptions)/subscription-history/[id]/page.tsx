import { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
const SubscriptionsStatusContent = dynamic(
   () => import("./Components/SubscriptionsStatusContent")
);

export const metadata: Metadata = {
   title: "Subscriptions Status",
   description: "Subscriptions Status",
};

type Props = {
   params: { id: string };
};

export default function SubscriptionsStatus({ params }: Props) {
   return <SubscriptionsStatusContent params={params} />;
}
