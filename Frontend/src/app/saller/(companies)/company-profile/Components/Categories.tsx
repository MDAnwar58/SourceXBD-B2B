"use client";
import React from "react";

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

type Props = {
   CompanyType: CategoryType;
};

export default function Categories({ CompanyType }: Props) {
   return CompanyType !== undefined ? (
      <div className="px-1 border-b-2 border-solid border-gray-300 pb-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pt-3">
            Categories
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow-admin-card px-4 py-3 mt-2">
            <div className="flex flex-wrap gap-2">
               <div className="bg-[#eeeeee] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-auto px-5 py-[0.35rem] flex justify-center items-center">
                  {CompanyType?.name}
               </div>
            </div>
         </div>
      </div>
   ) : null;
}
