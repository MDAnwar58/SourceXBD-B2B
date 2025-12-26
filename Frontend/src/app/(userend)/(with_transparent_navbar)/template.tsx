"use client";
import React, { useEffect } from "react";
import "./main.css";
import dynamic from "next/dynamic";
import { getCookie } from "@/components/react/cookie";
import { useAuth } from "@/components/react/auth";
import { isAuth, setUser } from "../features/commonSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { Toaster } from "react-hot-toast";
const Header = dynamic(() => import("@/components/Header"), {
   ssr: false,
});
const Footer = dynamic(() => import("@/components/Footer"), {
   ssr: false,
});

export default function UserEndMainTemplate({
   children,
}: {
   children: React.ReactNode;
}) {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      const token = getCookie("auth");
      if (token) {
         const user = useAuth(token);
         dispatch(isAuth(true));
         dispatch(setUser(user));
      } else {
         dispatch(isAuth(false));
      }
   }, [dispatch]);

   return (
      <main>
         <Header />
         <div>{children}</div>
         <Footer />
         <Toaster />
      </main>
   );
}
