"use client";
import React from "react";
import { ItemBlogsSvgIcon } from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function BlogsItem({ pathname, param }: Props) {
   return (
      <li>
         <NavLink
            href="/admin/blogs"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${pathname === "/admin/blogs" || pathname === "/admin/blog-create" || pathname === `/admin/blog-edit/${param}` ? "bg-gradient-sider-item shadow-sider-item text-white" : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"}  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6 ">
                  <ItemBlogsSvgIcon />
               </div>
               <div>Blogs</div>
            </div>
         </NavLink>
      </li>
   );
}
