import React, { useCallback, useEffect, useState } from "react";
import Img from "@/components/Image";
import Grid from "@admin/components/grid";
import {
   PinSvgIcon,
   DoubbleCheckSvgIcon,
   DashboardThreeDotsSvgIcon,
} from "@admin/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import { useDispatch, useSelector } from "react-redux";
import { BuyerState } from "@/buyer/store";
import { getWithForwardSlushStoreFileUrl } from "@/components/react/url";
import { getInitials } from "@/components/react/name";
import { getBackgroundColor, getTextColor } from "@/components/react/color";
import SidebarUserListOptionBtns from "./SidebarUserListOptionBtns";
import NavLink from "@/components/NavLink";
import SidebarPinnedUserListOptionBtns from "./SidebarPinnedUserListOptionBtns";
import { removeUserInPinnedUserList } from "../features/MessageAction";
import { AppDispatch } from "@/buyer/store";
import { io } from "socket.io-client";
import { useShortenText } from "@/components/react/truncate-text";

type Receiver = {
   id: number;
};

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
   recentUser: RecentMessage;
   search: string;
};

export default function MessageSidebarPinnedUserMessage({
   recentUser,
   search,
}: Props) {
   const [localhost] = useState<string>(
      process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
         : ""
   );
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();
   const [onlineUserIds, setOnlineUserIds] = useState<number[]>([]);

   useEffect(() => {
      const socket = io(localhost);
      socket.emit("sellerStatusToSourceBDXServer", "");
      socket.on("sellerStatusToSourceBDXClient", (userIds: any) => {
         setOnlineUserIds(userIds);
      });
      return () => {
         socket.off("sellerStatusToSourceBDXClient");
      };
   }, [localhost]);

   const { receiver } = useSelector(
      (state: BuyerState) => state.buyer.buyerMessage
   );
   const Receiver = receiver as Receiver;

   const imageUrl: string | null = getWithForwardSlushStoreFileUrl(
      recentUser?.user?.image,
      localUrl
   );

   const userProfileLogo = getInitials(recentUser?.user?.name);
   const bgColor = getBackgroundColor(recentUser?.user?.name);
   const textColor = getTextColor(bgColor);

   const onUnPinnedHandler = useCallback(
      (receiver_id: number) => {
         dispatch(
            removeUserInPinnedUserList({ receiverId: receiver_id, search })
         );
      },
      [dispatch]
   );

   const onlineUserId: number | null =
      onlineUserIds.find((id) => Number(id) === recentUser?.user?.id) || null;

   const receiverId = recentUser?.user?.id
      ? Number(recentUser?.user?.id)
      : null;

   let lastMessage;
   if (recentUser?.last_message) {
      lastMessage = useShortenText(recentUser?.last_message, 10);
   }

   return (
      <div
         className={`${
            recentUser?.user?.id === Receiver?.id
               ? "bg-[rgba(152,176,238,0.05)] shadow-admin-card"
               : "hover:bg-[rgba(152,176,238,0.05)] hover:shadow-admin-card"
         } rounded-[14px] py-2 ${recentUser?.is_pin !== false ? "px-2" : "ps-2"}`}
      >
         <div className="flex flex-row items-center">
            <NavLink
               href={`/buyer/messages/${recentUser?.user?.id}`}
               className="flex flex-row xs3:gap-2 gap-1 xl:w-[75%] 5lg:w-[70%] lg:w-[85%] 4md:w-[80%] xs3:w-[75%] xs4:w-[70%] w-[67%]"
            >
               <div className="rounded-full 5lg:w-[70.5px] xs3:w-[60.5px] w-[70.5px] h-[45.6px] flex">
                  <div className="relative w-auto">
                     {imageUrl !== null ? (
                        <Img
                           src={imageUrl}
                           alt="message user"
                           width={100}
                           height={100}
                           className="rounded-full  w-[45.6px] h-[45.6px] "
                        />
                     ) : (
                        <div
                           className="rounded-full w-[45.6px] h-[45.6px]  flex justify-center items-center"
                           style={{
                              backgroundColor: bgColor,
                              color: textColor,
                           }}
                        >
                           {userProfileLogo}
                        </div>
                     )}
                     {Number(onlineUserId) === recentUser?.user?.id ? (
                        <div className="absolute bottom-[.1rem] end-1 rounded-[50%] w-[7px] h-[7px] bg-[#52ff00]" />
                     ) : null}
                  </div>
               </div>
               <div className="xs3:ps-0 w-full">
                  <div className="flex justify-between items-center">
                     <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                        {recentUser?.user?.name}
                     </div>
                  </div>
                  <div className="flex justify-between items-center pt-[.05rem]">
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal w-auto">
                        <span className="text-gray-700 font-semibold">
                           {recentUser?.is_me !== null ? "You: " : null}
                        </span>
                        <span>
                           {/* {recentUser?.last_message} */}
                           {lastMessage}
                        </span>
                     </div>
                  </div>
               </div>
            </NavLink>
            <div className="flex items-center justify-end gap-1 xl:w-[25%] 5lg:w-[30%] lg:w-[15%] 5md:w-[20%] xs3:w-[25%] xs4:w-[30%] w-[33%]">
               <div>
                  <div className="flex items-center gap-x-1">
                     {/* {recentUser?.is_pin !== false ? (
                        <div className="w-3 h-3 text-gray-700">
                           <PinSvgIcon />
                        </div>
                     ) : null} */}
                     <div className="text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[8.5px] font-normal">
                        {recentUser?.last_message_time}
                     </div>
                  </div>

                  <div className="text-[#4285F4] w-4 h-4 ms-auto">
                     <DoubbleCheckSvgIcon />
                  </div>
               </div>

               <SidebarPinnedUserListOptionBtns
                  onUnPinnedHandler={onUnPinnedHandler}
                  receiverId={receiverId}
               />
            </div>
         </div>
      </div>
   );
}
