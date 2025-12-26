"use client";
import Card from "@/app/buyer/components/buyer-card";
import PageHeader from "@/app/buyer/components/PageHeader";
import {
   AttachLinkSvgIcon,
   RightArrowSvgIcon,
   TermsAndConditionSvgIcon,
} from "@/app/buyer/components/SvgIcons";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import React, { Fragment } from "react";
import TermsAndConditionForm from "./TermsAndConditionForm";

const icon = (
   <span className="w-6 h-6">
      <TermsAndConditionSvgIcon />
   </span>
);

export default function TermsAndConditionContent() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Terms & Condition" searchBox={false} />

         <Card>
            <span
               className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Create your customized quation for A Grade Green Tender Coconut
            </span>
            <div className="w-full h-[1px] bg-[#98B0EE] mt-1"></div>

            <TermsAndConditionForm />
         </Card>
      </Fragment>
   );
}
