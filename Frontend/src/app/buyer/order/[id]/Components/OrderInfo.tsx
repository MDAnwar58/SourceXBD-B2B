"use client";
import { useDateWithMonthFormatExtra } from "@/components/react/date";
import React from "react";

type OrderInfo = {
   created_at: string;
   delivery_status: string;
   payment_method: string;
   status: string;
};

type Props = {
   orderInfo: OrderInfo;
};

export default function OrderInfo({ orderInfo }: Props) {
   let date: string = "";
   if (orderInfo?.created_at !== "") {
      date = useDateWithMonthFormatExtra(orderInfo?.created_at);
   }
   return (
      <div className="bg-[#f0f0f0] rounded-[10px]  mt-4 ">
         <div className="flex justify-between p-3">
            <div>
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
                  Order Issue Date
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
                  Payment status
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
                  Payment method
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium relative">
                  Status
               </p>
            </div>
            <div>
               <p className="text-[#515151] text-right font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {date}
               </p>
               <p className="text-[#515151] text-right pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {orderInfo?.delivery_status}
               </p>
               <p className="text-[#515151] text-right pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {orderInfo?.payment_method}
               </p>
               <p className="text-[#515151] text-right pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {orderInfo?.status}
               </p>
            </div>
         </div>
      </div>
   );
}
