"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   setIsSupportOpen: React.Dispatch<React.SetStateAction<boolean>>;
   onChangeReportIncorrectParking: (isSupportOpen: boolean) => void;
};

export default function InfoSolveIssueCard({
   setIsSupportOpen,
   onChangeReportIncorrectParking,
}: Props) {
   return (
      <div
         className="bg-[rgba(152,176,238,0.05)] rounded-[14px] flex 4md:flex-row md:flex-col 6xs:flex-row flex-col gap-3 justify-between items-center text-center px-5 py-4 mt-32"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold relative">
            Dose this information solv your issue?
         </div>

         <div className="flex flex-row gap-x-3">
            <Button
               type="button"
               className="bg-[#f0f0f0] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] w-16 h-[33px] flex justify-center items-center"
               onClick={() => onChangeReportIncorrectParking(false)}
            >
               No
            </Button>
            <Button
               className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] w-[85px] h-[33px] flex justify-center items-center"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
               }}
               onClick={() => onChangeReportIncorrectParking(true)}
            >
               Yes
            </Button>
         </div>
      </div>
   );
}
