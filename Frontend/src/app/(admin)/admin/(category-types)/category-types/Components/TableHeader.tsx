"use client";
import React from "react";
import { PlusSvgIcon } from "@admin/components/SvgIcons";

export default function TableHeader() {
   return (
      <div className="xs:flex items-center justify-between pb-4">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
            Product List
         </div>
         <a href="">
            <div className="bg-[#e9e9e9] text-[#515151] rounded-lg w-[98px] h-7 flex items-center justify-center gap-x-2">
               <div className=" text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                  Add New
               </div>
               <div className="w-2.5 h-2.5">
                  <PlusSvgIcon />
               </div>
            </div>
         </a>
      </div>
   );
}
