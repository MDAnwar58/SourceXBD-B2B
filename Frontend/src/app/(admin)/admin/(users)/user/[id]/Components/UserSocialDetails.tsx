"use client";
import {
   DashboardThreeDotsSvgIcon,
   FacebookSvgIcon,
   InstagramSvgIcon,
   TwitterSvgIcon,
   WhatsAppSvgIcon,
} from "@admin/components/SvgIcons";
import React from "react";
import dynamic from "next/dynamic";
const MoreBtn = dynamic(() => import("./MoreBtn"), { ssr: false });

const socialMedias = [
   {
      id: 1,
      name: "Facebook",
      logo: (
         <div className="w-4 h-4">
            <FacebookSvgIcon />
         </div>
      ),
   },
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
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/linkedin.svg",
   },
   {
      id: 5,
      name: "Snapchat",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/snapchat.svg",
   },
   {
      id: 6,
      name: "Pinterest",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/pinterest.svg",
   },
   {
      id: 7,
      name: "YouTube",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/youtube.svg",
   },
   {
      id: 8,
      name: "TikTok",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/tiktok.svg",
   },
   {
      id: 9,
      name: "Reddit",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/reddit.svg",
   },
   {
      id: 10,
      name: "WhatsApp",
      logo: (
         <div className="w-4 h-4">
            <WhatsAppSvgIcon />
         </div>
      ),
   },
   {
      id: 11,
      name: "Telegram",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/telegram.svg",
   },
   {
      id: 12,
      name: "WeChat",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/wechat.svg",
   },
   {
      id: 13,
      name: "Tumblr",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/tumblr.svg",
   },
   {
      id: 14,
      name: "Flickr",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/flickr.svg",
   },
   {
      id: 15,
      name: "Quora",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/quora.svg",
   },
   {
      id: 16,
      name: "Vimeo",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/vimeo.svg",
   },
   {
      id: 17,
      name: "Discord",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/discord.svg",
   },
   {
      id: 18,
      name: "Clubhouse",
      logo: "https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/clubhouse.svg",
   },
];

type SocialMediaLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type Props = {
   trust: {
      trustPoint: number;
      userId: any;
   };
   suer_social_links: SocialMediaLink[];
};

export default function UserSocialDetails({
   trust,
   suer_social_links = [],
}: Props) {
   const userId = trust?.userId ? trust?.userId : 0;
   return (
      <div className=" xs3:flex items-end justify-between pt-3 pb-5 border-b-2 border-gray-300">
         <div className="flex gap-x-3">
            {suer_social_links.length > 0 &&
               suer_social_links.map((socialMedia, index: number) => {
                  const socialMediaSvg = socialMedias.find(
                     (item) => item.name === socialMedia.name
                  );
                  return (
                     <a
                        key={index}
                        href={socialMedia.link}
                        target="_blank"
                        rel="noreferrer"
                     >
                        <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
                           {socialMediaSvg?.logo}
                        </div>
                     </a>
                  );
               })}
            <MoreBtn userId={userId} />
         </div>

         <div className="xs3:w-[140px] w-full mt-2">
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
                  className="bg-[#39A85B] rounded h-full"
                  style={{
                     boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                     width: `${trust?.trustPoint}%`,
                  }}
               />
            </div>
         </div>
      </div>
   );
}
