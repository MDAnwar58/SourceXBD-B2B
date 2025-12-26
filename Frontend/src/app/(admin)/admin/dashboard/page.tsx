"use client";
import React, { Fragment } from "react";
import { DashboardOverviewSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const DashboardContent = dynamic(
   () => import("./Components/DashboardContent"),
   {
      ssr: false,
   }
);
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});

const icon = (
   <span className="w-6 h-6">
      <DashboardOverviewSvgIcon />
   </span>
);

export default function Dashboard() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Overview" searchBox={false} />

         <DashboardContent />
      </Fragment>
   );
}
