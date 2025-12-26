import {
   CalenderDateSvgIcon,
   DashboardThreeDotsSvgIcon,
   RightArrowSvgIcon,
} from "@/app/(admin)/admin/components/SvgIcons";
import Button from "@/components/Button";
import CheckBox from "@/components/Checkbox";
import Img from "@/components/Image";
import React from "react";
import RecentOrder from "./RecentOrder";

export default function RecentOrders() {
   return (
      <div className="bg-[#ffffff] rounded-[14px] shadow-admin-card relative h-[525px]">
         <div className="bg-white border-b border-gray-300 rounded-t-[14px] xs6:flex justify-between items-center px-5 h-[10%] sticky top-0">
            <div className="text-[#2f2f2f] xs6:text-left text-center font-['Raleway-Bold',_sans-serif] text-xs font-bold xs6:pt-0 pt-3">
               Recent Orders
            </div>

            <a
               href=""
               className="flex items-center xs6:justify-start justify-center gap-x-1 text-[#4285f4] xs6:w-auto w-[5.3rem] xs6:mx-0 mx-auto xs6:mt-0 mt-[.05rem]"
            >
               <div className=" text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                  See all updates
               </div>
               <div className="w-2.5 h-2.5">
                  <RightArrowSvgIcon />
               </div>
            </a>
         </div>
         <div className="h-[85%] overflow-y-auto">
            <div className="px-5 pt-4 ">
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
               <RecentOrder />
            </div>
         </div>
      </div>
   );
}
