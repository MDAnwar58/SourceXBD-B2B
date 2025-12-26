"use client";
import React, { Fragment, useEffect } from "react";
import PageHeader from "@/saller/components/PageHeader";
import { CompaniesUpSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const UpdateContactDetailsContent = dynamic(
   () => import("./Components/UpdateContactDetailsContent")
);

const icon = (
   <span className="w-6 h-6">
      <CompaniesUpSvgIcon />
   </span>
);

export default function UpdateContactDetails() {
   const router = useRouter();
   useEffect(() => {
      router.back();
   }, [router]);
   return (
      <Fragment>
         <PageHeader icon={icon} title="Company" searchBox={false} />
         <UpdateContactDetailsContent />
      </Fragment>
   );
}
