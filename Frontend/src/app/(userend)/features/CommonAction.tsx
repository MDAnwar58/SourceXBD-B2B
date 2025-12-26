import Axios from "@/app/utils/axios-client-without-token";
import AxiosClient from "@/app/utils/axios-client";
import { removeCookie } from "@/components/react/cookie";
import { setLocalStorage } from "@/components/react/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";

type Category = {
   id: number | null;
   name: string;
   slug: string;
};

export const onSearchGetProducts = createAsyncThunk<
   any,
   {
      search: string;
      category: string;
      router: any;
      setSelectedCategory: React.Dispatch<React.SetStateAction<Category>>;
      setSearch: React.Dispatch<React.SetStateAction<string>>;
   }
>(
   "userend/common/saerch-and-category-with-products",
   async (
      { search, category, router, setSelectedCategory, setSearch },
      { rejectWithValue }
   ) => {
      try {
         const response = await Axios.get(
            `/search-products?search=${search}&slug=${category}`
         );
         if (response.status === 200) {
            setLocalStorage("search-key", search);
            setSearch("");
            if (category) {
               setSelectedCategory({
                  id: null,
                  name: "all",
                  slug: "",
               });
               setLocalStorage("category-slug-key", category);
            }
            router.push("/product-search");
         }
         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

export const getCategories = createAsyncThunk(
   "userend/search/get-categories",
   async (_, { rejectWithValue }) => {
      const response = await Axios.get("/categories");
      try {
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
      }
   }
);

export const logoutUser = createAsyncThunk<
   any,
   {
      router: any;
   }
>("userend/common/logout-user", async ({ router }, { rejectWithValue }) => {
   try {
      removeCookie("auth");
      router.push("/sign-in");
      return "user logged out";
   } catch (error: any) {
      return rejectWithValue(error);
   }
});

export const cleanError = createAsyncThunk<any, { error: object | string }>(
   "clean-error",
   async ({ error }, { rejectWithValue }) => {
      try {
         return error;
      } catch (error: any) {
         return rejectWithValue(error);
      }
   }
);
