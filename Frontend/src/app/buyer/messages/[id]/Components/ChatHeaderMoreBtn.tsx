"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardThreeDotsSvgIcon } from "@/buyer/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   receiverId: number;
};

export default function ChatHeaderMoreBtn({ receiverId }: Props) {
   const dropdownRef = useRef<HTMLDivElement>(null);
   const [dropdown, setDropdown] = useState(false);

   const handleClickOutside = (event: MouseEvent) => {
      if (
         dropdownRef.current &&
         !dropdownRef.current.contains(event.target as Node)
      ) {
         setDropdown(false);
      }
   };
   useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);
   return (
      <div ref={dropdownRef} className="flex items-center relative">
         <Button
            type="button"
            className=" focus:bg-[#98B0EE]/30 focus:text-[#98B0EE] p-1 rounded-full transition-all duration-100 ease-linear"
            onClick={() => setDropdown(!dropdown)}
         >
            <div className="w-[22px] h-[22px]">
               <DashboardThreeDotsSvgIcon />
            </div>
         </Button>

         {dropdown === true && (
            <div
               className="bg-[rgba(240,242,255,0.40)] rounded-[10px] absolute right-0 top-9 p-2 space-y-2 z-10"
               style={{
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <NavLink
                  href={`/buyer/view-seller-profile/${receiverId}`}
                  className="bg-[#4285f4] text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold rounded-lg w-[92px] h-[26px] flex items-center justify-center"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  View Seller Profile
               </NavLink>
               {/* <div
                  className="bg-[#ffffff] text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold rounded-lg w-[92px] h-[27px]  flex items-center justify-center"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  Delete Messages
               </div> */}
            </div>
         )}
      </div>
   );
}
