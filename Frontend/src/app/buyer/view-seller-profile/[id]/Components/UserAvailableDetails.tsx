"use client";
import React from "react";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));

type Props = {
   sellerAvailableDetails: {
      country: string;
      country_iso: string;
      city: string;
      profile_status: string;
   };
};

export default function UserAvailableDetails({
   sellerAvailableDetails,
}: Props) {
   let iso = "";
   if (sellerAvailableDetails?.country_iso !== "") {
      iso = sellerAvailableDetails?.country_iso?.toLowerCase();
   }

   return (
      <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] py-3 px-4 shadow-admin-card mt-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
            Available Details
         </div>

         <div className=" xs4:grid grid-cols-2 gap-x-2 mt-3">
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Country
               </div>
               <div className=" relative xs4:ms-1 xs4:mb-0 mb-2">
                  <div className="border-r-2 pe-[0.45rem] absolute top-[50%] left-2 transform-translate-y-middle">
                     <div className="w-5 h-5">
                        {iso && (
                           <Img
                              src={`https://flagpedia.net/data/flags/w1160/${iso}.webp`}
                              alt="Bangladesh flag"
                              width={50}
                              height={50}
                              className="h-full w-full rounded-full"
                           />
                        )}
                     </div>
                  </div>
                  <Input
                     type="text"
                     className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] ps-11 focus:ring-0 focus:border-gray-300"
                     placeholder="Country"
                     defaultValue={sellerAvailableDetails?.country}
                     disabled
                  />
               </div>
            </div>
            <div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  City / State
               </div>
               <Input
                  type="text"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] focus:ring-0 focus:border-gray-300 xs4:ms-1"
                  placeholder=" City/ State"
                  defaultValue={sellerAvailableDetails?.city}
                  disabled
               />
            </div>
         </div>

         <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium mt-3 mb-1">
            Profile Status
         </div>
         <span
            className={`${
               sellerAvailableDetails?.profile_status === "active"
                  ? "bg-[#39A85B]"
                  : "bg-[#ff0000]"
            } capitalize text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded px-7 py-1 xs4:ms-1`}
         >
            {sellerAvailableDetails?.profile_status}
         </span>
      </div>
   );
}
