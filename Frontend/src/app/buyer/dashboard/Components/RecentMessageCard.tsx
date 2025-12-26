"use client";
import React, { Fragment, useEffect, useRef } from "react";
import { DownArrowSvgIcon } from "@/buyer/components/SvgIcons";
import { useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/buyer/components/buyer-card"), {
   ssr: false,
});
const RecentMessage = dynamic(() => import("./RecentMessage"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type Sender = {
   created_at: string;
   email: string;
   email_verified_at: string | null;
   id: number;
   image: Array<Image[]>;
   name: string;
   phone: string;
   role: string;
   status: string;
   updated_at: string;
};

type RecentMessage = {
   created_at: string;
   formatted_date: string;
   from_id: number;
   id: number;
   is_pin: number;
   is_read: number;
   massage: string;
   reply_id: number | null;
   sender: Sender;
   to_id: number;
   updated_at: string;
};

type Props = {
   recentMessageLimit: number;
   onHandleRecentMessageLimit: (limit: number) => void;
   onClearRecentMessage: (fromId: number) => void;
};

export default function RecentMessageCard({
   recentMessageLimit,
   onHandleRecentMessageLimit,
   onClearRecentMessage,
}: Props) {
   const recentMessageRef = useRef<HTMLDivElement>(null);
   const {
      recent_messages = [],
      recentMessageTotalLength,
      loading,
   } = useSelector((state: BuyerState) => state.buyer.dashboard);

   const RecentMessages = recent_messages as Array<RecentMessage[]>;

   useEffect(() => {
      if (loading === false) {
         scrollToBottom();
      }
   }, [loading]);

   const scrollToBottom = () => {
      if (recentMessageRef?.current) {
         recentMessageRef.current.scrollTo({
            top: recentMessageRef.current.scrollHeight, // Always scroll to the bottom
            behavior: "smooth",
         });
      }
   };

   return (
      <div>
         <Card className="!px-0 !pt-0">
            <div className=" flex flex-row justify-between items-center px-5 pt-5">
               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold"
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
               {/* <Button
                  type="button"
                  className="bg-[#ffffff] rounded w-6 h-6 flex flex-row justify-center items-center"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               >
                  <div className="w-4 h-4">
                     <DeleteSvgIcon />
                  </div>
               </Button> */}
            </div>

            <div
               className="flex flex-col gap-y-4 h-[11.3rem] overflow-y-auto p-5 !pt-4 !pb-3"
               style={{
                  scrollbarWidth: "none",
                  scrollbarColor: "transparent",
               }}
               ref={recentMessageRef}
            >
               {RecentMessages && RecentMessages?.length > 0 ? (
                  RecentMessages.map((message: any, index: number) => (
                     <Fragment key={index}>
                        <RecentMessage recentMessage={message} />
                     </Fragment>
                  ))
               ) : (
                  <div className=" text-gray-600 text-lg font-semibold font-['Raleway-Bold',_sans-serif] text-center">
                     Message not found
                  </div>
               )}
            </div>
            {RecentMessages?.length > 0 &&
               recentMessageTotalLength !== RecentMessages.length && (
                  <div className=" relative">
                     <Button
                        type="button"
                        className="rounded-[50%] w-[38px] h-[38px] flex justify-center items-center absolute right-2 -top-7"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                           backdropFilter: "blur(25px)",
                        }}
                        onClick={() => {
                           onHandleRecentMessageLimit(recentMessageLimit + 2);
                        }}
                     >
                        <div className="w-6 h-6 text-white">
                           <DownArrowSvgIcon />
                        </div>
                     </Button>
                  </div>
               )}
         </Card>
      </div>
   );
}
