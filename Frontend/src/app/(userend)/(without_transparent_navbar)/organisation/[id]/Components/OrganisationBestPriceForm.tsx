import React from "react";
import Textarea from "@/components/Textarea";
import dynamic from "next/dynamic";
const RadioButton = dynamic(() => import("@/components/RadioButton"));

export default function OrganisationBestPriceForm() {
   return (
      <div
         className="bg-[#ffffff] rounded-[20px] mt-7 px-7 py-5"
         style={{
            boxShadow:
               "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
         }}
      >
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold">
            Get the Best Price for
         </div>
         <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-sm font-normal pt-1">
            Lorem Machinry and Spare Paets Private Limited
         </div>
         <div className="py-5">
            <Textarea
               className="bg-[#ffffff] rounded-[10px] h-[71px] w-full px-4 border-none text-[#727272] text-left font-['Raleway-Regular',_sans-serif] text-[10px] font-normal"
               style={{
                  boxShadow:
                     "1px 1px 5px 0px rgba(0, 0, 0, 0.2),-1px -1px 5px 0px rgba(101, 101, 101, 0.25)",
               }}
               placeholder="Please Enter Your Product Details"
            />
         </div>
         <fieldset className="gap-4 text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pt-1">
            <legend className="mb-[0.15rem]"> Requirement Frequency</legend>
            <div className="flex gap-3">
               <RadioButton
                  label={
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[47px]">
                        One-Time
                     </div>
                  }
                  id="one-time"
                  htmlFor="one-time"
                  gap="2"
                  name="requirement_frequency"
                  className="border border-[#4285f4] text-[#4285f4] focus:ring-[#4285f4] w-5 h-5"
               />
               <RadioButton
                  label={
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative w-[47px]">
                        Recurring
                     </div>
                  }
                  id="recurring"
                  htmlFor="recurring"
                  gap="2"
                  name="requirement_frequency"
                  className="border border-[#4285f4] text-[#4285f4] focus:ring-[#4285f4] w-5 h-5"
               />
            </div>
         </fieldset>
      </div>
   );
}
