"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { SvgCallIcon } from "./SvgIcons";
const Button = dynamic(() => import("./Button"));

type Props = {
   contactNumber: any;
};

export default function ViewMobileNumberBtn({ contactNumber }: Props) {
   const [viewNumber, setViewNumber] = useState<boolean>(false);
   const viewNumberRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      // viewnumber dropdown useing event
      function handleClickOutside(event: MouseEvent) {
         if (
            viewNumberRef.current &&
            !viewNumberRef.current.contains(event.target as Node)
         ) {
            setViewNumber(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [viewNumberRef]);
   return (
      <div ref={viewNumberRef} className=" relative ">
         <Button
            type="button"
            className="rounded-lg text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold xs3:w-[123px] w-full h-9 flex items-center justify-center gap-x-2"
            style={{
               background:
                  "linear-gradient(182.88deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
            }}
            onClick={() => {
               setViewNumber(!viewNumber);
            }}
         >
            <div className="bg-[#ffffff] rounded w-[22px] h-[22px] flex items-center justify-center">
               <div className="w-3.5 h-3.5 text-[#4285F4]">
                  <SvgCallIcon />
               </div>
            </div>

            <div>View Mobile Number</div>
         </Button>
         {viewNumber && (
            <div className=" absolute -top-9 right-0 bg-white drop-shadow-sm rounded-2xl px-5 py-1">
               {contactNumber ? (
                  contactNumber
               ) : (
                  <div className="text-xs text-center font-semibold">
                     Not found!
                  </div>
               )}
            </div>
         )}
      </div>
   );
}
