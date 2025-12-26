"use client";
import Input from "@/components/Input";
import React, { useState, ChangeEvent } from "react";

export default function CVV() {
   const [cvv, setCvv] = useState("");

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      // Remove any non-numeric characters and limit to 3 digits
      const inputVal = e.target.value.replace(/\D/g, "").slice(0, 3);
      setCvv(inputVal);
   };

   return (
      <div>
         <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
            CVV
         </div>
         <div className="pe-1">
            <Input
               type="password"
               value={cvv}
               onChange={handleInputChange}
               className="bg-[rgba(152,176,238,0.05)] rounded-2xl w-full h-10 text-[#2f2f2f] border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal px-5"
               placeholder="Type here"
               style={{
                  boxShadow:
                     "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1), inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               }}
               maxLength={3} // Limits input to 3 characters
            />
         </div>
      </div>
   );
}
