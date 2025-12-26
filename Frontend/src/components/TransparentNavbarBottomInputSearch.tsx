"use client";
import React, { ChangeEvent } from "react";
import { SvgSearchIcon } from "./SvgIcons";
import CommonContext from "@/userend/features/CommonContext";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("./Input"), {
   ssr: false,
});
const Button = dynamic(() => import("./Button"), {
   ssr: false,
});

export default function TransparentNavbarBottomInputSearch() {
   const { setSearch, onHandleSearch } = CommonContext();
   return (
      <div className="w-full xl:hidden block pt-5">
         <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5">
               <div className="w-3.5 h-3.5 text-[#4285f4] overflow-visible">
                  <SvgSearchIcon />
               </div>
            </div>
            <Input
               type="search"
               className="w-full px-11 h-[49px] py-4 text-sm bg-transparent rounded-[30px] border-solid border-[#4285f4] border-2 focus:ring-0 text-[#969696] text-left font-['Raleway-Medium',_sans-serif] text-[6px] font-medium"
               onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
               }
               placeholder="Search,What you need............"
            />
            <Button
               type="button"
               className=" text-[#4285f4] hover:text-white hover:bg-[#4285f4] border-2 border-[#4285f4] px-5 h-9 absolute inset-y-0 top-0 right-2 my-[0.4rem] rounded-2xl transition-all duration-200 ease-in-out"
               onClick={onHandleSearch}
            >
               Search
            </Button>
         </div>
      </div>
   );
}
