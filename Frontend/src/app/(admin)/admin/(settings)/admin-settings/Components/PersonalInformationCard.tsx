"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import { useRemoveZeroNumberFrist } from "@/components/react/react-shorting";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Input = dynamic(() => import("@/components/Input"));
const Button = dynamic(() => import("@/components/Button"));
const SallerAvatar = dynamic(() => import("./SallerAvatar"));

type User = {
   id: number;
   email: string;
   name: string;
   phone: string;
   image: string;
};

type Props = {
   image: any;
   name: any;
   email: any;
   phone: any;
   updateProfile: any;
   formRef: any;
};

export default function PersonalInformationCard({
   image,
   name,
   email,
   phone,
   updateProfile,
   formRef,
}: Props) {
   const [storeAvatarPath, setStoreAvatarPath] = useState<string>("");
   const [avatarUrl, setAvatarUrl] = useState<string>("");
   const localUrl: any = LocalUrl();

   const { user } = useSelector((state: AdminState) => state.admin.settings);
   const User = user as User;

   useEffect(() => {
      if (User && Array.isArray(User.image)) {
         const itemImage = User?.image?.map((item: any) => item.image);
         const imageUrl = itemImage.join("");
         setStoreAvatarPath(imageUrl);
         const forwardSlash = "/";
         const image = forwardSlash.concat(imageUrl);
         const imagePath = localUrl.concat(image);
         if (imageUrl !== null) {
            setAvatarUrl(imagePath);
         } else {
            setAvatarUrl("");
         }
      }
   }, [User]);
   let number = "";
   if (User?.phone !== undefined && User?.phone !== null) {
      number = useRemoveZeroNumberFrist({ number: String(User?.phone) });
   }
   let userPhone: string = number || "";

   return (
      <AdminCard>
         <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold relative">
            Personal Information
         </div>
         <SallerAvatar
            image={image}
            avatarUrl={avatarUrl}
            setAvatarUrl={setAvatarUrl}
            storeAvatarPath={storeAvatarPath}
         />
         <form ref={formRef} className="pt-3">
            <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
               Name
            </div>
            <div className="px-1">
               <Input
                  type="text"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full px-5"
                  placeholder="Name"
                  inputRef={name}
                  defaultValue={User && User?.name}
               />
            </div>
         </form>
         <div className="pt-3">
            <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
               Email
            </div>
            <div className="px-1">
               <Input
                  type="email"
                  className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full px-5"
                  placeholder="Email"
                  inputRef={email}
                  defaultValue={User && User?.email}
               />
            </div>
         </div>
         <div className="pt-3">
            <div className="text-[#515151] text-left font-['Raleway-Regular',_sans-serif] text-xs font-normal mb-2">
               Phone
            </div>
            <div className="px-1">
               <div className=" relative">
                  <div className=" absolute top-[46.41%] left-5 transform-translate-y-middle flex items-center gap-x-2 text-[#2f2f2f] font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     <div className="mt-[.13rem]">+880</div>
                     <div>|</div>
                  </div>
                  <Input
                     type="text"
                     className="bg-[rgba(152,176,238,0.05)] text-[#2f2f2f] shadow-admin-card border-none focus:ring-0 text-left font-['Arial-Regular',_sans-serif] text-xs font-normal rounded-[20px] h-[50px] w-full ps-16 pe-5"
                     placeholder="1xxxxxxxxx"
                     inputRef={phone}
                     defaultValue={userPhone}
                  />
               </div>
            </div>
         </div>
         <Button
            type="button"
            onClick={updateProfile}
            className=" bg-blue-gradient text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-base font-bold rounded-[20px] xs:w-[172px] w-full h-[50px] flex items-center justify-center mx-auto mt-5"
         >
            Save
         </Button>
      </AdminCard>
   );
}
