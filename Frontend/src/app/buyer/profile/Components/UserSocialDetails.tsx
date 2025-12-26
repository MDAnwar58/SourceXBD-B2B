"use client";
import {
   FacebookSvgIcon,
   InstagramSvgIcon,
   TwitterSvgIcon,
} from "@admin/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
import {
   FlickrSvgIcon,
   LinkedInSvgIcon,
   PinterestInSvgIcon,
   QuoraSvgIcon,
   RedditInSvgIcon,
   SnapchatInSvgIcon,
   TelegramSvgIcon,
   TumblrSvgIcon,
   VimeoSvgIcon,
   WeChatSvgIcon,
   WhatsAppInSvgIcon,
   YouTubeInSvgIcon,
} from "@/buyer/components/SvgIcons";
const MoreBtn = dynamic(() => import("./MoreBtn"), {
   ssr: false,
});

const socialMedias = [
   {
      id: 1,
      name: "Facebook",
      logo: (
         <div className="w-4 h-4">
            <FacebookSvgIcon />
         </div>
      ),
   }, // You can change to PNG if needed
   {
      id: 2,
      name: "Twitter",
      logo: (
         <div className="w-4 h-4">
            <TwitterSvgIcon />
         </div>
      ),
   },
   {
      id: 3,
      name: "Instagram",
      logo: (
         <div className="w-4 h-4">
            <InstagramSvgIcon />
         </div>
      ),
   },
   {
      id: 4,
      name: "LinkedIn",
      logo: (
         <div className="w-4 h-4">
            <LinkedInSvgIcon />
         </div>
      ),
   },
   {
      id: 5,
      name: "Snapchat",
      logo: (
         <div className="w-4 h-4">
            <SnapchatInSvgIcon />
         </div>
      ),
   },
   {
      id: 6,
      name: "Pinterest",
      logo: (
         <div className="w-4 h-4">
            <PinterestInSvgIcon />
         </div>
      ),
   },
   {
      id: 7,
      name: "YouTube",
      logo: (
         <div className="w-4 h-4">
            <YouTubeInSvgIcon />
         </div>
      ),
   },
   // {
   //    id: 8,
   //    name: "TikTok",
   //    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/TikTok_logo_2021.svg",
   // },
   {
      id: 9,
      name: "Reddit",
      logo: (
         <div className="w-4 h-4">
            <RedditInSvgIcon />
         </div>
      ),
   },
   {
      id: 10,
      name: "WhatsApp",
      logo: (
         <div className="w-4 h-4">
            <WhatsAppInSvgIcon />
         </div>
      ),
   },
   {
      id: 11,
      name: "Telegram",
      logo: (
         <div className="w-4 h-4">
            <TelegramSvgIcon />
         </div>
      ),
   },
   {
      id: 12,
      name: "WeChat",
      logo: (
         <div className="w-4 h-4">
            <WeChatSvgIcon />
         </div>
      ),
   },
   {
      id: 13,
      name: "Tumblr",
      logo: (
         <div className="w-4 h-4">
            <TumblrSvgIcon />
         </div>
      ),
   },
   {
      id: 14,
      name: "Flickr",
      logo: (
         <div className="w-4 h-4">
            <FlickrSvgIcon />
         </div>
      ),
   },
   {
      id: 15,
      name: "Quora",
      logo: (
         <div className="w-4 h-4">
            <QuoraSvgIcon />
         </div>
      ),
   },
   {
      id: 16,
      name: "Vimeo",
      logo: (
         <div className="w-4 h-4">
            <VimeoSvgIcon />
         </div>
      ),
   },
   {
      id: 17,
      name: "Discord",
      logo: (
         <div className="w-4 h-4">
            <VimeoSvgIcon />
         </div>
      ),
   },
];

type SocialLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type Props = {
   socialLinks: SocialLink[];
   userName: string;
};

export default function UserSocialDetails({ socialLinks, userName }: Props) {
   return (
      <div className=" xs3:flex items-end justify-between pt-3 pb-5 border-b-2 border-gray-300">
         <div className="flex gap-x-3">
            {socialLinks?.length
               ? socialLinks.map((social, i) => {
                    const findSocial = socialMedias.find(
                       (item) => item.name === social.name
                    );
                    if (findSocial) {
                       return (
                          <a
                             key={i}
                             href={social?.link}
                             target="_blank"
                             rel="noreferrer"
                          >
                             <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
                                {findSocial?.logo}
                             </div>
                          </a>
                       );
                    }
                 })
               : null}
            <MoreBtn userName={userName} />
         </div>

         {/* <div className="xs3:w-[140px] w-full mt-2">
            <div className="flex items-center justify-between">
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  Full Verifide
               </div>
               <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[8px] font-normal relative">
                  100%
               </div>
            </div>
            <div className="w-full h-1 bg-gray-200 rounded">
               <div
                  className="bg-[#90ff38] rounded h-full w-[70%]"
                  style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
               />
            </div>
         </div> */}
      </div>
   );
}
