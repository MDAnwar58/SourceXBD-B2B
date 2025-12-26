"use client";
import React, { useCallback } from "react";
import { FavoriteSvgIcon } from "@/buyer/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/buyer/store";
import { removeProductInWishList } from "@/buyer/wish-list/features/WishListAction";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

type WishProduct = {
   id: number;
   name: string;
   price: number;
   discount_price: number | null;
   min_order: number | null;
   s_desc: string;
   image: string;
   category: string;
   company: string;
   contact: string | null;
   is_wish_active: boolean;
   slug: string;
   spacification: any | null;
   time_ago: string;
};

type Props = {
   product: WishProduct;
   limit: number;
   search: string;
};

export default function WishListProduct({ product, limit, search }: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();
   const onRemoveProductWithWishList = useCallback(
      (productId: number) => {
         dispatch(
            removeProductInWishList({
               productId,
               limit,
               search,
            })
         );
      },
      [dispatch, limit, search]
   );
   const imagePath = localUrl + product?.image.toString();
   return (
      <div
         className="bg-[rgba(152,176,238,0.05)] rounded-[30px] w-full p-4"
         style={{
            boxShadow:
               "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
         }}
      >
         <div className="relative">
            <Img
               src={imagePath.toString()}
               alt="trandy product image"
               width={300}
               height={300}
               className="rounded-[20px] w-full 15xl:h-[251px] 13xl:h-[230px] xl:h-[201px] 5lg:h-44 lg:h-60 6md:h-52 4md:h-44 4sm:h-40 2sm:h-60 sm:h-56 6xs:h-52 3xs:h-40 xs3:h-64 xs5:h-56 h-44 object-cover"
            />

            <Button
               type="button"
               className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
               onClick={() => onRemoveProductWithWishList(product?.id)}
            >
               <div className="w-6 h-6 text-[#F44336]">
                  <FavoriteSvgIcon />
               </div>
            </Button>
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
               {product?.name}
            </div>
            <div className="flex 3lg:flex-row flex-col justify-between pt-[0.35rem]">
               <div>
                  <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                     {product?.category}
                  </div>
                  {product?.discount_price ? (
                     <div className="flex items-center pt-2">
                        <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                           BDT {product?.price - product?.discount_price}
                        </div>
                        <div className="text-[#3d3d3d] line-through ps-3 font-['Inter-Regular',_sans-serif] text-xs font-normal">
                           {product?.price}
                        </div>
                     </div>
                  ) : (
                     <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal  pt-2">
                        BDT {product?.price}
                     </div>
                  )}
               </div>
               {product?.min_order && (
                  <div className="text-[#92aae9] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     {product?.min_order} setMin. order
                  </div>
               )}
            </div>

            <div className="grid xl:grid-cols-2 lg:grid-cols-1 4md:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 xs:grid-cols-1 xs6:grid-cols-2 grid-cols-1 gap-2 pt-3">
               <Button
                  type="button"
                  className=" capitalize rounded-2xl border-solid border-[#4285f4] border w-full h-[38px] text-[#4285f4] text-left font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
               >
                  view number
               </Button>
               <Button
                  type="button"
                  className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-xs font-bold flex justify-center items-center"
                  style={{
                     background:
                        "linear-gradient(166.01deg,rgba(66, 133, 244, 1) 0%,rgba(85, 118, 179, 1) 100%)",
                  }}
               >
                  Get Best Price
               </Button>
            </div>
         </div>
      </div>
   );
}
