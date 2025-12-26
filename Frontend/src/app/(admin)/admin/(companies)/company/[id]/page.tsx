import React, { Fragment } from "react";
import { CompaniesSvgIcon } from "@admin/components/SvgIcons";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const CompanyDetailsContent = dynamic(
   () => import("./Components/CompanyDetailsContent"),
   { ssr: false }
);

export const metadata: Metadata = {
   title: "Companies",
   description: "Companies",
};

const icon = (
   <span className="w-6 h-6">
      <CompaniesSvgIcon />
   </span>
);

type Props = {
   params: {
      id: number;
   };
};

export default function CompanyDetails({ params }: Props) {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Company Details" searchBox={false} />
         <CompanyDetailsContent params={params} />
      </Fragment>
   );
}
