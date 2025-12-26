"use client";
import {
   SvgBDBehanceIcon,
   SvgBDFacebookIcon,
   SvgBDFavoriteIcon,
   SvgBDInstagramIcon,
   SvgBDLinkIcon,
   SvgBDTwitterIcon,
} from "@/components/SvgIcons";
import React from "react";
import {
   FacebookShareButton,
   TwitterShareButton,
   LinkedinShareButton,
   FacebookIcon,
   TwitterIcon,
   LinkedinIcon,
   WorkplaceShareButton,
} from "react-share";
import Head from "next/head";

export default function BlogDetailsFavoriteAndShare() {
   const url = "https://sourcexbd.com";
   const hashtag = "#SourceXBD";
   const title = "Check out this amazing content!";
   const description = "This is a sample blog description.";
   const quote = "This is a sample blog description.";
   const imageUrl = "https://sourcexbd.com/image.jpg"; // Image URL to share
   const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(description)}`;
   // Instagram doesn't support direct sharing via a URL. You can guide the user to Instagram's upload page.
   const instagramUrl = `https://www.instagram.com/create/style/?image_url=${encodeURIComponent(imageUrl)}`;
   const instagramShareUrl = `https://www.instagram.com/create/style/`;
   const behanceShareUrl = `https://www.behance.net/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
   return (
      <>
         <div
            className="rounded-[20px] w-full py-12 flex 6xs:flex-row flex-col 6xs:gap-0 gap-7 items-center justify-between px-14"
            style={{
               background:
                  "linear-gradient(90deg,rgba(221, 223, 246, 1) 0%,rgba(192, 198, 240, 1) 59.065985679626465%,rgba(208, 214, 255, 1) 100%)",
               boxShadow:
                  "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="rounded-[10px] border-solid border-[#ffffff] border-2 p-3">
               <SvgBDFavoriteIcon width={38} height={38} color="white" />
            </div>
            <div className="flex xs:flex-row flex-col gap-5">
               <div className="flex flex-row gap-5">
                  <div className="rounded-[10px] border-solid border-[#ffffff] border px-[0.4rem] h-11 flex items-center justify-center">
                     <FacebookShareButton url={url} hashtag={hashtag}>
                        <SvgBDFacebookIcon
                           width={28}
                           height={28}
                           color="white"
                        />
                     </FacebookShareButton>
                  </div>
                  <div className="rounded-[10px] border-solid border-[#ffffff] border px-[0.4rem] h-11 flex items-center justify-center">
                     <a
                        href={instagramShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-share-btn"
                     >
                        <SvgBDInstagramIcon
                           width={28}
                           height={28}
                           color="white"
                        />
                     </a>
                  </div>
                  <div className="rounded-[10px] border-solid border-[#ffffff] border px-[0.4rem] h-11 flex items-center justify-center">
                     <a
                        href={behanceShareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="behance-share-btn"
                     >
                        <SvgBDBehanceIcon
                           width={28}
                           height={28}
                           color="white"
                        />
                     </a>
                  </div>
               </div>
               <div className="flex flex-row gap-5 xs:mx-0 mx-auto">
                  <div className="rounded-[10px] border-solid border-[#ffffff] border px-[0.4rem] h-11 flex items-center justify-center">
                     <TwitterShareButton
                        url={url}
                        title={title}
                        hashtags={[hashtag]}
                     >
                        <SvgBDTwitterIcon
                           width={28}
                           height={28}
                           color="white"
                        />
                     </TwitterShareButton>
                  </div>
                  <div className="rounded-[10px] border-solid border-[#ffffff] border px-[0.4rem] h-11 flex items-center justify-center">
                     <LinkedinShareButton
                        url={url}
                        title={title}
                        summary={description}
                     >
                        <SvgBDLinkIcon width={28} height={28} color="white" />
                     </LinkedinShareButton>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
