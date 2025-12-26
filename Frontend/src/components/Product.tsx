"use client";
import React from "react";
import { SvgProductFavoriteBtnIcon, SvgRedFavorieBtnIcon } from "./SvgIcons";
import { LocalUrl } from "./react/localhost";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

import dynamic from "next/dynamic";
const Img = dynamic(() => import("./Image"));
const Button = dynamic(() => import("./Button"));
const NavLink = dynamic(() => import("./NavLink"));
const ViewNumberBtn = dynamic(() => import("./ViewNumberBtn"));

type MainProduct = {
   id: string;
   name: string;
   slug: string;
   image: string;
   price: string;
   seller: string;
   status: string;
   stock: string;
   category: string;
   sub_category: string;
   video: string;
   is_wish_active: boolean;
   contact: string | null;
   seller_id: number;
};

type Props = {
   product?: MainProduct | undefined;
   auth: any | undefined;
   onHandleAddToWishlist: (productId: number) => void;
   onRemoveProductWithWishList: (productId: number) => void;
};

export default function Product({
   product,
   auth,
   onHandleAddToWishlist,
   onRemoveProductWithWishList,
}: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const imagePath = localUrl + String(product?.image);

   let imageUrl = "";
   if (product?.image) {
      imageUrl = localUrl.concat(product?.image);
   }

   return (
      <div
         className="bg-[rgba(152,176,238,0.05)] rounded-[14px] w-full p-4"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div className="relative">
            {product?.image ? (
               <Img
                  src={imageUrl}
                  alt="filter product image"
                  width={300}
                  height={300}
                  className="rounded-[10px] w-full xl:h-[230px] 2lg:h-44 lg:h-40 6md:h-56 4md:h-48 md:h-40 4sm:h-64 3sm:h-60 6xs:h-52 4xs:h-44 3xs:h-44 xs:h-40 xs3:h-32 xs5:h-60 xs6:h-52 h-44 object-cover"
               />
            ) : (
               <Img
                  src="/assets/images/demo.png"
                  alt="trandy product image"
                  width={300}
                  height={300}
                  className="rounded-[10px] w-full xl:h-[230px] 2lg:h-44 lg:h-40 6md:h-56 4md:h-48 md:h-40 4sm:h-64 3sm:h-60 6xs:h-52 4xs:h-44 3xs:h-44 xs:h-40 xs3:h-32 xs5:h-60 xs6:h-52 h-44 object-cover"
               />
            )}

            {product?.is_wish_active === false ? (
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                  onClick={() => {
                     if (auth === true) {
                        onHandleAddToWishlist(Number(product?.id));
                     }
                  }}
               >
                  <SvgProductFavoriteBtnIcon
                     width={24}
                     height={24}
                     color="black"
                  />
               </Button>
            ) : (
               <Button
                  type="button"
                  className="bg-[rgba(255,255,255,0.60)] backdrop-blur-[4px] rounded-xl w-9 h-9 absolute top-2 right-2 flex justify-center items-center"
                  onClick={() => {
                     if (auth === true) {
                        onRemoveProductWithWishList(Number(product?.id));
                     }
                  }}
               >
                  <div className="w-6 h-6 text-[#F44336]">
                     <SvgRedFavorieBtnIcon />
                  </div>
               </Button>
            )}
         </div>
         <div className="">
            <div
               className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold w-[152px] pt-2"
               style={{
                  background:
                     "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               <NavLink href={`/product-sale/${product?.slug}`}>
                  {product?.name}
               </NavLink>
            </div>
            <div className="flex 3lg:flex-row flex-col justify-between pt-[0.35rem]">
               <div>
                  <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     {product?.category}
                  </div>
                  <div className="flex items-center pt-2">
                     <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                        BDT {product?.price}
                     </div>
                     <div className="text-[#3d3d3d] line-through ps-3 font-['Inter-Regular',_sans-serif] text-xs font-normal">
                        000
                     </div>
                  </div>
               </div>
               <div className="text-[#92aae9] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                  1 setMin. order
               </div>
            </div>

            <div className="grid xl:grid-cols-2 lg:grid-cols-1 4md:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 xs3:grid-cols-1  xs6:grid-cols-2 grid-cols-1 gap-2 pt-3">
               <ViewNumberBtn contactNumber={product?.contact} />
               <NavLink
                  href={`/buyer/messages/${product?.seller_id}`}
                  className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
                  style={{
                     background:
                        "linear-gradient(166.01deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  }}
               >
                  Get Best Price
               </NavLink>
            </div>
         </div>
      </div>
   );
}
