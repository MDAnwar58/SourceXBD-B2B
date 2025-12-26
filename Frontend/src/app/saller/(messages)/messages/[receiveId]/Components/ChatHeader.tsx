"use client";
import React, { useEffect, useState } from "react";
import { DashboardThreeDotsSvgIcon } from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { LocalUrl } from "@/components/react/localhost";
import { getWithForwardSlushStoreFileUrl } from "@/components/react/url";
import { getInitials } from "@/components/react/name";
import { getBackgroundColor, getTextColor } from "@/components/react/color";
import { io } from "socket.io-client";
import dynamic from "next/dynamic";
import ChatHeaderMoreBtn from "./ChatHeaderMoreBtn";
const Img = dynamic(() => import("@/components/Image"));
const Button = dynamic(() => import("@/components/Button"));

type User = {
   id: string;
   email: string;
   name: string;
   role: string;
};

type TypingUser = {
   fromId: null;
   toId: null;
   typing: boolean;
};

type Receiver = {
   id: number;
   name: string;
   phone: string | number | null;
   email: string;
   email_verified_at: string | null;
   image: any;
   role: string;
   status: string;
   created_at: string;
};

type Props = {
   authUser: any;
};

export default function ChatHeader({ authUser }: Props) {
   const [typingUsers, setTypingUsers] = useState<TypingUser[]>([]);
   const [onlineUserIds, setOnlineUserIds] = useState<number[]>([]);
   const localUrl = LocalUrl();
   const localhost = process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      ? process.env.NEXT_PUBLIC_SOCKET_IO_ADDRESS
      : "";

   useEffect(() => {
      const socket = io(localhost);
      socket.emit("buyerStatusToSourceBDXServer", "");
      socket.on("buyerStatusToSourceBDXClient", (UserIds) => {
         setOnlineUserIds(UserIds);
      });
      socket.on(
         "sendChatUserTypeingToSourceBDXClient",
         function (TypingUsers: any) {
            setTypingUsers(TypingUsers);
         }
      );
      return () => {
         socket.off("buyerStatusToSourceBDXClient");
         socket.off("sendChatUserTypeingToSourceBDXClient");
      };
   }, [localhost]);

   const { receiver } = useSelector(
      (state: SallerState) => state.saller.sellerMessage
   );
   const Receiver = receiver as Receiver;

   const imageUrl: string | null = getWithForwardSlushStoreFileUrl(
      Receiver?.image,
      localUrl
   );

   const userProfileLogo = getInitials(Receiver?.name);
   const bgColor = getBackgroundColor(Receiver?.name);
   const textColor = getTextColor(bgColor);

   const user = authUser as User;
   const typings = typingUsers?.filter(
      (typing) =>
         typing.fromId === Number(user.id) &&
         typing.toId === Receiver?.id &&
         typing.typing === true
   );
   const typing =
      typings?.length > 0
         ? typings?.find((typing) => typing.typing === true)
         : null;

   const onlineUserId: number | null =
      onlineUserIds.find((id) => Number(id) === Receiver?.id) || null;

   return (
      <div className="flex justify-between items-center">
         <div className="flex gap-x-3">
            <div className=" relative">
               {imageUrl !== null ? (
                  <Img
                     src={imageUrl.toString()}
                     alt="chat user avatar"
                     width={100}
                     height={100}
                     className="rounded-full w-[40.4px] h-[40.4px] "
                  />
               ) : (
                  <div
                     className="rounded-full w-[40.4px] h-[40.4px] flex justify-center items-center"
                     style={{
                        backgroundColor: bgColor,
                        color: textColor,
                     }}
                  >
                     {userProfileLogo}
                  </div>
               )}
               {onlineUserId !== null &&
               Number(onlineUserId) === Receiver?.id ? (
                  <div className="bg-[#52ff00] rounded-[50%] w-[7px] h-[7px] absolute bottom-0 right-[.35rem]" />
               ) : null}
            </div>
            <div>
               <div className="text-[#000000] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold pb-1">
                  {Receiver?.name}
               </div>
               {typing !== null ? (
                  <div className="text-[#4285f4] text-left font-['Arial-Bold',_sans-serif] text-[10px] font-bold">
                     Typing........
                  </div>
               ) : null}
            </div>
         </div>
         {Receiver?.id ? <ChatHeaderMoreBtn receiverId={Receiver?.id} /> : null}
      </div>
   );
}
