import {
   DashboardThreeDotsSvgIcon,
   FacebookSvgIcon,
   InstagramSvgIcon,
} from "@/app/(admin)/admin/components/SvgIcons";
import React from "react";

export default function UserSocialDetails() {
   return (
      <div className=" xs3:flex items-end justify-between pt-3 pb-5 border-b-2 border-gray-300">
         <div className="flex gap-x-3">
            <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
               <div className="w-4 h-4">
                  <FacebookSvgIcon />
               </div>
            </div>
            <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
               <div className="w-4 h-4">
                  <InstagramSvgIcon />
               </div>
            </div>
            <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
               <div className="w-4 h-4">
                  <DashboardThreeDotsSvgIcon />
               </div>
            </div>
         </div>

         <div className="xs3:w-[140px] w-full mt-2">
            <div className="flex items-center justify-between">
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  Full Verifide
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  100%
               </div>
            </div>
            <div className="w-full h-1">
               <div
                  className="bg-[#39A85B] rounded h-full w-[100%]"
                  style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
               />
            </div>
         </div>
      </div>
   );
}
