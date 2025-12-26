"use client";
import Img from "@/components/Image";
import React, {
   ChangeEvent,
   Fragment,
   SetStateAction,
   useRef,
   useState,
} from "react";
import { PlusSvgIcon } from "@admin/components/SvgIcons";
import Input from "@/components/Input";
import { LocalUrl } from "@/components/react/localhost";

type Props = {
   label?: string | undefined;
   image?: string | undefined;
   setImage?: any | undefined;
   imageRef?: any | undefined;
};

export default function ImageInput({
   label = "Image",
   image,
   setImage,
   imageRef,
}: Props) {
   const [previewUrl, setPreviewUrl] = useState("");
   const localUrl = LocalUrl();

   const onFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
         setImage(file);
         const preview = URL.createObjectURL(file); // Generate the image preview URL
         setPreviewUrl(preview);
      }
   };

   return (
      <Fragment>
         {label && (
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
               {label}
            </div>
         )}
         <div className="flex flex-row flex-wrap gap-3">
            {previewUrl ? (
               // Show uploaded image
               <Img
                  src={previewUrl}
                  alt="uploaded-image"
                  width={300}
                  height={300}
                  className="xs5:w-36 w-full xs5:h-36 h-auto rounded-lg mb-3"
               />
            ) : (
               image && (
                  // Show uploaded image
                  <Img
                     src={localUrl + image}
                     alt="uploaded-image"
                     width={300}
                     height={300}
                     className="xs5:w-36 w-full xs5:h-36 h-auto rounded-lg mb-3"
                  />
               )
            )}
            <div className="flex items-center">
               <div
                  className="w-20 h-20 flex items-center justify-center bg-gray-50 text-gray-700/90 drop-shadow-sm border border-dashed border-gray-300 rounded-lg"
                  onClick={() => {
                     imageRef.current?.click();
                  }}
               >
                  <div className="w-7 h-7">
                     <PlusSvgIcon />
                  </div>
               </div>
            </div>
         </div>
         <Input
            type="file"
            className="hidden"
            inputRef={imageRef}
            onChange={onFileUpload}
         />
      </Fragment>
   );
}
