"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAdmin } from "@/admin/settings/security-settings/access-control/features/AccessControlAction";
import { useRouter } from "next/navigation";
import { EyeDropperIcon, EyeIcon } from "@heroicons/react/20/solid";
import { EyePHideSvgIcon } from "@admin/components/SvgIcons";
import { AdminState, AppDispatch } from "@admin/store";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));

type Form = {
   email: any;
   name: any;
   password: any;
};

export default function AccessControlCreateContent() {
   const [passwordType, setPasswordType] = useState<string>("password");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const onHandleCreateAdmin = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      formData.append("role", "admin" as string);
      dispatch(createAdmin({ formData, router }));
   };

   const { loading, error = {} } = useSelector(
      (state: AdminState) => state.admin.accessControl
   );
   const Error = error as Form;

   return (
      <form
         onSubmit={onHandleCreateAdmin}
         className="max-w-md mx-auto bg-white shadow-admin-card rounded-2xl p-5"
      >
         <div className="text-center text-xl font-bold font-['Raleway-Bold',_sans-serif] text-[#2f2f2f]  pb-3">
            Create Admin
         </div>
         <div className="pb-2">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
               Name
            </div>
            <Input
               type="text"
               className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
               placeholder="Admin Name"
               name="name"
            />
            {(Error.name as string) && (
               <small className="text-red-500 text-[10px]">
                  {Error.name as string}
               </small>
            )}
         </div>
         <div className="pb-2">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
               Email
            </div>
            <Input
               type="text"
               className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
               placeholder="Email"
               name="email"
            />
            {(Error.email as string) && (
               <small className="text-red-500 text-[10px]">
                  {Error.email as string}
               </small>
            )}
         </div>
         <div className="pb-2">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
               Password
            </div>
            <div className=" relative">
               <Input
                  type={passwordType}
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                  placeholder="Password"
                  name="password"
               />
               <Button
                  type="button"
                  className="absolute right-4 top-[50%] transform-translate-y-middle"
                  onClick={() => {
                     setPasswordType(
                        passwordType === "password" ? "text" : "password"
                     );
                  }}
               >
                  {passwordType === "password" ? (
                     <div className="w-4 h-4 text-gray-700">
                        <EyeIcon />
                     </div>
                  ) : (
                     <div className="w-4 h-4 text-gray-700">
                        <EyePHideSvgIcon />
                     </div>
                  )}
               </Button>
            </div>
            {(Error.password as string) && (
               <small className="text-red-500 text-[10px]">
                  {Error.password as string}
               </small>
            )}
         </div>
         <div className="pb-2">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
               Confirm Password
            </div>
            <div className=" relative">
               <Input
                  type={passwordType}
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-[30px] w-full shadow-admin-add border-none focus:ring-0 px-5"
                  placeholder="Confirm Password"
                  name="password_confirmation"
               />
               <Button
                  type="button"
                  className="absolute right-4 top-[50%] transform-translate-y-middle"
                  onClick={() => {
                     setPasswordType(
                        passwordType === "password" ? "text" : "password"
                     );
                  }}
               >
                  {passwordType === "password" ? (
                     <div className="w-4 h-4 text-gray-700">
                        <EyeIcon />
                     </div>
                  ) : (
                     <div className="w-4 h-4 text-gray-700">
                        <EyePHideSvgIcon />
                     </div>
                  )}
               </Button>
            </div>
            {(Error.password as string) && (
               <small className="text-red-500 text-[10px]">
                  {Error.password as string}
               </small>
            )}
         </div>
         <div className="text-end">
            <Button
               type="submit"
               className=" bg-blue-gradient text-white text-xs font-bold font-['Raleway-Bold',_sans-serif] rounded-2xl px-7 py-2"
            >
               Create
            </Button>
         </div>
      </form>
   );
}
