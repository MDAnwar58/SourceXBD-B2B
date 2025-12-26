"use client";
import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(() => import("@/components/Button"));
const Input = dynamic(() => import("@/components/Input"));
const Card = dynamic(() => import("@/components/card"));
const TextArea = dynamic(() => import("@/components/react/textarea"));

type FormError = {
   subject?: string;
   content: string;
};

type Props = {
   onSubmitHandle: (e: React.FormEvent<HTMLFormElement>) => void;
   setFormElement: React.Dispatch<React.SetStateAction<HTMLFormElement | null>>;
   err: FormError;
};

export default function SupportCard({ ...props }: Props) {
   const { onSubmitHandle, setFormElement, err } = props;
   return (
      <div>
         <Card>
            <form
               onSubmit={onSubmitHandle}
               ref={(element) => setFormElement(element)}
            >
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold pb-3">
                  Contact Support
               </div>
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
                     placeholder="Subject"
                     name="subject"
                  />
                  {err?.subject && (
                     <small className="text-red-500">{err?.subject}</small>
                  )}
               </div>
               <div className="mb-3">
                  <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-1">
                     Discriptions
                  </div>
                  <TextArea
                     className="bg-[rgba(152,176,238,0.05)] rounded-[10px] w-full h-[133px] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal border-none focus:border-none focus:outline-none focus:ring-0 !px-5 py-3"
                     style={{
                        boxShadow:
                           "inset -1px -1px 2px 0px rgba(101, 101, 101, 0.1),inset 1px 1px 2px 0px rgba(0, 0, 0, 0.1)",
                     }}
                     placeholder="Write a description..."
                     name="content"
                  />
                  {err?.content && (
                     <small className="text-red-500">{err?.content}</small>
                  )}
               </div>
               <div className="flex justify-end">
                  <Button
                     type="submit"
                     className="rounded-[10px] w-[102px] h-[38px] bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold flex items-center justify-center"
                  >
                     Submit
                  </Button>
               </div>
            </form>
         </Card>
      </div>
   );
}
