import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk<
   any,
   {
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/getOrders",
   async ({ page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(
            `/admin/orders?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getOrder = createAsyncThunk<
   any,
   {
      id: number;
   }
>("admin/getOrder", async ({ id }, { rejectWithValue, dispatch }) => {
   try {
      const response = await Axios.get(`/admin/orders/${id}`);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.message);
   }
});
