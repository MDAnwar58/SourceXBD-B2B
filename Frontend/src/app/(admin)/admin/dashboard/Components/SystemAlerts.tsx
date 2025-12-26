"use client";
import React from "react";
import {
   CheckSvgIcon,
   CrosSvgIcon,
   WarningAlertTriangleSvgIcon,
} from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});

export default function SystemAlerts() {
   return (
      <AdminCard className="!bg-[#ffffff] !pt-3 !pb-3 !px-4">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold">
            System Alerts
         </div>

         <div className="pt-2">
            <div className="bg-[rgba(255,68,68,0.11)] rounded-[10px] border-solid border-[#ff4444] border w-full py-[0.65rem] px-3 flex items-center justify-between mb-3">
               <div className="flex items-center">
                  <div className="bg-[rgba(255,68,68,0.58)] rounded-full w-[26px] h-[26px] flex justify-center items-center">
                     <div className="w-4 h-4 text-white">
                        <WarningAlertTriangleSvgIcon />
                     </div>
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal ps-4">
                     Lorem Ipsum Dolor sit amit
                  </div>
               </div>
               <div className="bg-[rgba(255,255,255,0.51)] rounded-[50%] w-4 h-4 flex justify-center items-center cursor-pointer">
                  <div className="w-[0.55rem] h-[0.55rem]">
                     <CrosSvgIcon />
                  </div>
               </div>
            </div>
            <div className="bg-[rgba(20,255,0,0.11)] rounded-[10px] border-solid border-[#14ff00] border w-full py-[0.65rem] px-3 flex items-center justify-between mb-3">
               <div className="flex items-center">
                  <div className="bg-[rgba(20,255,0,0.58)] rounded-full w-[26px] h-[26px] flex justify-center items-center">
                     <div className="w-4 h-4 flex justify-center items-center rounded-full border border-white">
                        <div className="w-2 h-2 text-white">
                           <CheckSvgIcon />
                        </div>
                     </div>
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal ps-4">
                     Lorem Ipsum Dolor sit amit
                  </div>
               </div>
               <div className="bg-[rgba(255,255,255,0.51)] rounded-[50%] w-4 h-4 flex justify-center items-center cursor-pointer">
                  <div className="w-[0.55rem] h-[0.55rem]">
                     <CrosSvgIcon />
                  </div>
               </div>
            </div>
            <div className="bg-[rgba(255,68,68,0.11)] rounded-[10px] border-solid border-[#ff4444] border w-full py-[0.65rem] px-3 flex items-center justify-between mb-3">
               <div className="flex items-center">
                  <div className="bg-[rgba(255,68,68,0.58)] rounded-full w-[26px] h-[26px] flex justify-center items-center">
                     <div className="w-4 h-4 text-white">
                        <WarningAlertTriangleSvgIcon />
                     </div>
                  </div>
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal ps-4">
                     Lorem Ipsum Dolor sit amit
                  </div>
               </div>
               <div className="bg-[rgba(255,255,255,0.51)] rounded-[50%] w-4 h-4 flex justify-center items-center cursor-pointer">
                  <div className="w-[0.55rem] h-[0.55rem]">
                     <CrosSvgIcon />
                  </div>
               </div>
            </div>
         </div>
      </AdminCard>
   );
}
