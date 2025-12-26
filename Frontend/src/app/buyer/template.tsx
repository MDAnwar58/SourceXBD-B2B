"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch } from "@/buyer/store";
import "./main.css";
import { getCookie } from "@/components/react/cookie";
import { isAuth, setUserInfo } from "@/buyer/features/buyerCommonSlice";
import { useAuth } from "@/components/react/auth";
import dynamic from "next/dynamic";
import { io } from "socket.io-client";
import { Toaster } from "react-hot-toast";
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Sidebar = dynamic(() => import("./components/Sidebar"), { ssr: false });

type Props = {
   children: React.ReactNode;
};

export default function BuyerTemplate({ children }: Props) {
   const [localhost, setLocalhost] = useState(
      process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         : ""
   );
   const [sidebar, setSidebar] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      const socket = io(localhost);
      const token = getCookie("auth");
      if (!token) {
         dispatch(isAuth(false));
         dispatch(setUserInfo(null));
         router.push("/sign-in");
      } else {
         const user = useAuth(token);
         if (user?.role === "buyer") {
            socket.emit("buyerStatusToSourceBDXServer", user?.id);
            dispatch(isAuth(true));
            dispatch(setUserInfo(user));
         } else {
            router.push("/sign-in");
         }
      }

      function handleClickOutside(event: MouseEvent) {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setSidebar(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [router]);

   return (
      <Fragment>
         <div ref={dropdownRef}>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} />
         </div>
         <div className="p-4 md:ml-[22.5rem]">
            <div className="3lg:p-4 p-2 dark:border-gray-700 mt-16">
               {children}
            </div>
         </div>
         <ToastContainer />
         <Toaster />
      </Fragment>
   );
}
