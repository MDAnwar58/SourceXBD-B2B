"use client";
import React, { ChangeEvent, useState } from "react";
import { PlusSvgIcon } from "@admin/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));

type Props = {
   images?: any | undefined;
   Error?: any | undefined;
   productImages?: any | undefined;
   setProductImages?: any | undefined;
};

export default function MediaField({
   images,
   Error,
   productImages,
   setProductImages,
}: Props) {
   const localUrl = LocalUrl();
   const onHandleMediaImages = (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         const filesArray = Array.from(e.target.files).map((file) =>
            URL.createObjectURL(file)
         );
         setProductImages((prevImages: any) => [...prevImages, ...filesArray]);
      }
   };

   return (
      <div className="pb-3">
         <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold pb-1">
            Media
         </div>

         <div className=" xs:grid 8xl:grid-cols-5 4xl:grid-cols-4 2xl:grid-cols-3 grid-cols-2 gap-5">
            {productImages.length > 0 &&
               productImages.map((image: object, index: number) => {
                  return (
                     <Img
                        key={index}
                        src={image.toString()} // image-insert.png
                        alt="product image"
                        width={250}
                        height={250}
                        className="w-full xs:h-auto xs3:h-[250px] h-[205px] rounded-lg xs:mb-0 mb-3"
                     />
                  );
               })}
            <div
               className="flex items-center"
               onClick={() => images.current?.click()}
            >
               <div className="bg-[#ffffff] xs:rounded-md rounded-2xl border-dashed border-[#515151] border-2 xs:w-[125px] w-full xs:h-[125px] h-[205px] flex justify-center items-center">
                  <div className="w-4 h-4">
                     <PlusSvgIcon />
                  </div>
               </div>
            </div>
            <Input
               type="file"
               inputRef={images}
               onChange={onHandleMediaImages}
               className="hidden"
               multiple
            />
         </div>

         {Error?.files && (
            <small className="text-red-500 text-[10px] font-semibold">
               {Error.files}
            </small>
         )}
         <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
      </div>
   );
}
