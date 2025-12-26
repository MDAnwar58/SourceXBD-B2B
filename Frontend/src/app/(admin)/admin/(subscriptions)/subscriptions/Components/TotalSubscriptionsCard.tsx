"use client";
import React, { useEffect, useState } from "react";
import { UpArrowNotBorderSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic.js";
const AdminCard = dynamic(() => import("@admin/components/card"));
const TotalSubscribersChart = dynamic(
   () => import("./TotalSubscribersChart.tsx")
);

type MonthlySubscribersData = {
   month: string;
   count: number;
};
type Data = {
   x: any;
   y: any;
};

export default function TotalSubscriptionsCard() {
   const [aYearMonthlySubscribers, setAYearMonthlySubscribers] = useState<
      Data[]
   >([]);
   const [months, setMonths] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const { totalSubscribersCount, monthly_subscribers_datas = [] } =
      useSelector((state: AdminState) => state.admin.subscription);

   useEffect(() => {
      if (monthly_subscribers_datas?.length > 0) {
         const aYearMonthlySubscribers = monthly_subscribers_datas.map(
            (data): Data => ({
               x: data.month,
               y: data.count,
            })
         );
         const months = monthly_subscribers_datas.map(
            (data: any) => data.month
         );
         setMonths(months);
         setAYearMonthlySubscribers(aYearMonthlySubscribers);
         setIsLoading(false);
      } else {
         setIsLoading(true);
      }
   }, [monthly_subscribers_datas]);

   return (
      <div className="1xl:col-span-8 col-span-12 3xs:mb-0 mb-7">
         <AdminCard className="!ps-1 !pb-2">
            <div className="ps-4">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
                  Total Subscribers
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[32px] font-normal pb-[.05rem] pt-1">
                  {totalSubscribersCount}
               </div>
               <div className="flex gap-x-1">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[93px] h-[13px]">
                     Total Subscribers
                  </div>
                  <div className="w-[11px] h-[11px] text-[#70ff3e]">
                     <UpArrowNotBorderSvgIcon />
                  </div>
                  <div className="text-[#70ff3e] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[26px] h-[11px]">
                     100%
                  </div>
               </div>
            </div>
            {isLoading ? (
               <div className="text-center text-gray-500 text-xl font-medium py-5">
                  Loading chart...
               </div>
            ) : (
               <TotalSubscribersChart
                  datas={aYearMonthlySubscribers}
                  months={months}
               />
            )}
         </AdminCard>
      </div>
   );
}
