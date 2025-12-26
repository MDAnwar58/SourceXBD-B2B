"use client";
import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";

type Category = {
   id: string;
   name: string;
   slug: string;
};

type Props = {
   slug: string;
   getProductsWithCategory: any;
};

export default function AllTabs({ slug, getProductsWithCategory }: Props) {
   const { categories } = useSelector(
      (state: RootState) => state.userend.product
   );

   const Categories: Category[] = categories;
   return (
      <div
         className="flex items-center gap-5 w-full max-w-full overflow-x-auto whitespace-nowrap pt-10 pb-5 border-b-2 border-gray-600"
         style={{ scrollbarWidth: "none" }}
      >
         <div>
            <div
               className={` ${
                  slug === "all"
                     ? "bg-blue-gradient text-[#ffffff] w-32 py-2 text-md font-bold text-center  rounded-2xl"
                     : "bg-[#eaeaea] text-[#515151] px-7 py-2 text-xs font-medium  rounded-[10px]"
               } cursor-pointer font-['Raleway-Bold',_sans-serif]`}
               onClick={() => getProductsWithCategory("all")}
            >
               All
            </div>
         </div>
         {Categories &&
            Categories.length > 0 &&
            Categories.map((category: Category, index: number) => (
               <div key={index}>
                  <div
                     className={`${
                        category?.slug === slug
                           ? "bg-blue-gradient text-[#ffffff] w-32 py-2 text-md font-bold text-center  rounded-2xl"
                           : "bg-[#eaeaea] text-[#515151] px-7 py-2 text-xs font-medium rounded-[10px]"
                     } cursor-pointer text-left font-['Raleway-Medium',_sans-serif] `}
                     onClick={() => getProductsWithCategory(category?.slug)}
                  >
                     {category?.name}
                  </div>
               </div>
            ))}
      </div>
   );
}
