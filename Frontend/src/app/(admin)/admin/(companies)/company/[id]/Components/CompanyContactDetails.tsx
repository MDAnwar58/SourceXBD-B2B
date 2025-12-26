"use client";
import React from "react";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/Input"), { ssr: false });

type ContactDetails = {
   email: string;
   phone: string;
   industry: string;
   city: string;
   country: string;
   iso: number;
};

type Props = {
   ContactDetails: ContactDetails;
};

export default function CompanyContactDetails({ ContactDetails }: Props) {
   let clityOrCountryIso =
      ContactDetails?.iso !== undefined ? ContactDetails?.iso : "";

   return (
      <div className="px-1 border-b-2 border-solid border-gray-300 pb-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pt-3">
            Contact Details
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow-admin-card px-4 py-3 mt-2">
            <div className="">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Email Address
               </div>
               <Input
                  type="email"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                  placeholder="example@gmail.com"
                  defaultValue={ContactDetails?.email}
                  disabled
               />
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Phone Number
               </div>
               <div className=" relative">
                  <div className=" absolute top-[44.65%] left-3 transform-translate-y-middle flex items-center gap-[.1rem] text-[#9b9b9b] font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     <div className="pt-[.1rem]">+880</div> |
                  </div>
                  <Input
                     type="email"
                     className="bg-[#ffffff] text-[#9b9b9b] ps-11 border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                     placeholder=" 1953683518"
                     defaultValue={ContactDetails?.phone}
                     disabled
                  />
               </div>
            </div>
            <div className="pt-2 flex items-center gap-x-3">
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                     Industry
                  </div>
                  <Input
                     type="email"
                     className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                     placeholder="Lorem Ipsum"
                     defaultValue={ContactDetails?.industry}
                     disabled
                  />
               </div>
               <div>
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                     City / Country
                  </div>

                  <Input
                     type="email"
                     className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                     placeholder="city / country"
                     defaultValue={ContactDetails?.city}
                     disabled
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
