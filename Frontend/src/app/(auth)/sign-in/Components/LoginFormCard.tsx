"use client";
import React from "react";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("./LoginForm"), {
   ssr: false,
});
const SocialBtn = dynamic(() => import("./SocialBtn"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Props = {
   signInWithSocialProviders: (provider: string) => void;
   alreadyLoginCredentials: string;
};

export default function LoginFormCard({
   signInWithSocialProviders,
   alreadyLoginCredentials,
}: Props) {
   return (
      <div
         className="md:bg-[rgba(255,255,255,0.50)] md:backdrop-blur-[71.5px] md:shadow-auth-card rounded-[40px] 
      3xl:w-[67%] 1xl2:w-[77%] 6lg:w-[37%] 2lg:w-[43%] 5md:w-[53%] 3md:w-[55%] md:w-[65%] w-full
       relative z-30 pt-9 pb-14 md:px-14 sm:px-20 4xs:px-16 px-0"
      >
         {alreadyLoginCredentials && (
            <div className="text-center bg-red-300/50 text-red-700 rounded-2xl p-2 mb-3">
               {alreadyLoginCredentials}
            </div>
         )}
         <div
            className=" bg-clip-text text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold mx-auto w-[127px]"
            style={{
               background:
                  "linear-gradient(91.45deg,rgba(66, 133, 244, 1) 0%,rgba(87, 150, 255, 1) 54.00000214576721%,rgba(38, 77, 142, 1) 100%)",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Log in with
         </div>

         <SocialBtn signInWithSocialProviders={signInWithSocialProviders} />

         <NavLink href="/sign-up" className=" flex justify-center mt-5 mb-8">
            <span className="text-[#4285f4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold border-b border-[#4285f4] pb-[.15rem]">
               Sign Up
            </span>
         </NavLink>

         <div className="flex flex-row gap-5 items-center justify-center">
            <div className="7xs:w-[165px] w-full h-[.1rem] md:bg-[#515151] bg-[#E1E0E0]"></div>
            <div>or</div>
            <div className="7xs:w-[165px] w-full h-[.1rem] md:bg-[#515151] bg-[#E1E0E0]"></div>
         </div>

         <LoginForm />
      </div>
   );
}
