"use client";
import React, { useCallback } from "react";
import {
   DashboardThreeDotsSvgIcon,
   SmaileSvgIcon,
} from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { useDffFormat } from "@/components/react/date";
import { supportReply } from "@/admin/support/features/SupportAction";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const AdminCard = dynamic(() => import("@admin/components/card"));
const Textarea = dynamic(() => import("@/components/Textarea"));

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   role: string;
   status: string;
};

type Support = {
   answer: string | null;
   created_at: string;
   date: string;
   id: number;
   status: string;
   subject: string;
   user: User;
   content: string;
};

export default function SupportCard() {
   const dispatch = useDispatch<AppDispatch>();

   const { support } = useSelector((state: AdminState) => state.admin.support);
   const Support = support as Support;
   const AgoTime = useDffFormat(Support?.created_at);
   const Answar = Support?.answer !== null ? Support?.answer : "";

   const onHandleSupportReply = useCallback(
      (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
         const form = e.target as HTMLFormElement;
         const formData = new FormData(form);
         dispatch(supportReply({ id: Support?.id, formData }));
      },
      [Support?.id, dispatch]
   );

   return (
      <AdminCard>
         <div className="flex items-center justify-between">
            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
               {AgoTime}
            </div>
            <div className="w-6 h-6">
               <DashboardThreeDotsSvgIcon />
            </div>
         </div>
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold relative">
            {Support?.subject}
         </div>
         <div className="3xs:p-3">
            <p
               className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs leading-[17px] font-normal mb-2"
               dangerouslySetInnerHTML={{ __html: String(Support?.content) }}
            />
         </div>
         <div className="flex items-center gap-x-3">
            <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium border-b border-gray-500 pb-[.15rem]">
               Reply
            </div>

            <div className="w-4 h-4">
               <SmaileSvgIcon />
            </div>
         </div>

         <form onSubmit={onHandleSupportReply} className="mt-3 relative">
            <Textarea
               className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-2xl h-[127px] w-full border-none focus:ring-0 px-5 py-3"
               placeholder="Enter Your Comment"
               defaultValue={Answar}
               name="answer"
            />
            <div className="w-5 h-5 absolute right-1.5 top-1.5 text-gray-900">
               <SmaileSvgIcon />
            </div>
            <Button
               type="submit"
               className="bg-[#98b0ee] text-[#ffffff] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold rounded-[10px] w-14 h-6 flex items-center justify-center absolute right-1.5 bottom-2"
            >
               Send
            </Button>
         </form>
      </AdminCard>
   );
}
