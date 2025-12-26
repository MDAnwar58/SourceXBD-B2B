"use client";
import React, { ChangeEvent, useState } from "react";
import { SvgSearchIcon } from "./SvgIcons";
import CommonContext from "@/app/(userend)/features/CommonContext";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/Input"));
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   scrollY?: any | undefined;
};

export default function WithTransparentNavbarDownSearchBar({ scrollY }: Props) {
   const { setSearch, onHandleSearch } = CommonContext();
   const visibilityClass = scrollY < 100 ? "visible-manus" : "hidden-manus";
   return (
      <div
         className={`${scrollY < 100 ? "3xs:w-[320px]" : "pb-5"} w-full xl:hidden block ${visibilityClass}`}
      >
         <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 transition-all duration-300 ease-in-out">
               <div
                  className={`w-4 h-4 ${scrollY < 100 ? "text-[#ffffff]" : "text-[#4285f4]"} overflow-visible`}
               >
                  <SvgSearchIcon />
               </div>
            </div>
            <Input
               type="search"
               className={`w-full px-11 h-[49px] py-4 text-sm bg-transparent rounded-[30px] border-solid ${
                  scrollY < 100
                     ? "border-[#ffffff] focus:border-[#ffffff]"
                     : "border-[#4285f4] focus:border-[#4285f4]"
               } border-2 focus:ring-0  text-[#969696] text-left font-['Raleway-Medium',_sans-serif] text-[6px] font-medium transition-colors duration-300 ease-in-out`}
               onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
               }
               placeholder="Search,What you need..."
            />
            <Button
               type="button"
               className={`${scrollY < 100 ? "text-white hover:text-gray-700 hover:bg-white border-white" : "text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-[#4285f4]"}  border-2  px-4 h-9 absolute inset-y-0 top-0 right-2 my-[0.4rem] rounded-2xl transition-all duration-200 ease-in-out`}
               onClick={onHandleSearch}
            >
               Search
            </Button>
         </div>
      </div>
   );
}
