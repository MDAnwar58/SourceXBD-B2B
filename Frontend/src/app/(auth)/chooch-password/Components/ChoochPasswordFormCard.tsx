"use client";
import React from "react";
import { SvgLockIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const ChoochPasswordForm = dynamic(() => import("./ChoochPasswordForm"));

export default function ChoochPasswordFormCard() {
   return (
      <div
         className=" md:backdrop-blur-[71.5px] md:bg-[rgba(255,255,255,0.50)] md:shadow-auth-card rounded-[40px] w-full
           relative z-30 pt-9 pb-14 px-14"
      >
         <div className="rounded-[10px] text-[#515151] border-solid border-[#515151] border w-[46px] h-[46px] flex justify-center items-center mx-auto mb-3">
            <div className="w-6 h-6">
               <SvgLockIcon />
            </div>
         </div>
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold mx-auto w-[211px]"
            style={{
               background:
                  "linear-gradient(91.45deg,rgba(66, 133, 244, 1) 0%,rgba(87, 150, 255, 1) 54.00000214576721%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Chooch Password
         </div>
         <div className="text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-1">
            Must be at last 8 carecters
         </div>

         {/* <div className="flex flex-row gap-5 items-center justify-center">
            <div className="w-[165px] h-[.1rem] bg-[#515151]"></div>
            <div>or</div>
            <div className="w-[165px] h-[.1rem] bg-[#515151]"></div>
         </div> */}

         <ChoochPasswordForm />
      </div>
   );
}
