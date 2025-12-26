"use client";
import Img from "@/components/Image";
import Input from "@/components/Input";
import React, { ChangeEvent, useState } from "react";

export default function CardNo() {
   const [cardNumber, setCardNumber] = useState("");

   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      // Keep only numeric characters and limit to 16 digits
      const inputVal = e.target.value.replace(/\D/g, "").slice(0, 16);

      // Add two spaces every 4 digits
      const formattedNumber = inputVal.replace(/(\d{4})(?=\d)/g, "$1  ");
      setCardNumber(formattedNumber);
   };

   return (
      <div className="">
         <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
            Card Number
         </div>
         <div className="relative ps-1">
            <Img
               src="/assets/images/master-card.png"
               alt="card-logo"
               className="w-[30.87px] h-6 absolute top-[50%] left-5 transform -translate-y-1/2"
               width={30}
               height={30}
            />
            <Input
               type="text"
               value={cardNumber}
               onChange={handleInputChange}
               className="bg-[rgba(152,176,238,0.05)] rounded-2xl w-[235px] h-10 text-[#2f2f2f] border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-[14px] font-normal ps-14"
               placeholder="Type here"
               style={{
                  boxShadow:
                     "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1), inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               }}
            />
         </div>
      </div>
   );
}
