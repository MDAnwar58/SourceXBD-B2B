"use client";
import React from "react";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/buyer/components/buyer-card"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

export default function RequestForQuotation() {
   return (
      <Card>
         <div className="flex 2md:flex-row flex-col 2md:items-center 2md:gap-5 gap-1 2md:mb-3 mb-5">
            <div
               className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[171px]"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(52, 104, 191, 1) 51.60899758338928%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Request for Quotation
            </div>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
               One Request, Multiple Quotes
            </div>
         </div>

         <div className="flex 3md:flex-row flex-col gap-1 mb-16">
            <span className="text-[#ff0000] text-xs font-normal font-['Arial']">
               3045
            </span>
            <span className="text-[#2f2f2f] text-xs font-normal font-['Arial']">
               Suppliers can give you quotations, you’ll get them in avg.
            </span>
            <span className="text-[#ff0000] text-xs font-normal font-['Arial']">
               6 Minutes.
            </span>
         </div>

         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(52, 104, 191, 1) 51.60899758338928%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Product Name
         </div>
         <Input
            className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] rounded-[10px] h-[35px] xl:w-[701px] w-full px-5 text-[8px] font-normal focus:border-none focus:ring-0 border-none ring-0"
            placeholder="Enter Your Product name What You Want......?"
         />
      </Card>
   );
}
