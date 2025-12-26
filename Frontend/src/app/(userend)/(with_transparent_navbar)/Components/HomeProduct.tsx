"use client";
import React from "react";
import {
   SvgProductChatBtnIcon,
   SvgProductFavoriteBtnIcon,
   SvgRedFavorieBtnIcon,
} from "@/components/SvgIcons";
import { removeLeadingSlash } from "@/components/react/tools";
import { LocalUrl } from "@/components/react/localhost";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
   removeProductInWishList,
   storeProductInWishList,
} from "../features/HomeAction";
import dynamic from "next/dynamic";
const ViewNumberBtn = dynamic(() => import("@/components/ViewNumberBtn"));
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   is_wish_active: boolean;
   seller_id: number;
};

type Props = {
   product?: Product;
   auth?: boolean;
   userId: number | null;
};

export default function HomeProduct({ product, auth, userId }: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const imagePath = removeLeadingSlash(String(product?.image)) as string;
   const image = localUrl + "/" + imagePath;
   const onHandleAddToWishlist = () => {
      const payload = {
         product_id: product?.id,
      };
      dispatch(storeProductInWishList({ payload }));
   };
   const onRemoveProductWithWishList = () => {
      const productId = product?.id;
      dispatch(removeProductInWishList({ productId }));
   };

   return (
      <div className="3md:col-span-1 3xs:col-span-6 col-span-12 xs6:mb-0 mb-7">
         <div
            className="bg-[#f0f2ff] rounded-[30px] w-full h-auto p-4"
            style={{
               boxShadow:
                  "-6px -6px 10px 0px rgba(94, 94, 94, 0.25),6px 6px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="relative">
               <Img
                  src={image}
                  alt="trandy product image"
                  width={300}
                  height={300}
                  className="rounded-[20px] w-full xl:h-[230px] 2lg:h-64 lg:h-60 4md:h-56 3md:h-48 4sm:h-64 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
               />

               {product?.is_wish_active === false ? (
                  <Button
                     type="button"
                     className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                     onClick={() => {
                        if (auth === true) {
                           onHandleAddToWishlist();
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
                           onRemoveProductWithWishList();
                        }
                     }}
                  >
                     <div className="w-6 h-6 text-[#F44336]">
                        <SvgRedFavorieBtnIcon />
                     </div>
                  </Button>
               )}
            </div>
            <div className="pt-2">
               <NavLink
                  href={`/product-sale/${product?.slug}`}
                  className=" mb-[.4rem] text-[#4285f4] text-left font-['Raleway-ExtraBold',_sans-serif] text-xl font-extrabold"
               >
                  {product?.name}
               </NavLink>
               <div className="text-[#666666] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                  {product?.company || "Advenced sping"}
               </div>
               <div className="grid 6xs:grid-cols-2 grid-cols-1 gap-2 mt-5">
                  {product?.seller_id ? (
                     <NavLink
                        href={`/buyer/messages/${product?.seller_id}`}
                        className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center gap-x-1 xs6:mb-0 mb-1"
                        style={{
                           background:
                              "linear-gradient(180deg,rgba(66, 133, 244, 1) 14.499999582767487%,rgba(85, 118, 179, 1) 86.00000143051147%)",
                        }}
                     >
                        <span>
                           <SvgProductChatBtnIcon
                              width={16}
                              height={16}
                              color="white"
                           />
                        </span>
                        <span>chat now</span>
                     </NavLink>
                  ) : null}
                  <ViewNumberBtn contactNumber={product?.contact} />
               </div>
            </div>
         </div>
      </div>
   );
}
