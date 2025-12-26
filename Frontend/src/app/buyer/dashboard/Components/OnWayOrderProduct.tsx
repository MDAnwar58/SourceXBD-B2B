"use client";
import Img from "@/components/Image";
import React from "react";
import {
   CarvePenddingSvgIcon,
   FluentDeleteSvgIcon,
   PicUpTruckSvgIcon,
} from "@/buyer/components/SvgIcons";

export default function OnWayOrderProduct() {
   return (
      <div className="bg-[rgba(152,176,238,0.05)]  shadow-buyer-card rounded-[14px] flex 3md:flex-row md:flex-col 3xs:flex-row flex-col gap-2 p-3">
         <div className=" relative">
            <Img
               src="/assets/images/online-product2.png"
               alt="product image"
               width={100}
               height={100}
               className="rounded-2xl 3md:w-[163px] md:w-full 3xs:w-[163px] w-full 3md:h-[90px] md:h-[250px] 3xs:h-[90px] xs3:h-[250px] h-auto overflow-visible"
            />
            <div className="bg-[#86FF73] rounded-lg w-[59px] h-6 flex flex-row justify-center items-center gap-[.1rem] absolute top-1 right-1">
               <div className="w-4 h-4 text-[#2F2F2F]">
                  <PicUpTruckSvgIcon />
               </div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold relative">
                  On Way
               </div>
            </div>
         </div>
         <div className=" w-full">
            <div className="flex xs3:flex-row flex-col xs3:items-center xs3:gap-2 border-b border-[#98B0EE] xs3:pb-0 pb-1">
               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Product Name
               </div>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative">
                  (Company Name)
               </div>
            </div>

            <div className="flex xs3:flex-row flex-col justify-between xs3:items-center pt-2">
               <div className="">
                  <div className="flex xs3:flex-row flex-col xs3:gap-3 xs3:items-center">
                     <div className=" space-x-1">
                        <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                           Price :
                        </span>
                        <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial']">
                           450000
                        </span>
                     </div>
                     <div className=" space-x-1">
                        <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                           Date :
                        </span>
                        <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial']">
                           27-07-24
                        </span>
                     </div>
                  </div>

                  <div>
                     <span className="text-[#2f2f2f] text-xs font-bold font-['Raleway']">
                        Your Location:{" "}
                     </span>
                     <span className="text-[#8b8b8b] text-[10px] font-normal font-['Arial'] w-[99px]">
                        Lorem ipsum dolor sit
                     </span>
                  </div>
               </div>

               <div className="flex flex-row items-center xs3:justify-end justify-center">
                  <div className="bg-[#e34141] rounded-lg w-[52px] h-[23px] flex flex-row justify-center items-center gap-[.15rem] xs3:mt-0 mt-1">
                     <div className="w-3 h-3 text-[#ffffff]">
                        <FluentDeleteSvgIcon />
                     </div>
                     <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                        Cancle
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
