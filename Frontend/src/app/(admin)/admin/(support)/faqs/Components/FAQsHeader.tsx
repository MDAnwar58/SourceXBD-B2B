import React from "react";
import {
   DashboardQucikActionSearchSvgIcon,
   FilterSvgIcon,
   SupportSvgIcon,
} from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/Input"));
const Button = dynamic(() => import("@/components/Button"));

export default function FAQsHeader() {
   return (
      <div className="bg-[rgba(255,255,255,0.70)] rounded-[20px]  py-[1.45rem] px-6 flex items-center justify-between gap-x-6 shadow-admin-card mb-7">
         <div className="flex items-center gap-x-6">
            <div className="bg-blue-200/60 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-[100%] w-[46px] h-[46px] flex items-center justify-center">
               <span className="w-6 h-6">
                  <SupportSvgIcon />
               </span>
            </div>
            <div className="text-[#2f2f2f] text-left font-['Lato-Bold',_sans-serif] text-xl font-bold relative">
               FAQs
            </div>
         </div>
         <div className=" flex gap-x-4">
            <div className=" relative">
               <Input
                  type="search"
                  className="bg-[#ffffff] text-[#2f2f2f] border-none font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-2xl w-[153px] h-10 ps-8"
                  placeholder="Search"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               />

               <div className="w-4 h-4 absolute top-[50%] left-2 transform-translate-y-middle">
                  <DashboardQucikActionSearchSvgIcon />
               </div>
            </div>
            <Button
               className="bg-[#98b0ee] rounded-2xl py-2 px-[0.73rem]"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(0, 0, 0, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="w-6 h-6">
                  <FilterSvgIcon />
               </div>
            </Button>
         </div>
      </div>
   );
}
