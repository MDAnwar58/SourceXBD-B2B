"use client";
import { LocalUrl } from "@/components/react/localhost";
import {
   SvgProductFavoriteBtnIcon,
   SvgRedFavorieBtnIcon,
} from "@/components/SvgIcons";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import dynamic from "next/dynamic";
const ViewNumberBtn = dynamic(() => import("@/components/ViewNumberBtn"), {
   ssr: false,
});
const Button = dynamic(() => import("@/components/Button"), {
   ssr: false,
});
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   contact: string;
   price: string;
   image: any;
   time_ago: string;
   is_wish_active: boolean;
};

type Props = {
   product: Product;
   auth: any;
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

   let imageUrl = "";
   if (product?.image) {
      const storeImageUrl = localUrl.concat(product?.image);
      imageUrl = storeImageUrl;
   }
   // console.log(product?.is_wish_active);
   return (
      <div>
         <div
            className="bg-[#ffffff] rounded-[30px] w-full p-4"
            style={{
               boxShadow:
                  "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
            }}
         >
            <div className="relative">
               {product?.image ? (
                  <Img
                     src={imageUrl}
                     alt="trandy product image"
                     width={300}
                     height={300}
                     className="rounded-[20px] w-full xl:h-[230px] 2lg:h-64 lg:h-60 4md:h-56 3md:h-48 4sm:h-64 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
                  />
               ) : null}

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
            <div>
               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold relative w-[152px] pt-2"
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
               <div className="flex justify-between items-center pt-[0.35rem]">
                  <div>
                     <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                        {product?.category}
                     </div>
                     <div className="flex items-center pt-2">
                        <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                           BDT {product?.price}
                        </div>
                        <div className="text-[#3d3d3d] line-through ps-3 font-['Inter-Regular',_sans-serif] text-[10px] font-normal">
                           000
                        </div>
                     </div>
                  </div>
                  <div className="text-[#92aae9] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                     1 setMin. order
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-x-2 pt-3">
                  <ViewNumberBtn contactNumber={product?.contact} />
                  <Button
                     type="button"
                     className=" capitalize text-white rounded-2xl w-full h-[38px] font-['Raleway-Bold',_sans-serif] text-[10px] font-bold flex justify-center items-center"
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
      </div>
   );
}
