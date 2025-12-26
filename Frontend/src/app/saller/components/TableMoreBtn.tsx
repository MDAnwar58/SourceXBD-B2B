import Button from "@/components/Button";
import React from "react";
import { DashboardThreeDotsSvgIcon } from "./SvgIcons";

export default function TableMoreBtn() {
   return (
      <div className=" relative">
         <Button type="button">
            <span className="bg-[#5479b5] text-white rounded-[50%] w-8 h-8 flex items-center justify-center">
               <div className="w-[21.33px] h-[21.33px]">
                  <DashboardThreeDotsSvgIcon />
               </div>
            </span>

            <div className=" absolute top-11 right-0 z-50 ">
               <div
                  className="bg-[rgba(240,242,255,0.40)] rounded-[10px] w-[81px] h-[135px] relative z-50"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div
                     className="bg-[#4285f4] rounded-lg w-[66px] h-[26px] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold"
                     style={{
                        boxShadow:
                           "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     }}
                  >
                     View
                  </div>
               </div>
            </div>
         </Button>
      </div>
   );
}
