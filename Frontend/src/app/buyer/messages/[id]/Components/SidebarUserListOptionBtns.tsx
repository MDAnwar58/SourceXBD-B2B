"use client";
import React, { useEffect, useRef, useState } from "react";
import { DashboardThreeDotsSvgIcon } from "@/buyer/components/SvgIcons";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   image: any;
   role: string;
   status: string;
};

type RecentMessage = {
   last_message: string;
   last_message_time: string;
   user: User;
   is_me: number | null;
   is_pin: boolean;
   is_read: number;
};

type Props = {
   onPinnedHandler: (id: number) => void;
   recentUser: RecentMessage;
};

export default function SidebarUserListOptionBtns({
   onPinnedHandler,
   recentUser,
}: Props) {
   const [pinnedDropdownOpen, setPinnedDropdownOpen] = useState<boolean>(false);
   const pinnedDropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: any) => {
         if (
            pinnedDropdownRef.current &&
            !pinnedDropdownRef.current.contains(event.target)
         ) {
            setPinnedDropdownOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [pinnedDropdownRef]);

   return (
      <div ref={pinnedDropdownRef} className=" relative flex items-center">
         <Button
            type="button"
            onClick={() => setPinnedDropdownOpen(!pinnedDropdownOpen)}
         >
            <div className="w-4 h-4 text-gray-700">
               <DashboardThreeDotsSvgIcon />
            </div>
         </Button>

         {pinnedDropdownOpen === true ? (
            <div className=" absolute top-0 right-4">
               <div
                  className=" bg-[rgba(240,242,255,0.40)] rounded-[10px] p-2 h-auto z-30 space-y-2"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  <Button
                     type="button"
                     className="bg-[#ffffff] hover:bg-[#4285f4] hover:text-white rounded-lg  px-3 py-1  text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold transition-all duration-150 ease-linear"
                     style={{
                        boxShadow:
                           "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                     }}
                     onClick={() =>
                        onPinnedHandler(Number(recentUser?.user?.id))
                     }
                  >
                     Pinned
                  </Button>
               </div>
            </div>
         ) : null}
      </div>
   );
}
