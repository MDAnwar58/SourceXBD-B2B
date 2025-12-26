import React, { Fragment, useEffect } from "react";
import {
   CompaniesSvgIcon,
   DocumentSvgIcon,
} from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
import VerificationStatusAndUpdateContent from "./Components/VerificationStatusAndUpdateContent";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));

const icon = (
   <span className="w-6 h-6">
      <CompaniesSvgIcon />
   </span>
);

export default function VerificationStatusAndUpdates() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Company" searchBox={false} />

         <VerificationStatusAndUpdateContent />
      </Fragment>
   );
}
