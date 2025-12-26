import React from "react";
import dynamic from "next/dynamic";
const ApprovalNewCompanyContent = dynamic(
   () => import("./Components/ApprovalNewCompanyContent"),
   {
      ssr: false,
   }
);

export const metadata = {
   title: "Approve New Companies",
};

export default function ApproveCompanies() {
   return <ApprovalNewCompanyContent />;
}
