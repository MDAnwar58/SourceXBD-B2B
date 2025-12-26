"use client";
import React, { Fragment } from "react";
import TrustPointers from "./Components/TrustPointers";
import PageHeader from "@admin/components/PageHeader";
import { CompaniesSvgIcon } from "@admin/components/SvgIcons";

const icon = (
   <span className="w-6 h-6">
      <CompaniesSvgIcon />
   </span>
);

export default function CompanyTrustPoint() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Company Details" searchBox={false} />
         <TrustPointers />
      </Fragment>
   );
}
