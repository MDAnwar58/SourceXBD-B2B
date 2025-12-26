"use client";
import React from "react";
import {
   SvgCheckVerfyIcon,
   SvgMarketIcon,
   SvgPhoneIcon,
} from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

export default function ContactMoreForYou() {
   return (
      <div>
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-[32px] font-bold relative xs6:w-[250px] h-11"
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
         <div className="grid 6lg:grid-cols-4 4md:grid-cols-3 7xs:grid-cols-2 grid-cols-1 gap-5 pt-9">
            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full px-5 7xs:py-5 py-11"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgCheckVerfyIcon width={36} height={36} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pt-1"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Contect with verified sellers
               </div>
               <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-xs font-thin pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eu enim natoque tempor
                  est
               </div>
               <div className=" flex justify-center pt-4">
                  <Button
                     type="button"
                     className="rounded-[20px] px-5 py-2 text-[#ffffff] border-none font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     Get Seller
                  </Button>
               </div>
            </div>
            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full px-5 7xs:py-5 py-11"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgMarketIcon width={36} height={36} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pt-1"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Sel on lorem for free
               </div>
               <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-xs font-thin pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eu enim natoque tempor
                  est
               </div>
               <div className=" flex justify-center pt-4">
                  <Button
                     type="button"
                     className="rounded-[20px] px-5 py-2 text-[#ffffff] border-none font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     Start selling
                  </Button>
               </div>
            </div>
            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full px-5 7xs:py-5 py-11"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgPhoneIcon width={36} height={36} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pt-1"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Download Our App
               </div>
               <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-xs font-thin pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eu enim natoque tempor
                  est
               </div>
               <div className=" flex justify-center pt-4">
                  <Button
                     type="button"
                     className="rounded-[20px] px-5 py-2 text-[#ffffff] border-none font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     Download
                  </Button>
               </div>
            </div>
            <div
               className="bg-[#f0f2ff] rounded-[20px] w-full px-5 7xs:py-5 py-11"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div className="flex justify-center">
                  <SvgPhoneIcon width={36} height={36} color="#4285F4" />
               </div>
               <div
                  className="text-center font-['Raleway-Bold',_sans-serif] text-base font-bold pt-1"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Tally On mobile
               </div>
               <div className="text-[#666666] text-center font-['Arial-Regular',_sans-serif] text-xs font-thin pt-2">
                  Lorem ipsum dolor sit amet consectetur. Eu enim natoque tempor
                  est
               </div>
               <div className=" flex justify-center pt-4">
                  <Button
                     type="button"
                     className="rounded-[20px] px-5 py-2 text-[#ffffff] border-none font-['Raleway-Bold',_sans-serif] text-xs font-bold"
                     style={{
                        background:
                           "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                     }}
                  >
                     Get Seller
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
}
