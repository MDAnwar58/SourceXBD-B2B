"use client";
import { AppDispatch, RootState } from "@/app/store";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";
import { getCookie } from "@/components/react/cookie";
import { useNextParams } from "@/components/react/params";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ResetPassword } from "../../features/action";
import { useRouter } from "next/navigation";

type Form = {
   email: string;
   token: string;
   password: string;
   password_confirmation: string;
};

export default function ResetPasswordForm() {
   const password = useRef<HTMLInputElement>(null);
   const password_confirmation = useRef<HTMLInputElement>(null);
   const [email, setEmail] = useState<string>("");
   const [token, setToken] = useState<string>("");
   const resetPasswrodToken = getCookie("reset-password");
   const params = useNextParams();
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      if (params.get("email")) {
         const email = params.get("email");
         setEmail(email as string);
      }
      if (resetPasswrodToken) {
         setToken(resetPasswrodToken);
      }
   }, []);

   const onResetHandle = () => {
      const Password = password?.current ? password?.current?.value : "";
      const PasswordConfirmation = password_confirmation?.current
         ? password_confirmation?.current?.value
         : "";
      const payload: Form = {
         email: email,
         token: token,
         password: Password,
         password_confirmation: PasswordConfirmation,
      };
      dispatch(ResetPassword({ payload, router }));
   };

   const { error, loading } = useSelector(
      (state: RootState) => state.auth.user
   );

   const formError = error as Form | any | undefined;

   return (
      <Fragment>
         <div className="pt-7">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Password
               </div>
               <PasswordInput
                  inputRef={password}
                  className="text-[#515151]  !h-12 text-left font-['Arial-Regular',_sans-serif] text-sm font-normal"
                  placeholder="Password"
               />

               {/* <Grid cols={2} className="!grid gap-y-3 mt-3">
                  <div className="flex gap-2">
                     <div className="w-[18.52px] h-[18.52px] text-[#4285f4] ">
                        <SvgCheckWithBgIcon />
                     </div>
                     <div className="text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                        One Lower-Case
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-[18.52px] h-[18.52px] text-[#515151] ">
                        <SvgCheckWithBgIcon />
                     </div>
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                        One Lower-Case
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-[18.52px] h-[18.52px] text-[#515151] ">
                        <SvgCheckWithBgIcon />
                     </div>
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                        One Lower-Case
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="w-[18.52px] h-[18.52px] text-[#515151] ">
                        <SvgCheckWithBgIcon />
                     </div>
                     <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                        One Lower-Case
                     </div>
                  </div>
               </Grid> */}
               {formError && formError.password && (
                  <div className="text-red-500 text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                     {formError.password}
                  </div>
               )}
            </div>
            <div className="mb-5">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Confirm Password
               </div>
               <PasswordInput
                  inputRef={password_confirmation}
                  className="text-[#515151]  !h-12 text-left font-['Arial-Regular',_sans-serif] text-sm font-normal"
                  placeholder="Confirm Password"
               />
               {formError && formError.password_confirmation && (
                  <div className="text-red-500 text-left font-['Raleway-Bold',_sans-serif] text-xs leading-5 font-bold">
                     {formError.password_confirmation}
                  </div>
               )}
            </div>
         </div>

         <Button
            type="button"
            className={`text-[#ffffff] backdrop-blur-[10px] ${loading === true ? "bg-blue-gradient-disable" : "bg-blue-gradient"} text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] h-12 w-full flex justify-center items-center`}
            onClick={() => onResetHandle()}
         >
            Reset &amp; Login
         </Button>
      </Fragment>
   );
}
