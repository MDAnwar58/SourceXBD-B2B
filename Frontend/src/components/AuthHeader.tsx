"use client";
import React from "react";
import { SvgEPManuIcon } from "./SvgIcons";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("./NavLink"), {
   ssr: false,
});
const Img = dynamic(() => import("./Image"), {
   ssr: false,
});

export default function AuthHeader() {
   const pathname = usePathname();
   return (
      <header className="z-50  bg-[#f0f2ff] drop-shadow-sm relative">
         <nav className="container flex justify-between items-center py-5">
            <NavLink href="/">
               <Img
                  src="/assets/images/logo.png"
                  alt=""
                  width={150}
                  height={45}
                  className="w-[157.08px] h-auto"
               />
            </NavLink>
            <button type="button" className=" hover:border-[#4285F4]">
               <SvgEPManuIcon width={24} height={24} color="#4285F4" />
            </button>
         </nav>
      </header>
   );
}
