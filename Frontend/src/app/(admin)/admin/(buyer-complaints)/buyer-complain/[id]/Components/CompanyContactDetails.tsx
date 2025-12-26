"use client";
import React, { useEffect, useState } from "react";
import Input from "@/components/Input";

type ContactDetails = {
   email: string;
   phone: string;
   industry: string;
   country_iso: string;
   phonecode: string;
   city: string;
};

type Props = {
   contactDetails: ContactDetails;
};

export default function CompanyContactDetails({ contactDetails }: Props) {
   const [cityAndIso, setCityAndIso] = useState<string>("");

   useEffect(() => {
      if (contactDetails?.country_iso && contactDetails?.city) {
         let cityIso = `${contactDetails.city} / ${contactDetails.country_iso}`;
         setCityAndIso(cityIso);
      }
   }, [contactDetails?.country_iso, contactDetails?.city]);

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
                  defaultValue={contactDetails.email}
                  disabled
               />
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Phone Number
               </div>
               <div className=" relative">
                  <div className="ps-3 flex items-center absolute top-[47%] left-0 transform-translate-y-middle text-[#9b9b9b] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     <div className="pt-[.1rem] pe-[.15rem]">+880</div> |
                  </div>
                  <Input
                     type="email"
                     className="bg-[#ffffff] ps-11 text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                     placeholder="19xxxxxxxx"
                     defaultValue={contactDetails.phone}
                     disabled
                  />
               </div>
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Industry
               </div>
               <Input
                  type="email"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                  placeholder="Lorem Ipsum"
                  defaultValue={contactDetails.industry}
                  disabled
               />
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  City / Country
               </div>

               <Input
                  type="email"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                  placeholder="Khulna / BD"
                  defaultValue={cityAndIso}
                  disabled
               />
            </div>
         </div>
      </div>
   );
}
