import React, { Fragment } from "react";
import { PinSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import dynamic from "next/dynamic";
const MessageSidebarPinnedUserMessage = dynamic(
   () => import("./MessageSidebarPinnedUserMessage")
);

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

export default function MessagesSidebarPinnedUserMessages({ search }: Props) {
   const { recent_user_list } = useSelector(
      (state: BuyerState) => state.buyer.buyerMessage
   );
   const recentUserMessageList: Array<RecentMessage[]> = recent_user_list;
   const pinnedUserList = recentUserMessageList.filter(
      (recentUser: RecentMessage | any) => recentUser?.is_pin !== false
   );
   if (pinnedUserList.length > 0) {
      return (
         <Fragment>
            <div className="flex justify-between items-center pb-2 pt-5">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-sm font-medium">
                  Pinned Message
               </div>
               <div className="w-4 h-4 text-[#2F2F2F]">
                  <PinSvgIcon />
               </div>
            </div>

            <div
               className="h-[16vh] space-y-1 overflow-y-auto p-1 scroll-smooth"
               style={{
                  scrollbarWidth: "none",
               }}
            >
               {pinnedUserList.map(
                  (recentUser: RecentMessage | any, index: number) => (
                     <Fragment key={index}>
                        <MessageSidebarPinnedUserMessage
                           recentUser={recentUser}
                           search={search}
                        />
                     </Fragment>
                  )
               )}
            </div>
         </Fragment>
      );
   }
}
