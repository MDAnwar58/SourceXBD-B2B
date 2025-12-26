"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { EPManuSvgIcon } from "@admin/components/SvgIcons";
import { AdminState, AppDispatch } from "@admin/store";
import { useDispatch, useSelector } from "react-redux";
import { logoutSaller } from "@admin/features/AdminCommonAction";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

export default function AdminEPManuBtn() {
   const [epManuOpen, setEpManuOpen] = React.useState(false);
   const epManuRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (
            epManuRef.current &&
            !epManuRef.current.contains(event.target as Node)
         ) {
            setEpManuOpen(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [epManuRef]);

   const logout = useCallback(() => {
      dispatch(logoutSaller({ router }));
   }, [dispatch]);
   const { user } = useSelector(
      (state: AdminState) => state?.admin?.adminCommon
   );

   return (
      <div ref={epManuRef} className="flex items-center relative">
         <Button type="button" onClick={() => setEpManuOpen(!epManuOpen)}>
            <div className=" text-[#4285F4] w-6 h-6">
               <EPManuSvgIcon />
            </div>
         </Button>
         <div
            className={`${
               epManuOpen === false ? "hidden" : ""
            } z-10 absolute right-0 top-9 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-admin-card dark:bg-gray-700 dark:divide-gray-600`}
         >
            <div className="px-4 py-3">
               <span className="block text-sm text-gray-900 dark:text-white">
                  {user !== null && user?.name}
               </span>
               <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  {user !== null && user?.email}
               </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
               <li>
                  <NavLink
                     href="/admin/dashboard"
                     className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                     Dashboard
                  </NavLink>
               </li>
               <li>
                  <Button
                     type="button"
                     className="block px-4 py-2 text-sm w-full text-left text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                     onClick={logout}
                  >
                     Sign out
                  </Button>
               </li>
            </ul>
         </div>
      </div>
   );
}
