"use client";
import Card from "@/app/buyer/components/buyer-card";
import PageHeader from "@/app/buyer/components/PageHeader";
import {
   CommaSvgIcon,
   GeneratePDFSvgIcon,
   RightArrowSvgIcon,
   VerifyDetailsSvgIcon,
} from "@/app/buyer/components/SvgIcons";
import Input from "@/components/Input";
import React, { Fragment } from "react";

const icon = (
   <span className="w-6 h-6">
      <GeneratePDFSvgIcon />
   </span>
);

export default function GeneratePDFContent() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Geneate PDF" searchBox={false} />

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

            <div className="w-full h-72 flex justify-center items-center ">
               <div>
                  <div className="w-24 h-24 text-[#B2B2B2] mx-auto">
                     <CommaSvgIcon />
                  </div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
                     View Your Quotation
                  </div>
               </div>
            </div>
            <div className="flex flex-row justify-end items-center">
               <div className="flex flex-row gap-2">
                  <div className="bg-[#f0f0f0] text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[67px] h-[26px] flex justify-center items-center">
                     Back
                  </div>

                  <div
                     className="text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[132px] h-[26px] flex justify-center items-center gap-x-1"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                  >
                     <div className="">Send Quotation</div>

                     <div className="w-3 h-3">
                        <RightArrowSvgIcon />
                     </div>
                  </div>
               </div>
            </div>
         </Card>
      </Fragment>
   );
}
