"use client";
import React from "react";
import {
   AppBarAccountSvgIcon,
   AppBarHomeSvgIcon,
   AppBarMessageSvgIcon,
   AppBarPlusSvgIcon,
   AppBarShapSvgIcon,
} from "@/components/SvgIcons";
import { usePathname } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function MobileAppFooter() {
   const pathname = usePathname();
   return (
      <div className=" sm:hidden block bg-white py-3 xs3:px-5 px-3 sticky bottom-0 left-0 z-50">
         <div className="bg-[#d0d6ff] rounded-[20px] xs3:px-7 xs4:px-4 px-3">
            <div className="flex justify-between items-center h-[51px]">
               <NavLink href="/">
                  <div
                     className={`w-8 h-8 ${
                        pathname === "/"
                           ? "text-[#4285F4]"
                           : "text-white hover:text-[#4285F4]"
                     }`}
                  >
                     <AppBarHomeSvgIcon />
                  </div>
               </NavLink>
               <a href="">
                  <div
                     className={`w-8 h-8 ${
                        pathname === "/test"
                           ? "text-[#4285F4]"
                           : "text-white hover:text-[#4285F4]"
                     }`}
                  >
                     <AppBarMessageSvgIcon />
                  </div>
               </a>
               <a href="">
                  <div
                     className={`w-8 h-8 ${
                        pathname === "/test"
                           ? "text-[#4285F4]"
                           : "text-white hover:text-[#4285F4]"
                     }`}
                  >
                     <AppBarPlusSvgIcon />
                  </div>
               </a>
               <NavLink href="/products">
                  <div
                     className={`w-8 h-8 ${
                        pathname === "/products"
                           ? "text-[#4285F4]"
                           : "text-white hover:text-[#4285F4]"
                     }`}
                  >
                     <AppBarShapSvgIcon />
                  </div>
               </NavLink>
               <a href="">
                  <div
                     className={`w-8 h-8 ${
                        pathname === "/test"
                           ? "text-[#4285F4]"
                           : "text-white hover:text-[#4285F4]"
                     }`}
                  >
                     <AppBarAccountSvgIcon />
                  </div>
               </a>
            </div>
         </div>
      </div>
   );
}
