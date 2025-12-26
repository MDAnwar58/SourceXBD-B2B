import React from "react";

export default function TermsAndConditionTab() {
   return (
      <div className="bg-[#ffffff] rounded-[20px] border-solid border-[#4285f4] border-2 sm:h-[69px] sm:flex items-center 2sm:gap-x-10 gap-x-5 px-10 mt-16 mb-10">
         <div className="text-[#90a8e7] font-['Raleway-Bold',_sans-serif] text-base font-bold text-center relative sm:pt-0 pt-3">
            <span>USER AGREEMENT</span>

            <div className=" absolute -bottom-3 left-[50%] transform-translate-x-middle">
               <span className=" bg-[#90a8e7] inline-flex w-20 h-[2px]"></span>
            </div>
         </div>
         <div className="text-[#2f2f2f] font-['Raleway-Medium',_sans-serif] text-sm font-medium sm:py-0 py-3 sm:text-left text-center">
            DISCLAIMER
         </div>
         <div className="text-[#2f2f2f] font-['Raleway-Medium',_sans-serif] text-sm font-medium sm:text-left text-center sm:pb-0 pb-3">
            WARNING AGAINTS FRAUD
         </div>
      </div>
   );
}
