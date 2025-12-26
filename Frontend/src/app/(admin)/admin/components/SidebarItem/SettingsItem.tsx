"use client";
import React, { memo, useEffect, useState } from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   FAQsSvgIcon,
   SecuritySvgIcon,
   SettingsSvgIcon,
   SupportRequestSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   activeSubItem?: any | undefined;
   setActiveSubItem?: any | undefined;
};

function SettingsItem({
   active,
   pathname,
   sidebarItemsHandle,
   activeSubItem,
   setActiveSubItem,
}: Props) {
   return (
      <li className={`sidebar-item ${active === "Settings" ? "settings" : ""}`}>
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${active === "Settings" ? "bg-gradient-sider-item shadow-sider-item text-white" : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"}  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(active === "Settings" ? "" : "Settings");
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <SettingsSvgIcon />
               </div>
               <div>Settings</div>
            </div>
            {active === "Settings" ? (
               <div className="w-6 h-6">
                  <ArrowUpSvgIcon />
               </div>
            ) : (
               <div className="w-6 h-6">
                  <ArrowRightSvgIcon />
               </div>
            )}
         </a>
         {/* Dropdown section */}
         <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
               active === "Settings" ? "max-h-96" : "max-h-0"
            }`} // Controlled max-height for smoother animation
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  {/* <li
                     className={`${active === "Settings" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/settings">
                        <div
                           className={`${
                              pathname === "/admin/settings"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <SupportRequestSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Platform Settings
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  <li
                     className={`${active === "Settings" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/admin-settings">
                        <div
                           className={`${
                              pathname === "/admin/admin-settings"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <FAQsSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Admin Setiings
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`
                        ${active === "Settings" ? "sidebar-sub-item" : ""} 
                        ${activeSubItem === "Security Settings" ? "security_settings" : ""}
                        `}
                  >
                     <a
                        onClick={() =>
                           setActiveSubItem(
                              activeSubItem === "Security Settings"
                                 ? ""
                                 : "Security Settings"
                           )
                        }
                     >
                        <div
                           className={`${
                              activeSubItem === "Security Settings"
                                 ? pathname ===
                                   "/admin/security-settings/two-factor"
                                    ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                    : "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <SecuritySvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Security Settings
                              </div>
                           </div>
                           {activeSubItem === "Security Settings" ? (
                              pathname ===
                              "/admin/security-settings/two-factor" ? (
                                 <div className="w-6 h-6">
                                    <ArrowUpSvgIcon />
                                 </div>
                              ) : (
                                 <div className="w-6 h-6">
                                    <ArrowUpSvgIcon />
                                 </div>
                              )
                           ) : (
                              <div className="w-6 h-6">
                                 <ArrowRightSvgIcon />
                              </div>
                           )}
                        </div>
                     </a>

                     <div
                        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                           activeSubItem === "Security Settings"
                              ? pathname ===
                                "/admin/security-settings/two-factor"
                                 ? "max-h-96"
                                 : "max-h-96"
                              : "max-h-0"
                        }`} // Controlled max-height for smoother animation
                     >
                        <div className="flex justify-center py-2">
                           <ul className="space-y-2">
                              {/* <li
                                 className={`${active === "Settings" && activeSubItem === "Security Settings" ? "sidebar-sub-item-sub-item two_factor" : ""}`}
                              >
                                 <NavLink href="/admin/security-settings/two-factor">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/security-settings/two-factor"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[122px] h-8 flex justify-center items-center`}
                                    >
                                       Two Factor
                                    </div>
                                 </NavLink>
                              </li> */}
                              <li
                                 className={`${active === "Settings" && activeSubItem === "Security Settings" ? "sidebar-sub-item-sub-item two_factor" : ""}`}
                              >
                                 <NavLink href="/admin/security-settings/access-control">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/security-settings/access-control"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-[#f6f7fd] hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[122px] h-8 flex justify-center items-center`}
                                    >
                                       Access Control
                                    </div>
                                 </NavLink>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      </li>
   );
}

export default memo(SettingsItem);
