"use client";
import React from "react";
import { NotificationSvgIcon } from "@admin/components/SvgIcons";
import { useTruncateText } from "@/components/react/truncate-text";
import { useScreenMediaQuery } from "@/components/react/media-query";
import { LimitedText } from "@/components/react/react-shorting";
import { useRouter } from "next/navigation";
import Axios from "@/app/utils/axios-client";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
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
   recentMessage: RecentMessage;
};

export default function RecentMessage({ recentMessage }: Props) {
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
   const router = useRouter();
   const message = useTruncateText({
      text: "You: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam unde accusamus expedita quo quaerat ullam sit et rem voluptatibus porro culpa autem maxime minus? Perspiciatis, enim. Porro, optio unde",
      wordLimit: lg6Screen
         ? 12
         : lgScreen
           ? 8
           : md6Screen
             ? 6
             : md4Screen
               ? 5
               : md2Screen
                 ? 4
                 : mdScreen
                   ? 2
                   : smScreen
                     ? 9
                     : xs6Screen
                       ? 7
                       : xs3Screen
                         ? 5
                         : xsScreen
                           ? 6
                           : 5,
   });

   const redirectToMessenger = async (senderId: number) => {
      const response = await Axios.get(`/user/messages/${senderId}`);
      if (response.status === 200) {
         router.push(`/buyer/messages?receiverId=${senderId}`);
      }
   };
   return (
      <div
         onClick={() => redirectToMessenger(recentMessage?.from_id)}
         className=" cursor-pointer bg-[rgba(152,176,238,0.05)] shadow-admin-card rounded-[20px] w-full p-3 3xs:flex items-center justify-between"
      >
         <div className="flex">
            <div className="bg-blue-200/55 text-gray-900 border border-[rgba(66,133,244,0.60)] rounded-full w-12 h-12 flex justify-center items-center relative">
               <Img
                  src="/assets/images/review-user.png"
                  alt=""
                  width={70}
                  height={70}
                  className="w-6 h-6 overflow-visible"
               />
               <div className="bg-[#52ff00] rounded-full w-2.5 h-[11px] absolute bottom-[.15rem] right-[.05rem]" />
            </div>
            <div className="ps-4 pt-[.03rem]">
               <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold">
                  {recentMessage?.sender?.name}
               </div>
               <div className="text-[#4d4d4d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal mt-[.03rem]">
                  <LimitedText text={recentMessage?.massage} maxChars={30} />
               </div>
            </div>
         </div>
         <div className="flex items-center 3xs:justify-start justify-between 4md:gap-x-3 3md:gap-x-5 2md:gap-x-2 gap-x-1">
            <div className="text-[#2f2f2f] font-['Arial-Bold',_sans-serif] text-xs font-bold relative">
               14:47
            </div>
            <div className="w-6 h-6">
               <NotificationSvgIcon />
            </div>
            <div className="bg-[#0060ff] rounded-[50%] w-3 h-3 relative"></div>
         </div>
      </div>
   );
}
