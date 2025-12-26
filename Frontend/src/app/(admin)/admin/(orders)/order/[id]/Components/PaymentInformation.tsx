"use client";
import { AdminState } from "@admin/store";
import {
   BankTransferSvgIcon,
   CosmicPointSvgIcon,
   CreditCardSvgIcon,
} from "@admin/components/SvgIcons";
import React from "react";
import { useSelector } from "react-redux";
import { HandManySvgIcon } from "@/components/SvgIcons";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));

type Order = {
   payment_method: string;
};

export default function PaymentInformation() {
   const { order = {} } = useSelector((state: AdminState) => state.admin.order);
   const Order = order as Order;
   return (
      <AdminCard>
         <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold pb-4">
            Payment Information
         </div>
         <div className="flex flex-row flex-wrap gap-3">
            {Order?.payment_method === "Cash on Delivery" ? (
               <div className="22xl:col-span-3 13xl:col-span-4 5xl:col-span-6 4xl:col-span-12 1xl2:col-span-2 lg:col-span-3 4md:col-span-4 md:col-span-6 6xs:col-span-4 col-span-6 3xs:mb-0 mb-3 cursor-pointer text-[#98b0ee] hover:text-white bg-[rgba(47,47,47,0.05)] hover:bg-blue-gradient rounded-[10px] w-auto p-3 transition-all duration-200 ease-linear">
                  <div className="w-[26.1px] h-6">
                     <HandManySvgIcon />
                  </div>
                  <div className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-1 w-[86.98px]">
                     Cash on Delivery
                  </div>
               </div>
            ) : (
               <div className="22xl:col-span-3 13xl:col-span-4 5xl:col-span-6 4xl:col-span-12 1xl2:col-span-2 lg:col-span-3 4md:col-span-4 md:col-span-6 6xs:col-span-4 col-span-6 3xs:mb-0 mb-3 cursor-pointer text-[#98b0ee] hover:text-white bg-[rgba(47,47,47,0.05)] hover:bg-blue-gradient rounded-[10px] w-full p-3 transition-all duration-200 ease-linear">
                  <div className="w-[26.1px] h-6">
                     <CreditCardSvgIcon />
                  </div>
                  <div className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-1">
                     Pay Now
                  </div>
               </div>
            )}

            {/* <div className="22xl:col-span-3 13xl:col-span-4 5xl:col-span-6 4xl:col-span-12 1xl2:col-span-2 lg:col-span-3 4md:col-span-4 md:col-span-6 6xs:col-span-4 col-span-6 3xs:mb-0 mb-3 cursor-pointer text-[#98b0ee] hover:text-white bg-[rgba(47,47,47,0.05)] hover:bg-blue-gradient rounded-[10px] w-full p-3 transition-all duration-200 ease-linear">
               <div className="w-[26.1px] h-6">
                  <BankTransferSvgIcon />
               </div>
               <div className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-1 w-[86.98px]">
                  Bank Transfer
               </div>
            </div>

            <div className="22xl:col-span-3 13xl:col-span-4 5xl:col-span-6  4xl:col-span-12 1xl2:col-span-2 lg:col-span-3 4md:col-span-4 md:col-span-6 6xs:col-span-4 col-span-6 3xs:mb-0 mb-3 cursor-pointer text-[#98b0ee] hover:text-white bg-[rgba(47,47,47,0.05)] hover:bg-blue-gradient rounded-[10px] w-full p-3 transition-all duration-200 ease-linear">
               <div className="w-[26.1px] h-6">
                  <CosmicPointSvgIcon />
               </div>
               <div className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-1 w-[86.98px]">
                  Cosmic Point
               </div>
            </div>

            <div className="22xl:col-span-3 13xl:col-span-4 5xl:col-span-6  4xl:col-span-12 1xl2:col-span-2 lg:col-span-3 4md:col-span-4 md:col-span-6 6xs:col-span-4 col-span-6 3xs:mb-0 mb-3 cursor-pointer text-[#98b0ee] hover:text-white bg-[rgba(47,47,47,0.05)] hover:bg-blue-gradient rounded-[10px] w-full p-3 transition-all duration-200 ease-linear">
               <div className="w-[26.1px] h-6">
                  <CosmicPointSvgIcon />
               </div>
               <div className="text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pt-1 w-[86.98px]">
                  Cosmic Point
               </div>
            </div> */}
         </div>
      </AdminCard>
   );
}
