"use client";
import { SvgOGLocationIcon, SvgOGSendInquiryIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));
const RatingStar = dynamic(() => import("@/components/RatingStar"));

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type Props = {
   sallerInfo: {
      company: any;
      country: Country;
      location: string;
      rating: string;
      image: string;
   };
};

export default function OrganisationSallerCard({ sallerInfo }: Props) {
   return (
      <div
         className="bg-[#ffffff] rounded-[20px] flex xl:flex-row flex-col items-center p-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="xl:w-[60%] w-full flex xs:flex-row flex-col">
            <Img
               src={sallerInfo?.image.toString()}
               alt="organisation sale avatar"
               width={200}
               height={200}
               className="rounded-[10px] xs:w-[100px] w-full xs:h-[100px] h-auto"
            />
            <div className="xs:ps-4 xs:pt-0 pt-2">
               <div className="text-[#000000] text-left font-['Raleway-Bold',_sans-serif] xl:text-[32px] text-[22px] font-bold">
                  {sallerInfo?.company?.name}
               </div>
               <div className="flex 4xs:flex-row flex-col pb-3">
                  <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     Export To {sallerInfo?.country?.nicename}
                  </div>
                  <div className="flex flex-row 4xs:pt-0 pt-2">
                     <div className="4xs:ps-5">
                        <RatingStar rating={4.5} />
                     </div>
                     <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ps-2">
                        4.5/5.00
                     </div>
                  </div>
               </div>
               <div className="flex flex-row items-center 4xs:pb-0 pb-3">
                  <div className="pe-1">
                     <SvgOGLocationIcon
                        width={16}
                        height={16}
                        color="#4285F4"
                     />
                  </div>
                  <div className="text-[#535353] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                     {sallerInfo.location}
                  </div>
               </div>
            </div>
         </div>
         <div className="xl:w-[40%] w-full flex xs:flex-row flex-col items-center justify-end gap-4 pe-2">
            <div className="bg-[#4285f4] rounded-[10px] 4xs:w-auto w-full px-5 py-4 flex justify-center items-center text-[#ffffff] text-left font-['Inter-Bold',_sans-serif] text-md font-bold">
               <span className="pe-1">
                  <SvgOGSendInquiryIcon width={16} height={16} color="white" />
               </span>
               <span>Send Inquiry</span>
            </div>
            <div className="rounded-[10px] 4xs:w-auto w-full flex justify-center 4xs:px-5 py-4 border-solid border-[#92aae9] border text-[#92aae9] text-left font-['Inter-Bold',_sans-serif] text-sm font-bold">
               View Number
            </div>
         </div>
      </div>
   );
}
