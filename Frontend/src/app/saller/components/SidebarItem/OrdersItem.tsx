"use client";
import React from "react";
import {
   ArrowRightSvgIcon,
   ArrowUpSvgIcon,
   BalbLightSvgIcon,
   MapSvgIcon,
   MoxWithPenSvgIcon,
   OrderListSvgIcon,
   OrderStatusSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   active?: any | undefined;
   pathname?: any | undefined;
   sidebarItemsHandle?: any | undefined;
   param?: any | undefined;
};

export default function OrdersItem({
   active,
   pathname,
   sidebarItemsHandle,
   param,
}: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Orders"
               ? pathname === "/saller/orders" ||
                 pathname === "/saller/order-create" ||
                 pathname === `/saller/order-edit/${param}` ||
                 pathname === "/subscription-plan-popularity"
                  ? "orders"
                  : "orders"
               : ""
         }`}
      >
         <a
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl  xs3:w-[299px] w-full h-[42px] ${
               active === "Orders"
                  ? pathname === "/saller/orders" ||
                    pathname === "/saller/order-create" ||
                    pathname === `/saller/order-edit/${param}` ||
                    pathname === "/subscription-plan-popularity"
                     ? "bg-gradient-sider-item shadow-sider-item text-white"
                     : "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(active === "Orders" ? "" : "Orders");
            }}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-5 h-5">
                  <OrderListSvgIcon />
               </div>
               <div>Orders</div>
            </div>
            {active === "Orders" ? (
               pathname === "/saller/orders" ||
               pathname === "/saller/order-create" ||
               pathname === `/saller/order-edit/${param}` ||
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
               active === "Orders"
                  ? pathname === "/saller/orders" ||
                    pathname === "/saller/order-create" ||
                    pathname === `/saller/order-edit/${param}` ||
                    pathname === "/subscription-plan-popularity"
                     ? "max-h-96"
                     : "max-h-96"
                  : "max-h-0"
            }`} // Controlled max-height for smoother animation
         >
            <div className="flex justify-center py-2 ps-6">
               <ul className="space-y-2">
                  <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/orders">
                        <div
                           className={`${
                              pathname === "/saller/orders" ||
                              pathname === `/saller/order-edit/${param}`
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           {/* <div className="w-6 h-6">
                              <SupportRequestSvgIcon />
                           </div> */}
                           <div className="w-6 h-6">
                              <BalbLightSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              View Orders
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  {/* <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/orders">
                        <div
                           className={`${
                              pathname === "/saller/orders"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="w-6 h-6">
                              <BalbLightSvgIcon />
                           </div>
                           <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                              Customer Information
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/order-create">
                        <div
                           className={`${
                              pathname === "/saller/order-create"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <MapSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Order Create
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/order-items">
                        <div
                           className={`${
                              pathname === "/saller/order-items"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <MoxWithPenSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Order Items
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li>
                  {/* <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
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
                                 <HandMoneySvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Payment Information
                              </div>
                           </div>
                        </div>
                     </NavLink>
                  </li> */}
                  <li
                     className={`${active === "Orders" ? "sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/saller/order-status-update">
                        <div
                           className={`${
                              pathname === "/saller/order-status-update"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-100 ease-in-out`}
                        >
                           <div className="flex items-center gap-x-3">
                              <div className="w-6 h-6">
                                 <OrderStatusSvgIcon />
                              </div>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Order Status Update
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
