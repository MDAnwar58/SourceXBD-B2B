import Input from "@/components/Input";
import React from "react";

export default function UserContactDetails() {
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
            />
         </div>
         <div className="pt-2">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
               Phone Number
            </div>
            <Input
               type="email"
               className="bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] xs3:ms-1"
               placeholder="+880 | 1953683518"
            />
         </div>
      </div>
   );
}
