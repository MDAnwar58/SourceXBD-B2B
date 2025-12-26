"use client";
import dynamic from "next/dynamic";
import React from "react";
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   params: {
      slug: string;
   };
};

export default function Breadcramb({ params }: Props) {
   return (
      <div className="py-3">
         <NavLink
            href="/"
            className="text-[#4285f4] text-sm font-normal font-['Poppins']"
         >
            Home
         </NavLink>
         <span className="text-[#90a8e6] text-sm font-normal font-['Poppins']">
            /
         </span>
         <NavLink
            href="/products"
            className="text-[#4285f4] text-sm font-normal font-['Poppins']"
         >
            Products
         </NavLink>
         <span className="text-[#90a8e6] text-sm font-normal font-['Poppins']">
            /
         </span>
         <span className="text-[#94acd4] text-sm font-normal font-['Poppins']">
            {params?.slug}
         </span>
      </div>
   );
}
