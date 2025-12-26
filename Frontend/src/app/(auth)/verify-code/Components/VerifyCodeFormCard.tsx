"use client";
import React, { useEffect, useState } from "react";
import {
   getLocalStorage,
   getLocalStorageObjectValue,
} from "@/components/react/storage";
import dynamic from "next/dynamic";
const VerfiyCodeForm = dynamic(() => import("./VerfiyCodeForm"));

type User = {
   email: string;
   message: string;
};

export default function VerifyCodeFormCard() {
   const [user, setUser] = useState<User>({
      email: "",
      message: "",
   });

   useEffect(() => {
      const registerUserData = getLocalStorage("register-user-data");
      const data = getLocalStorageObjectValue(registerUserData);
      setUser({
         email: data.email,
         message: data.message,
      });
   }, []);

   return (
      <div
         className="md:bg-[rgba(255,255,255,0.50)] md:backdrop-blur-[71.5px] md:shadow-auth-card rounded-[40px] w-full
       relative z-30 pt-9 pb-14 md:px-14 sm:px-20 4xs:px-16 px-0"
      >
         <div
            className="text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold mx-auto w-[211px]"
            style={{
               background:
                  "linear-gradient(91.45deg,rgba(66, 133, 244, 1) 0%,rgba(87, 150, 255, 1) 54.00000214576721%,rgba(38, 77, 142, 1) 100%)",
               backgroundClip: "text",
               WebkitBackgroundClip: "text",
               WebkitTextFillColor: "transparent",
            }}
         >
            Forget Password
         </div>
         <div className="text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-sm font-normal">
            Verify Code
         </div>
         <div
            className={`text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-xs font-normal pt-3 
               ${user?.message ? "pb-3" : "pb-0"}
               `}
         >
            {user?.message} <br />
            <b className="text-green-300">{user?.email}</b>
         </div>

         <VerfiyCodeForm />
      </div>
   );
}
