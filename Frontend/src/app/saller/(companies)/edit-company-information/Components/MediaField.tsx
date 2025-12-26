"use client";
import React, { ChangeEvent } from "react";
import { PlusSvgIcon } from "@/saller/components/SvgIcons";
import dynamic from "next/dynamic";
const Input = dynamic(() => import("@/components/Input"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

type Props = {
   label?: string | undefined;
   image?: any | undefined;
   Error?: any | undefined;
   icon?: any | undefined;
   productImages: object[] | undefined;
   setProductImages: any | undefined;
};

export default function MediaField({
   label = "Media",
   image,
   Error,
   icon = (
      <div className="w-4 h-4 mx-auto">
         <PlusSvgIcon />
      </div>
   ),
   productImages,
   setProductImages,
}: Props) {
   const onHandleMediaImages = (e: ChangeEvent<HTMLInputElement>) => {
      setProductImages([]);
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
            {label}
         </div>

         <div className=" xs:grid 8xl:grid-cols-5 4xl:grid-cols-4 2xl:grid-cols-3 grid-cols-2 gap-5">
            {productImages &&
               productImages.length > 0 &&
               productImages.map((image: object, index: number) => (
                  <Img
                     key={index}
                     src={`${image}`} // image-insert.png
                     alt="product image"
                     width={250}
                     height={250}
                     className="w-full xs:h-auto xs3:h-[250px] h-[205px] rounded-lg xs:mb-0 mb-3"
                  />
               ))}
            <div
               className="flex items-center"
               onClick={() => image.current?.click()}
            >
               <div className="bg-[#ffffff] xs:rounded-md rounded-2xl border-dashed border-[#515151] border-2 xs:w-[125px] w-full xs:h-[125px] h-[205px] flex justify-center items-center cursor-pointer">
                  <div>{icon}</div>
               </div>
            </div>
            <Input
               type="file"
               inputRef={image}
               onChange={onHandleMediaImages}
               className="hidden"
            />
         </div>

         {Error?.logo && (
            <small className="text-red-500 text-[10px] font-semibold">
               {Error.logo}
            </small>
         )}
         <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-[10px] leading-[15px] font-normal relative"></div>
      </div>
   );
}
