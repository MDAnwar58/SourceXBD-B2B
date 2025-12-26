import React from "react";
import { WarningSvgIcon } from "@admin/components/SvgIcons";
import ToggleSwitchButton from "@/components/ToggleSwitchButton";

export default function TrustPoint() {
   return (
      <div className="bg-[rgba(152,176,238,0.05)] rounded-[10px] shadow-admin-card xs:flex justify-between items-center 3xs:px-7 px-5 py-5 mb-3">
         <div className=" xs:flex items-center md:gap-x-5 7xs:gap-x-3 3xs:gap-x-5 xs:gap-x-3">
            <div className="flex items-center xs:justify-start justify-between">
               <div className="text-[#4285F4] w-6 h-6 xs:mb-0 mb-2">
                  <WarningSvgIcon />
               </div>
               <div className="flex items-center xs:hidden">
                  <ToggleSwitchButton height={6} width={11} />
               </div>
            </div>
            <div className="7xs:flex items-center md:gap-x-11 sm:gap-x-7 gap-x-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                  Trust Points
               </div>
               <div className="text-[#777777] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  Manual adjustments based on buyer complaints
               </div>
            </div>
         </div>

         <div className="xs:flex items-center hidden">
            <ToggleSwitchButton height={6} width={11} />
         </div>
      </div>
   );
}
