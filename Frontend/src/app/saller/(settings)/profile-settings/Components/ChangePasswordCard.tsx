"use client";
import React, { useEffect, useState } from "react";
import { useScreenMediaQuery } from "@/components/react/media-query";
import SettingsContext from "@/saller/settings/features/SettingsContext";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const AdminCard = dynamic(() => import("../../../components/card"));
const Input = dynamic(() => import("@/components/Input"));

export default function ChangePasswordCard() {
   const {
      current_password,
      password,
      confirmPassword,
      passwordFormRef,
      changePassword,
   } = SettingsContext();
   const [changePasswordCard, setChangePasswordCard] = useState<boolean>(false);
   const { lgScreen } = useScreenMediaQuery();
   useEffect(() => {
      if (lgScreen) {
         setChangePasswordCard(false);
      } else {
         setChangePasswordCard(true);
      }
   }, [lgScreen]);

   return (
      <div className="lg:col-span-6 col-span-12 lg:relative">
         <div className="lg:inline-block hidden w-[.1rem] h-64 bg-gray-700 absolute top-[50%] left-0 transform-translate-y-middle" />
         <div className=" transition-all duration-1000 ease-linear">
            <div
               className={`cursor-pointer text-[#ffffff]  text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[18px] w-[147px] h-[43px] lg:flex hidden justify-center items-center ${changePasswordCard === false ? "bg-blue-gradient ms-7 mt-20" : "bg-blue-300 ms-7 mt-0"}`}
               onClick={() => setChangePasswordCard(!changePasswordCard)}
            >
               Change Password
            </div>
            {changePasswordCard === true && (
               <AdminCard className=" lg:ms-7  mt-1">
                  <form ref={passwordFormRef}>
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold p-0">
                        Creat New Password
                     </div>
                     <div className=" pt-3">
                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal pb-2">
                           Current Password
                        </div>
                        <div className="px-1">
                           <Input
                              type="text"
                              className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] w-full h-[50px] px-5"
                              placeholder="New Password"
                              inputRef={current_password}
                           />
                        </div>
                        <div
                           className=" relative"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                        />
                     </div>
                     <div className=" pt-3">
                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal pb-2">
                           New Password
                        </div>
                        <div className="px-1">
                           <Input
                              type="text"
                              className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] w-full h-[50px] px-5"
                              placeholder="New Password"
                              inputRef={password}
                           />
                        </div>
                        <div
                           className=" relative"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                        />
                     </div>
                     <div className=" pt-3">
                        <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal pb-2">
                           Confirm Password
                        </div>
                        <div className="px-1">
                           <Input
                              type="text"
                              className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] w-full h-[50px] px-5"
                              placeholder="Confirm Password"
                              inputRef={confirmPassword}
                           />
                        </div>
                        <div
                           className=" relative"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                        />
                     </div>
                     <Button
                        type="button"
                        className="rounded-[20px] h-[50px] px-7 bg-blue-gradient text-[#ffffff] font-['Raleway-Bold',_sans-serif] text-base font-bold flex justify-center items-center mt-5"
                        onClick={changePassword}
                     >
                        Reset &amp; Save
                     </Button>
                  </form>
               </AdminCard>
            )}
         </div>
      </div>
   );
}
