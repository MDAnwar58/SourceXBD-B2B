"use client";
import { AppDispatch, RootState } from "@/app/store";
import Button from "@/components/Button";
import PasswordInput from "@/components/PasswordInput";
import { getLocalStorage } from "@/components/react/storage";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../features/action";
import { useRouter } from "next/navigation";
import NavLink from "@/components/NavLink";

export default function ChoochPasswordForm() {
   const [cacheKey, setCacheKey] = useState<string>("");
   const password = useRef<HTMLInputElement>(null);
   const password_confirmation = useRef<HTMLInputElement>(null);
   const registerUserData = getLocalStorage("register-user-data");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      console.log(registerUserData);
      if (registerUserData) {
         const params = new URLSearchParams(registerUserData);
         const data = Object.fromEntries(params.entries()); // Converts to an object
         console.log("Parsed data:", data);
         setCacheKey(data.cache_key);
      } else {
         router.push("/sign-up");
      }
   }, [registerUserData]);

   const onRegister = () => {
      const Password = password.current ? password.current?.value : "";
      const PasswordConfirmation = password_confirmation.current
         ? password_confirmation.current?.value
         : "";

      const payload = {
         password: Password,
         password_confirmation: PasswordConfirmation,
         cache_key: cacheKey,
      };
      dispatch(register({ payload, router }));
   };

   const { error = {} } = useSelector((state: RootState) => state.auth.user);
   const Error = error as any;

   return (
      <Fragment>
         {!Error?.errors?.password && Error?.message && (
            <div className="bg-red-500/40 rounded-2xl p-3 mt-3">
               {Error?.message}
               <NavLink
                  href={"/sign-up"}
                  className="text-blue-700 font-semibold text-sm ms-1"
               >
                  Sign Up?
               </NavLink>
            </div>
         )}
         <div className="pt-7">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Password
               </div>
               {/* success !bg-[rgba(52,168,83,0.10)] !text-green-500 */}
               {/* danger !bg-[rgba(244,67,54,0.10)] !text-[#f44336] */}
               <PasswordInput
                  placeholder="Password"
                  inputRef={password}
                  className="text-[#515151]  !h-12 text-left font-['Arial-Regular',_sans-serif] text-sm font-normal"
               />
               {Error?.errors?.password && (
                  <small className="text-red-500">
                     {Error?.errors?.password}
                  </small>
               )}
            </div>
            <div className="mb-5">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Confirm Password
               </div>
               {/* success !bg-[rgba(52,168,83,0.10)] !text-green-500 */}
               {/* danger !bg-[rgba(244,67,54,0.10)] !text-[#f44336] */}
               <PasswordInput
                  placeholder="Confirm Password"
                  inputRef={password_confirmation}
                  className="text-[#515151]  !h-12 text-left font-['Arial-Regular',_sans-serif] text-sm font-normal"
               />
               {Error?.errors?.password && (
                  <small className="text-red-500">
                     {Error?.errors?.password}
                  </small>
               )}
            </div>
         </div>

         <Button
            className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] h-12 w-full flex justify-center items-center"
            style={{
               background:
                  "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
               backdropFilter: "blur(10px)",
            }}
            onClick={() => onRegister()}
         >
            Continue
         </Button>
      </Fragment>
   );
}
