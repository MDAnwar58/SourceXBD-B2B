"use client";
import React, { Fragment } from "react";
import { RightArrowSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Category = {
   id: string;
   name: string;
   slug: string;
};

type Props = {
   categories: Category[];
   selectedCategory?: {
      id: number | null;
      name: string;
   };
   setSelectedCategory?: any;
   setIsDropdownOpen?: any;
};

export default function FilterCategoryDropDown({
   categories,
   selectedCategory,
   setSelectedCategory,
   setIsDropdownOpen,
}: Props) {
   return (
      <Fragment>
         <div className="absolute top-16 left-0 z-10 w-auto h-auto bg-white shadow-hero-card rounded-2xl p-3">
            <div>
               <Button
                  type="button"
                  onClick={() => {
                     setSelectedCategory({
                        id: null,
                        name: "all",
                        slug: "",
                     });
                     setIsDropdownOpen(false);
                  }}
                  className="w-full"
               >
                  <div
                     className={`${
                        selectedCategory?.name === "all"
                           ? "text-white bg-blue-gradient"
                           : "text-gray-700 hover:bg-blue-gradient hover:text-white"
                     } px-5 py-2 rounded-xl text-md font-medium flex flex-row items-center justify-between cursor-pointer transition-colors duration-150 ease-in-out`}
                  >
                     <div className="pe-5">All</div>
                     <div className="w-4 h-4 ">
                        <RightArrowSvgIcon />
                     </div>
                  </div>
               </Button>
            </div>
            {categories &&
               categories.length > 0 &&
               categories.map((category: Category, index: number) => (
                  <div key={index}>
                     <Button
                        type="button"
                        onClick={() => {
                           setSelectedCategory({
                              id: Number(category?.id),
                              name: category?.name,
                              slug: category?.slug,
                           });
                           setIsDropdownOpen(false);
                        }}
                        className="w-full"
                     >
                        <div
                           className={`${
                              Number(category?.id) === selectedCategory?.id
                                 ? "text-white bg-blue-gradient"
                                 : "text-gray-700 hover:bg-blue-gradient hover:text-white"
                           } px-5 py-2 rounded-xl text-md font-medium flex flex-row items-center justify-between cursor-pointer transition-colors duration-150 ease-in-out`}
                        >
                           <div className="pe-5">{category?.name}</div>
                           <div className="w-4 h-4 ">
                              <RightArrowSvgIcon />
                           </div>
                        </div>
                     </Button>
                  </div>
               ))}
         </div>
      </Fragment>
   );
}
