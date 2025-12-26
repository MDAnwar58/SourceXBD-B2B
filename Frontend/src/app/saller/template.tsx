"use client";
import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getCookie } from "@/components/react/cookie";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { isAuth, setUserInfo } from "@/saller/features/sallerCommonSlice";
import { useAuth } from "@/components/react/auth";
import { SallerState } from "./store";
import dynamic from "next/dynamic";
import { io } from "socket.io-client";
const Navbar = dynamic(() => import("./components/Navbar"), { ssr: false });
const Sidebar = dynamic(() => import("./components/Sidebar"), { ssr: false });

type Props = {
   children: ReactNode;
};

export default function AdminTemplate({ children }: Props) {
   const [localhost, setLocalhost] = useState<string>(
      process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         : ""
   );
   const [sidebar, setSidebar] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();
   const [user, setUser] = useState<any>({});

   const auth = useSelector(
      (state: SallerState) => state?.saller?.sallerCommon.auth
   );

   useEffect(() => {
      const socket = io(localhost);
      const token = getCookie("auth");
      if (!token) {
         dispatch(isAuth(false));
         router.push("/sign-in");
      } else {
         const user = useAuth(token);

         if (user?.role === "seller") {
            if (user?.id) {
               socket.emit("sellerStatusToSourceBDXServer", user?.id);
            }
            dispatch(isAuth(true));
            setUser(user);
            dispatch(setUserInfo(user));
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

      if (dropdownRef.current) {
         document.addEventListener("mousedown", handleClickOutside);
      }
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [dispatch]);

   if (auth === false) {
      return null;
   }

   return (
      <Fragment>
         <div ref={dropdownRef}>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} user={user} />

            <Sidebar sidebar={sidebar} />
         </div>
         <div className="md:ml-[22.5rem] p-4">
            <div className="3lg:p-4 p-2 dark:border-gray-700 mt-16">
               {children}
            </div>
         </div>
         <ToastContainer />
      </Fragment>
   );
}
