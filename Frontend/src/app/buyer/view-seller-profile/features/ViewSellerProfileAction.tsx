import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSellerProfile = createAsyncThunk<any, { id: number }>(
   "buyerViewSellerProfile/getSellerProfile",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/user/messages/show/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
