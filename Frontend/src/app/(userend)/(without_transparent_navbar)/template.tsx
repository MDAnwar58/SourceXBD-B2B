"use client";
import React, { useEffect } from "react";
import "./main.css";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { getCookie } from "@/components/react/cookie";
import { useAuth } from "@/components/react/auth";
import { isAuth, setUser } from "@/userend/features/commonSlice";
const WithOurTransperentHeader = dynamic(
   () => import("@/components/WithOurTransperentHeader")
);
const Footer = dynamic(() => import("@/components/Footer"));

type Props = {
   children: React.ReactNode;
};

export default function Templete({ children }: Props) {
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
         <WithOurTransperentHeader />
         {children}
         <Footer />
         <Toaster />
      </main>
   );
}
