"use client";
import Input from "@/components/Input";
import NavLink from "@/components/NavLink";
import { EyePHideSvgIcon, EyePSvgIcon } from "@admin/components/SvgIcons";
import React, { useState } from "react";

export default function ShowProfilePassword() {
   const [passwordInputType, setPasswordInputType] =
      useState<string>("password");
   return (
      <div className=" bg-[#ffffff] rounded-[14px] shadow-admin-card relative mb-5">
         <div className="rounded-t-[14px] bg-white border-b border-gray-300 xs6:flex justify-between items-center px-5 h-[17%] sticky top-0 py-3">
            <div className="text-[#2f2f2f] xs6:text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold text-center xs6:pt-0 pt-[.35rem]">
               Password
            </div>
         </div>
         <div className=" overflow-y-auto">
            <div className="px-5 pb-10 pt-7">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative">
                  Show Profile Password
               </div>
               <div className=" relative">
                  <Input
                     type={passwordInputType}
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[42px] w-full border-none px-5"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                  />
                  <div
                     className="w-5 h-5 absolute right-4 top-[50%] transform-translate-y-middle text-[#515151]"
                     onClick={() => {
                        setPasswordInputType((type) =>
                           type === "password" ? "text" : "password"
                        );
                     }}
                  >
                     {passwordInputType !== "password" ? (
                        <EyePSvgIcon />
                     ) : (
                        <EyePHideSvgIcon />
                     )}
                  </div>
               </div>
               <NavLink
                  href="/admin/user/12/change-password?email=anwar.saeed656@gmail.com"
                  className="flex justify-end pt-1"
               >
                  <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-b border-[#4285f4]">
                     Change Password
                  </div>
               </NavLink>
            </div>
         </div>
      </div>
   );
}
