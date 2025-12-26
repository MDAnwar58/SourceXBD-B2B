"use client";
import dynamic from "next/dynamic";
import React from "react";
const Input = dynamic(() => import("@/components/Input"));

type UserContact = {
   email: string;
   phone: string;
};

type Props = {
   email: string;
   userContact: UserContact;
};

export default function UserContactDetails({ email, userContact }: Props) {
   const phoneNumber = userContact?.phone !== "" ? userContact?.phone : "";
   return (
      <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow-admin-card px-4 py-3 mt-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
            Contact Details
         </div>
         <div className="pt-2">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
               Email Address
            </div>
            <Input
               type="email"
               className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] xs3:ms-1"
               placeholder="naimul46823@gmail.com"
               defaultValue={
                  userContact?.email !== ""
                     ? userContact?.email
                     : email
                       ? email
                       : ""
               }
               readOnly
            />
         </div>
         <div className="pt-2">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
               Phone Number
            </div>
            <div className=" relative">
               <div className=" absolute top-[50%] left-4 transform-translate-y-middle text-[#9b9b9b] font-['Arial-Regular',_sans-serif] text-xs font-normal flex">
                  <div className="pt-[.055rem] pe-1">+880</div>
                  <div> |</div>
               </div>
               <Input
                  type="email"
                  className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] xs3:ms-1 px-12"
                  placeholder="1953683518"
                  defaultValue={phoneNumber}
                  readOnly
               />
            </div>
         </div>
      </div>
   );
}
