"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Input = dynamic(() => import("@/components/Input"));

type City = {
   country_id: number;
   desc: string;
   id: number;
   map: string;
   name: string;
   slug: string;
   status: string;
};

type Country = {
   id: number;
   iso: string;
   iso3: string;
   name: string;
   nicename: string;
   numcode: number;
   phonecode: string;
};

type ContactDetails = {
   email: string;
   phone: string;
   industry: string;
   city: City;
   country: Country;
};

type Props = {
   ContactDetails: ContactDetails;
};

export default function CompanyContactDetails({ ContactDetails }: Props) {
   const [countryIso, setCountryIso] = useState<string>("");
   const [cityName, setCityName] = useState<string>("");

   useEffect(() => {
      if (ContactDetails?.country?.iso !== undefined) {
         setCountryIso(ContactDetails?.country?.iso);
      }
      if (ContactDetails?.city?.name !== undefined) {
         setCityName(ContactDetails?.city?.name);
      }
   }, [ContactDetails]);

   let cityOrCountryIso = "";
   if (cityName !== "" && countryIso !== "") {
      cityOrCountryIso = `${cityName}/${countryIso}`;
   }
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
                  <span className="text-[#9b9b9b] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal absolute left-3 top-[49%] transform-translate-y-middle flex items-center">
                     <div className="pt-[.17rem] me-[.15rem]">
                        +{ContactDetails?.country?.phonecode}
                     </div>{" "}
                     |
                  </span>
                  <Input
                     type="email"
                     className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] px-12"
                     placeholder="19xxxxxxxxx"
                     defaultValue={ContactDetails?.phone}
                     disabled
                  />
               </div>
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  Industry
               </div>
               <Input
                  type="text"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                  placeholder=""
                  defaultValue={ContactDetails?.industry}
                  disabled
               />
            </div>
            <div className="pt-2">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
                  City / Country
               </div>

               <Input
                  type="text"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px]"
                  placeholder="City / Country"
                  defaultValue={cityOrCountryIso}
                  disabled
               />
            </div>
         </div>
      </div>
   );
}
