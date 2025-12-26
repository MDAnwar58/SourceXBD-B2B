"use client";
import React from "react";
import {
   DashboardThreeDotsSvgIcon,
   NotificationSvgIcon,
} from "@admin/components/SvgIcons";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

export default function YourReviewMessage() {
   const {
      lg6Screen,
      lgScreen,
      md6Screen,
      md4Screen,
      md2Screen,
      mdScreen,
      smScreen,
      xs6Screen,
      xs3Screen,
      xsScreen,
   } = useScreenMediaQuery();
   const message = useTruncateText({
      text: "You: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam unde accusamus expedita quo quaerat ullam sit et rem voluptatibus porro culpa autem maxime minus? Perspiciatis, enim. Porro, optio unde",
      wordLimit: lg6Screen
         ? 12
         : lgScreen
           ? 8
           : md6Screen
             ? 6
             : md4Screen
               ? 5
               : md2Screen
                 ? 4
                 : mdScreen
                   ? 2
                   : smScreen
                     ? 9
                     : xs6Screen
                       ? 7
                       : xs3Screen
                         ? 5
                         : xsScreen
                           ? 6
                           : 5,
   });
   return (
      <div className="bg-[rgba(152,176,238,0.05)] shadow-admin-card rounded-[20px] w-full p-3 3xs:flex items-center justify-between mb-4">
         <div className="flex">
            <div className="bg-blue-200/55 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-full w-12 h-12 flex justify-center items-center relative">
               <Img
                  src="/assets/images/review-user.png"
                  alt=""
                  width={70}
                  height={70}
                  className="w-6 h-6 overflow-visible"
               />
               <div className="bg-[#52ff00] rounded-full w-2.5 h-[11px] absolute bottom-[.15rem] right-[.05rem]" />
            </div>
            <div className="ps-4 pt-[.03rem]">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                  Rofiqul Islam
               </div>
               <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal mt-[.03rem]">
                  {message}
               </div>
            </div>
         </div>
         <div className="flex items-center 3xs:justify-start justify-between 4md:gap-x-7 3md:gap-x-5 2md:gap-x-2 gap-x-1 3xs:mt-0 mt-2">
            <div className=" text-right ">
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  14:47
               </div>
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  20 - 07 -24
               </div>
            </div>
            <div className="w-6 h-6">
               <NotificationSvgIcon />
            </div>
            <div className="w-6 h-6">
               <DashboardThreeDotsSvgIcon />
            </div>
         </div>
      </div>
   );
}
