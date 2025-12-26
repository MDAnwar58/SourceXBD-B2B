"use client";
import React from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   ItemSubscriptionsSvgIcon,
   SubcriptionsHistorySvgIcon,
   SubscriptionSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   param?: any | undefined;
};

export default function SubscriptionsItem({
   active,
   pathname,
   sidebarItemsHandle,
   param,
}: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Subscriptions"
               ? pathname === "/saller/subscription-plans" ||
                 pathname === `/saller/subscription-history/${param}` ||
                 pathname === "/saller/support"
                  ? "subscriptions"
                  : "subscriptions"
               : ""
         }`}
      >
         <a
            className={`cursor-pointer flex items-center justify-between p-2 ps-5  rounded-2xl   xs3:w-[299px] w-full h-[42px] ${
               active === "Subscriptions"
                  ? pathname === "/saller/subscription-plans" ||
                    pathname === `/saller/subscription-history/${param}` ||
                    pathname === "/saller/support"
                     ? "bg-gradient-sider-item shadow-sider-item text-white"
                     : "bg-gradient-sider-item shadow-sider-item text-white"
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
                  <ItemSubscriptionsSvgIcon />
               </div>
               <div>Subscriptions</div>
            </div>
            {active === "Subscriptions" ? (
               pathname === "/saller/subscription-plans" ||
               pathname === `/saller/subscription-history/${param}` ||
               pathname === "/saller/support" ? (
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
                  ? pathname === "/saller/subscription-plans" ||
                    pathname === `/saller/subscription-history/${param}` ||
                    pathname === "/saller/support"
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
                     <NavLink href="/saller/subscription-plans">
                        <div
                           className={`${
                              pathname === "/saller/subscription-plans"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <SubscriptionSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Plans
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  {/* <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/subscriptions">
                        <div
                           className={`${
                              pathname === "/saller/subscriptions"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <RenewalDateSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Renewal Date
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  {/* <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/status">
                        <div
                           className={`${
                              pathname === "/saller/status"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <StatusSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Status
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/subscriptions-histories">
                        <div
                           className={`${
                              pathname === "/saller/subscriptions-histories" ||
                              pathname ===
                                 `/saller/subscription-history/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <SubcriptionsHistorySvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 History
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  {/* <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/subscription-plan-popularity">
                        <div
                           className={`${
                              pathname ===
                              "/saller/subscription-plan-popularity"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <PaymentMethodSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Payment Method
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  {/* <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/support">
                        <div
                           className={`${
                              pathname === "/saller/support"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <CustomerSupportSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Support
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
               </ul>
            </div>
         </div>
      </li>
   );
}
