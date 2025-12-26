"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import dynamic from "next/dynamic";
import { getLocalStorage } from "@/components/react/storage";
const SidebarRelatedCategories = dynamic(
   () => import("./SidebarRelatedCategories")
);
const FilterWithPrice = dynamic(() => import("./FilterWithPrice"));
const FilterSupplierCities = dynamic(() => import("./FilterSupplierCities"));

type Category = {
   id: string;
   name: string;
   slug: string;
};

type Price = {
   min: string;
   max: string;
};

type Props = {
   setCategorySlug?: any;
   categorySlug?: string;
   getProductsWithCategory: (categorySlug: string) => void;
   onHandlePrice: (min: string, max: string) => void;
   price?: Price;
   onFilterPrice: () => void;
   priceError: string;
   selectedCityId: string | null;
   setSelectedCityId: any;
   onHandleCheckboxChange: (cityId: string, cityName: string) => void;
};

export default function ProductPageSideBar({
   setCategorySlug,
   categorySlug,
   getProductsWithCategory,
   onHandlePrice,
   price,
   onFilterPrice,
   priceError,
   selectedCityId,
   setSelectedCityId,
   onHandleCheckboxChange,
}: Props) {
   // useEffect(() => {
   //    const categoryValue = getLocalStorage("category-slug-key");
   //    const CategorySlug = categorySlug ? categorySlug : String(categoryValue);
   //    console.log(CategorySlug);
   //    setCategorySlug(CategorySlug);
   // }, [categorySlug]);
   const { categories } = useSelector(
      (state: RootState) => state.userend.productSearch
   );
   const Categories: Category[] = categories;

   return (
      <div className=" lg:w-[22.5%] w-full">
         <SidebarRelatedCategories
            categories={Categories}
            categorySlug={categorySlug}
            getProductsWithCategory={getProductsWithCategory}
         />

         <div className="lg:block grid md:grid-cols-3 3xs:grid-cols-2 grid-cols-1 gap-5">
            {/* <FilterWithSupplier /> */}

            <FilterWithPrice
               onHandlePrice={onHandlePrice}
               price={price}
               onFilterPrice={onFilterPrice}
               priceError={priceError}
            />

            {/* <FilterMinOrder /> */}

            <FilterSupplierCities
               selectedCityId={selectedCityId}
               setSelectedCityId={setSelectedCityId}
               onHandleCheckboxChange={onHandleCheckboxChange}
            />
         </div>
      </div>
   );
}
