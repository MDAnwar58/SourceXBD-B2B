import Axios from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrder = createAsyncThunk<any, { id: number }>(
   "userend/buyer/order-details",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/user/orders/${id}`);
         return response.data.order;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
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
