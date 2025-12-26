"use client";
import { AppDispatch, RootState } from "@/app/store";
import Input from "@/components/Input";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../features/action";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { removeCookie, setCookie } from "@/components/react/cookie";

type Form = {
   email: string;
};

export default function ForgetPasswordForm() {
   const [sendEmailMessage, setSendEmailMessage] = useState<string>("");
   const email = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const onForgetPasswordHandle = () => {
      const Email = email.current ? email.current.value : "";
      const payload: Form = { email: Email };
      dispatch(forgetPassword({ payload, router }));
   };

   const { loading, error, message } = useSelector(
      (state: RootState) => state.auth.user
   );
   const formError = error as Form;

   useEffect(() => {
      if (message) {
         setCookie("message_for_forget_password", message, 1 / 48);
      }

      // const MessageForForgetPassword = getCookie("message_for_forget_password");
      // if (MessageForForgetPassword) {
      //    setSendEmailMessage(MessageForForgetPassword as string);
      // }

      const timer = setTimeout(() => {
         removeCookie("message_for_forget_password"); // Remove cookie after 30 seconds
      }, 600000); // 30000 ms = 30 seconds

      return () => clearTimeout(timer); // Cleanup the timeout on unmount
   }, [message]);

   return (
      <Fragment>
         <div className="text-center text-green-500">{sendEmailMessage}</div>
         <div className="pt-0">
            <div className="mb-5">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  E-mail
               </div>
               <Input
                  type="email"
                  inputRef={email}
                  placeholder="example@gmail.com"
                  className="bg-[rgba(255,255,255,0.50)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal border-none focus:ring-0 px-7 rounded-[10px] h-12 w-full"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     backdropFilter: "blur(10px)",
                  }}
               />
               {formError?.email && (
                  <div className="text-red-600 text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
                     {formError?.email}
                  </div>
               )}
            </div>

            <Button
               type="button"
               className={`text-[#ffffff] ${
                  loading === false
                     ? "bg-blue-gradient"
                     : "bg-blue-gradient-disable"
               } backdrop-blur-[10px] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] h-12 w-full flex justify-center items-center`}
               onClick={() => onForgetPasswordHandle()}
            >
               Send Code
            </Button>
         </div>
      </Fragment>
   );
}
