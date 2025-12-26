import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import dynamic from "next/dynamic";
const SidebarUserMessage = dynamic(() => import("./SidebarUserMessage"));

type Image = {
   id: number;
   image: string;
   imageable_id: number;
   imageable_type: string;
};

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   image: Array<Image[]>;
   role: string;
   status: string;
};
type RecentMessage = {
   last_message: string;
   last_message_time: string;
   user: User;
   is_me: number | null;
   is_pin: boolean;
   is_read: number;
};

type Props = {
   search: string;
};

export default function SidebarUserMessages({ search }: Props) {
   const { recent_user_list } = useSelector(
      (state: BuyerState) => state.buyer.buyerMessage
   );
   const recentUserMessageList: Array<RecentMessage[]> = recent_user_list;
   const pinnedUserList = recentUserMessageList.filter(
      (recentUser: RecentMessage | any) => recentUser?.is_pin !== false
   );

   return (
      <Fragment>
         <div className=" pb-2 mt-3">
            <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
               Messages
            </div>
         </div>
         <div
            className={`${pinnedUserList?.length > 0 ? "h-[50.5vh]" : "h-[71.5vh]"} overflow-y-auto  scroll-smooth p-1  space-y-1`}
            style={{
               scrollbarWidth: "none",
            }}
         >
            {recentUserMessageList.length > 0
               ? recentUserMessageList.map(
                    (recentUser: RecentMessage | any, index: number) => (
                       <Fragment key={index}>
                          <SidebarUserMessage
                             recentUser={recentUser}
                             search={search}
                          />
                       </Fragment>
                    )
                 )
               : null}
         </div>
      </Fragment>
   );
}
