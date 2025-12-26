"use client";
import React from "react";
import {
   SvgProductFavoriteBtnIcon,
   SvgRedFavorieBtnIcon,
} from "@/components/SvgIcons";
import { LocalUrl } from "@/components/react/localhost";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import {
   removeProductInWishList,
   storeProductInWishList,
} from "../features/OrganisationAction";
import dynamic from "next/dynamic";
const ViewNumberBtn = dynamic(() => import("@/components/ViewNumberBtn"));
const Button = dynamic(() => import("@/components/Button"));
const Img = dynamic(() => import("@/components/Image"));

type Product = {
   id: number;
   name: string;
   slug: string;
   category: string;
   contact: string;
   image: any;
   price: number;
   is_wish_active: boolean;
   discount_price: number;
   min_order: number;
};

type Props = {
   products?: Product[] | any;
   auth?: boolean;
   params?: {
      id: string;
   };
   limit?: number;
};

export default function OrganisationProductsGrid({
   products,
   auth,
   params,
   limit,
}: Props) {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();

   const onHandleAddToWishlist = (productId: number) => {
      const payload = {
         product_id: productId,
      };
      dispatch(
         storeProductInWishList({
            payload,
            organisationId: Number(params?.id),
            limit: Number(limit),
         })
      );
   };
   const onRemoveProductWithWishList = (productId: number) => {
      dispatch(
         removeProductInWishList({
            productId,
            organisationId: Number(params?.id),
            limit: Number(limit),
         })
      );
   };
   return (
      <div className="pt-9">
         <div className=" grid 4lg:grid-cols-4 md:grid-cols-3 4xs:grid-cols-2 3xs:grid-cols-2 grid-cols-1 xl:gap-10 gap-7">
            {products && products.length > 0 ? (
               products.map((product: Product, index: number) => {
                  const imagePath = localUrl + product?.image.toString();
                  return (
                     <div key={index}>
                        <div
                           className="bg-[#ffffff] hover:bg-[#f0f2ff] rounded-[14px] border-2 border-gray-50 border-solid hover:border-gray-400/50 w-full p-4 hover:organisation-product-card-gradient shadow-organisation-product-card transition-all duration-100 ease-linear"
                           style={{
                              borderImageSlice: 1,
                           }}
                        >
                           <div className="relative">
                              <Img
                                 src={imagePath.toString()}
                                 alt="trandy product image"
                                 width={300}
                                 height={300}
                                 className="rounded-[10px] w-full xl:h-[230px] 4lg:h-48 lg:h-60 4md:h-52 3md:h-48 2md:h-44 md:h-40 2sm:h-60 6xs:h-56 4xs:h-52 3xs:h-44 xs3:h-64 h-56 object-cover"
                              />

                              {product?.is_wish_active === false ? (
                                 <Button
                                    type="button"
                                    className="bg-[rgba(255,255,255,0.60)] rounded-xl w-9 h-9 backdrop-blur-sm flex justify-center items-center absolute top-2 right-2"
                                    onClick={() => {
                                       if (auth === true) {
                                          onHandleAddToWishlist(product?.id);
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
                                          onRemoveProductWithWishList(
                                             product?.id
                                          );
                                       }
                                    }}
                                 >
                                    <div className="w-6 h-6 text-[#F44336]">
                                       <SvgRedFavorieBtnIcon />
                                    </div>
                                 </Button>
                              )}
                           </div>
                           <div className=" pt-2">
                              <span
                                 className="text-left font-['Raleway-Bold',_sans-serif] text-base font-bold"
                                 style={{
                                    background:
                                       "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                 }}
                              >
                                 {product?.name}
                              </span>
                              <div className="flex justify-between items-center pt-[0.35rem]">
                                 <div>
                                    <div className="text-[#3d3d3d] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal">
                                       {product?.category ||
                                          "Lorem ipsum dolor"}
                                    </div>
                                    <div className="flex items-center pt-2">
                                       {product?.discount_price !== null ? (
                                          <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                                             BDT
                                             {product?.price -
                                                product?.discount_price}
                                             <div className="text-[#3d3d3d] line-through ps-3 font-['Inter-Regular',_sans-serif] text-xs font-normal">
                                                000
                                             </div>
                                          </div>
                                       ) : (
                                          <div className="text-[#333333] text-left font-['Arial-Regular',_sans-serif] text-base font-normal ">
                                             BDT {product?.price}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                                 {product?.min_order !== null ? (
                                    <div className="text-[#92aae9] text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal relative">
                                       1 setMin. order
                                    </div>
                                 ) : null}
                              </div>

                              <div className="grid 5lg:grid-cols-2 lg:grid-cols-1 4md:grid-cols-2 md:grid-cols-1 sm:grid-cols-2 3xs:grid-cols-1 xs6:grid-cols-2 grid-cols-1 gap-2 pt-3">
                                 {/* <ViewNumberBtn /> */}
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
                     </div>
                  );
               })
            ) : (
               <div
                  className="lg:col-span-4 md:col-span-3 4xs:col-span-2 3xs:col-span-2 col-span-1 
                  bg-[#ffffff] hover:bg-[#f0f2ff] rounded-[14px] border-2 border-gray-50 border-solid hover:border-gray-400/50 w-full p-4 hover:organisation-product-card-gradient shadow-organisation-product-card transition-all duration-100 ease-linear"
                  style={{
                     borderImageSlice: 1,
                  }}
               >
                  <div className=" text-gray-600 text-lg font-semibold text-center">
                     Products not found
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
