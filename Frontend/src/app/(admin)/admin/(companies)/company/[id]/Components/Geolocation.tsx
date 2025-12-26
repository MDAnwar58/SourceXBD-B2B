"use client";
import React from "react";
import dynamic from "next/dynamic";
const CircleCounter = dynamic(
   () =>
      import(
         "@admin/dashboard/quick-action/view-platform-analytics/Components/CircleCounter"
      ),
   { ssr: false }
);

export default function Geolocation() {
   return (
      <div className="5xl:col-span-5 2xl:col-span-7 6lg:col-span-9 md:w-auto 3xs:w-96 w-auto">
         <div className="bg-[#ffffff] rounded-[20px] w-full shadow-admin-card p-5">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
               Geolocation
            </div>

            <div className="pt-3 pb-5">
               <CircleCounter
                  percentage={65.5}
                  className="3xs:w-[300px] xs5:w-[200px] w-[150px] 3xs:h-[300px] xs5:h-[200px] h-[150px] font-['Arial-Bold',_sans-serif] font-bold"
                  textSize="24px"
                  pathTransitionDuration={0.7}
                  pathColor="#90ff38"
                  textColor="#515151"
                  trailColor="#e8e8e8"
               />
            </div>

            <div className="flex gap-x-2">
               <div className="rounded-md border-solid border-[#b2b2b2] border flex items-center px-1 py-[0.16rem]">
                  <div className="bg-[#90ff38] rounded-sm w-2.5 h-2.5" />
                  <div className="text-[#b2b2b2] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold px-1">
                     Geolocation
                  </div>
               </div>
               <div className="rounded-md border-solid border-[#b2b2b2] border flex items-center px-1 py-[0.16rem]">
                  <div className="bg-[#f4f4f4] rounded-sm w-2.5 h-2.5" />
                  <div className="text-[#b2b2b2] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold px-1">
                     Not
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
