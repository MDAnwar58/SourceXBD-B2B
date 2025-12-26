import NavLink from "@/components/NavLink";
import React from "react";
import { CategoriesSvgIcon } from "../SvgIcons";

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function CategoriesItem({ pathname, param }: Props) {
   return (
      <li>
         <NavLink
            href="/admin/categories"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${
               pathname === "/admin/categories" ||
               pathname === "/admin/category-create" ||
               pathname === `/admin/category/${param}`
                  ? "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-5 h-5">
                  <CategoriesSvgIcon />
               </div>
               <div>Categories</div>
            </div>
         </NavLink>
      </li>
   );
}
