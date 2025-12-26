"use client";
import React, { useState } from "react";
import { FilterSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

type Props = {
   listLabel?: string | undefined;
   onHandleSearchBtn?: (search: string) => void | undefined;
   searchRef?: any | undefined;
};

export default function ApproveTableHeader({
   listLabel,
   onHandleSearchBtn,
   searchRef,
}: Props) {
   const [onChangeData, setOnChangeData] = useState<string>("");
   return (
      <div className="xs:flex items-center justify-between pb-4">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
            {listLabel}
         </div>
         <div className="flex flex-row gap-2">
            <Input
               type="search"
               placeholder="Search..."
               className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 focus:border-none rounded-[10px] h-[30px] w-full px-5 text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal"
               onChange={(e) => setOnChangeData(e.target.value)}
               inputRef={searchRef}
            />
            <Button
               type="button"
               className="bg-[#e9e9e9] text-gray-600 w-11 h-[1.85rem] rounded-lg flex justify-center items-center drop-shadow-sm"
               onClick={() => onHandleSearchBtn?.(onChangeData)}
            >
               <div className="w-4 h-4">
                  <FilterSvgIcon />
               </div>
            </Button>
         </div>
      </div>
   );
}
