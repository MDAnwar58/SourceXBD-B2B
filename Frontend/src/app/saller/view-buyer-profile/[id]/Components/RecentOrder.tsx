import {
   CalenderDateSvgIcon,
   DashboardThreeDotsSvgIcon,
} from "@admin/components/SvgIcons";
import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import Img from "@/components/Image";
import React from "react";

export default function RecentOrder() {
   return (
      <div className="bg-[#f5f5f5] rounded-[13px] flex items-center gap-x-3 mb-3 p-3">
         <div className="xs:hidden block">
            <CheckBox className="bg-[#f5f5f5] text-[#515151] border-solid border-[#515151] border focus:ring-[#515151] rounded-sm w-3 h-3 " />
         </div>
         <div className="xs:flex items-center justify-between w-full">
            <div className="flex items-center gap-x-3">
               <div className="xs:block hidden">
                  <CheckBox className="bg-[#f5f5f5] text-[#515151] border-solid border-[#515151] border focus:ring-[#515151] rounded-sm w-3 h-3 " />
               </div>

               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal md:block hidden">
                  Lorem Ipsum dolor sit amit
               </div>

               <div className="flex items-center w-full md:hidden">
                  <Img
                     src="/assets/images/recent-order-user.png"
                     alt="recent order user avatar"
                     width={100}
                     height={100}
                     className="w-[22px] h-[22px] rounded-full"
                  />
                  <div className="flex items-center gap-x-2 xs:ms-3 ms-2">
                     <div className="w-4 h-4 text-gray-700">
                        <CalenderDateSvgIcon />
                     </div>
                     <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                        20 jun, 2024
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex xs:justify-start justify-between xs:mt-0 mt-1">
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal md:hidden block">
                  Lorem Ipsum dolor sit amit
               </div>
               <div className="md:flex items-center gap-x-2 me-3 hidden">
                  <div className="w-4 h-4 text-gray-700">
                     <CalenderDateSvgIcon />
                  </div>
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal">
                     20 jun, 2024
                  </div>
               </div>
               <Img
                  src="/assets/images/recent-order-user.png"
                  alt="recent order user avatar"
                  width={100}
                  height={100}
                  className="w-[22px] h-[22px] rounded-full md:block hidden"
               />
               <Button type="button" className="ms-4 xs:block hidden">
                  <div className="w-4 h-4 ">
                     <DashboardThreeDotsSvgIcon />
                  </div>
               </Button>
            </div>
         </div>

         <Button type="button" className="xs:ms-4 ms-0 xs:hidden">
            <div className="w-4 h-4 ">
               <DashboardThreeDotsSvgIcon />
            </div>
         </Button>
      </div>
   );
}
