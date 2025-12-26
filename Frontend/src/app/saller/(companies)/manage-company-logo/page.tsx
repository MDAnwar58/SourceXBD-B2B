"use client";
import React, { Fragment, useEffect } from "react";
import { AllProductsSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const Img = dynamic(() => import("@/components/Image"));

const icon = (
   <span className="w-6 h-6">
      <AllProductsSvgIcon />
   </span>
);

export default function ProductCreate() {
   const router = useRouter();
   useEffect(() => {
      router.back();
   }, [router]);
   return (
      <Fragment>
         <PageHeader icon={icon} title="Company" searchBox={false} />

         <div
            className="bg-[#ffffff] rounded-[20px] p-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium pb-3">
               Company Logo
            </div>
            <div
               className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[177px] flex items-center justify-center"
               style={{
                  boxShadow:
                     "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
               }}
            >
               <div>
                  <Img
                     src="/assets/images/demo.png"
                     alt="Upload Logo"
                     width={300}
                     height={300}
                     className="w-[50px] h-[50px] overflow-visible mx-auto"
                  />
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal relative">
                     Set an Image
                  </div>
               </div>
            </div>

            <div className="flex xs4:flex-row flex-col justify-end gap-3 mt-7">
               <div className="bg-[#f5f5f5] rounded-[10px] 4xs:w-[212px] w-full h-[38px]  flex justify-center items-center">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                     Resize Logo
                  </div>
               </div>
               <div className="rounded-[10px] 4xs:w-[212px] w-full h-[38px] bg-blue-gradient flex justify-center items-center">
                  <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                     Save Logo
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
}
