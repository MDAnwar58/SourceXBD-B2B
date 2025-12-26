"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   toggleReviewOrReport: (item: string) => void;
   reportTextAreaRef: React.RefObject<HTMLDivElement>;
};

export default function OrderReviewAndReportBtns({
   toggleReviewOrReport,
   reportTextAreaRef,
}: Props) {
   return (
      <div className="flex gap-4 justify-end">
         <Button
            type="button"
            className="bg-[#f0f0f0] rounded-[10px] w-24 h-7 flex justify-center items-center text-[#515151] font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold "
            onClick={() => {
               toggleReviewOrReport("report");
               setTimeout(() => {
                  reportTextAreaRef.current?.focus();
               }, 50);
            }}
         >
            Report
         </Button>
         <Button
            type="button"
            className="rounded-[10px] w-24 h-7 flex justify-center items-center text-[#ffffff] font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold "
            style={{
               background:
                  "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
            }}
            onClick={() => toggleReviewOrReport("review")}
         >
            Review
         </Button>
      </div>
   );
}
