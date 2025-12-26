"use client";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import dynamic from "next/dynamic";

import {
   removeProductInWishList,
   storeProductInWishList,
} from "@/userend/without_transparent_navbar/products-search/features/SearchProductAction";
const Product = dynamic(() => import("@/components/Product"));

type Props = {
   auth: boolean;
   search: any;
   category: any;
   price: any;
   city: any;
};

export default function Products({
   auth,
   search,
   category,
   price,
   city,
}: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const onHandleAddToWishlist = useCallback(
      (productId: number) => {
         const payload = {
            product_id: productId,
         };
         dispatch(
            storeProductInWishList({ payload, search, category, price, city })
         );
      },
      [dispatch, search, category, price, city]
   );
   const onRemoveProductWithWishList = useCallback(
      (productId: number) => {
         dispatch(
            removeProductInWishList({
               productId,
               search,
               category,
               price,
               city,
            })
         );
      },
      [dispatch, search, category, price, city]
   );

   const { products } = useSelector(
      (state: RootState) => state.userend.productSearch
   );

   return (
      <div className="lg:w-[76.5%] w-full">
         <div className="grid md:grid-cols-3 xs3:grid-cols-2 grid-cols-1 gap-7 sm:bg-[#ffffff] rounded-[20px] sm:p-10 sm:shadow-product-card">
            {products.length > 0 ? (
               products.map((product: any, index: number) => (
                  <div key={index}>
                     <Product
                        product={product}
                        auth={auth}
                        onHandleAddToWishlist={onHandleAddToWishlist}
                        onRemoveProductWithWishList={
                           onRemoveProductWithWishList
                        }
                     />
                  </div>
               ))
            ) : (
               <div className="md:col-span-3 3xs:col-span-2 col-span-1 text-center text-xl font-semibold text-gray-500">
                  Products not found
               </div>
            )}
         </div>
      </div>
   );
}
