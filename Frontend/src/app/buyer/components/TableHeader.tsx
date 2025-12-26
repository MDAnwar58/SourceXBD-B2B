"use client";
import React from "react";
import { PlusSvgIcon, ReloadSvgIcon } from "./SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   listLabel?: string | undefined;
   link?: string | undefined;
   linkName?: string | null | undefined;
   onHandleResetTable?: (
      page: number,
      limit: number,
      search: string
   ) => void | undefined;
   resetBtn?: boolean | undefined;
};

export default function BuyerTableHeader({
   listLabel,
   link,
   linkName = "Add New",
   onHandleResetTable,
   resetBtn,
}: Props) {
   return (
      <div
         className={`${listLabel || link ? "xs:flex items-center justify-between pb-4" : ""}`}
      >
         {listLabel && (
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
               {listLabel}
            </div>
         )}

         {link && (
            <div
               className={` flex flex-row ${!listLabel ? " justify-end w-full" : ""} gap-3`}
            >
               {resetBtn && (
                  <Button
                     type="button"
                     className="bg-[#e9e9e9] text-gray-700 w-7 h-7 rounded-lg flex justify-center items-center"
                     onClick={() => onHandleResetTable?.(1, 5, "")}
                  >
                     <div className="w-4 h-4">
                        <ReloadSvgIcon />
                     </div>
                  </Button>
               )}
               <NavLink href={link}>
                  <span className="bg-[#e9e9e9] text-[#515151] rounded-lg px-3 h-7 flex items-center justify-center gap-x-2">
                     <div className=" text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                        {linkName}
                     </div>
                     <div className="w-2.5 h-2.5">
                        <PlusSvgIcon />
                     </div>
                  </span>
               </NavLink>
            </div>
         )}
      </div>
   );
}
