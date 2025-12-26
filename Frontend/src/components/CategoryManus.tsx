"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
   SvgCategoryManusIcon,
   SvgCrossIcon,
   SvgDownArrowWithLIneIcon,
} from "./SvgIcons";
import { RightArrowSvgIcon } from "@admin/components/SvgIcons";
import "@/assets/css/header.css";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   scrollY?: any | undefined;
};

export default function CategoryManus({ scrollY }: Props) {
   const [categoryDropdown, setCategoryDropdown] = useState<boolean>(false);
   const categoryDropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            categoryDropdownRef.current &&
            !categoryDropdownRef.current.contains(event.target as Node)
         ) {
            setCategoryDropdown(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   const visibilityClass = scrollY < 100 ? "visible-manus" : "hidden-manus";
   return (
      <div
         className={`category-manus sm:flex hidden gap-x-5 ${visibilityClass}`}
      >
         <div ref={categoryDropdownRef} className="flex items-center relative">
            <button
               type="button"
               onClick={() => setCategoryDropdown(!categoryDropdown)}
            >
               <SvgCategoryManusIcon color="white" width={24} height={24} />
            </button>

            {categoryDropdown === true ? (
               <div
                  className="bg-[#f0f2ff] rounded-[20px] h-auto w-[23rem] absolute top-9 left-0 p-5"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <div className="flex flex-row justify-between items-center border-b-2 border-[#4285F4] px-1 pb-2">
                     <div className="flex flex-row items-center gap-3">
                        <div className="bg-white w-9 h-9 rounded-full flex justify-center items-center">
                           <Img
                              src="/assets/images/user.png"
                              alt="User"
                              width={200}
                              height={200}
                              className="rounded-full w-7 h-7 object-cover"
                           />
                        </div>
                        <div className="text-[#98b0ee] text-left font-['Inter-Bold',_sans-serif] text-xl font-bold relative">
                           Hello Sign In
                        </div>
                     </div>
                     <Button
                        type="button"
                        className="w-[9.41px] h-[10.41px] text-gray-700"
                        onClick={() => setCategoryDropdown(false)}
                     >
                        <SvgCrossIcon />
                     </Button>
                  </div>

                  <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold mt-2 mb-[.35rem]">
                     Textile machinerys
                  </div>

                  <div className="space-y-2  border-b-2 border-[#4285F4] px-1 pb-5">
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           New Machinery
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           New Machinery
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           New Machinery
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           Used Textile Spare parts
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                  </div>

                  <div className="text-[#98b0ee] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold mt-2 mb-[.35rem]">
                     Garment machinerys
                  </div>

                  <div className="space-y-2 px-1 pb-5">
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           New Machinery
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           Used Machinery
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           Garment Spare parts
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                     <div className="flex flex-row justify-between items-center">
                        <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                           Used Textile Spare parts
                        </div>
                        <div className="w-5 h-5 text-[#4285F4]">
                           <RightArrowSvgIcon />
                        </div>
                     </div>
                  </div>

                  <div className="flex flex-row justify-between items-center">
                     <div className="text-[#98b0ee] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                        View All
                     </div>
                     <div className="w-3 h-3 text-[#4285F4]">
                        <SvgDownArrowWithLIneIcon />
                     </div>
                  </div>
               </div>
            ) : null}
         </div>
         <NavLink
            href="/about"
            className="text-[#2f2f2f] hover:text-[#4285f4] transition-all duration-500 ease-in-out text-left font-['Raleway-Bold',_sans-serif] text-xl font-normal hover:font-bold"
         >
            <div>About</div>
         </NavLink>
         <NavLink
            href="/products"
            className="text-[#2f2f2f] hover:text-[#4285f4] transition-all duration-500 ease-in-out text-left font-['Raleway-Regular',_sans-serif] text-xl font-normal hover:font-bold"
         >
            <div>Products</div>
         </NavLink>
         <NavLink
            href="/blogs"
            className="text-[#2f2f2f] hover:text-[#4285f4] transition-all duration-500 ease-in-out text-left font-['Raleway-Regular',_sans-serif] text-xl font-normal hover:font-bold"
         >
            <div>Blogs</div>
         </NavLink>
         <NavLink
            href="/contact"
            className="text-[#2f2f2f] hover:text-[#4285f4] transition-all duration-500 ease-in-out text-left font-['Raleway-Regular',_sans-serif] text-xl font-normal hover:font-bold"
         >
            <div>Contact</div>
         </NavLink>
      </div>
   );
}
