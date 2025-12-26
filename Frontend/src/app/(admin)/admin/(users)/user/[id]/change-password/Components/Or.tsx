"use client";
import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

export default function Or() {
   return (
      <div className="flex justify-between items-center py-16">
         <Img
            src="/assets/images/Line1.png"
            alt="Change Password Line 1"
            width={531}
            height={1}
            className="h-[0.17rem] w-[591px]"
         />
         <div className="text-[#2f2f2f] text-left font-['Raleway-Regular',_sans-serif] text-5xl font-normal relative">
            or
         </div>

         <Img
            src="/assets/images/Line1.png"
            alt="Change Password Line 1"
            width={531}
            height={1}
            className="h-[0.17rem] w-[591px]"
         />
      </div>
   );
}
