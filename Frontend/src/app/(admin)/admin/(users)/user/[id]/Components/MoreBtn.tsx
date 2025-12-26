"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { DashboardThreeDotsSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });

type Props = {
   userId: any;
};

export default function MoreBtn({ userId }: Props) {
   const moreBtnRef = useRef<HTMLDivElement>(null);
   const [moreBtn, setMoreBtn] = useState(false);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            moreBtnRef.current &&
            !moreBtnRef.current.contains(event.target as Node)
         ) {
            setMoreBtn(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [moreBtnRef, moreBtn]);

   return (
      <div ref={moreBtnRef} className=" relative">
         <div
            onClick={() => setMoreBtn(!moreBtn)}
            className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out cursor-pointer"
         >
            <div className="w-4 h-4">
               <DashboardThreeDotsSvgIcon />
            </div>
         </div>

         {moreBtn === true ? (
            <div className=" absolute top-9 left-0 bg-white/30 backdrop-blur-[10px] shadow-admin-card rounded-lg p-2 z-20">
               <NavLink href={`/admin/user/${userId}/change-password`}>
                  <div className="bg-slate-100 text-gray-700 hover:bg-blue-500 hover:text-white text-sm font-semibold w-[150px] px-3 py-1 rounded-lg transition-all duration-150 ease-in-out">
                     Change Password
                  </div>
               </NavLink>
            </div>
         ) : null}
      </div>
   );
}
