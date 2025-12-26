import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const ViewPendingProductApprovalsContent = dynamic(
   () => import("./Components/ViewPendingProductApprovalsContent"),
   {
      ssr: false,
   }
);

export const metadata: Metadata = {
   title: "View Pending Product Approvals",
   description: "View Pending Product Approvals",
};

export default function PenddingProductApprovals() {
   return <ViewPendingProductApprovalsContent />;
}
