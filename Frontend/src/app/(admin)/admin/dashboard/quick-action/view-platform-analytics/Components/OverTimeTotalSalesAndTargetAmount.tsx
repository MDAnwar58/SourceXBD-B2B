"use client";
import { MoneySvgIcon } from "@admin/components/SvgIcons";
import React, { Fragment } from "react";

type Props = {
   salesData: any[];
   salesItemsData: any[];
};

export default function OverTimeTotalSalesAndTargetAmount({
   salesData,
   salesItemsData,
}: Props) {
   const totalSalesMoney = salesData.reduce((sum, item) => sum + item.y, 0);
   const salesItems = salesItemsData.reduce((sum, item) => sum + item.y, 0);

   return (
      <div className=" pt-5 px-9">
         <div
            className="text-left font-['Raleway-Medium',_sans-serif] text-base font-medium"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Sales Over Time
         </div>
         <div className="flex items-center gap-x-9 py-3">
            <div className=" border-l-2 border-gray-500 pt-1 pb-[.10rem] ps-2 3xs:mb-0 mb-3">
               <div className="flex items-center gap-x-2">
                  <div className="bg-[#98b0ee] text-white rounded w-5 h-5 flex justify-center items-center">
                     <div className="w-3 h-3 ">
                        <MoneySvgIcon />
                     </div>
                  </div>
                  <div className="text-[#f44242] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal relative">
                     {totalSalesMoney}
                  </div>
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal uppercase relative">
                  total Sales
               </div>
            </div>
            <div className=" border-l-2 border-gray-500 pt-1 pb-[.10rem] ps-2">
               <div className="flex items-center gap-x-2">
                  {/* <div className="bg-[#98b0ee] text-white rounded w-5 h-5 flex justify-center items-center">
                     <div className="w-3 h-3 ">
                        <MoneySvgIcon />
                     </div>
                  </div> */}
                  <div className="text-[#65e300] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal relative">
                     {salesItems}
                  </div>
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal uppercase relative">
                  total sales items
               </div>
            </div>
         </div>
      </div>
   );
}
