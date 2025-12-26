"use client";
import React from "react";
import {
   DashboardSvgIcon,
   ArrowUpSvgIcon,
   ItemQuickActionUpSvgIcon,
   ArrowRightSvgIcon,
   OverviewUpSvgIcon,
} from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   pathname?: any;
   active?: any;
   activeSubItem?: any;
   setActiveSubItem?: any;
   sidebarItemsHandle?: any;
};

function Dashboarditem({
   pathname,
   active,
   activeSubItem,
   setActiveSubItem,
   sidebarItemsHandle,
}: Props) {
   return (
      <li
         className={`sidebar-item ${
            active === "Dashboard"
               ? pathname === "/admin/dashboard" ||
                 pathname ===
                    "/admin/dashboard/quick-action/approve-new-companies" ||
                 pathname ===
                    "/admin/dashboard/quick-action/view-pending-product-approvals" ||
                 pathname ===
                    "/admin/dashboard/quick-action/review-new-messages" ||
                 pathname ===
                    "/admin/dashboard/quick-action/view-platform-analytics"
                  ? "dashboard"
                  : "dashboard"
               : ""
         }`}
      >
         <a
            className={` cursor-pointer flex relative z-10 items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${active === "Dashboard" ? "bg-gradient-sider-item shadow-sider-item text-white" : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"}  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
            onClick={() => {
               sidebarItemsHandle(active === "Dashboard" ? "" : "Dashboard");
            }}
         >
            <div className="flex items-center gap-x-3">
               <DashboardSvgIcon width={16} height={16} />
               <div className="">Dashboard</div>
            </div>
            {active === "Dashboard" ? (
               pathname === "/admin/dashboard" ||
               pathname ===
                  "/admin/dashboard/quick-action/approve-new-companies" ||
               pathname ===
                  "/admin/dashboard/quick-action/view-pending-product-approvals" ||
               pathname ===
                  "/admin/dashboard/quick-action/review-new-messages" ||
               pathname ===
                  "/admin/dashboard/quick-action/view-platform-analytics" ? (
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
               active === "Dashboard"
                  ? pathname === "/admin/dashboard" ||
                    pathname ===
                       "/admin/dashboard/quick-action/approve-new-companies" ||
                    pathname ===
                       "/admin/dashboard/quick-action/view-pending-product-approvals" ||
                    pathname ===
                       "/admin/dashboard/quick-action/review-new-messages" ||
                    pathname ===
                       "/admin/dashboard/quick-action/view-platform-analytics"
                     ? "max-h-96"
                     : "max-h-96"
                  : "max-h-0"
            }`}
         >
            <div className="flex py-2 ps-11">
               <ul className=" space-y-2">
                  <li
                     className={`${active === "Dashboard" ? " dashboard-sidebar-sub-item" : ""}`}
                  >
                     <NavLink href="/admin/dashboard">
                        <div
                           className={`${
                              pathname === "/admin/dashboard"
                                 ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } rounded-2xl  w-[231px] h-[42px] flex items-center gap-x-3 px-5 transition-all duration-75 ease-linear`}
                        >
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
                     className={`
                        ${active === "Dashboard" ? " dashboard-sidebar-sub-item" : ""}
                         ${
                            activeSubItem === "Quick Action"
                               ? "qucik_action"
                               : ""
                         }`}
                  >
                     <a
                        onClick={() => {
                           setActiveSubItem(
                              activeSubItem === "Quick Action"
                                 ? ""
                                 : "Quick Action"
                           );
                        }}
                     >
                        <div
                           className={`${
                              activeSubItem === "Quick Action"
                                 ? pathname ===
                                      "/admin/dashboard/quick-action/approve-new-companies" ||
                                   pathname ===
                                      "/admin/dashboard/quick-action/view-pending-product-approvals" ||
                                   pathname ===
                                      "/admin/dashboard/quick-action/review-new-messages" ||
                                   pathname ===
                                      "/admin/dashboard/quick-action/view-platform-analytics"
                                    ? "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                    : "bg-[#98b0ee] shadow-sider-item-subitem text-white"
                                 : "bg-[#FAFBFF] text-[#2F2F2F] hover:bg-[#98b0ee] hover:shadow-sider-item-subitem hover:text-white"
                           } cursor-pointer rounded-2xl w-[231px] h-[42px] flex items-center justify-between px-5 transition-all duration-75 ease-linear`}
                        >
                           <div className="flex items-center gap-x-3">
                              <span>
                                 <ItemQuickActionUpSvgIcon
                                    width={24}
                                    height={24}
                                 />
                              </span>
                              <div className="text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold">
                                 Quick Action
                              </div>
                           </div>

                           {activeSubItem === "Quick Action" ? (
                              pathname ===
                                 "/admin/dashboard/quick-action/approve-new-companies" ||
                              pathname ===
                                 "/admin/dashboard/quick-action/view-pending-product-approvals" ||
                              pathname ===
                                 "/admin/dashboard/quick-action/review-new-messages" ||
                              pathname ===
                                 "/admin/dashboard/quick-action/view-platform-analytics" ? (
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
                           activeSubItem === "Quick Action"
                              ? pathname ===
                                   "/admin/dashboard/quick-action/approve-new-companies" ||
                                pathname ===
                                   "/admin/dashboard/quick-action/view-pending-product-approvals" ||
                                pathname ===
                                   "/admin/dashboard/quick-action/review-new-messages" ||
                                pathname ===
                                   "/admin/dashboard/quick-action/view-platform-analytics"
                                 ? "max-h-96"
                                 : "max-h-96"
                              : "max-h-0"
                        }`}
                     >
                        <div className=" flex justify-end pt-2 pb-1 pe-1">
                           <ul className=" space-y-1">
                              <li
                                 className={`${activeSubItem === "Quick Action" && active === "Dashboard" ? "sidebar-sub-item-sub-item" : ""}`}
                              >
                                 <NavLink href="/admin/dashboard/quick-action/approve-new-companies">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/dashboard/quick-action/approve-new-companies"
                                             ? "bg-[#C8D5F6] text-[#ffffff] shadow-sider-item-subitem-sub"
                                             : "bg-[#f6f7fd] hover:bg-[#C8D5F6] hover:shadow-sider-item-subitem-sub text-gray-700 hover:text-[#ffffff]"
                                       } text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  rounded-[10px] w-[180px] h-8 flex justify-center items-center`}
                                    >
                                       Approve New Companies
                                    </div>
                                 </NavLink>
                              </li>
                              <li
                                 className={`${activeSubItem === "Quick Action" && active === "Dashboard" ? "sidebar-sub-item-sub-item" : ""}`}
                              >
                                 <NavLink href="/admin/dashboard/quick-action/view-pending-product-approvals">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/dashboard/quick-action/view-pending-product-approvals"
                                             ? "bg-[#C8D5F6] text-[#ffffff] shadow-sider-item-subitem-sub"
                                             : "bg-[#f6f7fd] text-gray-700 hover:bg-[#C8D5F6] hover:shadow-sider-item-subitem-sub  hover:text-[#ffffff]"
                                       } text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-[10px] w-[180px] h-8 flex justify-center items-center transition-all duration-75 ease-linear`}
                                    >
                                       View Pending Product Approvals
                                    </div>
                                 </NavLink>
                              </li>
                              <li
                                 className={`${activeSubItem === "Quick Action" && active === "Dashboard" ? "sidebar-sub-item-sub-item" : ""}`}
                              >
                                 <NavLink href="/admin/dashboard/quick-action/review-new-messages">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/dashboard/quick-action/review-new-messages"
                                             ? "bg-[#C8D5F6] text-[#ffffff] shadow-sider-item-subitem-sub"
                                             : "bg-[#f6f7fd] text-gray-700 hover:bg-[#C8D5F6] hover:shadow-sider-item-subitem-sub hover:text-[#ffffff]"
                                       } text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-[10px] w-[180px] h-8 flex justify-center items-center transition-all duration-75 ease-linear`}
                                    >
                                       Review New Messages
                                    </div>
                                 </NavLink>
                              </li>
                              <li
                                 className={`${activeSubItem === "Quick Action" && active === "Dashboard" ? "sidebar-sub-item-sub-item" : ""}`}
                              >
                                 <NavLink href="/admin/dashboard/quick-action/view-platform-analytics">
                                    <div
                                       className={`${
                                          pathname ===
                                          "/admin/dashboard/quick-action/view-platform-analytics"
                                             ? "bg-[#C8D5F6] text-[#ffffff] shadow-sider-item-subitem-sub"
                                             : "bg-[#f6f7fd] text-gray-700 hover:bg-[#C8D5F6] hover:shadow-sider-item-subitem-sub  hover:text-[#ffffff]"
                                       } text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-[10px] w-[180px] h-8 flex justify-center items-center transition-all duration-75 ease-linear`}
                                    >
                                       View Platform Analytics
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

export default React.memo(Dashboarditem);
