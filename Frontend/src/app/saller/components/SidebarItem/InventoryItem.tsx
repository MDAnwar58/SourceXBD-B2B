"use client";
import React from "react";
import { InventorySvgIcon, ProductSvgIcon } from "../SvgIcons";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function InventoryItem({ pathname, param }: Props) {
   const params = useParams();
   const id = params.id;
   return (
      <li>
         <NavLink
            href="/saller/inventory"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl   xs3:w-[299px] w-full h-[42px]
      ${
         pathname === "/saller/inventory" ||
         pathname === "/saller/inventory-create" ||
         pathname === `/saller/inventory/${param}` ||
         pathname === `/saller/inventory/${id}`
            ? "bg-gradient-sider-item shadow-sider-item text-white"
            : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
      }
      text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <InventorySvgIcon />
               </div>
               <div>Inventory</div>
            </div>
         </NavLink>
      </li>
   );
}
