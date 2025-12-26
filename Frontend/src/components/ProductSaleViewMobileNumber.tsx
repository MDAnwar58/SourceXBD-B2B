"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("./Button"));

export default function ProductSaleViewMobileNumber() {
   const [viewMobileNumber, setViewMobileNumber] = useState<boolean>(false);
   const viewNumberRef = useRef<HTMLDivElement>(null);
   useEffect(() => {
      // viewnumber dropdown useing event
      function handleClickOutside(event: MouseEvent) {
         if (
            viewNumberRef.current &&
            !viewNumberRef.current.contains(event.target as Node)
         ) {
            setViewMobileNumber(false);
         }
      }
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, [viewNumberRef]);
   return (
      <div className=" relative " ref={viewNumberRef}>
         <Button
            type="button"
            className=" cursor-pointer text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium rounded-[14px] h-[63px] w-full flex items-center justify-center -z-10"
            style={{
               background:
                  "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
            }}
            onClick={() => setViewMobileNumber(!viewMobileNumber)}
         >
            View Mobile Number
         </Button>
         {viewMobileNumber === true ? (
            <div className=" absolute -top-9 right-0 bg-white drop-shadow-sm rounded-2xl px-5 py-1 z-10">
               <div className="text-sm text-center font-semibold">
                  Not found!
               </div>
            </div>
         ) : null}
      </div>
   );
}
