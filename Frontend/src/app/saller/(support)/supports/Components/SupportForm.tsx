"use client";
import { AppDispatch, SallerState } from "@/saller/store";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supportStore } from "@/saller/support/features/SupportAction";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));
const Card = dynamic(() => import("@/components/card"));

export default function SupportForm() {
   const subject = useRef<HTMLInputElement>(null);
   const content = useRef<HTMLTextAreaElement>(null);
   const form = useRef<HTMLFormElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   const { user } = useSelector(
      (state: SallerState) => state.saller.sallerCommon
   );

   const onSubmitHandle = () => {
      const Subject = subject.current ? subject.current.value : "";
      const Content = content.current ? content.current.value : "";
      const payload = {
         subject: Subject,
         content: Content,
      };
      dispatch(supportStore({ user_id: user?.id, payload, form }));
   };

   return (
      <div className="6lg:col-span-7 col-span-12">
         <Card>
            <form ref={form}>
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold pb-3">
                  Contact Support
               </div>
               {/* <div className=" flex xs:flex-row flex-col mb-3 gap-3">
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium  pb-1">
                  First Name
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[33px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={firstName}
                  placeholder="First Name"
               />
            </div>
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium  pb-1">
                  Last Name
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[33px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={lastName}
                  placeholder="Last Name"
               />
            </div>
         </div>
         <div className=" flex xs:flex-row flex-col mb-3 gap-3">
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium  pb-1">
                  Email
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[33px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={email}
                  placeholder="Email"
               />
            </div>
            <div className="w-full">
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium  pb-1">
                  Number
               </div>
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[33px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                  style={{
                     boxShadow:
                        "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  inputRef={phone}
                  placeholder="Number"
               />
            </div>
         </div> */}
               <div className="pb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium  pb-1">
                     Subject
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[33px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                     inputRef={subject}
                     placeholder="Subject"
                  />
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                     Discriptions
                  </div>
                  <textarea
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[133px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 px-5"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                     ref={content}
                  />
               </div>
               <div className="flex justify-end">
                  <Button
                     type="button"
                     className="rounded-[10px] w-[102px] h-[38px] bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold flex items-center justify-center"
                     onClick={onSubmitHandle}
                  >
                     Submit
                  </Button>
               </div>
            </form>
         </Card>
      </div>
   );
}
