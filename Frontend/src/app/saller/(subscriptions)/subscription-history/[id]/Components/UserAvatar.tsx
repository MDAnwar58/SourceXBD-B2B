"use client";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
import React from "react";
const Img = dynamic(() => import("@/components/Image"));

type User = {
   company: string;
   image: string;
   name: string;
};

type Props = {
   user: User;
};

export default function UserAvatar({ user }: Props) {
   const localUrl: string = LocalUrl();
   let imageUrl: string = "";
   if (user?.image !== undefined) {
      const storeImagePath = user?.image?.toString();
      const forwardSlash = "/";
      const imagePath = forwardSlash.concat(storeImagePath);
      const path = localUrl.concat(imagePath);
      imageUrl = path.toString();
   } else {
      imageUrl = "/assets/images/user-demo-avatar.png";
   }
   return (
      <div className="flex xs:flex-row flex-col gap-3 pb-4">
         <Img
            src={imageUrl}
            alt="user avatar"
            width={100}
            height={100}
            className="rounded-[50%] w-[84px] h-[84px] xs:mx-0 mx-auto"
         />
         <div>
            <h1 className="text-[#2f2f2f] xs:text-left text-center font-['Raleway-Bold',_sans-serif] text-[32px] font-bold ">
               <div>{user?.name}</div>
               <div className="text-[#2f2f2f] xs:text-left text-center font-['Raleway-Medium',_sans-serif] text-sm font-medium ">
                  ({user?.company})
               </div>
            </h1>
         </div>
      </div>
   );
}
