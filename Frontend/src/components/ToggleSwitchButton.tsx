"use client";
import React, { ChangeEventHandler, MouseEventHandler } from "react";

type Props = {
   label?: string | undefined;
   checked?: boolean | undefined;
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined; // Correct type for onChange
   onClick?: MouseEventHandler<HTMLInputElement> | undefined;
   width?: number | undefined;
   height?: number | undefined;
};

export default function ToggleSwitchButton({
   label,
   checked = false,
   onChange,
   onClick,
   width,
   height,
}: Props) {
   return (
      <label className="inline-flex items-center cursor-pointer">
         <input
            type="checkbox"
            className="sr-only peer"
            onChange={onChange}
            onClick={onClick}
            defaultChecked={checked}
         />
         <div
            className={`relative w-${width} h-${height} bg-[#ededed] shadow-admin-sub-card peer-focus:outline-none peer-focus:ring-0 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#2f2f2f] peer-checked:after:bg-[#90ff38] after:border-gray-100 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-[rgba(144,255,56,0.5)]`}
         />
         {label && (
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
               {label}
            </span>
         )}
      </label>
   );
}
