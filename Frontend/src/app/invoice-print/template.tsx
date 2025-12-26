"use client";
import React, { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import "@/saller/main.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/store";
import { getCookie } from "@/components/react/cookie";
import { useRouter } from "next/navigation";
import { isAuth } from "@/app/invoice-print/features/printSlice";
import { useAuth } from "@/components/react/auth";
import { RootState } from "@/app/store";

type Props = {
   children: ReactNode;
};

export default function AdminTemplate({ children }: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const { auth } = useSelector((state: RootState) => state?.sallerPrint);

   useEffect(() => {
      const token = getCookie("auth");
      if (!token) {
         dispatch(isAuth(false));
         router.push("/sign-in");
      } else {
         const user = useAuth(token);
         if (user?.role === "seller") {
            dispatch(isAuth(true));
         }
      }
   }, [dispatch]);

   if (auth === false) {
      return null;
   }

   return <Fragment>{children}</Fragment>;
}
