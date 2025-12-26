"use client";
import React from "react";
import {
   DashboardThreeDotsSvgIcon,
   NotificationSvgIcon,
} from "@admin/components/SvgIcons";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const MessageDotsBtn = dynamic(() => import("./MessageDotsBtn"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

const extractDate = (dateTimeString: string) => {
   const datePart = dateTimeString.split(" ")[0]; // Extract "23-11-2024"
   const [day, month, year] = datePart.split("-").map(Number);
   return `${day}-${month}-${year}`; // Create a Date object
};
const extractTime = (dateTimeString: string) => {
   const timePart = dateTimeString.split(" ")[1];
   const [hours, minutes] = timePart.split(":");
   return `${hours}:${minutes}`;
};
const detectAmPm = (dateTimeString: string) => {
   const timePart = dateTimeString.split(" ")[1];
   const [hours] = timePart.split(":").map(Number);
   return hours >= 12 ? "PM" : "AM";
};

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

type Props = {
   message: Message;
};

export default function ReviewMessage({ message }: Props) {
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
   const localUrl: string = LocalUrl();

   const messageText = useTruncateText({
      text: message?.massage,
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
   let date: string = "";
   if (message?.formatted_date !== undefined) {
      date = extractDate(message?.formatted_date);
   }
   let time: string = "";
   if (message?.formatted_date !== undefined) {
      time = extractTime(message?.formatted_date);
   }
   // let amPm: string = "";
   // if (message?.formatted_date !== undefined) {
   //    amPm = detectAmPm(message?.formatted_date);
   // }
   const storeArrayFiles = message?.sender?.image.map(
      (item: any) => item.image
   );
   const filePath = storeArrayFiles.join(", ");
   const forwardSlash = "/";
   const imagePath = forwardSlash.concat(filePath);
   const imageUrl = localUrl.concat(imagePath);

   return (
      <div className="bg-[rgba(152,176,238,0.05)] shadow-admin-card rounded-[20px] w-full p-3 3xs:flex items-center justify-between mb-4">
         <div className="flex">
            {message?.sender?.image ? (
               <div className="bg-blue-200/55 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-full w-12 h-12 flex justify-center items-center relative">
                  <Img
                     src={imageUrl}
                     alt="From User Avatar"
                     width={70}
                     height={70}
                     className="w-full h-full overflow-visible rounded-full"
                  />
                  <div className="bg-[#52ff00] rounded-full w-2.5 h-[11px] absolute bottom-[.15rem] right-[.05rem]" />
               </div>
            ) : (
               <div className="bg-blue-200/55 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-full w-12 h-12 flex justify-center items-center relative">
                  <Img
                     src="/assets/images/review-user.png"
                     alt="From User Avatar"
                     width={70}
                     height={70}
                     className="w-6 h-6 overflow-visible"
                  />
                  <div className="bg-[#52ff00] rounded-full w-2.5 h-[11px] absolute bottom-[.15rem] right-[.05rem]" />
               </div>
            )}
            <div className="ps-4 pt-[.03rem]">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                  {message?.from_user_name}
               </div>
               <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal mt-[.03rem]">
                  {messageText}
               </div>
            </div>
         </div>
         <div className="flex items-center 3xs:justify-start justify-between 4md:gap-x-7 3md:gap-x-5 2md:gap-x-2 gap-x-1 3xs:mt-0 mt-2">
            <div className=" text-right">
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  {time}
               </div>
               <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
                  {date}
               </div>
            </div>
            <div className="w-6 h-6">
               <NotificationSvgIcon />
            </div>
            <MessageDotsBtn />
         </div>
      </div>
   );
}
