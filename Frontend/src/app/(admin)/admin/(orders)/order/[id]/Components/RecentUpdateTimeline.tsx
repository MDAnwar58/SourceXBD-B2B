import {
   CircleVerifySvgIcon,
   CircleWarningSvgIcon,
   FlagIcon,
   PenddingOrderIcon,
} from "@admin/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));

export default function RecentUpdateTimeline() {
   return (
      <AdminCard
         className=" !h-[420.5px] overflow-y-auto"
         style={{
            scrollbarWidth: "none",
         }}
      >
         <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-4">
            Recent Updates
         </div>
         <div className="!px-3">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
               <li className="mb-2 ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>
                  <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                     Order 0021 - Lorem Ipsum moved to Shipment
                  </span>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
               <li className="mb-2 ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>
                  <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                     Order 0021 - Lorem Ipsum moved to Shipment
                  </span>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
               <li className="mb-2 ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>
                  <div className=" 3xs:flex justify-between items-center">
                     <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                        Order 0021 - Lorem Ipsum moved to Shipment
                     </span>
                     <div className="bg-[rgba(255,62,62,0.20)] text-[#ff7800] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal rounded w-[45px] h-3.5 flex items-center justify-center gap-x-[.15rem]  3xs:mt-0 mt-1">
                        <div className="w-2 h-2 text-[#FF7800]">
                           <CircleWarningSvgIcon />
                        </div>
                        <span>Urgent</span>
                     </div>
                  </div>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
               <li className="mb-2 ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>

                  <div className=" 3xs:flex items-center justify-between">
                     <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                        Order 0021 - Lorem Ipsum moved to Shipment
                     </span>

                     <div className="bg-[rgba(203,203,203,0.20)] text-[#75d328] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal  rounded w-[45px] h-3.5 flex justify-center items-center gap-x-[.15rem]">
                        <div className="w-2 h-2">
                           <CircleVerifySvgIcon />
                        </div>
                        <span>Verifide</span>
                     </div>
                  </div>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
               <li className="mb-2 ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>
                  <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                     Order 0021 - Lorem Ipsum moved to Shipment
                  </span>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
               <li className=" ms-5">
                  <div className="absolute -start-3 bg-[#f7f7f7] rounded-md border-solid border-[#b2b2b2] border-[0.5px] px-[.2rem] py-[.17rem] dark:border-gray-900 dark:bg-gray-700">
                     <div className="w-4 h-4">
                        <FlagIcon />
                     </div>
                  </div>
                  <span className="text-[#2f2f2f] border-b border-gray-300 text-left font-['Arial-Bold',_sans-serif] text-sm font-bold mb-1 -mt-1">
                     Order 0021 - Lorem Ipsum moved to Shipment
                  </span>

                  <div>
                     <span className="text-[#4d4d4d] text-xs font-normal font-['Arial']">
                        Lorem ipsum dolor sit amet consectetur{" "}
                     </span>
                     <span className="text-[#4285f4] text-xs font-normal font-['Arial']">
                        @loremipsum
                     </span>
                  </div>

                  <div className=" flex items-center gap-x-[.15rem]">
                     <div className="w-2 h-2 text-[#B2B2B2]">
                        <PenddingOrderIcon />
                     </div>
                     <div className="text-[#b2b2b2] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                        Order 0021 | 02:30.24 July . 2024
                     </div>
                  </div>
               </li>
            </ol>
         </div>
      </AdminCard>
   );
}
