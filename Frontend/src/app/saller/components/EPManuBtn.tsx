"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { EPManuSvgIcon } from "@/saller/components/SvgIcons";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import { logoutSaller } from "../features/SallerCommonAction";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { io } from "socket.io-client";
const Button = dynamic(() => import("@/components/Button"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Props = {
   user: any;
};

export default function EPManuBtn({ user }: Props) {
   const [epManuOpen, setEpManuOpen] = React.useState(false);
   const epManuRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const socketAddress = process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      : "";

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
      const socket = io(socketAddress);
      socket.emit("sellerLogoutToSourceBDXServer", user?.id);
      socket.emit("sellerStatusToSourceBDXServer", "");
      setTimeout(() => {
         dispatch(logoutSaller({ router }));
      }, 1500);
   }, [dispatch]);

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
                  Bonnie Green
               </span>
               <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
               </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
               <li>
                  <NavLink
                     href="/saller/dashboard"
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
