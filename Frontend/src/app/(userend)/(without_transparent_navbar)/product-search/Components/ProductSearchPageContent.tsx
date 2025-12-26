"use client";
import React, { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import SearchProductContext from "../features/SearchProductContext";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCities } from "../features/SearchProductAction";
const AllTabs = dynamic(() => import("./AllTabs"));
const ProductPageSideBar = dynamic(() => import("./ProductPageSideBar"));
const Products = dynamic(() => import("./Products"));
const RelatedProducts = dynamic(() => import("./SearchRelatedProducts"));

export default function ProductSearchPageContent() {
   const {
      getProducts,
      getProductsWithAuth,
      search,
      category,
      setSearch,
      setCategory,
      getProductsWithCategory,
      price,
      onHandlePrice,
      onFilterPrice,
      priceError,
      selectedCityId,
      setSelectedCityId,
      onHandleCheckboxChange,
      city,
   } = SearchProductContext();
   const dispatch = useDispatch<AppDispatch>();

   const { auth } = useSelector((state: RootState) => state.userend.common);

   useEffect(() => {
      if (auth === true) {
         getProductsWithAuth(search, category);
      } else {
         getProducts(search, category);
      }
      dispatch(getCategories());
      dispatch(getCities());
   }, [auth, dispatch, search, category]);

   return (
      <Fragment>
         <div className="container pt-14">
            <AllTabs />
            <div className="border-solid border-[#515151] border-t border-r-[0] border-b-[0] border-l-[0] h-0 w-full"></div>
            <div className="flex lg:flex-row flex-col gap-6 pt-7 -z-0">
               <ProductPageSideBar
                  setCategorySlug={setCategory}
                  categorySlug={category}
                  getProductsWithCategory={getProductsWithCategory}
                  onHandlePrice={onHandlePrice}
                  price={price}
                  onFilterPrice={onFilterPrice}
                  priceError={priceError}
                  selectedCityId={selectedCityId}
                  setSelectedCityId={setSelectedCityId}
                  onHandleCheckboxChange={onHandleCheckboxChange}
               />
               <Products
                  auth={auth}
                  search={search}
                  category={category}
                  price={price}
                  city={city}
               />
            </div>
         </div>
         <div className="container pt-20 pb-20 -z-0">
            <div
               className="rounded-[20px] relative pb-10 pt-7 xs:px-12 xs3:px-7 px-5"
               style={{
                  background:
                     "linear-gradient(93.31deg,rgba(221, 223, 246, 0.5) 0%,rgba(192, 198, 240, 0.5) 58.49999785423279%,rgba(208, 214, 255, 0.5) 100%)",
                  boxShadow:
                     "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
               }}
            >
               <div
                  className="text-left font-['Raleway-Bold',_sans-serif] xs3:text-[32px] text-[27px] font-bold xs:w-72"
                  style={{
                     background:
                        "linear-gradient(90deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                     backgroundClip: "text",
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  Related products
               </div>
               <div className="relared-product-slider 4xs:pt-5 pt-14 pb-7">
                  <RelatedProducts
                     auth={auth}
                     search={search}
                     category={category}
                     price={price}
                     city={city}
                  />
               </div>
            </div>
         </div>
      </Fragment>
   );
}
