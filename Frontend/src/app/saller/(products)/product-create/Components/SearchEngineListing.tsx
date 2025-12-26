"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"));

export default function SearchEngineListing() {
   return (
      <div className="bg-[#ffffff] rounded-[20px] shadow-admin-card p-5">
         <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-3">
            Search engine listing
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full shadow-admin-card p-5">
            <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices nec
               aliquam penatibus lectus nibh. Quis quam sed nunc vel amet elit
               aliquet sodales libero.Lorem ipsum dolor sit amet consectetur.
               Elementum massa accumsan nec at non ac. Tempor aliquet
               scelerisque diam ultrices nec aliquam penatibus lectus nibh. Quis
               quam sed nunc vel amet elit aliquet sodales libero.
            </div>
            <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pt-3">
               Evolve Pro Ciller
            </div>
            <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal pt-3 pb-2">
               Lorem ipsum dolor sit amet consectetur. Elementum massa accumsan
               nec at non ac. Tempor aliquet scelerisque diam ultrices nec
               aliquam penatibus lectus nibh. Quis quam sed nunc vel amet elit
               aliquet sodales libero.Lorem ipsum dolor sit amet consectetur.
               Elementum massa accumsan nec at non ac. Tempor aliquet
               scelerisque diam ultrices nec aliquam penatibus lectus nibh. Quis
               quam sed nunc vel amet elit aliquet sodales libero.
            </div>

            <Button
               type="button"
               className=" cursor-none bg-[#f0f0f0] text-[#2f2f2f] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded px-3 py-1"
            >
               TK{"  "}000000
            </Button>
         </div>
      </div>
   );
}
