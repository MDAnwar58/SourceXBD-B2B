"use client";
import { get_products, get_products_with_auth } from "./ProductAction";
import { AppDispatch } from "@/app/store";
import { getLocalStorage } from "@/components/react/storage";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function ProductContext() {
   const [limit, setLimit] = useState<number>(20);
   const [slug, setSlug] = React.useState<string>("all");
   const [filter, setFilter] = React.useState<string>("most_popular");

   const dispatch = useDispatch<AppDispatch>();

   const getProducts = useCallback(
      (slug: string, filter: string) => {
         dispatch(get_products({ slug, filter, limit }));
      },
      [dispatch, slug, filter]
   );
   const getProductsWithAuth = useCallback(
      (slug: string, filter: string) => {
         dispatch(get_products_with_auth({ slug, filter, limit }));
      },
      [dispatch, slug, filter]
   );

   const getProductsWithCategory = (slug: string) => {
      setSlug(slug);
      dispatch(get_products({ slug, filter, limit }));
   };

   const getProductsWithFilter = (filter: string) => {
      setFilter(filter);
      dispatch(get_products({ slug, filter, limit }));
   };

   const onLoadMoreBtnHandle = useCallback(
      (Limit: number) => {
         setLimit(Limit);
         dispatch(get_products({ slug, filter, limit: Limit }));
      },
      [dispatch, slug, filter]
   );

   return {
      getProducts,
      getProductsWithAuth,
      slug,
      setSlug,
      filter,
      setFilter,
      limit,
      getProductsWithCategory,
      getProductsWithFilter,
      onLoadMoreBtnHandle,
   };
}
