"use client";
import Img from "@/components/Image";
import NavLink from "@/components/NavLink";
import {
   DashboardThreeDotsSvgIcon,
   FacebookSvgIcon,
   InstagramSvgIcon,
} from "@admin/components/SvgIcons";
import React from "react";

const socialMedias = [
   {
      id: 1,
      name: "Facebook",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
   }, // You can change to PNG if needed
   {
      id: 2,
      name: "Twitter",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg",
   },
   {
      id: 3,
      name: "Instagram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
   },
   {
      id: 4,
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_%282017%29.svg",
   },
   {
      id: 5,
      name: "Snapchat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Snapchat_Logo_2011-2018.png",
   },
   {
      id: 6,
      name: "Pinterest",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Pinterest_Logo.svg",
   },
   {
      id: 7,
      name: "YouTube",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
   },
   {
      id: 8,
      name: "TikTok",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/TikTok_logo_2021.svg",
   },
   {
      id: 9,
      name: "Reddit",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Reddit_logo_2016.svg",
   },
   {
      id: 10,
      name: "WhatsApp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
   },
   {
      id: 11,
      name: "Telegram",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
   },
   {
      id: 12,
      name: "WeChat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/WeChat_logo_2018.svg",
   },
   {
      id: 13,
      name: "Tumblr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Tumblr_logo_2018.png",
   },
   {
      id: 14,
      name: "Flickr",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flickr_logo.svg",
   },
   {
      id: 15,
      name: "Quora",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/72/Quora_logo.svg",
   },
   {
      id: 16,
      name: "Vimeo",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Vimeo_logo.png",
   },
   {
      id: 17,
      name: "Discord",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Discord_logo_2023.svg",
   },
   {
      id: 18,
      name: "Clubhouse",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Clubhouse_app_logo.png",
   },
];

type SocialLink = {
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type Props = {
   socialLinks: SocialLink[] | any;
};

export default function UserSocialDetails({ socialLinks }: Props) {
   return (
      <div className=" xs3:flex items-end justify-between pt-3 pb-5 border-b-2 border-gray-300">
         <div className="flex gap-x-3">
            {socialLinks?.length > 0
               ? socialLinks.map((social: SocialLink, i: number) => {
                    const detectSocialMedia = socialMedias.find(
                       (item) => item.name === social.name
                    );
                    return (
                       <NavLink href={social.link} key={i}>
                          <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
                             <Img
                                src={`${detectSocialMedia?.logo}`}
                                alt="social-media-logo"
                                width={40}
                                height={40}
                                className="w-5 h-5"
                             />
                          </div>
                       </NavLink>
                    );
                 })
               : null}
            {/* <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
               <div className="w-4 h-4">
                  <InstagramSvgIcon />
               </div>
            </div> */}
            {/* <div className="bg-[rgba(152,176,238,0.05)] text-gray-700 hover:bg-[#1877F2] hover:text-white rounded p-2 hover:shadow-admin-card transition-all duration-75 ease-in-out">
               <div className="w-4 h-4">
                  <DashboardThreeDotsSvgIcon />
               </div>
            </div> */}
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
            <div className="w-full h-1">
               <div
                  className="bg-[#39A85B] rounded h-full w-[100%]"
                  style={{ boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)" }}
               />
            </div>
         </div> */}
      </div>
   );
}
