"use client";
import { RightArrowSvgIcon } from "@/buyer/components/SvgIcons";
import React, { Fragment } from "react";
import { BuyerState } from "@/app/buyer/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const RecentOrder = dynamic(() => import("./RecentOrder"));

type Order = {
   created_at: string;
   id: number;
   transaction_id: string;
};

export default function RecentOrders() {
   const { orders = [] } = useSelector(
      (state: BuyerState) => state.buyer.viewSellerProfile
   );
   const Orders: Order[] = orders;

   return (
      <div className="bg-[#ffffff] rounded-[14px] shadow-admin-card relative h-[525px]">
         <div className="bg-white border-b border-gray-300 rounded-t-[14px] xs6:flex justify-between items-center px-5 h-[10%] sticky top-0">
            <div className="text-[#2f2f2f] xs6:text-left text-center font-['Raleway-Bold',_sans-serif] text-xs font-bold xs6:pt-0 pt-3">
               Recent Orders
            </div>

            <a
               href=""
               className="flex items-center xs6:justify-start justify-center gap-x-1 text-[#4285f4] xs6:w-auto w-[5.3rem] xs6:mx-0 mx-auto xs6:mt-0 mt-[.05rem]"
            >
               <div className=" text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                  See all updates
               </div>
               <div className="w-2.5 h-2.5">
                  <RightArrowSvgIcon />
               </div>
            </a>
         </div>
         <div className="h-[85%] overflow-y-auto">
            <div className="px-5 pt-4 ">
               {Orders?.length > 0
                  ? Orders.map((order, i: number) => (
                       <Fragment key={i + 1}>
                          <RecentOrder order={order} i={i} />
                       </Fragment>
                    ))
                  : null}
            </div>
         </div>
      </div>
   );
}
