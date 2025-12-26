"use client";
import { AppDispatch, RootState } from "@/app/store";
import React, { Fragment, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import LoadMoreBtn from "./LoadMoreBtn";
import {
   removeProductInWishList,
   storeProductInWishList,
} from "../features/ProductAction";
const Product = dynamic(() => import("./Product"), {
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
   auth: boolean;
   slug: string;
   filter: any;
   limit: number;
   onLoadMoreBtnHandle: (Limit: number) => void;
};

export default function ProductsGrid({
   auth,
   slug,
   filter,
   limit,
   onLoadMoreBtnHandle,
}: Props) {
   const dispatch = useDispatch<AppDispatch>();
   const onHandleAddToWishlist = useCallback(
      (productId: number) => {
         const payload = {
            product_id: productId,
         };
         dispatch(storeProductInWishList({ payload, slug, filter, limit }));
      },
      [dispatch, slug, filter, limit]
   );
   const onRemoveProductWithWishList = useCallback(
      (productId: number) => {
         dispatch(removeProductInWishList({ productId, slug, filter, limit }));
      },
      [dispatch, slug, filter, limit]
   );

   const { products = [], productsLength } = useSelector(
      (state: RootState) => state.userend.product
   );
   const MainProducts = products as Product[];
   // console.log(MainProducts?.length, productsLength);
   return (
      <>
         <div className=" grid xl:grid-cols-4 md:grid-cols-3 3xs:grid-cols-2 grid-cols-1 gap-7 lg:px-16 px-0 pt-12">
            {MainProducts && MainProducts.length > 0 ? (
               MainProducts.map((product: Product, index: number) => (
                  <Fragment key={index}>
                     <Product
                        product={product}
                        auth={auth}
                        onHandleAddToWishlist={onHandleAddToWishlist}
                        onRemoveProductWithWishList={
                           onRemoveProductWithWishList
                        }
                     />
                  </Fragment>
               ))
            ) : (
               <div
                  className="xl:col-span-4 md:col-span-3 3xs:col-span-2 col-span-1 bg-[#ffffff] text-gray-700 text-center rounded-[30px] w-full p-4"
                  style={{
                     boxShadow:
                        "-2px -2px 10px 0px rgba(94, 94, 94, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                  }}
               >
                  Data not found
               </div>
            )}
         </div>
         {/* {MainProducts?.length !== productsLength ? (
            <LoadMoreBtn
               onLoadMoreBtnHandle={onLoadMoreBtnHandle}
               limit={limit}
            />
         ) : null} */}
      </>
   );
}
