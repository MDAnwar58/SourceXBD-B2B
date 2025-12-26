"use client";
import React, { useEffect, useState } from "react";
import {
   DashboardThreeDotsSvgIcon,
   NotificationSvgIcon,
} from "@/saller/components/SvgIcons";
import Img from "@/components/Image";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import {
   useDateformat,
   useDateFormatExtra,
   useDffFormat,
} from "@/components/react/date";
import { io } from "socket.io-client";
import { LocalUrl } from "@/components/react/localhost";

// Function to calculate "time ago"
const timeAgo = (dateString: string) => {
   const [datePart] = dateString.split(" | "); // Extract date part
   const [day, month, year] = datePart.split("-"); // Parse the date

   const date: any = new Date(`${year}-${month}-${day}`); // Convert to Date object
   const now: any = new Date();

   const diffInMs = now - date; // Difference in milliseconds
   const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24)); // Convert to days

   if (diffInDays === 0) return "Today";
   if (diffInDays === 1) return "Yesterday";
   return `${diffInDays} days ago`;
};

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

type Props = {
   message: RecentMessage;
};

export default function RecentMessage({ message }: Props) {
   const {
      lg6Screen,
      lgScreen,
      md6Screen,
      md4Screen,
      md2Screen,
      mdScreen,
      smScreen,
      xs6Screen,
      xs3Screen,
      xsScreen,
   } = useScreenMediaQuery();
   const [onlineUserIds, setOnlineUserIds] = useState<number[]>([]);
   const localhost = "127.0.0.1:6001";
   const localUrl = LocalUrl();

   useEffect(() => {
      const socket = io(localhost);
      socket.emit("buyerStatusToSourceBDXServer", "");
      socket.on("buyerStatusToSourceBDXClient", (UserIds) => {
         setOnlineUserIds(UserIds);
      });
      return () => {
         socket.off("buyerStatusToSourceBDXClient");
      };
   }, [localhost]);

   const userMessage = useTruncateText({
      text: message.massage !== undefined ? message.massage : "",
      wordLimit: lg6Screen
         ? 13
         : lgScreen
           ? 9
           : md6Screen
             ? 7
             : md4Screen
               ? 6
               : md2Screen
                 ? 5
                 : mdScreen
                   ? 3
                   : smScreen
                     ? 9
                     : xs6Screen
                       ? 7
                       : xs3Screen
                         ? 5
                         : xsScreen
                           ? 7
                           : 5,
   });
   let date;
   if (message?.created_at !== undefined) {
      date = useDateFormatExtra(message?.created_at);
   }
   let messageAgoDays;
   if (message?.created_at !== undefined) {
      messageAgoDays = timeAgo(message?.created_at);
   }
   let imageUrl: string = "";
   if (message?.sender_image !== undefined) {
      const storeFilePath = message?.sender_image.map((user: any) => {
         return user?.image;
      });
      const filePath = storeFilePath.toString();
      const forwardSlash = "/";
      const storeFileUrl = forwardSlash.concat(filePath);
      const imagePath = localUrl.concat(storeFileUrl);
      imageUrl = imagePath.toString();
   }
   const onlineUserId: number | null =
      onlineUserIds.find((id) => Number(id) === message?.sender_id) || null;

   return (
      <div className="bg-[rgba(152,176,238,0.05)] shadow-admin-card rounded-[20px] w-full p-3 3xs:flex items-center justify-between mb-4">
         <div className="flex">
            <div className="bg-blue-200/55 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-full w-12 h-12 flex justify-center items-center relative">
               {message?.sender_image.length > 0 ? (
                  <Img
                     src={imageUrl}
                     alt=""
                     width={70}
                     height={70}
                     className="w-11 h-11 rounded-full"
                  />
               ) : (
                  <Img
                     src="/assets/images/user-demo-avatar.png"
                     alt=""
                     width={70}
                     height={70}
                     className="w-11 h-11 rounded-full"
                  />
               )}
               {onlineUserId !== null &&
               Number(onlineUserId) === message?.sender_id ? (
                  <div className="bg-[#52ff00] rounded-full w-2.5 h-[11px] absolute bottom-[.15rem] right-[.05rem]" />
               ) : null}
            </div>
            <div className="ps-4 pt-[.03rem]">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                  {message?.sender}
               </div>
               <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal mt-[.03rem]">
                  {userMessage}
               </div>
            </div>
         </div>
         <div className="flex items-center 3xs:justify-start justify-between 4md:gap-x-7 3md:gap-x-5 2md:gap-x-2 gap-x-1 3xs:mt-0 mt-3">
            <div className=" text-right">
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  {messageAgoDays}
               </div>
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  {date}
               </div>
            </div>
            <div className="w-6 h-6">
               <NotificationSvgIcon />
            </div>
            {/* <div className="w-6 h-6">
               <DashboardThreeDotsSvgIcon />
            </div> */}
         </div>
      </div>
   );
}
