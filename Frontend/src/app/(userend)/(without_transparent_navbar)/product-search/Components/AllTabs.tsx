"use client";
import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";

type Category = {
   id: string;
   name: string;
   slug: string;
};

export default function AllTabs() {
   const { categories } = useSelector(
      (state: RootState) => state.userend.productSearch
   );
   const Categories: Category[] = categories;
   return (
      <div
         className="flex items-center gap-5 w-full max-w-full overflow-x-auto whitespace-nowrap scroll-smooth pb-3"
         style={{ scrollbarWidth: "none" }}
      >
         <div>
            <div
               className="text-[#ffffff] text-center rounded-2xl font-['Raleway-Bold',_sans-serif] text-md font-bold w-32 py-2"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 25%,rgba(85, 118, 179, 1) 92.5000011920929%)",
               }}
            >
               All
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
         <div>
            <div className="bg-[#eaeaea] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] px-5 py-2">
               Lorem ipsum
            </div>
         </div>
      </div>
   );
}
