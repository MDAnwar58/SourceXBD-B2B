"use client";
import { CrosSvgIcon } from "@/saller/components/SvgIcons";
import { DocumentSvgIcon } from "@/app/saller/components/SvgIcons";
import { AppDispatch } from "@/app/store";
import React, { useRef } from "react";
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
   idCardBackImage: IdCard;
   setIdCardBackImage: React.Dispatch<React.SetStateAction<IdCard>>;
   onhandleIdCardBackImageChange: any;
   IdCardBackPart: any;
};

export default function IdCardBackend({
   idCardBackImage,
   setIdCardBackImage,
   onhandleIdCardBackImageChange,
   IdCardBackPart,
}: Props) {
   const idCardBack = useRef<HTMLInputElement>(null);
   const dispatch = useDispatch<AppDispatch>();

   return (
      <div className="relative">
         {idCardBackImage?.url ? (
            <div className=" xs:w-[268px] w-full h-[167px]">
               <div className="bg-[rgba(152,176,238,0.05)] rounded-[20px] border-dashed border-[#4285f4] border xs:w-[268px] w-full h-[167px] flex justify-center items-center -z-10">
                  <Img
                     src={idCardBackImage?.url.toString()}
                     alt={idCardBackImage?.title || "Front side"}
                     width={300}
                     height={300}
                     className="w-full h-full rounded-[20px] mx-auto"
                  />
                  <Button
                     type="button"
                     className="bg-red-500 text-gray-700 hover:bg-red-600 hover:text-white p-1 rounded-lg transition-all duration-150 ease-linear absolute top-2 right-2 z-10"
                     onClick={() => {
                        dispatch(removeIdCardImage(IdCardBackPart?.id));
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
               onClick={() => idCardBack.current && idCardBack.current.click()}
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
            inputRef={idCardBack}
            className="hidden"
            onChange={onhandleIdCardBackImageChange}
         />
      </div>
   );
}
