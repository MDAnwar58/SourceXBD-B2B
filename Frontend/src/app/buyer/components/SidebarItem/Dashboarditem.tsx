"use client";
import React from "react";
import { DashboardSvgIcon } from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   pathname?: any;
};

function Dashboarditem({ pathname }: Props) {
   return (
      <li className="sidebar-item">
         <NavLink
            href="/buyer/dashboard"
            className={` cursor-pointer flex relative z-10 items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${
               pathname === "/buyer/dashboard"
                  ? "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <DashboardSvgIcon width={16} height={16} />
               <div className="">Dashboard</div>
            </div>
         </NavLink>
      </li>
   );
}

export default Dashboarditem;
