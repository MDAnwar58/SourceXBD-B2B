"use client";
import React from "react";

type Props = {
   category: {
      type: string;
   };
};

export default function Categories({ category }: Props) {
   return (
      <div className="px-1 border-b-2 border-solid border-gray-300 pb-5">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold  pt-3">
            Category Type
         </div>
         <div className="bg-[rgba(152,176,238,0.05)] rounded-[14px] shadow-admin-card px-4 py-3 mt-2">
            <div className="flex flex-wrap gap-2">
               <div className="bg-[#eeeeee] text-[#515151] w-auto text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg px-5 py-[0.35rem] flex justify-center items-center">
                  {category?.type}
               </div>
            </div>
         </div>
      </div>
   );
}
