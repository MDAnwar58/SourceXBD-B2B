"use client";
import React, { memo } from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   CompaniesUpSvgIcon,
   ManProfileSvgIcon,
   StoreSvgIcon,
} from "@/saller/components/SvgIcons";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   activeSubItem?: any | undefined;
   setActiveSubItem?: any | undefined;
};

function CompaniesItem({
   active,
   pathname,
   sidebarItemsHandle,
   activeSubItem,
   setActiveSubItem,
}: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Companies"
               ? activeSubItem === "Settings"
                  ? "companies-with-subitem"
                  : "companies"
               : ""
         }`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl  xs3:w-[299px] w-full h-[42px] ${
               active === "Companies"
                  ? "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(active === "Companies" ? "" : "Companies");
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <CompaniesUpSvgIcon />
               </div>
               <div>Company</div>
            </div>
            {active === "Companies" ? (
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
               active === "Companies" ? "max-h-96" : "max-h-0"
            }`} // Controlled max-height for smoother animation
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Companies" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/company-profile">
                        <div
                           className={`${
                              pathname === "/saller/company-profile"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <ManProfileSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Company Profile
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`
                        ${active === "Companies" ? "sidebar-sub-item" : ""} 
                        ${activeSubItem === "Settings" ? "company_settings" : ""}
                        `}
                  >
                     <a
                        onClick={() =>
                           setActiveSubItem(
                              activeSubItem === "Settings" ? "" : "Settings"
                           )
                        }
                     >
                        <div
                           className={`${
                              activeSubItem === "Settings"
                                 ? pathname ===
                                   "/admin/security-settings/two-factor"
                                    ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                    : "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <StoreSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Settings
                              </div>
                           </div>
                           {activeSubItem === "Settings" ? (
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
                           activeSubItem === "Settings"
                              ? pathname ===
                                "/admin/security-settings/two-factor"
                                 ? "max-h-96"
                                 : "max-h-96"
                              : "max-h-0"
                        }`} // Controlled max-height for smoother animation
                     >
                        <div className="flex justify-end py-2">
                           <ul className="space-y-2">
                              <li
                                 className={`${active === "Companies" && activeSubItem === "Settings" ? "sidebar-sub-item-sub-item company_settings" : ""}`}
                              >
                                 <NavLink href="/saller/edit-company-information">
                                    <span
                                       className={`${
                                          pathname ===
                                          "/saller/edit-company-information"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[172px] h-8 flex justify-center items-center`}
                                    >
                                       Edit Company Information
                                    </span>
                                 </NavLink>
                              </li>
                              {/* <li
                                 className={`${active === "Companies" && activeSubItem === "Settings" ? "sidebar-sub-item-sub-item company_settings" : ""}`}
                              >
                                 <NavLink href="/saller/update-contact-details">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/saller/update-contact-details"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[172px] h-8 flex justify-center items-center`}
                                    >
                                       Update Contact Details
                                    </div>
                                 </NavLink>
                              </li>
                              <li
                                 className={`${active === "Companies" && activeSubItem === "Settings" ? "sidebar-sub-item-sub-item company_settings" : ""}`}
                              >
                                 <NavLink href="/saller/manage-company-logo">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/saller/manage-company-logo"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[172px] h-8 flex justify-center items-center`}
                                    >
                                       Manage Company Logo
                                    </div>
                                 </NavLink>
                              </li> */}
                           </ul>
                        </div>
                     </div>
                  </li>
                  <li
                     className={`
                        ${active === "Companies" ? "sidebar-sub-item" : ""} 
                        ${activeSubItem === "Verification" ? "company_verification" : ""}
                        `}
                  >
                     <a
                        onClick={() =>
                           setActiveSubItem(
                              activeSubItem === "Verification"
                                 ? ""
                                 : "Verification"
                           )
                        }
                     >
                        <div
                           className={`${
                              activeSubItem === "Verification"
                                 ? pathname ===
                                   "/saller/submit-verification-documents"
                                    ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                    : "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <CheckBadgeIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Verification
                              </div>
                           </div>
                           {activeSubItem === "Verification" ? (
                              pathname ===
                              "/saller/submit-verification-documents" ? (
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
                           activeSubItem === "Verification"
                              ? pathname ===
                                "/saller/submit-verification-documents"
                                 ? "max-h-96"
                                 : "max-h-96"
                              : "max-h-0"
                        }`} // Controlled max-height for smoother animation
                     >
                        <div className="flex justify-end py-2">
                           <ul className="space-y-2">
                              <li
                                 className={`${active === "Companies" && activeSubItem === "Verification" ? "sidebar-sub-item-sub-item verify" : ""}`}
                              >
                                 <NavLink href="/saller/submit-verification-documents">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/saller/submit-verification-documents"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[172px] h-8 flex justify-center items-center`}
                                    >
                                       Submit Verification Documents
                                    </div>
                                 </NavLink>
                              </li>
                              <li
                                 className={`${active === "Companies" && activeSubItem === "Verification" ? "sidebar-sub-item-sub-item verify" : ""}`}
                              >
                                 <NavLink href="/saller/verification-status-and-updates">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/saller/verification-status-and-updates"
                                             ? "bg-[#C8D5F6] text-white sider-item-subitem-sub"
                                             : "bg-gray-50 hover:bg-[#C8D5F6] text-[#515151] hover:text-white hover:sider-item-subitem-sub"
                                       } text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] w-[172px] h-8 flex justify-center items-center`}
                                    >
                                       Verification Status and Updates
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

export default memo(CompaniesItem);
