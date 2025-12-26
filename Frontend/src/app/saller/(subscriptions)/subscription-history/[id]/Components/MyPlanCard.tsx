"use client";
import { formatDate, useDateWithMonthFormat } from "@/components/react/date";
import React from "react";

type SubscriptionPlan = {
   amount: number;
   duration: number | null;
   is_free: boolean | number;
   name: string;
   package: string;
   product_limit: number;
};

type Props = {
   subscription: SubscriptionPlan;
   activeProduct: number;
   startDate: string;
   endDate: string;
};

export default function MyPlanCard({
   subscription,
   activeProduct,
   startDate,
   endDate,
}: Props) {
   const productLimit =
      subscription?.product_limit !== undefined
         ? subscription?.product_limit
         : 0;

   const start_date = formatDate(startDate);
   const end_date = formatDate(endDate);

   return (
      <div
         className="bg-[rgba(152,176,238,0.05)] lg:col-span-1  rounded-[14px] drop-shadow-sm"
         style={{ backdropFilter: "blur(23.3px)" }}
      >
         <div className=" border-b-[1.5px] border-[#bababa] flex justify-between items-center p-4">
            <h2 className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-sm font-semibold">
               My Plan
            </h2>
            <div
               className="bg-[#34a853] rounded-lg w-[63px] h-5 flex justify-center items-center gap-[.2rem] ms-auto"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                  Active
               </div>
               <div className="bg-[#90ff38] rounded-[50%] w-2 h-2 relative" />
            </div>
         </div>
         <div className="p-4">
            <div className="py-2">
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium ">
                  My Plan
               </p>
               <h4 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                  {subscription?.name}
               </h4>
            </div>
            {subscription?.is_free !== 1 && (
               <div className="py-2">
                  <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium ">
                     Current Period
                  </p>
                  <h4 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {start_date} to {end_date}
                  </h4>
               </div>
            )}
            <div className="py-2">
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium ">
                  {subscription?.is_free === 1
                     ? "Pricing"
                     : "Pricing per month"}
               </p>
               <h4 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                  {subscription?.is_free === 1
                     ? "Is Free"
                     : `TK${subscription?.amount}`}
               </h4>
            </div>
            {subscription?.is_free !== 1 && (
               <div className="py-2">
                  <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium ">
                     Your next renewal date
                  </p>
                  <h4 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {end_date}
                  </h4>
               </div>
            )}
            <div className="py-2">
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium ">
                  Available credite
               </p>
               {productLimit >= 0 && activeProduct >= 0 && (
                  <h4 className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {productLimit - activeProduct}
                  </h4>
               )}
            </div>
         </div>
      </div>
   );
}
