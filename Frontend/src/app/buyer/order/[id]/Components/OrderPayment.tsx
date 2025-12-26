"use client";
import React from "react";
import { TotalPrice } from "../../features/totalPriceCalculate";

type Props = {
   order: any;
};

export default function OrderPayment({ order }: Props) {
   let totalPrice: number = 0;
   if (order?.order_items?.length > 0) {
      totalPrice = TotalPrice(order?.order_items);
   }

   return (
      <div className="bg-[#f0f0f0] rounded-[10px]  mt-4 ">
         <h2 className="text-[#2f2f2f] pt-3 pl-3 text-left font-['Raleway-SemiBold',_sans-serif] text-xs font-semibold ">
            Payment
         </h2>
         <div className="flex justify-between p-3">
            <div>
               <p className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Subtotal
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Shipping Fee
               </p>
               <p className="text-[#515151] text-left pt-3 font-['Raleway-Medium',_sans-serif] text-[10px] font-medium ">
                  Total
               </p>
            </div>
            <div>
               <div className="flex gap-5 justify-end">
                  <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     BDT
                  </p>
                  <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     {totalPrice}
                  </p>
               </div>
               <div className="flex gap-5 justify-end pt-3">
                  <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     BDT
                  </p>
                  <p className="text-[#2f2f2f]  font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     {1000}
                  </p>
               </div>
               <div className="flex gap-5 justify-end pt-3">
                  <p className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     BDT
                  </p>
                  <p className="text-[#2f2f2f]  font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     {totalPrice + 1000}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
