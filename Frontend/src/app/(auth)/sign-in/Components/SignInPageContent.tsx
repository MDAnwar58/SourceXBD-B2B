"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Axios from "@/app/utils/axios-client-without-token";
import { getCookie, setCookie } from "@/components/react/cookie";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "@/components/react/auth";
import { useClearSearchParams } from "@/components/react/params";
const Grid = dynamic(() => import("@/components/grid"), {
   ssr: false,
});
const LoginFormCard = dynamic(() => import("./LoginFormCard"), {
   ssr: false,
});
const LoginFormPolygon = dynamic(() => import("./LoginFormPolygon"), {
   ssr: false,
});
const LoginPageLeftSide = dynamic(() => import("./LoginPageLeftSide"), {
   ssr: false,
});

export default function SignInPageContent() {
   const [alreadyLoginCredentials, setAlreadyLoginCredentials] =
      useState<string>("");
   const token = getCookie("auth");
   const searchParams = new URLSearchParams(window.location.search);

   useEffect(() => {
      const token = searchParams.get("token");
      const message = searchParams.get("message");
      if (token) {
         setCookie("auth", token, 1);
         const user = useAuth(token);
         if (user?.role === "buyer") {
            useClearSearchParams("token");
            redirect("/buyer/dashboard");
         } else {
            useClearSearchParams("token");
         }
      } else if (message) {
         setAlreadyLoginCredentials(message);
         useClearSearchParams("message");
      } else {
         useClearSearchParams("token");
         if (message) {
            useClearSearchParams("message");
         }
      }
   }, [searchParams]);

   function signInWithSocialProviders(provider: string) {
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`;
   }

   return (
      <Fragment>
         <Grid cols={12} gap={5}>
            <div className="1xl2:col-span-6 col-span-12 md:block hidden">
               <LoginPageLeftSide />
            </div>
            <div className="1xl2:col-span-6 col-span-12">
               <div className=" 2md:relative md:flex 1xl2:justify-end justify-center w-full">
                  <LoginFormCard
                     signInWithSocialProviders={signInWithSocialProviders}
                     alreadyLoginCredentials={alreadyLoginCredentials}
                  />
                  {/* polygon start */}
                  <LoginFormPolygon />
                  {/* polygon end */}
               </div>
            </div>
         </Grid>
      </Fragment>
   );
}
