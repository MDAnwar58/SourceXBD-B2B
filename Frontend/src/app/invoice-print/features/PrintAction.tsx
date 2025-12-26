import Axios from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrderInvoice = createAsyncThunk<any, { id: number }>(
   "sellerPrint/get-order-for-invoice",
   async ({ id }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/orders/${id}`);
         console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
