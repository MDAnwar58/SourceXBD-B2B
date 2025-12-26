"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import { DownArrowSvgIcon } from "@/saller/components/SvgIcons";

type Props = {
   label?: string | undefined;
   selectedOption?: number | undefined;
   options?: any | undefined;
   arrowIcon?: boolean | undefined;
   optionIcon?: any | undefined;
   onHandleSelectValue: (value: string) => void | undefined;
   className?: string | undefined;
   dropdownClassName?: string | undefined;
};

export default function SelectArea({
   label,
   selectedOption,
   options,
   arrowIcon = true,
   optionIcon = null,
   onHandleSelectValue,
   className,
   dropdownClassName,
}: Props) {
   const [dropdown, setDropdown] = useState(false);
   const [selectDropdown, setSelectDropdown] = useState<number>();
   const dropdownRef = useRef<HTMLDivElement>(null);
   // Close dropdown when clicking outside
   useEffect(() => {
      setSelectDropdown(selectedOption);
      function handleClickOutside(event: MouseEvent) {
         // If the clicked target is outside the dropdownRef
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setDropdown(false);
         }
      }

      // Add event listener to detect outside clicks
      document.addEventListener("mousedown", handleClickOutside);

      // Cleanup event listener when the component is unmounted
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [selectedOption]);
   return (
      <Fragment>
         {label && (
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
               {label}
            </div>
         )}
         <div className="relative" ref={dropdownRef}>
            <div
               onClick={() => {
                  setDropdown(!dropdown);
               }}
               className={`bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] h-[30px] flex items-center 
               ${selectDropdown ? "justify-between" : "justify-end"}
                px-3 ${className}`}
            >
               {options.map(
                  (option: any, index: number) =>
                     option.value === Number(selectDropdown) && (
                        <div
                           key={index + 1}
                           className="flex items-center gap-x-2"
                        >
                           <div>{option.name}</div>
                           {option.bgColor && (
                              <div
                                 className={`${option.bgColor} rounded-full w-2 h-2`}
                              />
                           )}
                        </div>
                     )
               )}
               {arrowIcon === true && (
                  <div className="bg-[#98b0ee] text-white rounded w-[18px] h-[18px] flex items-center justify-center">
                     <div className="w-4 h-4">
                        <DownArrowSvgIcon />
                     </div>
                  </div>
               )}
            </div>

            {dropdown !== false && (
               <div className="absolute top-8 left-0 w-full p-0 bg-[rgba(152,176,238,1)] text-white drop-shadow-sm  font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[10px] z-20">
                  {options.length > 0
                     ? options.map((option: any, index: number) => (
                          <div
                             key={index + 1}
                             onClick={() => {
                                setSelectDropdown(option.value);
                                onHandleSelectValue(option.value);
                                setDropdown(false);
                             }}
                             className={`hover:bg-blue-500 h-[30px] cursor-pointer px-3 rounded-[10px] flex items-center ${dropdownClassName}`}
                          >
                             <div className="flex items-center gap-x-2">
                                <div>{option.name}</div>
                                <div
                                   className={`${option.bgColor} rounded-full w-2 h-2`}
                                />
                             </div>
                             {optionIcon !== null && optionIcon}
                          </div>
                       ))
                     : null}
               </div>
            )}
         </div>
      </Fragment>
   );
}
