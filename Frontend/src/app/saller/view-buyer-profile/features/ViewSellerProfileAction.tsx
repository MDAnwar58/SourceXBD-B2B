import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBuyerProfile = createAsyncThunk<any, { id: number }>(
   "sellerViewBuyerProfile/BuyerProfile",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/seller/messages/show/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
