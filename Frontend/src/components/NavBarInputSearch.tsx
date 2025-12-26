"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import CommonContext from "@/userend/features/CommonContext";
import { SvgSearchIcon, SvgArrowIcon } from "@/components/SvgIcons";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const FilterCategoryDropDown = dynamic(
   () => import("./FilterCategoryDropdown"),
   {
      ssr: false,
   }
);

type Category = {
   id: string;
   name: string;
   slug: string;
};

export default function HeroInputSearch() {
   const {
      selectedCategory,
      setSelectedCategory,
      search,
      setSearch,
      onHandleSearch,
   } = CommonContext();
   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const [width, setWidth] = useState(0);
   const elementRef = useRef<HTMLButtonElement | null>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setIsDropdownOpen(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   useEffect(() => {
      const updateWidth = () => {
         if (elementRef.current) {
            setWidth(elementRef.current?.offsetWidth || 0); // No need for `Number` cast
         }
      };

      const resizeObserver = new ResizeObserver(() => {
         updateWidth();
      });

      if (elementRef.current) {
         resizeObserver.observe(elementRef.current);
         updateWidth(); // Initial width update
      }

      return () => {
         resizeObserver.disconnect();
      };
   }, [elementRef.current, width]);

   const { categories = [] } = useSelector(
      (state: RootState) => state.userend.home
   );

   const Categories: Category[] = categories;

   return (
      <div className="relative w-full" ref={dropdownRef}>
         <div className="absolute inset-y-0 start-0 flex items-center ps-2">
            <Button
               type="button"
               buttonRef={elementRef}
               className="rounded-[20px] px-[1.15rem] h-[43px] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold uppercase flex items-center justify-center "
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 25%,rgba(85, 118, 179, 1) 92.5000011920929%)",
               }}
               onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
               }}
            >
               <div>{selectedCategory?.name}</div>
               <div className="w-3.5 h-3.5 text-[#ffffff] ps-1">
                  <SvgArrowIcon />
               </div>
            </Button>
         </div>
         {isDropdownOpen === true && (
            <FilterCategoryDropDown
               categories={Categories}
               selectedCategory={selectedCategory}
               setSelectedCategory={setSelectedCategory}
               setIsDropdownOpen={setIsDropdownOpen}
            />
         )}
         <Input
            type="search"
            className="w-full px-[6.5rem] h-[55px] py-4 text-sm text-gray-900 bg-transparent rounded-[30px] border-solid border-[#4285f4] border shadow-hero-search focus:ring-0"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
               setSearch(e.target.value)
            }
            onClick={() => setIsDropdownOpen(false)}
            placeholder="What you need..."
            style={{
               padding: `0 ${width + 26}px`,
            }}
            defaultValue={search}
         />
         <Button
            type="button"
            className=" absolute inset-y-0 end-0 flex items-center pe-2"
            onClick={onHandleSearch}
         >
            <div
               className="rounded-[20px] w-[122px] h-[43px] py-3 flex items-center justify-center"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 25%,rgba(85, 118, 179, 1) 92.5000011920929%)",
               }}
            >
               <div className="w-5 h-5 text-white overflow-visible">
                  <SvgSearchIcon />
               </div>
               <div className="ps-3 text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                  Search
               </div>
            </div>
         </Button>
      </div>
   );
}
