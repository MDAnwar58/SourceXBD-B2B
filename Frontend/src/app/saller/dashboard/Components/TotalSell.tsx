"use client";
import React from "react";
import { DashboardOverviewGridUsersSvgIcon } from "@/saller/components/SvgIcons";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

export default function TotalSell() {
   const { sells, sell_parcent = {} } = useSelector(
      (state: SallerState) => state.saller.dashboard
   );
   return (
      <div className="bg-[#ffffff] rounded-2xl w-full py-6 px-6 shadow-admin-card flex items-center">
         <div className="w-[72px] h-[72px] relative">
            <Img
               src="/assets/images/overview-gird-image.png"
               alt="overview grid image"
               width={150}
               height={150}
               className=" -z-10 w-full h-full"
            />

            <span className=" absolute top-[50%] left-[50%] z-10 transform-translate-middle">
               <DashboardOverviewGridUsersSvgIcon
                  width={32}
                  height={32}
                  color="white"
               />
            </span>
         </div>
         <div className="ps-4">
            <div
               // text-[#c91e1e] red
               className="text-[#1ec94c] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]"
            >
               {sell_parcent?.currentMonthPercentage >
               sell_parcent?.lastMonthPercentage
                  ? "+"
                  : "-"}
               {sell_parcent?.currentMonthPercentage}%{/* -14.56% */}
            </div>

            <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
               {sells} BDT
            </div>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
               Total Sell
            </div>
         </div>
      </div>
   );
}
