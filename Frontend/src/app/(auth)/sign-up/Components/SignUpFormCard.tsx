"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { cleanError } from "../../features/action";
import dynamic from "next/dynamic";
const SignUpSocialBtn = dynamic(() => import("./SignUpSocialBtn"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), { ssr: false });
const SignUpForm = dynamic(() => import("./SignUpForm"));

export default function SignUpFormCard() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(cleanError({ error: {} }));
   }, []);

   function signInWithSocialProviders(provider: string) {
      window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/${provider}`;
   }

   return (
      <div
         className="md:bg-[rgba(255,255,255,0.50)] md:backdrop-blur-[71.5px] md:shadow-auth-card rounded-[40px] 
      3xl:w-[67%] 1xl2:w-[77%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full
       relative z-30 pt-9 pb-14 md:px-14 sm:px-20 4xs:px-16 px-0"
      >
         <div
            className="text-left bg-clip-text font-['Raleway-Bold',_sans-serif] text-2xl font-bold mx-auto w-[139px]"
            style={{
               background:
                  "linear-gradient(91.45deg,rgba(66, 133, 244, 1) 0%,rgba(87, 150, 255, 1) 54.00000214576721%,rgba(38, 77, 142, 1) 100%)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Your Details
         </div>

         <SignUpSocialBtn
            signInWithSocialProviders={signInWithSocialProviders}
         />

         <NavLink href="/sign-in" className=" flex justify-center mt-5 mb-8">
            <span className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold border-b border-[#4285f4] pb-1">
               Sign In
            </span>
         </NavLink>

         <div className="flex flex-row gap-5 items-center justify-center">
            <div className="w-[165px] h-[.1rem] md:bg-[#515151] bg-[#E1E0E0]"></div>
            <div>or</div>
            <div className="w-[165px] h-[.1rem] md:bg-[#515151] bg-[#E1E0E0]"></div>
         </div>

         <SignUpForm />
      </div>
   );
}
