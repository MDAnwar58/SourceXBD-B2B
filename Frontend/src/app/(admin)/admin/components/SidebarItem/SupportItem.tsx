"use client";
import React, { memo } from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   FAQsSvgIcon,
   SupportRequestSvgIcon,
   SupportSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   param?: any | undefined;
};

function SupportItem({ active, pathname, sidebarItemsHandle, param }: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Support"
               ? pathname === "/admin/supports" ||
                 pathname === `/admin/support/${param}` ||
                 pathname === "/admin/faqs"
                  ? "support"
                  : "support"
               : ""
         }`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5 rounded-2xl w-[299px] h-[42px] ${
               active === "Support"
                  ? pathname === "/admin/supports" ||
                    pathname === `/admin/support/${param}` ||
                    pathname === "/admin/faqs"
                     ? "bg-gradient-sider-item shadow-sider-item text-white"
                     : "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            } text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-100 ease-in-out`} // Reduced duration to 100ms
            onClick={() => {
               sidebarItemsHandle(active === "Support" ? "" : "Support");
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <SupportSvgIcon />
               </div>
               <div>Support</div>
            </div>
            <div className="w-6 h-6">
               {active === "Support" ? (
                  pathname === "/admin/supports" ||
                  pathname === `/admin/support/${param}` ||
                  pathname === "/admin/faqs" ? (
                     <ArrowUpSvgIcon />
                  ) : (
                     <ArrowUpSvgIcon />
                  )
               ) : (
                  <ArrowRightSvgIcon />
               )}
            </div>
         </a>

         {/* Dropdown section */}
         <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
               active === "Support"
                  ? pathname === "/admin/supports" ||
                    pathname === `/admin/support/${param}` ||
                    pathname === "/admin/faqs"
                     ? "max-h-96"
                     : "max-h-96"
                  : "max-h-0"
            }`} // Controlled max-height for smoother animation
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Support" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/supports">
                        <div
                           className={`${
                              pathname === "/admin/supports" ||
                              pathname === `/admin/support/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <SupportRequestSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Support Requests
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Support" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/faqs">
                        <div
                           className={`${
                              pathname === "/admin/faqs"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <FAQsSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 FAQs
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

export default memo(SupportItem);
