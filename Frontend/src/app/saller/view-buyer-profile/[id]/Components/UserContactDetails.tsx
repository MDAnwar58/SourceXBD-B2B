import Input from "@/components/Input";
import { usePhoneNumberFormat } from "@/components/react/truncate-text";
import React from "react";

type Props = {
   buyerContactDetails: { email: string; phone: string };
};

export default function UserContactDetails({ buyerContactDetails }: Props) {
   let phone = "";
   if (buyerContactDetails?.phone !== "") {
      const phoneNumber = usePhoneNumberFormat(buyerContactDetails?.phone);
      phone = phoneNumber;
   }
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
               defaultValue={buyerContactDetails.email}
               disabled
            />
         </div>
         <div className="pt-2">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-1">
               Phone Number
            </div>
            <div className=" relative">
               <div className=" absolute top-[48%] left-4 transform-translate-y-middle flex items-center gap-[.15rem] text-[#9b9b9b] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  <div className="pt-[.145rem]"> +880</div> |
               </div>
               <Input
                  type="text"
                  className="px-11 bg-[#ffffff] text-[#9b9b9b] border border-solid border-[#c8c8c8] focus:ring-0 focus:border-gray-300 rounded-md text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full h-[31px] xs3:ms-1"
                  placeholder="19xxxxxxxxx"
                  defaultValue={phone}
                  disabled
               />
            </div>
         </div>
      </div>
   );
}
