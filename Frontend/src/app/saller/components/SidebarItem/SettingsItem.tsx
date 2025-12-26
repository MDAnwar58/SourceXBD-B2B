"use client";
import React, { memo } from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   ManProfileSvgIcon,
   NotifySvgIcon,
   SettingsSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   activeSubItem?: any | undefined;
   setActiveSubItem?: any | undefined;
   param?: any | undefined;
};

function SettingsItem({ active, pathname, sidebarItemsHandle, param }: Props) {
   return (
      <li className={`sidebar-item ${active === "Settings" ? "settings" : ""}`}>
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl   xs3:w-[299px] w-full h-[42px] ${active === "Settings" ? "bg-gradient-sider-item shadow-sider-item text-white" : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"}  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
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
         {/* TODO: Dropdown section */}
         <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
               active === "Settings" ? "max-h-96" : "max-h-0"
            }`}
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Settings" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/profile-settings">
                        <div
                           className={`${
                              pathname === "/saller/profile-settings"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <ManProfileSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Profile settings
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Settings" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/notification-settings">
                        <div
                           className={`${
                              pathname === "/saller/notification-settings"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem !text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <NotifySvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Notification settings
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

export default memo(SettingsItem);
