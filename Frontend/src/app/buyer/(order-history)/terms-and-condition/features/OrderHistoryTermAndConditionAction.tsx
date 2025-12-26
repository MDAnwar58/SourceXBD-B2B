import Axios from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const add_terms_and_condition = createAsyncThunk<
   any,
   { formData: FormData }
>(
   "buyer/order-history/select-product",
   async ({ formData }, { rejectWithValue, dispatch }) => {
      try {
         console.log(formData);
         // const response = await Axios.delete(`/user/wishlist/${productId}`);
         // console.log(response.data);
         return "success";
      } catch (error: any) {
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
