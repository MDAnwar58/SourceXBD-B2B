"use client";
import React, { useState } from "react";
import AdminCard from "@admin/components/card";
import {
   DashboardQucikActionSearchSvgIcon,
   DownArrowSvgIcon,
} from "@admin/components/SvgIcons";
import Input from "@/components/Input";
import Img from "@/components/Image";
import SearchDropdown from "./SearchDropdown";

export default function SearchCard() {
   const [searchDropdown, setSearchDropdown] = useState(false);
   return (
      <AdminCard className="!p-0">
         <div className="relative">
            <div className="w-3.5 h-3.5 absolute top-[50%] left-4 transform-translate-y-middle">
               <DashboardQucikActionSearchSvgIcon />
            </div>
            <Input
               type="search"
               className="bg-[rgba(152,176,238,0.05)] text-[#515151] shadow-sm border-none focus:ring-0 text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium rounded-[14px] h-[45px] w-full px-11"
               placeholder="Search by name or email...."
            />
            <div
               className=" cursor-pointer bg-[rgba(255,255,255,0.50)] text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium rounded-lg w-[60px] h-8 shadow-admin-xs flex items-center justify-center gap-x-[.1rem] absolute right-2 top-[50%] transform-translate-y-middle"
               onClick={() => setSearchDropdown(!searchDropdown)}
            >
               <span>All</span>
               <div className="w-5 h-5">
                  <DownArrowSvgIcon />
               </div>
               {/* <ArrowUpSvgIcon /> */}
            </div>
         </div>

         {searchDropdown === true && <SearchDropdown />}
      </AdminCard>
   );
}
