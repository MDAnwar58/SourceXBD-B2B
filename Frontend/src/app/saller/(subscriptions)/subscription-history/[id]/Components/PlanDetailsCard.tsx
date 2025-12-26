"use client";
import { formatDate } from "@/components/react/date";
import React from "react";

type Props = {
   Package: string;
   amount: number;
   endDate: string;
};

export default function PlanDetailsCard({ Package, amount, endDate }: Props) {
   const end_date = formatDate(endDate);
   return (
      <div className="rounded-md lg:col-span-2 ">
         <div
            className="bg-[#ffffff] rounded-[20px] h-[264px] py-4 px-6"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <h3 className="text-[#2f2f2f]  text-left font-['Raleway-Medium',_sans-serif] text-base font-medium ">
               Plan Details
            </h3>
            <p className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal py-1">
               Your current plan
            </p>
            <div className="flex gap-2 pt-3 pb-2">
               <span
                  className=" capitalize rounded-md px-[1.35rem] h-[22px] text-[#ffffff] flex items-center justify-center font-['Raleway-Medium',_sans-serif] text-[8px] font-medium"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  }}
               >
                  {Package}
               </span>
               {/* <div className="rounded-md w-[71px] bg-[#f5f5f5] h-[22px] text-[#3f3f3f] flex items-center justify-center font-['Raleway-Medium',_sans-serif] text-[8px] font-medium">
                  change
               </div> */}
            </div>
            <div className="bg-[rgba(152,176,238,0.05)]  rounded-[14px] h-36 ">
               <p className="text-[#515151] px-4 py-3 text-left font-['Arial-Regular',_sans-serif] text-[11px] leading-[14px] font-normal ">
                  {Package === "for a lifetime"
                     ? "This plan is for a lifetime. You will not be charged for renewal."
                     : `Your plan will be automatically renewed on ${end_date}. It will you be changed as one of TK250(annual/Tk 160)`}
               </p>
            </div>
         </div>
         <button className="bg-[#98b0ee] mt-4 mb-3 rounded-[14px] h-[47px] w-full text-[#ffffff] flex items-center justify-center font-['Raleway-Medium',_sans-serif] text-sm font-medium ">
            Cancel my subscribtions
         </button>
      </div>
   );
}
