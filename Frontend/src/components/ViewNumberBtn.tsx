"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("./Button"), {
   ssr: false,
});

type Props = {
   contactNumber: any;
};

export default function ViewNumberBtn({ contactNumber }: Props) {
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
            className=" capitalize rounded-2xl border-solid border-[#4285f4] border w-full h-[38px] text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
            onClick={() => {
               setViewNumber(!viewNumber);
            }}
         >
            view number
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
