"use client";
import { DashboardThreeDotsSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
const Button = dynamic(() => import("@/components/Button"));

type Props = {
   buttons: any;
};

export default function MoreBtn({ buttons }: Props) {
   const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: any) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
         ) {
            setIsDropdownOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [dropdownRef]);

   return (
      <div className="relative" ref={dropdownRef}>
         <Button
            type="button"
            className="group-hover:bg-[#678cca] group-hover:text-white rounded-[50%] w-9 h-9 flex justify-center items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
         >
            <div className="w-6 h-6">
               <DashboardThreeDotsSvgIcon />
            </div>
         </Button>

         {isDropdownOpen === true && (
            <div className=" absolute -top-3 right-11">
               <div
                  className=" bg-[rgba(240,242,255,0.40)] rounded-[10px] p-2 h-auto z-30 space-y-2"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  {buttons.length > 0 &&
                     buttons.map((button: any, index: number) => (
                        <div
                           key={index}
                           className="bg-[#ffffff] hover:bg-[#4285f4] hover:text-white rounded-lg  w-auto  text-[#2f2f2f] text-center font-['Raleway-Bold',_sans-serif] text-[10px] font-bold transition-all duration-150 ease-linear"
                           style={{
                              boxShadow:
                                 "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                           }}
                        >
                           {button.name}
                        </div>
                     ))}
               </div>
            </div>
         )}
      </div>
   );
}
