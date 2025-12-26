"use client";
import React, { useRef } from "react";
import { EditSvgIcon } from "@/buyer/components/SvgIcons";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});

type Props = {
   image: any;
   showImage: any;
   setShowImage: any;
};

export default function ProfileImageUpload({
   image,
   showImage,
   setShowImage,
}: Props) {
   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] as File;
      if (file) {
         setShowImage(URL.createObjectURL(file));
      }
   };
   return (
      <div className="relative">
         <Img
            src={showImage || "/assets/images/user-demo-avatar.png"}
            alt="profile"
            width={300}
            height={300}
            className="rounded-[50%] w-[126px] h-[126px] object-cover"
         />
         <div
            onClick={() => image.current?.click()}
            className="bg-[#4285f4] text-white flex justify-center items-center rounded-[50%] w-6 h-6 absolute bottom-0 right-[0.85rem] cursor-pointer"
         >
            <div className="w-4 h-4">
               <EditSvgIcon />
            </div>
         </div>
         <Input
            type="file"
            inputRef={image}
            className="hidden"
            onChange={handleImageChange}
         />
      </div>
   );
}
