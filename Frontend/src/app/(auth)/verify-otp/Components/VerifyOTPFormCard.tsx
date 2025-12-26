"use client";
import React, { useEffect, useState } from "react";
import { getCookie, removeCookie } from "@/components/react/cookie";
import dynamic from "next/dynamic";
import { useNextParams } from "@/components/react/params";
const VerfiyOTPForm = dynamic(() => import("./VerfiyOTPForm"));

export default function VerifyOTPFormCard() {
   const params = useNextParams();
   const MessageForForgetPassword = getCookie("message_for_forget_password");
   const [message, setMessage] = useState<string>("");
   const [email, setEmail] = useState<string>("");
   useEffect(() => {
      if (params.get("email")) {
         const email = params.get("email");
         setEmail(email as string);
      }
      if (MessageForForgetPassword) {
         setMessage(MessageForForgetPassword);
      }
      const timer = setTimeout(() => {
         removeCookie("message_for_forget_password"); // Remove cookie after 30 seconds
      }, 600000); // 600000 ms = 10 minites

      return () => clearTimeout(timer); // Cleanup the timeout on unmount
   }, [MessageForForgetPassword]);
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
               ${message ? "pb-3" : "pb-0"}
               `}
         >
            {message}
         </div>

         <VerfiyOTPForm email={email} />
      </div>
   );
}
