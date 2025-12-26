"use client";
import Input from "@/components/Input";
import React, { ChangeEvent, useState } from "react";

export default function Exp() {
   const [expDate, setExpDate] = useState("");

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      // Remove any non-numeric characters
      let inputVal = e.target.value.replace(/\D/g, "");

      // Format the input as MM-YYYY
      if (inputVal.length > 2) {
         inputVal = `${inputVal.slice(0, 2)}-${inputVal.slice(2, 6)}`;
      }

      // Limit to 7 characters (MM-YYYY)
      setExpDate(inputVal.slice(0, 7));
   };

   return (
      <div>
         <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
            Exp
         </div>
         <div>
            <Input
               type="text"
               value={expDate}
               onChange={handleInputChange}
               className="bg-[rgba(152,176,238,0.05)] rounded-2xl w-full h-10 text-[#2f2f2f] border-none focus:ring-0 text-center font-['Arial-Regular',_sans-serif] text-xs font-normal px-5"
               placeholder="MM-YYYY"
               style={{
                  boxShadow:
                     "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1), inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               }}
               maxLength={7} // Limits input to 7 characters
            />
         </div>
      </div>
   );
}
