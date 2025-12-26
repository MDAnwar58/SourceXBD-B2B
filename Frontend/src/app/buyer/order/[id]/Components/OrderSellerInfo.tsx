"use client";
import React from "react";

type OrderSellerInfo = {
   company: string;
   companyPhone: string;
   name: string;
   phone: string;
   email: string;
};

type Props = {
   orderSellerInfo: OrderSellerInfo;
};

export default function OrderSellerInfo({ orderSellerInfo }: Props) {
   return (
      <div className="bg-[#f0f0f0] rounded-[10px]  mt-4 ">
         <div className="flex justify-between p-3">
            <div>
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Company
               </p>
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium  pt-3">
                  Company Phone Number
               </p>
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium  pt-3">
                  Seller name
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Email
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Phone Number
               </p>
            </div>
            <div>
               <p className="text-[#515151] text-right font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {orderSellerInfo?.company}
               </p>
               <p className="text-[#515151] text-right font-['Raleway-Medium',_sans-serif] text-[10px] font-medium  pt-3">
                  {orderSellerInfo?.companyPhone}
               </p>
               <p className="text-[#515151] text-right font-['Raleway-Medium',_sans-serif] text-[10px] font-medium  pt-3">
                  {orderSellerInfo?.name}
               </p>
               <p className="text-[#4285f4] text-right pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  {orderSellerInfo?.email}
               </p>
               <p className="text-[#515151] text-right pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  +880 - {orderSellerInfo?.phone}
               </p>
            </div>
         </div>
      </div>
   );
}
