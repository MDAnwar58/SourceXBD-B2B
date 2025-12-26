"use client";
import React from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   HistorySvgIcon,
   ItemSubscriptionsSvgIcon,
   OverviewUpSvgIcon,
   SubscriptionSvgIcon,
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
               ? pathname === "/admin/subscriptions" ||
                 pathname === "/subscription-plans" ||
                 pathname === "/transaction-history" ||
                 pathname === "/subscription-plan-popularity"
                  ? "subscriptions"
                  : "subscriptions"
               : ""
         }`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${
               active === "Subscriptions"
                  ? pathname === "/admin/subscriptions" ||
                    pathname === "/subscription-plans" ||
                    pathname === "/transaction-history" ||
                    pathname === "/subscription-plan-popularity"
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
               pathname === "/admin/subscriptions" ||
               pathname === "/subscription-plans" ||
               pathname === "/transaction-history" ||
               pathname === "/subscription-plan-popularity" ? (
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
                  ? pathname === "/admin/subscriptions" ||
                    pathname === "/subscription-plans" ||
                    pathname === "/transaction-history" ||
                    pathname === "/subscription-plan-popularity"
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
                     <NavLink href="/admin/subscriptions">
                        <div
                           className={`${
                              pathname === "/admin/subscriptions"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           {/* <div className="w-6 h-6">
                              <SupportRequestSvgIcon />
                           </div> */}
                           <div className="w-6 h-6">
                              <OverviewUpSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Overview
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/subscription-plans">
                        <div
                           className={`${
                              pathname === "/admin/subscription-plans" ||
                              pathname === "/admin/subscription-plan-create" ||
                              pathname ===
                                 `/admin/subscription-plan-edit/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <SubscriptionSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Subscription Plans
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Subscriptions" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/subscription-history">
                        <div
                           className={`${
                              pathname === "/admin/subscription-history"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <HistorySvgIcon />
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
                     <NavLink href="/admin/billing-and-payments">
                        <div
                           className={`${
                              pathname === "/admin/billing-and-payments"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <BillingAndPaymentSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Billing and Payments
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
