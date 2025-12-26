"use client";
import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import "./main.css";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getCookie } from "@/components/react/cookie";
import { redirect, useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";
import { isAuth, setUser } from "./features/adminCommonSlice";
import { useAuth } from "@/components/react/auth";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("./components/Navbar"), {
   ssr: false,
});
const Sidebar = dynamic(() => import("./components/Sidebar"), {
   ssr: false,
});

type Props = {
   children: ReactNode;
};

export default function AdminTemplate({ children }: Props) {
   const [sidebar, setSidebar] = useState<boolean>(false);
   const dropdownRef = useRef<HTMLDivElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const auth = useSelector(
      (state: AdminState) => state?.admin?.adminCommon.auth
   );

   useEffect(() => {
      const token = getCookie("auth");
      if (!token) {
         dispatch(isAuth(false));
         redirect("/sign-in");
      } else {
         const user = useAuth(token);
         if (user?.role === "admin") {
            dispatch(isAuth(true));
            dispatch(setUser(user));
         } else {
            dispatch(isAuth(false));
            dispatch(setUser(null));
            redirect("/sign-in");
         }
      }
      function handleClickOutside(event: MouseEvent) {
         // If the clicked target is outside the dropdownRef
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setSidebar(false);
         }
      }
      // if (mdScreenMax) {
      // Add event listener to detect outside clicks
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener when the component is unmounted
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
      // }
   }, [router]);

   if (auth === false) return null;

   return (
      <Fragment>
         <div ref={dropdownRef}>
            <Navbar sidebar={sidebar} setSidebar={setSidebar} />
            <Sidebar sidebar={sidebar} />
         </div>
         <div className="p-4 md:ml-[22.5rem]">
            <div className="3lg:p-4 p-2 dark:border-gray-700 mt-20">
               {children}
            </div>
         </div>
         <ToastContainer />
      </Fragment>
   );
}
