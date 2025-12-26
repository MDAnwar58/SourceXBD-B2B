"use client";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const ReviewMessage = dynamic(() => import("./ReviewMessage"), {
   ssr: false,
});
const YourReviewMessage = dynamic(() => import("./YourReviewMessage"), {
   ssr: false,
});
const AdminPagination = dynamic(() => import("@admin/components/Pagination"), {
   ssr: false,
});

type Image = {
   image: string;
};

type Sender = {
   id: number;
   image: Image[];
   name: string;
};

type Message = {
   created_at: string;
   formatted_date: string;
   from_id: number;
   from_user_name: string;
   id: number;
   is_pin: number;
   is_read: number;
   massage: string;
   reply_id: number | string | null;
   to_id: number;
   to_user_name: string;
   sender: Sender;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type MessagesData = {
   current_page: number;
   data: Message[];
   from: number;
   links: Link[];
   to: number;
   last_page: number;
};

type Props = {
   onHandlePagination: (page: any) => void;
   onHandleResetTable: (page: number, perPage: number, search: string) => void;
};

export default function ReviewNewMessages({
   onHandlePagination,
   onHandleResetTable,
}: Props) {
   const { messages_data = {} } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );
   const messagesData = messages_data as MessagesData;
   const {
      current_page,
      data = [],
      from,
      links = [],
      to,
      last_page,
   } = messagesData;
   const messages: Message[] = data;

   return (
      <Fragment>
         <div className=" bg-white rounded-[20px] shadow-admin-card px-7 py-4 mb-7">
            <div className="text-[#2f2f2f] text-left font-['Geist-Bold',_sans-serif] text-xl font-bold pb-5">
               Review New Messages
            </div>

            <div>
               {messages.length > 0
                  ? messages.map((message, index: number) => {
                       return (
                          <Fragment key={index}>
                             <ReviewMessage message={message} />
                             {/* <YourReviewMessage /> */}
                          </Fragment>
                       );
                    })
                  : null}
            </div>
         </div>

         <AdminPagination
            links={links}
            lastPage={last_page}
            onHandlePagination={onHandlePagination}
            resetBtn={true}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
