"use client";
import Card from "@/app/buyer/components/buyer-card";
import PageHeader from "@/app/buyer/components/PageHeader";
import {
   AttachLinkSvgIcon,
   RightArrowSvgIcon,
   TermsAndConditionSvgIcon,
   VerifyDetailsSvgIcon,
} from "@/app/buyer/components/SvgIcons";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import React, { Fragment } from "react";
import OrderHistoryVerifyDetailsContext from "@/buyer/order-history/verify-details/features/OrderHistoryVerifyDetailsContext";
import Button from "@/components/Button";

const icon = (
   <span className="w-6 h-6">
      <VerifyDetailsSvgIcon />
   </span>
);

export default function VerifyDetailsContent() {
   const { primary_email, alternate_email, address, generateQuotation } =
      OrderHistoryVerifyDetailsContext();
   return (
      <Fragment>
         <PageHeader icon={icon} title="Verify Details" searchBox={false} />

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

            <div className="flex flex-row gap-5 mt-3">
               <div className="w-full">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-1">
                     Primary Email
                  </div>
                  <Input
                     className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                     inputRef={primary_email}
                  />
               </div>
               <div className="w-full">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
                     Alternate Email
                  </div>
                  <Input
                     className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                     inputRef={alternate_email}
                  />
               </div>
            </div>

            <div className=" mt-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-[.1rem]">
                  Phone Number
               </div>

               <div className="flex flex-row gap-5">
                  <div className="w-full">
                     <div className="flex flex-row items-center gap-x-2 pt-1 pb-[.35rem]">
                        <Input
                           type="checkbox"
                           className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                        />

                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal">
                           Primary
                        </div>
                     </div>
                     <Input
                        className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                        style={{
                           boxShadow:
                              "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                        }}
                     />
                  </div>
                  <div className="w-full">
                     <div className="flex flex-row items-center gap-x-2 pt-1 pb-[.35rem]">
                        <Input
                           type="checkbox"
                           className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                        />

                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal relative">
                           Alternate
                        </div>
                     </div>
                     <Input
                        className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                        style={{
                           boxShadow:
                              "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                        }}
                     />
                  </div>
                  <div className="w-full">
                     <div className="flex flex-row items-center gap-x-2 pt-1 pb-[.35rem]">
                        <Input
                           type="checkbox"
                           className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                        />

                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal relative">
                           PNS
                        </div>
                     </div>
                     <Input
                        className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                        style={{
                           boxShadow:
                              "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                        }}
                     />
                  </div>
               </div>
            </div>

            <div className="w-full mt-3">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-1">
                  Address
               </div>
               <Input
                  className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={address}
               />
            </div>

            <div className="flex flex-row justify-end items-center pt-9">
               <div className="flex flex-row gap-2">
                  <div className="bg-[#f0f0f0] text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[67px] h-[26px] flex justify-center items-center">
                     Back
                  </div>

                  <Button
                     type="button"
                     className="text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[132px] h-[26px] flex justify-center items-center gap-x-1"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                     }}
                     onClick={generateQuotation}
                  >
                     <div>Generate Quotation</div>
                     <div className="w-3 h-3">
                        <RightArrowSvgIcon />
                     </div>
                  </Button>
               </div>
            </div>
         </Card>
      </Fragment>
   );
}
