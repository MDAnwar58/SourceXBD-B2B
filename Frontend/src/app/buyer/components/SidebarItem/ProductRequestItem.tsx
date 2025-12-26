"use client";
import React from "react";
import { ArrowRightSvgIcon } from "@/saller/components/SvgIcons";
import { ProductRequestSvgIcon } from "../SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function ProductRequestItem({ pathname, param }: Props) {
   return (
      <li>
         <NavLink
            href="/buyer/product-requests"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl w-[299px] h-[42px] ${
               pathname === "/buyer/product-requests" ||
               pathname ===
                  `/buyer/product-request/view-seller-profile/${param}`
                  ? "bg-gradient-sider-item shadow-sider-item text-white"
                  : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
            }  text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <ProductRequestSvgIcon />
               </div>
               <div>Product Request</div>
            </div>
         </NavLink>
      </li>
   );
}
