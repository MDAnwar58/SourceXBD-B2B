"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const IdCardFrontend = dynamic(() => import("./IdCardFrontend"));
const IdCardBackend = dynamic(() => import("./IdCardBackend"));

type Image = {
   id: number;
   image: string;
   imageable_id: string;
};

type Document = {
   company_id: number;
   date: string;
   id: number;
   images: Image[];
   title: string;
};

type Company = {
   documents: Document[];
};

type User = {
   company: Company;
};

type IdCard = {
   url: string;
   title: string;
};

type Props = {
   idCardFrontImage: IdCard;
   setIdCardFrontImage: React.Dispatch<React.SetStateAction<IdCard>>;
   onhandleIdCardFrontImageChange: (
      event: React.ChangeEvent<HTMLInputElement>
   ) => void;
   idCardBackImage: IdCard;
   setIdCardBackImage: React.Dispatch<React.SetStateAction<IdCard>>;
   onhandleIdCardBackImageChange: (
      event: React.ChangeEvent<HTMLInputElement>
   ) => void;
};

export default function IdCards({
   idCardFrontImage,
   setIdCardFrontImage,
   onhandleIdCardFrontImageChange,
   idCardBackImage,
   setIdCardBackImage,
   onhandleIdCardBackImageChange,
}: Props) {
   const localUrl = LocalUrl();
   const { user = {} } = useSelector(
      (state: SallerState) => state.saller.company
   );
   const User = user as User;

   const FrontPart = User?.company?.documents?.find(
      (document: Document) => document.title === "Id Card Front Side"
   );

   const BackPart = User?.company?.documents?.find(
      (document: Document) => document.title === "Id Card Back Side"
   );

   const IdCardFrontPart = {
      id: FrontPart?.id,
      image:
         FrontPart?.images?.find(
            (item: any) => item.imageable_id === FrontPart?.id
         )?.image || "",
      imageable_id:
         FrontPart?.images?.find(
            (item: any) => item.imageable_id === FrontPart?.id
         )?.imageable_id || "",
      title: FrontPart?.title || "",
   };

   const IdCardBackPart = {
      id: BackPart?.id,
      image:
         BackPart?.images?.find(
            (item: any) => item.imageable_id === BackPart?.id
         )?.image || "",
      imageable_id:
         BackPart?.images?.find(
            (item: any) => item.imageable_id === BackPart?.id
         )?.imageable_id || "",
      title: BackPart?.title || "",
   };

   useEffect(() => {
      setIdCardFrontImage({
         url: IdCardFrontPart.image
            ? `${localUrl}/${IdCardFrontPart.image}`
            : "",
         title: IdCardFrontPart.title,
      });
      setIdCardBackImage({
         url: IdCardBackPart.image ? `${localUrl}/${IdCardBackPart.image}` : "",
         title: IdCardBackPart.title,
      });
   }, [
      localUrl,
      IdCardFrontPart.image,
      IdCardFrontPart.title,
      IdCardBackPart.image,
      IdCardBackPart.title,
   ]);

   return (
      <div className="flex flex-wrap items-end gap-5">
         <IdCardFrontend
            idCardFrontImage={idCardFrontImage}
            setIdCardFrontImage={setIdCardFrontImage}
            onhandleIdCardFrontImageChange={onhandleIdCardFrontImageChange}
            IdCardFrontPart={IdCardFrontPart}
         />
         <IdCardBackend
            idCardBackImage={idCardBackImage}
            setIdCardBackImage={setIdCardBackImage}
            onhandleIdCardBackImageChange={onhandleIdCardBackImageChange}
            IdCardBackPart={IdCardBackPart}
         />
         {/* <Button
           type="button"
           className={`rounded-[14px] xs:w-[235px] w-full h-[42px] ${loading === false ? "bg-blue-gradient" : " bg-blue-gradient-disable"} flex items-center justify-center`}
           //   onClick={() => documentUpdate()}
        >
           <div className="text-[#ffffff] text-left font-['Raleway-Medium',_sans-serif] text-base font-medium relative">
              Submit
           </div>
        </Button> */}
      </div>
   );
}
