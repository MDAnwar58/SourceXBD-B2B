"use client";
import React from "react";
import { SallerState } from "@/app/saller/store";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type User = {
   id: number;
   image: Array<Image[]>;
   name: string;
};

type Reply = {
   content: string;
   created_at: string;
   id: number;
   review_id: number;
   user: User;
   name: string;
};

export default function Replies() {
   const { replies = [] } = useSelector(
      (state: SallerState) => state.saller.reviews
   );
   const Replies: Reply[] = replies;
   if (Replies.length > 0) {
      return Replies.map((reply, index: number) => (
         <div
            key={index}
            className="bg-[rgba(152,176,238,0.05)] rounded-[10px] drop-shadow-sm h-[75px] w-full p-3"
         >
            <div className="flex items-center gap-x-2">
               <Img
                  src="/assets/images/review-comment-user.png"
                  alt="comment reply user avatar"
                  width={50}
                  height={50}
                  className="rounded-full w-6 h-6"
               />
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold relative">
                  {reply?.user?.name}
               </div>
            </div>
            <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal mt-1">
               {reply?.content}
            </div>
         </div>
      ));
   }
}
