"use client";
import React from "react";
import { ProductSvgIcon } from "../SvgIcons";
import { useParams } from "next/navigation";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   pathname?: any | undefined;
   param?: any | undefined;
};

export default function ProductsItem({ pathname, param }: Props) {
   const params = useParams();
   const id = params.id;
   return (
      <li>
         <NavLink
            href="/saller/products"
            className={`flex items-center justify-between p-2 ps-5  rounded-2xl   xs3:w-[299px] w-full h-[42px]
      ${
         pathname === "/saller/products" ||
         pathname === "/saller/product-create" ||
         pathname === `/saller/product/${param}` ||
         pathname === `/saller/product-edit/${id}`
            ? "bg-gradient-sider-item shadow-sider-item text-white"
            : "bg-[#FAFBFF] hover:bg-gradient-sider-item hover:shadow-sider-item text-gray-700 hover:text-white"
      }
      text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold transition-all duration-75 ease-linear`}
         >
            <div className="flex items-center gap-x-3">
               <div className="w-6 h-6">
                  <ProductSvgIcon />
               </div>
               <div>Products</div>
            </div>
         </NavLink>
      </li>
   );
}
