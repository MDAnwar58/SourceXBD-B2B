import Axios from "@/app/utils/axios-client-without-token";
import AxiosClient from "@/app/utils/axios-client";
import { removeLocalStorage } from "@/components/react/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchProducts = createAsyncThunk<
   any,
   {
      search: string;
      category: string;
      price: {
         min: string;
         max: string;
      };
      city: string;
   }
>(
   "userend/products-filtered",
   async ({ search, category, price, city }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/search-products?search=${search}&slug=${category}&min_price=${price.min}&max_price=${price.max}&city=${city}`
         );
         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);
export const getSearchProductsWithAuth = createAsyncThunk<
   any,
   {
      search: string;
      category: string;
      price: {
         min: string;
         max: string;
      };
      city: string;
   }
>(
   "userend/products-filtered-with-auth",
   async ({ search, category, price, city }, { rejectWithValue }) => {
      try {
         const response = await AxiosClient.get(
            `/search-products?search=${search}&slug=${category}&min_price=${price.min}&max_price=${price.max}&city=${city}`
         );
         // console.log(response.data);
         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);
export const storeProductInWishList = createAsyncThunk<
   any,
   { payload: any; search: any; category: any; price: any; city: any }
>(
   "userend/products-filtered/store/wish-list",
   async (
      { payload, search, category, price, city },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await AxiosClient.post("/user/wishlist", payload);
         dispatch(getSearchProductsWithAuth({ search, category, price, city }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any; search: any; category: any; price: any; city: any }
>(
   "userend/products-filtered/remove/wish-list",
   async (
      { productId, search, category, price, city },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await AxiosClient.delete(
            `/user/wishlist/${productId}`
         );
         dispatch(getSearchProductsWithAuth({ search, category, price, city }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getCategories = createAsyncThunk(
   "userend/saerch-products/get-categories",
   async (_, { rejectWithValue }) => {
      const response = await Axios.get("/categories");
      try {
         return response.data.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);
export const getCities = createAsyncThunk(
   "userend/saerch-products/get-cities",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/cities");
         return response.data;
      } catch (error) {
         return rejectWithValue(error);
      }
   }
);

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
