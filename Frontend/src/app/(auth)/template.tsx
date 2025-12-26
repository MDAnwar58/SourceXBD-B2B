"use client";
import React, { Fragment, ReactNode, useEffect, useState } from "react";
import "./main.css";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
import { getCookie } from "@/components/react/cookie";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/components/react/auth";
const AuthHeader = dynamic(() => import("@/components/AuthHeader"), {
   ssr: false,
});
const PrivacyPolicyAndTermsConditions = dynamic(
   () => import("./components/PrivacyPolicyAndTermsConditions"),
   {
      ssr: false,
   }
);

type Props = {
   children?: ReactNode;
};

export default function template({ children }: Props) {
   const [isAuth, setIsAuth] = useState<boolean>(true);
   const router = useRouter();

   useEffect(() => {
      const token = getCookie("auth");
      const user = useAuth(token);
      if (token) {
         setIsAuth(true);
         if (user?.role === "admin") return redirect("/admin/dashboard");
         if (user?.role === "seller") return redirect("/saller/dashboard");
         if (user?.role === "buyer") return redirect("/buyer/dashboard");
      } else {
         setIsAuth(false);
      }
   }, [router]);

   if (isAuth === true) return null;

   return (
      <Fragment>
         <div className=" h-full md:bg-auth-gradient">
            <AuthHeader />
            <div className="container pt-14">
               {children}
               <PrivacyPolicyAndTermsConditions />
            </div>
         </div>
         <ToastContainer />
      </Fragment>
   );
}
