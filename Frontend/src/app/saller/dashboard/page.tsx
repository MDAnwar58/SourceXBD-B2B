import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const SellerDashboardContent = dynamic(
   () => import("./Components/SellerDashboardContent")
);

export const metadata: Metadata = {
   title: "Dashboard",
   description: "Dashboard",
};

export default function Dashboard() {
   return <SellerDashboardContent />;
}
