"use client";
import { FacebookSvgIcon } from "@/app/buyer/components/SvgIcons";
import { BuyerState } from "@/app/buyer/store";
import React from "react";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { CrosSvgIcon } from "@/app/saller/components/SvgIcons";
const SocialMediaSearchAutoComplete = dynamic(
   () => import("./SocialMediaSearchAutoComplete"),
   {
      ssr: false,
   }
);
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});

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

type SocialMediaLink = {
   created_at: string;
   id: number;
   link: string;
   name: string;
   user_id: number;
};

type Props = {
   socialMediaName: string;
   setSocialMediaName: React.Dispatch<React.SetStateAction<string>>;
   socialMediaLink: string;
   setSocialMediaLink: React.Dispatch<React.SetStateAction<string>>;
   onHandleStoreSocialMediaLink: () => void;
   socialFormRef: any;
   socialMedia: string;
   setSocialMedia: React.Dispatch<React.SetStateAction<string>>;
   onHandleDeleteSocialMediaLink: (id: number) => void;
};

export default function SocialMediaLinksCard({
   socialMediaName,
   setSocialMediaName,
   socialMediaLink,
   setSocialMediaLink,
   onHandleStoreSocialMediaLink,
   socialFormRef,
   socialMedia,
   setSocialMedia,
   onHandleDeleteSocialMediaLink,
}: Props) {
   const { social_media_links, error } = useSelector(
      (state: BuyerState) => state.buyer.profile
   );
   const SocialMediaLinks: SocialMediaLink[] = social_media_links;
   const Error = error as SocialMediaLink;
   return (
      <div className=" lg:w-[25%] 3xs:w-[250px] w-full lg:ms-0 flex items-end">
         <div className="w-full">
            <div className=" flex flex-wrap gap-5 mb-5">
               {SocialMediaLinks.length > 0
                  ? SocialMediaLinks.map((socialMedia, index: number) => {
                       const detectSocialMedia = socialMedias.find(
                          (item) => item.name === socialMedia.name
                       );

                       return (
                          <div
                             key={index}
                             className="group w-16 h-16 bg-slate-50 shadow-md rounded-2xl  flex justify-center items-center relative"
                          >
                             <Img
                                src={`${detectSocialMedia?.logo}`}
                                alt="social-media-logo"
                                width={40}
                                height={40}
                                className="w-9 h-9"
                             />
                             <Button
                                type="button"
                                className="group-hover:block hidden text-red-700 absolute top-1 right-1"
                                onClick={() =>
                                   onHandleDeleteSocialMediaLink(
                                      socialMedia?.id
                                   )
                                }
                             >
                                <div className="w-4 h-4">
                                   <CrosSvgIcon />
                                </div>
                             </Button>
                          </div>
                       );
                    })
                  : null}
            </div>
            <form ref={socialFormRef}>
               <div className="pb-3">
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                     Social Media Name
                  </div>
                  <SocialMediaSearchAutoComplete
                     items={socialMedias}
                     socialMedia={socialMedia}
                     setSocialMedia={setSocialMedia}
                     className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full shadow-admin-card px-5"
                     placeholder="Type Here"
                  />
                  {Error.name && (
                     <small className="text-red-500 text-xs">
                        {Error.name}
                     </small>
                  )}
               </div>
               <div>
                  <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium pb-2">
                     Social Link
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#515151] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal rounded-[10px] h-10 w-full border-none focus:outline-none focus:ring-0 px-5"
                     style={{
                        boxShadow:
                           "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                     }}
                     placeholder="Social Url"
                     onChange={(e) => setSocialMediaLink(e.target.value)}
                     defaultValue={socialMediaLink}
                  />{" "}
                  {Error.link && (
                     <small className="text-red-500 text-xs">
                        {Error.link}
                     </small>
                  )}
               </div>
            </form>
            <Button
               type="button"
               className="rounded-[10px] ms-auto w-full h-9 bg-blue-gradient shadow-md text-white text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium flex justify-center items-center mt-5"
               style={{
                  boxShadow:
                     "-1px -1px 5px 0px rgba(102, 85, 102, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
               }}
               onClick={() => onHandleStoreSocialMediaLink()}
            >
               save
            </Button>
         </div>
      </div>
   );
}
