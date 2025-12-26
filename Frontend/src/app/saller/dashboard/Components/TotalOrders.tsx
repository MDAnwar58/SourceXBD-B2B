"use client";
import React from "react";
import { DashboardOverviewGridOrdersSvgIcon } from "@/saller/components/SvgIcons";
import { SallerState } from "@/saller/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

export default function TotalOrders() {
   const { orders, orders_parcent } = useSelector(
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
            <span className="text-white absolute top-[50%] left-[50%] z-10 transform-translate-middle">
               <DashboardOverviewGridOrdersSvgIcon width={32} height={32} />
            </span>
         </div>

         <div className="ps-4">
            <div
               className={`${
                  orders_parcent?.currentMonthPercentage >
                  orders_parcent?.lastMonthPercentage
                     ? "text-[#1ec94c]"
                     : "text-[#c91e1e]"
               } text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]`}
            >
               {orders_parcent?.currentMonthPercentage >
               orders_parcent?.lastMonthPercentage
                  ? "+"
                  : "-"}
               {orders_parcent?.currentMonthPercentage}%
            </div>
            <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
               {orders}
            </div>
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
               Total Orders
            </div>
         </div>
      </div>
   );
}
