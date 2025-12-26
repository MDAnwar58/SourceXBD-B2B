"use client";
import React, { useEffect, useState } from "react";
import {
   DashboardMessagesSvgIcon,
   DashboardTotalNewMessagesIncreaseSvgIcon,
} from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const TotalNewMessagesChart = dynamic(() => import("./TotalNewMessagesChart"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

type MonthlyData = {
   month: string;
   new_messages: number;
};

export default function TotalNewMessages() {
   const [months, setMonths] = useState<string[]>([]);
   const [newMessages, setNewMessages] = useState<number[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { a_year_monthly_messages, messages } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
         if (a_year_monthly_messages?.length > 0) {
            const months = a_year_monthly_messages.map((data: MonthlyData) => {
               return data.month;
            });
            setMonths(months);

            const messages = a_year_monthly_messages.map(
               (data: MonthlyData) => {
                  return Number(data.new_messages);
               }
            );
            setNewMessages(messages);
            setIsLoading(false);
         }
      }, 1500);
   }, [a_year_monthly_messages]);

   return (
      <div
         className=" rounded-2xl w-full h-full shadow-admin-card"
         style={{
            background:
               "linear-gradient(0.21deg,rgba(198, 241, 255, 0.6) 0%,rgba(152, 176, 238, 0.6) 100%)",
         }}
      >
         <div className="px-7 pt-5">
            <div className="flex items-center gap-3">
               <div className=" relative">
                  <Img
                     src="/assets/images/bg-message.png"
                     alt="total messages"
                     width={100}
                     height={100}
                     className="w-[50px] h-[50px]"
                  />
                  <div className="w-5 h-5 text-white absolute top-[50%] left-[50%] transform-translate-middle">
                     <DashboardMessagesSvgIcon />
                  </div>
               </div>
               <div>
                  <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
                     New Messages
                  </div>
                  <div className="text-[#f1f1f1] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                     July 20 - august 24
                  </div>
               </div>
            </div>
            <div className=" flex items-end justify-between pt-3">
               <div className="flex items-end gap-x-5">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[32px] font-bold h-10">
                     {messages}
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                     Total New Messages
                  </div>
               </div>
               <div className=" flex items-center gap-1">
                  <div className="w-2 h-[4.46px] text-[#42FF00]">
                     <DashboardTotalNewMessagesIncreaseSvgIcon />
                  </div>
                  <div className="text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[8px] font-bold">
                     100%
                  </div>
               </div>
            </div>
         </div>
         {isLoading ? (
            <div className="text-center text-gray-500 text-xl font-medium py-5">
               Loading chart...
            </div>
         ) : (
            <TotalNewMessagesChart months={months} newMessages={newMessages} />
         )}
      </div>
   );
}
