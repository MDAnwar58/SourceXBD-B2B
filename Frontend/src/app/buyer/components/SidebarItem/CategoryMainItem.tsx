"use client";
import React, { memo } from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   CategoriesSvgIcon,
} from "../SvgIcons";
import NavLink from "@/components/NavLink";

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   activeSubItem?: any | undefined;
   setActiveSubItem?: any | undefined;
   param?: any | undefined;
};

function CategoryMainItem({
   active,
   pathname,
   sidebarItemsHandle,
   param,
}: Props) {
   return (
      <li
         className={`sidebar-item ${active === "Categories" ? "categories" : ""}`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${active === "Categories" ? "bg-gradient-sider-item shadow-sider-item text-white" : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"}  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(active === "Categories" ? "" : "Categories");
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <CategoriesSvgIcon />
               </div>
               <div>Categories</div>
            </div>
            {active === "Categories" ? (
               <div className="w-6 h-6">
                  <ArrowUpSvgIcon />
               </div>
            ) : (
               <div className="w-6 h-6">
                  <ArrowRightSvgIcon />
               </div>
            )}
         </a>
         {/* TODO: Dropdown section */}
         <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
               active === "Categories" ? "max-h-96" : "max-h-0"
            }`}
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Categories" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/category-types">
                        <div
                           className={`${
                              pathname === "/admin/category-types" ||
                              pathname === "/admin/category-type-create" ||
                              pathname === `/admin/category-type/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <CategoriesSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Category Types
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Categories" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/categories">
                        <div
                           className={`${
                              pathname === "/admin/categories" ||
                              pathname === "/admin/category-create" ||
                              pathname === `/admin/category/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <CategoriesSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Categories
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Categories" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/sub_categories">
                        <div
                           className={`${
                              pathname === "/admin/sub_categories" ||
                              pathname === "/admin/sub_category-create" ||
                              pathname === `/admin/sub_category/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <CategoriesSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Sub Categories
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </li>
   );
}

export default memo(CategoryMainItem);
