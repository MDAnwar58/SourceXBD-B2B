"use client";
import React, { Fragment, useEffect } from "react";
import ProductContext from "../features/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getCategories, getUpcomingProducts } from "../features/ProductAction";
import dynamic from "next/dynamic";
const ProductHeroSection = dynamic(() => import("./ProductHeroSection"), {
   ssr: false,
});
const AllTabs = dynamic(() => import("./AllTabs"), {
   ssr: false,
});
const ProductRemarkTap = dynamic(() => import("./ProductRemarkTap"), {
   ssr: false,
});
const ProductsGrid = dynamic(() => import("./ProductsGrid"), {
   ssr: false,
});
const UpComingProducts = dynamic(() => import("./UpComingProducts"), {
   ssr: false,
});

export default function ProductsContent() {
   const {
      getProducts,
      getProductsWithAuth,
      slug,
      filter,
      limit,
      getProductsWithCategory,
      getProductsWithFilter,
      onLoadMoreBtnHandle,
   } = ProductContext();
   const dispatch = useDispatch<AppDispatch>();

   const { auth } = useSelector((state: RootState) => state.userend.common);

   useEffect(() => {
      if (auth === true) {
         getProductsWithAuth(slug, filter);
      } else {
         getProducts(slug, filter);
      }
      dispatch(getCategories());
      dispatch(getUpcomingProducts());
   }, [auth, dispatch]);
   return (
      <Fragment>
         <ProductHeroSection />
         <div className="container">
            <AllTabs
               slug={slug}
               getProductsWithCategory={getProductsWithCategory}
            />
            <ProductRemarkTap
               filter={filter}
               slug={slug}
               getProductsWithFilter={getProductsWithFilter}
            />
            <ProductsGrid
               auth={auth}
               slug={slug}
               filter={filter}
               limit={limit}
               onLoadMoreBtnHandle={onLoadMoreBtnHandle}
            />
            <UpComingProducts />
         </div>
      </Fragment>
   );
}
