"use client";
import React from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   GeneratePDFSvgIcon,
   OrderHistorySvgIcon,
   SelectProductSvgIcon,
   TermsAndConditionSvgIcon,
   VerifyDetailsSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   param?: any | undefined;
};

export default function OrderHistoryItem({
   active,
   pathname,
   sidebarItemsHandle,
   param,
}: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Subscriptions"
               ? pathname === "/buyer/select-product" ||
                 pathname === "/buyer/terms-and-condition" ||
                 pathname === "/buyer/verify-details" ||
                 pathname === "/buyer/generate-pdf"
                  ? "subscriptions"
                  : "subscriptions"
               : ""
         }`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${
               active === "Subscriptions"
                  ? pathname === "/buyer/select-product" ||
                    pathname === "/buyer/terms-and-condition" ||
                    pathname === "/buyer/verify-details" ||
                    pathname === "/buyer/generate-pdf"
                     ? "bg-gradient-sider-item shadow-sider-item text-white"
                     : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(
                  active === "Subscriptions" ? "" : "Subscriptions"
               );
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <OrderHistorySvgIcon />
               </div>
               <div>Order History</div>
            </div>
            {active === "Subscriptions" ? (
               pathname === "/buyer/select-product" ||
               pathname === "/buyer/terms-and-condition" ||
               pathname === "/buyer/verify-details" ||
               pathname === "/buyer/generate-pdf" ? (
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
         </a>
         <div
            className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
               active === "Subscriptions"
                  ? pathname === "/buyer/select-product" ||
                    pathname === "/buyer/terms-and-condition" ||
                    pathname === "/buyer/verify-details" ||
                    pathname === "/buyer/generate-pdf"
                     ? "max-h-96"
                     : "max-h-96"
                  : "max-h-0"
            }`} // Controlled max-height for smoother animation
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/buyer/select-product">
                        <div
                           className={`${
                              pathname === "/buyer/select-product"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <SelectProductSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Select Product
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/buyer/terms-and-condition">
                        <div
                           className={`${
                              pathname === "/buyer/terms-and-condition"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <TermsAndConditionSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Terms &amp; Condition
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/buyer/verify-details">
                        <div
                           className={`${
                              pathname === "/buyer/verify-details"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <VerifyDetailsSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Verify details
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/buyer/generate-pdf">
                        <div
                           className={`${
                              pathname === "/buyer/generate-pdfy"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <GeneratePDFSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Genarate PDF
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
