"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const CompanyDensityChart = dynamic(() => import("./CompanyDensityChart"), {
   ssr: false,
});

export default function CompanyDensity() {
   const [data, setData] = useState<{ x: string; y: any }[]>([]);
   const [categories, setCategories] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const { monthlySales = [] } = useSelector(
      (state: AdminState) => state.admin.company
   );

   useEffect(() => {
      setIsLoading(true);
      if (monthlySales?.length > 0) {
         const transformedSales = monthlySales.map((sale) => ({
            x: sale.month, // Month name as 'x'
            y: parseFloat(sale.total_sales), // Sales amount as 'y', converting to number
         }));
         const categories = monthlySales.map((sale) => sale.month);
         setData(transformedSales);
         setCategories(categories);
         setIsLoading(false);
      }
   }, [monthlySales]);

   return (
      <div className="5xl:col-span-7 col-span-12 6lg:mb-0 mb-7">
         <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card pt-5 pb-2 px-0">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold px-7">
               Company Monthly Sales
            </div>
            <div className=" overflow-x-auto overflow-y-hidden">
               {isLoading ? (
                  <div className="text-center text-gray-500 text-xl font-medium py-5">
                     Loading chart...
                  </div>
               ) : (
                  <CompanyDensityChart data={data} categories={categories} />
               )}
            </div>
         </div>
      </div>
   );
}
