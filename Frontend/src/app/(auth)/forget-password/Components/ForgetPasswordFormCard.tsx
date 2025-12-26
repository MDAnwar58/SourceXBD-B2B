"use client";
import React from "react";
import dynamic from "next/dynamic";
const ForgetPasswordForm = dynamic(() => import("./ForgetPasswordForm"));

export default function ForgetPasswordFormCard() {
   return (
      <div
         className="md:bg-[rgba(255,255,255,0.50)] md:backdrop-blur-[71.5px] md:shadow-auth-card rounded-[40px] w-full
       relative z-30 pt-9 pb-14 md:px-14 sm:px-20 4xs:px-16 px-0"
      >
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
            Forget Password
         </div>
         <div className="text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1">
            Verify e-mail address
         </div>

         <ForgetPasswordForm />
      </div>
   );
}
