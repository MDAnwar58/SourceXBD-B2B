"use client";
import React, { useState } from "react";
import { EyePHideSvgIcon, EyePSvgIcon } from "@admin/components/SvgIcons";

type Props = {
   ref?: any | undefined;
   defaultValue?: any | undefined;
   onChange?: any | undefined;
   placeholder?: string | undefined;
};

export default function PasswordChangeInput({
   ref,
   defaultValue,
   onChange,
   placeholder,
}: Props) {
   const [passwordInputType, setPasswordInputType] =
      useState<string>("password");
   return (
      <div className=" relative">
         <input
            type={passwordInputType}
            ref={ref}
            className="bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[42px] w-full border-none px-6"
            style={{
               boxShadow:
                  "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
            }}
            defaultValue={defaultValue}
            onChange={onChange}
            placeholder={placeholder}
         />
         <div
            className="w-5 h-5 absolute right-4 top-[50%] transform-translate-y-middle text-[#515151] cursor-pointer"
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
   );
}
