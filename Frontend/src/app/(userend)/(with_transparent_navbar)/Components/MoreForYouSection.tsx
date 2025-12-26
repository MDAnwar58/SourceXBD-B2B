"use client";
import React from "react";
import {
   SvgCheckVerfyIcon,
   SvgMarketIcon,
   SvgPhoneIcon,
} from "@/components/SvgIcons";

export default function MoreForYouSection() {
   return (
      <div className="more-for-you-section container">
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-3xl font-bold relative w-[199px] h-11 mt-16"
            style={{
               background:
                  "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            More for You
            <br />
         </div>
         <div className=" grid xl:grid-cols-4 lg:grid-cols-3 6xs:grid-cols-2 grid-cols-1 md:px-16 px-0 mt-7 mb-20 gap-5">
            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full pt-7 pb-5"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <span className="flex justify-center">
                  <SvgCheckVerfyIcon width={36} height={38} color="#4285F4" />
               </span>
               <div className="text-[#4285f4] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2 pt-1">
                  Contect with verified sellers
               </div>
               <div className="flex justify-center">
                  <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[217px] h-[26px]">
                     Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                     tempor est
                  </div>
               </div>
               <div className="flex justify-center pt-6">
                  <div
                     className="rounded-[20px] px-5 py-2"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                        Get Seller
                     </div>
                  </div>
               </div>
            </div>

            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full pt-7 pb-5"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <span className="flex justify-center">
                  <SvgMarketIcon width={36} height={38} color="#4285F4" />
               </span>
               <div className="text-[#4285f4] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2 pt-1">
                  Sel on lorem for free
               </div>
               <div className="flex justify-center">
                  <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[217px] h-[26px]">
                     Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                     tempor est
                  </div>
               </div>
               <div className="flex justify-center pt-6">
                  <div
                     className="rounded-[20px] px-5 py-2"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                        Start selling
                     </div>
                  </div>
               </div>
            </div>

            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full pt-7 pb-5"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <span className="flex justify-center text-[#4285F4]">
                  <SvgPhoneIcon width={36} height={38} />
               </span>
               <div className="text-[#4285f4] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2 pt-1">
                  Download Our App
               </div>
               <div className="flex justify-center">
                  <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[217px] h-[26px]">
                     Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                     tempor est
                  </div>
               </div>
               <div className="flex justify-center pt-6">
                  <div
                     className="rounded-[20px] px-5 py-2"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                        Download
                     </div>
                  </div>
               </div>
            </div>

            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full pt-7 pb-5"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <span className="flex justify-center text-[#4285F4]">
                  <SvgPhoneIcon width={36} height={38} />
               </span>
               <div className="text-[#4285f4] text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pb-2 pt-1">
                  Tally On mobile
               </div>
               <div className="flex justify-center">
                  <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[217px] h-[26px]">
                     Lorem ipsum dolor sit amet consectetur. Eu enim natoque
                     tempor est
                  </div>
               </div>
               <div className="flex justify-center pt-6">
                  <div
                     className="rounded-[20px] px-5 py-2"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     <div className="text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-xs font-bold">
                        Get Seller
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
