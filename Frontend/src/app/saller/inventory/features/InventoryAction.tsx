import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_inventories = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "inventory/get-orders",
   async ({ page, perPage, search }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(
            `/seller/orders?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
