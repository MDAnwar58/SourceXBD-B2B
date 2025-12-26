"use client";
import {
   AllProductsSvgIcon,
   BlueRightArrowSvgIcon,
   DownArrowNotBorderSvgIcon,
} from "@/saller/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
const AllProductsChart = dynamic(() => import("./AllProductsChart"), {
   ssr: false,
});

export default function AllProductsCard() {
   return (
      <div className="2xl:col-span-6 col-span-12  6lg:mb-0 mb-7">
         <div
            className="bg-[#ffffff] rounded-[20px] w-full p-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="flex justify-between items-center">
               <div className="xs5:flex items-center gap-x-2">
                  <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                     All Products
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     (Last 30 Days)
                  </div>
               </div>

               <div className="bg-[rgba(66,133,244,0.50)] text-white rounded-[50%] w-[42px] h-[42px] flex justify-center items-center">
                  <div className=" w-[22px] h-[22px]">
                     <AllProductsSvgIcon />
                  </div>
               </div>
            </div>

            <div className=" flex items-center xs:gap-x-9 xs3:gap-x-5 gap-x-3">
               <div className="text-[#f44242] text-left font-['Arial-Bold',_sans-serif] text-[32px] font-bold relative">
                  1,237
               </div>

               <div className="">
                  <AllProductsChart />
               </div>
            </div>

            <div className=" flex justify-between items-center pt-3">
               <div className="flex items-center gap-x-1">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     Total Page Views
                  </div>
                  <div className="flex items-center gap-x-1">
                     <div className="w-2 h-2 text-red-500">
                        <DownArrowNotBorderSvgIcon />
                     </div>
                     <div className="text-[#ff3e3e] text-left font-['Arial-Bold',_sans-serif] text-[8px] font-bold relative">
                        -25%
                     </div>
                  </div>
               </div>
               <div className=" flex items-center gap-x-[0.4rem] border-b border-blue-500">
                  <div className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-[8px] font-semibold">
                     View All
                  </div>

                  <div className="w-[10.98px] h-[10.98px]">
                     <BlueRightArrowSvgIcon />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
