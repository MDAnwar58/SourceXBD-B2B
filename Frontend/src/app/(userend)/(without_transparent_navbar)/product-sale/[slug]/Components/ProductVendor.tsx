"use client";
import React, { useEffect, useState } from "react";
import {
   SvgCallIcon,
   SvgCheckWithBgIcon,
   SvgCircleBgStarIcon,
   SvgLocationIcon,
   SvgPlainIcon,
} from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const MessageSendArea = dynamic(() => import("./MessageSendArea"));
const NavLink = dynamic(() => import("@/components/NavLink"));
const Button = dynamic(() => import("@/components/Button"));
const ViewMobileNumberBtn = dynamic(
   () => import("@/components/ViewMobileNumberBtn")
);
const Card = dynamic(() => import("@/components/card"));
const Img = dynamic(() => import("@/components/Image"));
const RatingStar = dynamic(() => import("@/components/RatingStar"));

type Company = {
   name: string;
   address: string;
   country: string;
   user: { id: number };
};

type Vendor = {
   id: string;
   name: string;
   email: string;
   phone: string;
   company: Company;
   role: string;
   status: string;
   created_at: string;
};

type Props = {
   vendor: Vendor;
};

export default function ProductVendor({ vendor }: Props) {
   const [toId, setToId] = useState<number | null>(null);

   useEffect(() => {
      if (vendor?.id) {
         setToId(Number(vendor?.id));
      }
   }, [vendor?.id, toId]);
   console.log(vendor);
   return (
      <div className="xl:col-span-5 col-span-12">
         <div className="flex flex-col gap-7">
            <Card className="!rounded-[14px]">
               <div className="flex xs5:flex-row flex-col items-center gap-3">
                  <Img
                     src="/assets/images/slider1.png"
                     alt="image"
                     width={100}
                     height={100}
                     className="rounded-full border-solid border-[#ffffff] border w-[60px] h-[60px]"
                  />
                  <div className="flex items-center">
                     <div>
                        <div className="flex xs:flex-row flex-col xs:items-center gap-x-2">
                           <div
                              className=" xs5:text-left text-center font-['Raleway-Bold',_sans-serif] text-base font-bold"
                              style={{
                                 background:
                                    "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                                 backgroundClip: "text",
                                 WebkitBackgroundClip: "text",
                                 WebkitTextFillColor: "transparent",
                              }}
                           >
                              <NavLink href={`/organisation/${vendor?.id}`}>
                                 {vendor?.company?.name}
                              </NavLink>
                           </div>

                           <div className="text-[#515151] xs5:text-left text-center font-['Inter-Regular',_sans-serif] text-[8px] font-normal">
                              (Export To {vendor?.company?.country})
                           </div>
                        </div>
                        <div className="flex flex-row xs5:justify-start justify-center items-end gap-x-2">
                           <div>
                              <RatingStar rating={4} />
                           </div>
                           <div className="text-[#515151] text-left font-['Inter-Regular',_sans-serif] text-xs font-normal">
                              4.5/5.00
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="flex 4xs:flex-row flex-col 4xs:items-end 4xs:justify-between 4xs:gap-0 gap-3 mt-3">
                  <div className="flex flex-col xs5:items-start items-center gap-[0.3rem]">
                     <div className="flex items-center gap-x-2">
                        <div className="w-4 h-4 text-[#F44242]">
                           <SvgLocationIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Heebo-Regular',_sans-serif] text-[10px] font-normal relative">
                           Lorem ipsum dolor sit
                        </div>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <div className="w-4 h-4 text-[#57C500]">
                           <SvgCheckWithBgIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                           Trust Seal Verified
                        </div>
                     </div>
                     <div className="flex items-center gap-x-2">
                        <div className="w-4 h-4 text-[#57C500]">
                           <SvgCircleBgStarIcon />
                        </div>
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                           Star Supplier
                        </div>
                     </div>
                  </div>
                  <div className="flex xs4:flex-row flex-col gap-2">
                     <div className="bg-[#ededed] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg xs3:w-[125px] w-full h-9 flex justify-center items-center gap-x-[.4rem]">
                        <div>Contact Supplier</div>
                        <div className="w-4 h-4">
                           <SvgPlainIcon />
                        </div>
                     </div>

                     {vendor?.phone ? (
                        <ViewMobileNumberBtn contactNumber={vendor.phone} />
                     ) : null}
                  </div>
               </div>
            </Card>

            <MessageSendArea toId={toId} />
         </div>
      </div>
   );
}
