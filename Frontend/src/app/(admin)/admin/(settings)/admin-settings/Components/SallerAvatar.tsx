"use client";
import { EditSvgIcon } from "@/app/buyer/components/SvgIcons";
import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));

type Props = {
   image: any;
   avatarUrl: string;
   setAvatarUrl: React.Dispatch<React.SetStateAction<string>>;
   storeAvatarPath: string;
};

export default function SallerAvatar({
   image,
   avatarUrl,
   setAvatarUrl,
   storeAvatarPath,
}: Props) {
   const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];

      if (file) {
         const newAvatarUrl = URL.createObjectURL(file);
         setAvatarUrl(newAvatarUrl);
      }
   };
   return (
      <div className="py-3 flex justify-center">
         <div className="relative mx-auto">
            {avatarUrl && storeAvatarPath ? (
               <Img
                  src={avatarUrl}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  className="rounded-[50%] w-[100px] h-[100px] object-cover"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            ) : avatarUrl ? (
               <Img
                  src={avatarUrl}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  className="rounded-[50%] w-[100px] h-[100px] object-cover"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            ) : (
               <Img
                  src={"/assets/images/user-demo-avatar.png"}
                  alt="User Avatar"
                  width={100}
                  height={100}
                  className="rounded-[50%] w-[100px] h-[100px] object-cover"
                  style={{
                     boxShadow:
                        "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                  }}
               />
            )}
            <Button
               type="button"
               className="absolute bottom-0 right-3 bg-blue-500 text-white rounded-md sm:w-5 w-6 sm:h-5 h-6 flex justify-center items-center"
               onClick={() => image.current && image.current.click()}
            >
               <div className="sm:w-3.5 w-4 sm:h-3.5 h-4">
                  <EditSvgIcon />
               </div>
            </Button>
            <Input
               type="file"
               className="hidden"
               inputRef={image}
               onChange={handleAvatarChange}
            />
         </div>
      </div>
   );
}
