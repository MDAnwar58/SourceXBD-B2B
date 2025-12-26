"use client";
import { ChangeEventHandler, LegacyRef, MouseEventHandler } from "react";

type Props = {
   label?: string | undefined;
   ref?: LegacyRef<HTMLInputElement> | undefined;
   defaultChecked?: boolean | undefined;
   onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
   onClick?: MouseEventHandler<HTMLInputElement> | undefined;
   defaultValue?: string | undefined;
};

export function TableToggleSwitch({
   label,
   ref,
   defaultChecked,
   onChange,
   onClick,
   defaultValue,
}: Props) {
   return (
      <label className="xs:inline-flex items-center cursor-pointer">
         <input
            type="checkbox"
            className="sr-only peer"
            ref={ref}
            defaultChecked={defaultChecked}
            onChange={onChange}
            onClick={onClick}
            defaultValue={defaultValue}
         />
         <div className="relative w-[2.31rem] h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-0  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#81f124] peer-checked:after:bg-[#81f124] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#2f2f2f] after:border-gray-400 after:border after:rounded-full after:w-4 after:h-4 after:transition-all dark:border-gray-600 peer-checked:bg-[rgba(144,255,56,0.4)]" />
         {label && (
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
               {label}
            </span>
         )}
      </label>
   );
}
