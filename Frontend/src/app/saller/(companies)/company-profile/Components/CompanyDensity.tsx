"use client";
import React from "react";
import dynamic from "next/dynamic";
const CompanyDensityChart = dynamic(() => import("./CompanyDensityChart"));

export default function CompanyDensity() {
   return (
      <div className="5xl:col-span-7 col-span-12 6lg:mb-0 mb-7">
         <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card pt-5 pb-2 px-0">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold px-7">
               Company Density
            </div>
            <div className=" overflow-x-auto overflow-y-hidden">
               <CompanyDensityChart />
            </div>
         </div>
      </div>
   );
}
