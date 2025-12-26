import Axios from "@/app/utils/axios-client-without-token";
import AxiosClient from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
   "userend/home/get-categories",
   async (_, { rejectWithValue }) => {
      const response = await Axios.get("/categories");
      try {
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
         // return rejectWithValue(error?.response?.data || { message: error.message });
      }
   }
);
export const getMostPopularProducts = createAsyncThunk(
   "userend/home/get/most/popular/products",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/most-populer");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);
export const getTodayAddProducts = createAsyncThunk(
   "userend/home/get-today-add-products",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/product-today");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);
export const getRecentWeeklyProduct = createAsyncThunk(
   "userend/home/get-recent-weekly-product",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/product-week");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);
export const getOneMostPopularProduct = createAsyncThunk(
   "userend/home/get-most-popular-one-product",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/most-populer-one");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);
export const getBestSaller = createAsyncThunk(
   "userend/home/get-best-saller",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/top-seller");
         return response.data.seller;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);

export const getTrandingProducts = createAsyncThunk(
   "userend/home/get-tranding-products",
   async (_, { rejectWithValue }) => {
      const response = await Axios.get("/tranding-products");
      try {
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);

export const getTrandingProductsWithAuth = createAsyncThunk(
   "userend/home/get-tranding-products-with-auth",
   async (_, { rejectWithValue }) => {
      const response = await AxiosClient.get("/tranding-products");
      try {
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);

export const storeProductInWishList = createAsyncThunk<any, { payload: any }>(
   "userend/product/store/wish-list",
   async ({ payload }, { rejectWithValue, dispatch }) => {
      try {
         const response = await AxiosClient.post("/user/wishlist", payload);
         dispatch(getTrandingProductsWithAuth());
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any }
>(
   "userend/product/remove/wish-list",
   async ({ productId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await AxiosClient.delete(
            `/user/wishlist/${productId}`
         );
         dispatch(getTrandingProductsWithAuth());
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getUpcomingProducts = createAsyncThunk(
   "userend/home/get-upcoming-products",
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

export const getCities = createAsyncThunk(
   "userend/home/get-cities",
   async (_, { rejectWithValue }) => {
      const response = await Axios.get("/cities");
      try {
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error?.response?.data || { message: error.message }
         );
      }
   }
);

export const getRecentBlogs = createAsyncThunk(
   "userend/home/get-recent-blogs",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/blog-3");
         return response.data;
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
