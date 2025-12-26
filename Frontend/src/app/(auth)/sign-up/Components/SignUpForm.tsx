"use client";
import { AppDispatch, RootState } from "@/app/store";
import { useRouter } from "next/navigation";
import React, { FormEvent, Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SignUp } from "../../features/action";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"), { ssr: false });
const Input = dynamic(() => import("@/components/Input"), { ssr: false });

type User = {
   f_name: string;
   l_name: string;
   email: string;
};

export default function SignUpForm() {
   const first_name = useRef<HTMLInputElement>(null);
   const last_name = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const signUp = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const FirstName = first_name.current ? first_name.current.value : "";
      const LastName = last_name.current ? last_name.current.value : "";
      const Email = email.current ? email.current.value : "";
      const payload: User = {
         f_name: FirstName,
         l_name: LastName,
         email: Email,
      };
      dispatch(SignUp({ payload, router }));
   };

   const { error = {} } = useSelector((state: RootState) => state.auth.user);

   const formError = error as User | any;
   return (
      <Fragment>
         <form onSubmit={signUp} className="pt-7">
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  First Name
               </div>
               <Input
                  type="text"
                  inputRef={first_name}
                  placeholder="First name"
                  className="bg-[rgba(255,255,255,0.50)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal border-none focus:ring-0 px-7 rounded-[10px] h-12 w-full"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     backdropFilter: "blur(10px)",
                  }}
               />
               {formError.f_name && (
                  <small className="text-red-500 text-sm mt-1">
                     {formError.f_name}
                  </small>
               )}
            </div>
            <div className="mb-3">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-1">
                  Last Name
               </div>
               <Input
                  type="text"
                  inputRef={last_name}
                  placeholder="Last name"
                  className="bg-[rgba(255,255,255,0.50)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal border-none focus:ring-0 px-7 rounded-[10px] h-12 w-full"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     backdropFilter: "blur(10px)",
                  }}
               />
               {formError.l_name && (
                  <small className="text-red-500 text-sm mt-1">
                     {formError.l_name}
                  </small>
               )}
            </div>
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
               {formError.email && (
                  <small className="text-red-500 text-sm mt-1">
                     {formError.email}
                  </small>
               )}
            </div>

            <Button
               type="submit"
               className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[10px] h-12 w-full flex justify-center items-center"
               style={{
                  background:
                     "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  backdropFilter: "blur(10px)",
               }}
            >
               Continue
            </Button>
         </form>
      </Fragment>
   );
}
