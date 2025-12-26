import Axios from "@/app/utils/axios-client-without-token";
import AxiosClient from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_products = createAsyncThunk<
   any,
   {
      slug: string;
      filter: string;
      limit: number;
   }
>(
   "userend/get-products-with-top-ranking-filtered",
   async ({ slug, filter, limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/products/${slug}/${filter}?limit=${limit}`
         );
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
      }
   }
);

export const get_products_with_auth = createAsyncThunk<
   any,
   {
      slug: string;
      filter: string;
      limit: number;
   }
>(
   "userend/get-products-with-top-ranking-filtered-with-auth",
   async ({ slug, filter, limit }, { rejectWithValue }) => {
      try {
         const response = await AxiosClient.get(
            `/products/${slug}/${filter}?limit=${limit}`
         );
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
      }
   }
);

export const storeProductInWishList = createAsyncThunk<
   any,
   { payload: any; slug: string; filter: any; limit: number }
>(
   "userend/top-ranking-product/store/wish-list",
   async ({ payload, slug, filter, limit }, { rejectWithValue, dispatch }) => {
      try {
         const response = await AxiosClient.post("/user/wishlist", payload);
         dispatch(get_products_with_auth({ slug, filter, limit }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any; slug: string; filter: any; limit: number }
>(
   "userend/product-top-ranking/remove/wish-list",
   async (
      { productId, slug, filter, limit },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await AxiosClient.delete(
            `/user/wishlist/${productId}`
         );
         dispatch(get_products_with_auth({ slug, filter, limit }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getCategories = createAsyncThunk(
   "userend/products/get-categories",
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

export const getUpcomingProducts = createAsyncThunk(
   "userend/products/get-upcoming-products",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/upcomming-products");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
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
