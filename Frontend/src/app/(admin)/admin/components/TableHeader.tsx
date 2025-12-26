"use client";
import React, { MouseEventHandler } from "react";
import { PlusSvgIcon, ReloadSvgIcon } from "./SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const Button = dynamic(() => import("@/components/Button"), { ssr: false });

type Props = {
   listLabel?: string | undefined;
   link?: string | undefined;
   linkName?: string | null | undefined;
   onHandleResetTable?: (
      page: number,
      perPage: number,
      search: string
   ) => void | undefined;
};

export default function TableHeader({
   listLabel,
   link,
   linkName = "Add New",
   onHandleResetTable,
}: Props) {
   return (
      <div className="xs:flex items-center justify-between pb-4">
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative">
            {listLabel}
         </div>
         <div className="flex flex-row gap-3">
            <Button
               type="button"
               className="bg-[#e9e9e9] text-gray-700 w-7 h-7 rounded-lg flex justify-center items-center"
               onClick={() => onHandleResetTable?.(1, 5, "")}
            >
               <div className="w-4 h-4">
                  <ReloadSvgIcon />
               </div>
            </Button>
            <NavLink href={link}>
               <div className="bg-[#e9e9e9] text-[#515151] rounded-lg w-[98px] h-7 flex items-center justify-center gap-x-2">
                  <div className=" text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                     {linkName}
                  </div>
                  <div className="w-2.5 h-2.5">
                     <PlusSvgIcon />
                  </div>
               </div>
            </NavLink>
         </div>
      </div>
   );
}
