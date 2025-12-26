"use client";
import React, { Fragment, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Axios from "@/app/utils/axios-client";
import { setCookie } from "@/components/react/cookie";
import { useAuth } from "@/components/react/auth";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const PasswordInput = dynamic(() => import("@/components/PasswordInput"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type FormError = {
   email?: string;
   password?: string;
};

export default function LoginForm() {
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const router = useRouter();
   const [loading, setLoading] = useState<boolean>(false);
   const [errors, setErrors] = useState<FormError>({});

   const onLoginHandle = async () => {
      const payload = {
         email: email.current?.value || "",
         password: password.current?.value || "",
      };
      try {
         setLoading(true);
         const response = await Axios.post("/auth/login", payload);
         setLoading(false);
         const token = response.data.access_token;
         setCookie("auth", token, 1);
         const user = useAuth(token);
         if (user?.role === "admin") {
            router.push("/admin/dashboard");
         } else if (user?.role === "seller") {
            router.push("/saller/dashboard");
         } else {
            router.push("/buyer/dashboard");
         }
      } catch (error: any) {
         setLoading(false);
         setErrors(error.response.data.errors);
      }
   };

   return (
      <Fragment>
         <div className="pt-7">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  E-mail
               </div>
               <Input
                  type="email"
                  inputRef={email}
                  className="bg-[rgba(255,255,255,0.50)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal border-none focus:ring-0 px-7 rounded-[10px] h-12 w-full"
                  placeholder="example@gmail.com"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     backdropFilter: "blur(10px)",
                  }}
               />

               {errors.email && (
                  <div className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     {errors.email}
                  </div>
               )}
            </div>
            <div className="mb-2">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Password
               </div>
               {/* success !bg-[rgba(52,168,83,0.10)] !text-green-500 */}
               {/* danger !bg-[rgba(244,67,54,0.10)] !text-[#f44336] */}
               <PasswordInput
                  inputRef={password}
                  className="text-[#515151]  !h-12 text-left font-['Arial-Regular',_sans-serif] text-sm font-normal"
                  placeholder="Password"
               />
               {errors.password && (
                  <div className="text-[#f44336] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal">
                     {errors.password}
                  </div>
               )}
            </div>
         </div>
         <div className="flex justify-end pb-3">
            <NavLink href="/forget-password">
               <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                  Forget password
               </div>
            </NavLink>
         </div>

         <Button
            type="button"
            className={`${loading === false ? "bg-blue-gradient" : "bg-blue-300"} text-[#ffffff] backdrop-blur-[10px] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] h-12 w-full flex justify-center items-center`}
            onClick={onLoginHandle}
         >
            Log in
         </Button>
      </Fragment>
   );
}
