"use client";
import React, { useEffect, useState } from "react";
import { calculateTotalPrice } from "@/saller/orders/features/totalPriceCalculate";

type Props = {
   qty: any;
   product: any;
   selectProducts: any[];
};

export default function OrderSummary({ qty, product, selectProducts }: Props) {
   const [totalPrice, setTotalPrice] = useState<number>(0);
   useEffect(() => {
      const total = calculateTotalPrice(selectProducts);
      setTotalPrice(total);
   }, [selectProducts]);

   return (
      <div>
         <div
            className="bg-[#ffffff] rounded-[20px] p-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <div className="bg-[rgba(152,176,238,0.05)] mx-auto rounded-[10px] w-full h-[92px] p-3 ">
               <button className="bg-[rgba(152,176,238,0.50)] rounded-lg w-full h-6 flex items-center justify-center ">
                  <div className="text-[rgba(255,255,255,0.50)] text-center font-['Raleway-SemiBold',_sans-serif] text-[10px] leading-[14px] font-semibold ">
                     Use This address
                  </div>
               </button>
               <div className="text-[#515151] text-center font-['Arial-Regular',_sans-serif] text-[10px] leading-[14px] font-normal pt-2">
                  Choose a shipping addres to continuececking out. You”ll still
                  have a change to review and edit your order befor it”s final
               </div>
            </div>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pt-3 pb-4">
               Order Summary
            </div>
            <div>
               <div className="flex justify-between pb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     items:
                  </div>
                  <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {selectProducts?.length > 0
                        ? selectProducts?.length
                        : "--"}
                  </div>
               </div>
               <div className="flex justify-between pb-3">
                  <div className=" text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     Total Amount:
                  </div>
                  <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {totalPrice > 0 ? totalPrice : "--"}
                     {totalPrice > 0 && " BDT"}
                  </div>
               </div>
               <div className="flex justify-between pb-3">
                  <div className="">
                     <svg
                        width={95}
                        height={1}
                        viewBox="0 0 95 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M1 0.75L94 0.750008"
                           stroke="#B2B2B2"
                           strokeWidth="0.5"
                           strokeLinecap="round"
                        />
                     </svg>
                  </div>
                  <div className=" ">
                     <svg
                        width={95}
                        height={1}
                        viewBox="0 0 95 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M1 0.75L94 0.750008"
                           stroke="#B2B2B2"
                           strokeWidth="0.5"
                           strokeLinecap="round"
                        />
                     </svg>
                  </div>
               </div>
               <div className="flex justify-between pb-3">
                  <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     Shipping Charge:
                  </div>
                  {totalPrice > 0 ? (
                     <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                        {Number(100) || "--"} BDT
                     </div>
                  ) : (
                     <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                        --
                     </div>
                  )}
               </div>
               <div className="flex justify-between pb-3">
                  <div className=" text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     Pay Amount:
                  </div>
                  <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     {totalPrice > 0 ? totalPrice + Number(100) : "--"}
                     {totalPrice > 0 && " BDT"}
                  </div>
               </div>
               <div className="flex justify-between pb-4">
                  <div className=" text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     Estimated tax to be collected::
                  </div>
                  <div className="text-[#2f2f2f] text-right font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                     --
                  </div>
               </div>
            </div>
            <button className="bg-[rgba(152,176,238,0.50)] rounded-[10px] w-full mx-auto h-8 flex items-center justify-center">
               <div className="text-[rgba(255,255,255,0.50)] font-['Arial-Regular',_sans-serif] text-xs font-normal ">
                  How are shipping costs calculated?
               </div>
            </button>
         </div>
      </div>
   );
}
