"use client";
import {
   getSearchProducts,
   getSearchProductsWithAuth,
} from "./SearchProductAction";
import { AppDispatch } from "@/app/store";
import { getLocalStorage } from "@/components/react/storage";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

type PriceProps = {
   min: string;
   max: string;
};

export default function SearchProductContext() {
   const [search, setSearch] = useState<string>(
      String(getLocalStorage("search-key"))
   );
   const [category, setCategory] = useState<string>(
      String(getLocalStorage("category-slug-key"))
   );
   const [price, setPrice] = useState<PriceProps>({
      min: "",
      max: "",
   });
   const [priceError, setPriceError] = useState<string>("");
   const [city, setCity] = useState<string>("");
   const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   const getProducts = useCallback(
      (search: string, category: string) => {
         dispatch(
            getSearchProducts({
               search,
               category,
               price,
               city,
            })
         );
      },
      [dispatch, search, category, price, city]
   );
   const getProductsWithAuth = useCallback(
      (search: string, category: string) => {
         dispatch(
            getSearchProductsWithAuth({
               search,
               category,
               price,
               city,
            })
         );
      },
      [dispatch, search, category, price, city]
   );

   const getProductsWithCategory = useCallback(
      (categorySlug: string) => {
         setCategory(categorySlug);
         dispatch(
            getSearchProducts({ search, category: categorySlug, price, city })
         );
      },
      [dispatch, search, city]
   );

   // on handle price use call back method
   const onHandlePrice = (min: string, max: string) => {
      setPrice({ min, max });
   };

   const onFilterPrice = useCallback(() => {
      if (/^\d*\.?\d*$/.test(price.min) && /^\d*\.?\d*$/.test(price.max)) {
         setPriceError("");
         dispatch(getSearchProducts({ search, category, price, city }));
      } else {
         setPriceError("Enter Only Number");
      }
   }, [dispatch, search, category, price, city]);

   // Handle checkbox change
   const onHandleCheckboxChange = useCallback(
      (cityId: string, cityName: string) => {
         if (selectedCityId === cityId) {
            setSelectedCityId(null);
            setCity("");
            dispatch(getSearchProducts({ search, category, price, city: "" }));
         } else {
            setSelectedCityId(cityId);
            setCity(cityName);
            dispatch(
               getSearchProducts({ search, category, price, city: cityName })
            );
         }
      },
      [selectedCityId, dispatch, search, category, price]
   );

   return {
      getProducts,
      getProductsWithAuth,
      search,
      category,
      price,
      city,
      setSearch,
      setCategory,
      setPrice,
      setCity,
      getProductsWithCategory,
      onHandlePrice,
      onFilterPrice,
      priceError,
      selectedCityId,
      setSelectedCityId,
      onHandleCheckboxChange,
   };
}
