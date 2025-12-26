"use client";
import { BlueRightArrowSvgIcon, PenSvgIcon } from "@admin/components/SvgIcons";
import React from "react";

type Props = {
   trustPoint: number;
};

export default function TrustPoints({ trustPoint }: Props) {
   return (
      <div className="px-1">
         <div className="flex justify-between items-center pt-3">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold ">
               Trust Points
            </div>
            {/* <div className=" flex items-center">
               <div className="bg-[#ffffff] rounded w-[18px] h-[18px] shadow-admin-card flex justify-center items-center">
                  <div className="w-4 h-4">
                     <PenSvgIcon />
                  </div>
               </div>
            </div> */}
         </div>
         <div className="">
            <div className="flex items-center justify-between pt-3">
               <div className=" flex items-center gap-x-1 border-b border-blue-500">
                  <div className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold">
                     Settings
                  </div>
                  <div className="w-[10.98px] h-[10.98px]">
                     <BlueRightArrowSvgIcon />
                  </div>
               </div>
               <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                  {trustPoint}%
               </div>
            </div>
            <div
               className="bg-[#d2d2d2] rounded w-full h-[11px] mt-2"
               style={{ boxShadow: "1px 1px 5px 0px rgba(0, 0, 0, 0.2)" }}
            >
               <div
                  className="bg-[#4285f4] rounded h-[11px]"
                  style={{
                     width: `${trustPoint}%`,
                     boxShadow: "1px 1px 20px 0px rgba(0, 0, 0, 0.25)",
                  }}
               />
            </div>
         </div>
      </div>
   );
}
