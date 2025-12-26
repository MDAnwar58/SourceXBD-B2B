"use client";
import React from "react";

type Props = {
   CompanyType: any[];
};

export default function Categories({ CompanyType }: Props) {
   return (
      <div className="px-1 border-b-2 border-solid border-gray-300 pb-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pt-3">
            Categories
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow-admin-card px-4 py-3 mt-2">
            <div className="flex flex-wrap gap-2">
               {CompanyType?.length > 0 ? (
                  CompanyType.map((type, i: number) => (
                     <div
                        key={i + 1}
                        className="bg-[#eeeeee] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-auto py-[0.35rem] px-3 flex justify-center items-center"
                     >
                        {type}
                     </div>
                  ))
               ) : (
                  <div className="bg-[#eeeeee] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-full py-[0.35rem] px-3 flex justify-center items-center">
                     Data not found
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
