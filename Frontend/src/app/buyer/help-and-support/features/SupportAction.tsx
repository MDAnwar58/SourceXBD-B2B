import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const supportStore = createAsyncThunk<
   any,
   {
      user_id: number;
      payload: any;
      form: any;
   }
>(
   "buyerSupport/store",
   async ({ user_id, payload, form }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/user/supports/${user_id}`,
            payload
         );
         if (response.status === 200) {
            notify(response.data.message);
            form.current.reset();
         }
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getFAQs = createAsyncThunk<any, { limit: number }>(
   "buyerSupport/get-faqs",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/supports/faqs?number=${limit}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
