"use client";
import {
   AttachLinkSvgIcon,
   RightArrowSvgIcon,
} from "@/app/buyer/components/SvgIcons";
import Input from "@/components/Input";
import Textarea from "@/components/Textarea";
import React, { Fragment } from "react";
import OrderHistoryTermAndConditionContext from "../features/OrderHistoryTermAndConditionContext";
import Button from "@/components/Button";

export default function TermsAndConditionForm() {
   const {
      discount,
      applicable_text,
      shipping_charge,
      delivery_period,
      payment_terms,
      additional_info,
      productPrice,
      paymentLink,
      setProductPrice,
      setPaymentLink,
      addTermsAndCondition,
   } = OrderHistoryTermAndConditionContext();

   return (
      <Fragment>
         <div className="flex flex-row gap-5 mt-3">
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold pb-1">
                  Discount
               </div>
               <Input
                  className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={discount}
               />
            </div>
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
                  Applicable Text
               </div>
               <Input
                  className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={applicable_text}
               />

               <div className="flex flex-row items-center gap-x-2 pt-1">
                  <Input
                     type="checkbox"
                     className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                     onChange={(e) => setProductPrice(e.target.value)}
                  />

                  <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                     Included In Product Price
                  </div>
               </div>
            </div>
         </div>
         <div className="flex flex-row gap-5 mt-3">
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
                  Shipping Charges
               </div>
               <Input
                  className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={shipping_charge}
               />
               <div className="flex flex-row items-center gap-x-2 pt-1">
                  <Input
                     type="checkbox"
                     className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                     onChange={(e) => setProductPrice(e.target.value)}
                  />

                  <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                     Included In Product Price
                  </div>
               </div>
            </div>
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
                  Delivery Period
               </div>
               <Input
                  className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={delivery_period}
               />
            </div>
         </div>
         <div className="w-1/2 mt-3">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
               Payment Terms
            </div>
            <Input
               className="bg-[#f0f0f0] text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-xs font-bold w-full rounded-[10px] h-[34px] focus:outline-none px-5"
               style={{
                  boxShadow:
                     "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               }}
               inputRef={payment_terms}
            />
         </div>
         <div className="w-full mt-3">
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold  pb-1">
               Additional Information
            </div>
            <Textarea
               className="bg-[#f0f0f0] text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold w-full rounded-[10px] h-[134px] px-3 border-none"
               style={{
                  boxShadow:
                     "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
               }}
               textAreaRef={additional_info}
            />
            <div className="flex flex-row items-center gap-x-2 pt-1">
               <Input
                  type="checkbox"
                  className="bg-[#f1f1f1] rounded-sm border-solid border-[#4285f4] border-[0.5px] w-3 h-3"
                  onChange={(e) => setPaymentLink(e.target.value)}
               />

               <div className="text-[#4285f4] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  Include my payment link
               </div>
            </div>
         </div>

         <div className="flex flex-row justify-between items-center pt-9">
            <div className="bg-[#98b0ee] text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[8px] font-semibold rounded-[10px] w-[106px] h-[26px] flex justify-center items-center gap-1">
               <div className="w-3 h-3">
                  <AttachLinkSvgIcon />
               </div>
               <div>Attach Document</div>
            </div>

            <div className="flex flex-row gap-2">
               <div className="bg-[#f0f0f0] text-[#515151] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[67px] h-[26px] flex justify-center items-center">
                  Back
               </div>

               <Button
                  type="button"
                  className="text-[#ffffff] text-left font-['Raleway-SemiBold',_sans-serif] text-[10px] font-semibold rounded-lg w-[67px] h-[26px] flex justify-center items-center gap-x-1"
                  style={{
                     background:
                        "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  }}
                  onClick={addTermsAndCondition}
               >
                  <div>Next</div>
                  <div className="w-3 h-3">
                     <RightArrowSvgIcon />
                  </div>
               </Button>
            </div>
         </div>
      </Fragment>
   );
}
