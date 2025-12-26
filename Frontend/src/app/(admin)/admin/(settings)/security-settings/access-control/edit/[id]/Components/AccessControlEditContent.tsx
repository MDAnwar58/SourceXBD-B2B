"use client";
import { AdminState, AppDispatch } from "@admin/store";
import Button from "@/components/Button";
import Input from "@/components/Input";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
   createAdmin,
   getAdmin,
   updateAdmin,
} from "@/admin/settings/security-settings/access-control/features/AccessControlAction";
import { useRouter } from "next/navigation";
import { EyeIcon } from "@heroicons/react/20/solid";
import { EyePHideSvgIcon } from "@admin/components/SvgIcons";

type Admin = {
   id: number;
   name: string;
   email: string;
};

type Form = {
   email: any;
   name: any;
   password: any;
};

type Props = {
   params: {
      id: string;
   };
};

export default function AccessControlEditContent({ params }: Props) {
   const { id } = params;
   const [passwordType, setPasswordType] = useState<string>("password");
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   useEffect(() => {
      dispatch(getAdmin({ id }));
   }, [id]);

   const { admin = {} } = useSelector(
      (state: AdminState) => state.admin.accessControl
   );
   const Admin = admin as Admin;

   const onHandleUpdateAdmin = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const formData = new FormData(e.currentTarget);
         formData.append("role", "admin" as string);
         dispatch(updateAdmin({ id, formData, router }));
      },
      [dispatch, id, router]
   );

   const { loading, error = {} } = useSelector(
      (state: AdminState) => state.admin.accessControl
   );
   const Error = error as Form;

   return (
      <form
         onSubmit={onHandleUpdateAdmin}
         className="max-w-md mx-auto bg-white shadow-admin-card rounded-2xl p-5"
      >
         <div className="text-center text-xl font-bold font-['Raleway-Bold',_sans-serif] text-[#2f2f2f]  pb-3">
            Edit Admin
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
               defaultValue={Admin?.name}
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
               defaultValue={Admin?.email}
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
               className={`${loading === true ? " bg-blue-gradient-disable" : "bg-blue-gradient"} text-white text-xs font-bold font-['Raleway-Bold',_sans-serif] rounded-2xl px-7 py-2`}
            >
               Update
            </Button>
         </div>
      </form>
   );
}
