"use client";
import React, { useEffect, useState } from "react";
import { UpArrowNotBorderSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const TotalRevenueChart = dynamic(() => import("./TotalRevenueChart"));

export default function RevenueFromSubscriptionsCard() {
   const [months, setMonths] = useState<string[]>([]);
   const [revenue, setRevenue] = useState<number[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const { totalRevenueOnSubscription, revenue_chart_datas } = useSelector(
      (state: AdminState) => state.admin.subscription
   );

   useEffect(() => {
      if (revenue_chart_datas?.length > 0) {
         const months = revenue_chart_datas.map((data: any) => data.month);
         const revenues = revenue_chart_datas.map((data: any) =>
            Number(data.revenue)
         );
         setMonths(months);
         setRevenue(revenues);
         setIsLoading(false);
      } else {
         setIsLoading(true);
      }
   }, [revenue_chart_datas]);
   // console.log(revenue_chart_datas);

   return (
      <div className="1xl:col-span-4 col-span-12 3xs:mb-0 mb-7">
         <AdminCard>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative">
               Revenue from Subscriptions
            </div>
            <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[32px] font-normal relative">
               TK {totalRevenueOnSubscription}
            </div>
            <div className="flex gap-x-2">
               <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative w-[77px] h-[13px]">
                  Total Revenue
               </div>
               <div className="w-[13px] h-[13px] text-[#70ff3e]">
                  <UpArrowNotBorderSvgIcon />
               </div>
               <div className="text-[#70ff3e] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[26px] h-[11px]">
                  100%
               </div>
            </div>

            {/* Conditionally render the chart */}
            {isLoading ? (
               <div className="text-center text-gray-500 text-xl font-medium py-5">
                  Loading chart...
               </div>
            ) : (
               <TotalRevenueChart data={revenue} categories={months} />
            )}

            <div className="bg-[#efefef] text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-[8px] font-normal rounded w-[93px] h-[23px] flex justify-center items-center mt-3">
               Download Report
            </div>
         </AdminCard>
      </div>
   );
}
