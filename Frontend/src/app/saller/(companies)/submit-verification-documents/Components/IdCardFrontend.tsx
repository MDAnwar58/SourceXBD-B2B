"use client";
import { AppDispatch } from "@/saller/store";
import { CrosSvgIcon, DocumentSvgIcon } from "@/saller/components/SvgIcons";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { removeIdCardImage } from "@/saller/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const Input = dynamic(() => import("@/components/Input"));

type IdCard = {
   url: string;
   title: string;
};

type Props = {
   idCardFrontImage: IdCard;
   setIdCardFrontImage: React.Dispatch<React.SetStateAction<IdCard>>;
   onhandleIdCardFrontImageChange: any;
   IdCardFrontPart: any;
};

export default function IdCardFrontend({
   idCardFrontImage,
   setIdCardFrontImage,
   onhandleIdCardFrontImageChange,
   IdCardFrontPart,
}: Props) {
   const idfront = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   const document = idCardFrontImage as any;
   return (
      <div className="relative">
         {idCardFrontImage?.url ? (
            <div className=" xs:w-[268px] w-full h-[167px]">
               <div className="bg-[rgba(152,176,238,0.05)] rounded-[20px] border-dashed border-[#4285f4] border xs:w-[268px] w-full h-[167px] flex justify-center items-center -z-10">
                  <Img
                     src={idCardFrontImage?.url.toString()}
                     alt={idCardFrontImage?.title || "Front side"}
                     width={300}
                     height={300}
                     //
                     className="w-full h-full rounded-[20px] mx-auto"
                  />
                  <Button
                     type="button"
                     className="bg-red-500 text-gray-700 hover:bg-red-600 hover:text-white p-1 rounded-lg transition-all duration-150 ease-linear absolute top-2 right-2 z-10"
                     onClick={() => {
                        dispatch(removeIdCardImage(IdCardFrontPart?.id));
                     }}
                  >
                     <div className="w-3.5 h-3.5">
                        <CrosSvgIcon />
                     </div>
                  </Button>
               </div>
            </div>
         ) : (
            <div
               onClick={() => idfront.current && idfront.current.click()}
               className="bg-[rgba(152,176,238,0.05)] rounded-[20px] border-dashed border-[#4285f4] border xs:w-[268px] w-full h-[167px] flex justify-center items-center -z-10 cursor-pointer"
            >
               <div>
                  <div className="text-[#515151] text-center font-['Raleway-Medium',_sans-serif] text-sm font-medium pb-4">
                     Front side
                  </div>
                  <div className="w-8 h-8 mx-auto">
                     <DocumentSvgIcon />
                  </div>
                  <div className="text-[#515151] text-center font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pt-3">
                     Drop file here or Upload
                  </div>
               </div>
            </div>
         )}
         <Input
            type="file"
            inputRef={idfront}
            className="hidden"
            onChange={onhandleIdCardFrontImageChange}
         />
      </div>
   );
}
