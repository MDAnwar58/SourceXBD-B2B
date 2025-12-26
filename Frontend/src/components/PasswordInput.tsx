"use client";
import React, { LegacyRef, useState } from "react";
import { EyePHideSvgIcon, EyePSvgIcon } from "@admin/components/SvgIcons";

type Props = {
   inputRef?: LegacyRef<HTMLInputElement> | undefined;
   name?: string | undefined;
   className?: string | undefined;
   onChange?: any | undefined;
   defaultValue?: any | undefined;
   placeholder?: string | undefined;
};

export default function PasswordInput({
   inputRef,
   name,
   className,
   onChange,
   defaultValue,
   placeholder,
}: Props) {
   const [passwordInputType, setPasswordInputType] =
      useState<string>("password");
   return (
      <div className=" relative">
         <input
            type={passwordInputType}
            ref={inputRef}
            name={name}
            className={`bg-[rgba(152,176,238,0.05)] rounded-[10px] h-[42px] w-full border-none px-6 ${className}`}
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
