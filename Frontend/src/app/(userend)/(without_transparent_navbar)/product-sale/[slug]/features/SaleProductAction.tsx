import Axios from "@/app/utils/axios-client-without-token";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProduct = createAsyncThunk<
   any,
   {
      slug: string;
   }
>("userend/product", async ({ slug }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(`/singal-product/${slug}`);
      console.log(response.data);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data);
   }
});

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
