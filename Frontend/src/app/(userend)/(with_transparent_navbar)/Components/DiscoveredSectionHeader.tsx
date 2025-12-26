"use client";
import React from "react";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";

export default function DiscoveredSectionHeader() {
   return (
      <div className="flex justify-between pt-12 items-center">
         <div
            className="text-left font-['Raleway-ExtraBold',_sans-serif] text-3xl font-extrabold relative"
            style={{
               background:
                  "linear-gradient(90deg,rgba(38, 77, 142, 1) 8.43498408794403%,rgba(66, 133, 244, 1) 77.47161388397217%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Discover Our Textile &amp; Garments Machinerys
         </div>
         <a href="" className="lg:block hidden">
            <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
               <span className=" capitalize">view more</span>
               <span className="w-6 h-6">
                  <SvgViewMoreArrowIcon />
               </span>
            </span>
         </a>
      </div>
   );
}
