import React from "react";
import Img from "@/components/Image";
import Grid from "@admin/components/grid";
import {
   PinSvgIcon,
   DoubbleCheckSvgIcon,
   DashboardThreeDotsSvgIcon,
} from "@admin/components/SvgIcons";

export default function SidebarUserMessage() {
   return (
      <div className="hover:bg-[rgba(152,176,238,0.05)] rounded-[14px] hover:shadow-admin-card py-3">
         <Grid cols={12} gap={2} className="!grid">
            <div className="xs4:col-span-2 col-span-3">
               <div className=" mx-auto rounded-full w-[45.6px] h-[45.6px] relative">
                  <Img
                     src="/assets/images/message-user.png"
                     alt="message user"
                     width={100}
                     height={100}
                     className="rounded-full w-full h-full"
                  />
                  <div className="absolute bottom-[.1rem] end-1 bg-[#52ff00] rounded-[50%] w-[7px] h-[7px]" />
               </div>
            </div>
            <div className="xs4:col-span-9 col-span-8 xs3:ps-0 xs4:ps-2">
               <div className="flex justify-between items-center">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                     Rofiqul Islam
                  </div>
                  <div className="flex items-center gap-x-1">
                     <div className="w-3 h-3 text-gray-700">
                        <PinSvgIcon />
                     </div>
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                        14:47
                     </div>
                  </div>
               </div>
               <div className="flex justify-between items-center pt-[.05rem]">
                  <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative w-[143px]">
                     Lorem ipsum dolor sit........
                  </div>
                  <div className="text-[#4285F4] w-4 h-4">
                     <DoubbleCheckSvgIcon />
                  </div>
               </div>
            </div>
            <div className="col-span-1 flex items-center">
               <div className="w-4 h-4 text-gray-700">
                  <DashboardThreeDotsSvgIcon />
               </div>
            </div>
         </Grid>
      </div>
   );
}
