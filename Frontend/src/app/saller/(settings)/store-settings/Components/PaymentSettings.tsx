"use client";
import React, { useEffect, useState } from "react";
import AdminCard from "../../../components/card";
import Input from "@/components/Input";
import { useScreenMediaQuery } from "@/components/react/media-query";
import Radio from "@/app/saller/components/Radio";
import Img from "@/components/Image";
import CardNo from "./CardNo";
import Exp from "./Exp";
import CVV from "./CVV";
import RadioButton from "@/components/RadioButton";
import { CircleQuestionMarkSvgIcon } from "@/app/saller/components/SvgIcons";

export default function PaymentSettings() {
   const [sendEmail, setSendEmail] = useState<boolean>(false);
   const [sendAlternativeEmail, setSendAlternativeEmail] =
      useState<boolean>(false);
   return (
      <div className="lg:col-span-6 col-span-12 lg:relative">
         <AdminCard>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium pb-1">
               Payment Settings
            </div>
            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal pb-3">
               Update your payment details &amp; Address
            </div>

            <div className="pt-3">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-2">
                  Name on Card
               </div>

               <div className="px-1">
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] rounded-2xl h-10 text-[#2f2f2f] border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-full px-5"
                     placeholder="Type here"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                  />
               </div>
            </div>
            <div className="pt-3 flex flex-row gap-3">
               <CardNo />
               <Exp />
               <CVV />
            </div>
            <div className="pt-5">
               <RadioButton
                  label={
                     <div
                        onClick={() => setSendEmail(!sendEmail)}
                        className="ps-[.3rem]"
                     >
                        <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative">
                           Sent to my email
                        </div>
                        <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                           Naimul46823@gmail.com
                        </div>
                     </div>
                  }
                  id="send-my-email"
                  htmlFor="send-my-email"
                  name="send-email"
                  onChange={() => setSendEmail(!sendEmail)}
                  defaultChecked={sendEmail}
                  gap="3"
                  className=" focus:!bg-blue-500 focus:!ring-blue-500"
               />
               <div className="pt-3 pb-9">
                  <RadioButton
                     label={
                        <div
                           onClick={() =>
                              setSendAlternativeEmail(!sendAlternativeEmail)
                           }
                           className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium ps-[.3rem]"
                        >
                           Sent to An alternative email
                        </div>
                     }
                     id="send-alternative-email"
                     htmlFor="send-alternative-email"
                     name="send-email"
                     onChange={() =>
                        setSendAlternativeEmail(!sendAlternativeEmail)
                     }
                     defaultChecked={sendAlternativeEmail}
                     gap="3"
                     className=" focus:bg-blue-500 focus:ring-blue-500"
                  />
               </div>
            </div>

            <div className="flex flex-row justify-between items-center">
               <div className="bg-[#f0f0f0] rounded-[10px] w-[83px] h-[37px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal flex justify-center items-center gap-[.4rem]">
                  <div className="text-[#515151] w-6 h-6">
                     <CircleQuestionMarkSvgIcon />
                  </div>
                  <div>Help</div>
               </div>

               <div className=" bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold rounded-[14px] xs:w-[104px] w-full h-[37px] flex items-center justify-center">
                  Cahnge Save
               </div>
            </div>
         </AdminCard>
      </div>
   );
}
