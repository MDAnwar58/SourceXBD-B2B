"use client";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/saller/store";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const RecentMessage = dynamic(() => import("./RecentMessage"));

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type RecentMessage = {
   created_at: string;
   id: number;
   massage: string;
   recipient: string;
   sender: string;
   sender_id: number;
   sender_image: Array<Image[]>;
};

export default function RecentMessagesCard() {
   const { recent_messages } = useSelector(
      (state: SallerState) => state.saller.dashboard
   );
   const messages = recent_messages as RecentMessage[];
   return (
      <div className="bg-[#ffffff] rounded-2xl w-full p-5 shadow-admin-card">
         <div className="flex flex-row justify-between items-center-">
            <div
               className="text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold relative"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Recent Messages
            </div>

            <NavLink href="/saller/messages">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-[13px] font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-5 h-5">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>
         <div className="space-y-3 mt-3">
            {messages.length > 0
               ? messages.map((message, index: number) => {
                    return (
                       <Fragment key={index}>
                          {message && <RecentMessage message={message} />}
                       </Fragment>
                    );
                 })
               : null}
         </div>
      </div>
   );
}
