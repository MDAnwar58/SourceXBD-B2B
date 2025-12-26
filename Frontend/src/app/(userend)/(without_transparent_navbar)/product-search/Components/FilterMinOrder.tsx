"use client";
import React from "react";
import Input from "@/components/Input";

export default function FilterMinOrder() {
   return (
      <div>
         <div
            className="bg-[rgba(255,255,255,0.50)] rounded-[14px] w-full p-4 mt-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative w-[57px] h-4">
               Min.Order
            </div>
            <div className="flex flex-row gap-3 pt-2">
               <Input
                  type="text"
                  className="w-full h-[26px] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium rounded-[10px] border-solid border-[#4285f4] border-[0.5px]"
                  placeholder="Less then"
               />
               <div
                  className="bg-[#4285f4] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] w-[54px] h-[26px] flex justify-center items-center"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               >
                  ok
               </div>
            </div>
         </div>
      </div>
   );
}
