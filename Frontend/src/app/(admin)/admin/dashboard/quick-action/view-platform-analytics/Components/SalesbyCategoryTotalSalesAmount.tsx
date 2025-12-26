"use client";
import React from "react";
import { MoneySvgIcon } from "@admin/components/SvgIcons";

export default function SalesbyCategoryTotalSalesAmount() {
   return (
      <div className="p-5">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold w-[150px]"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Sales by Category
         </div>
         <div className=" border-l-2 border-blue-700 pt-0 pb-[.10rem] ps-2 my-4">
            <div className="flex items-center gap-x-2">
               <div className="bg-[#98b0ee] text-white rounded w-5 h-5 flex justify-center items-center">
                  <div className="w-3 h-3 ">
                     <MoneySvgIcon />
                  </div>
               </div>
               <div className="text-[#98b0ee] text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal">
                  3500000
               </div>
            </div>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold uppercase">
               total Sales
            </div>
         </div>
      </div>
   );
}
