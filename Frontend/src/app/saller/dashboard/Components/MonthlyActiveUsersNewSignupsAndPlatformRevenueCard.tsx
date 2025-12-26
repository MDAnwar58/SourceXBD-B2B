"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const MonthlyActiveUsersNewSignupsAndPlatformRevenue = dynamic(
   () => import("./MonthlyActiveUsersNewSignupsAndPlatformRevenue")
);

export default function MonthlyActiveUsersNewSignupsAndPlatformRevenueCard() {
   const [datas, setDatas] = useState<{ x: string; y: number }[]>([]);
   const [categories, setCategories] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   const { monthlySales = [] } = useSelector(
      (state: SallerState) => state.saller.dashboard
   );
   useEffect(() => {
      setIsLoading(true);
      if (monthlySales?.length > 0) {
         const data = monthlySales.map((data: any) => ({
            x: data?.month, // Take the first 3 letters of the month
            y: Number(data?.total_sales), // Use the corresponding value
         }));
         const months = monthlySales.map((data: any) => data?.month);
         setCategories(months);
         setDatas(data);
         setIsLoading(false);
      }
   }, [monthlySales]);

   return (
      <AdminCard className="!bg-[#ffffff] !p-0 2xl:!pt-5 !pt-3 2xl:!pe-5 !pe-3">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold mb-2 ps-5">
            Monthly Sells
         </div>
         <div>
            {isLoading ? (
               <div className="text-center text-gray-500 text-xl font-medium py-5">
                  Loading chart...
               </div>
            ) : (
               <MonthlyActiveUsersNewSignupsAndPlatformRevenue
                  data={datas}
                  categories={categories}
               />
            )}
         </div>
      </AdminCard>
   );
}
