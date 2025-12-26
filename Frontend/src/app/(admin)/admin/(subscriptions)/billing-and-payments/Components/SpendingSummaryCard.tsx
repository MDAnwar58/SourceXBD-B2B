import AdminCard from "@admin/components/card";
import React from "react";
import SpendingSummaryChart from "./SpendingSummaryChart";

export default function SpendingSummaryCard() {
   return (
      <AdminCard>
         <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium relative">
            Spending Summary
         </div>

         <SpendingSummaryChart />

         <div className="pt-3">
            <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
               Total spend
            </div>
            <div className=" xs:flex justify-between items-center">
               <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-xl font-bold relative">
                  TK 245000
               </div>
               <div className="flex items-center gap-x-2">
                  <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-md w-[61px] h-[23px] flex items-center justify-center">
                     Sells
                  </div>
                  <div className="bg-[#4285f4] text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium rounded-md w-[61px] h-[23px] flex justify-center items-center">
                     Payment
                  </div>
                  <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium rounded-md w-[61px] h-[23px] flex justify-center items-center">
                     Others
                  </div>
               </div>
            </div>
         </div>
      </AdminCard>
   );
}
