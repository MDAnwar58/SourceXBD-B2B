import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type SubscriptionPlan = {
   name: string;
   title: string;
   package: string;
   type: string;
   duration: string;
   product_limit: number | any;
   amount: number | any;
   is_free: boolean;
   requirements: any;
};

// get category types list function name is getCategoryTypes
export const getSubscriptionPlans = createAsyncThunk<
   SubscriptionPlan[],
   { page: number; perPage: number; search: string }
>(
   "seller/subscription-plans/get",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/seller/subscriptions`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getActiveSubscriptionPlan = createAsyncThunk<any, { id: number }>(
   "seller/active-subscription-plan/get",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/seller/subscription-history-show/${id}`
         );
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getSubscriptionPlansHistory = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "seller/subscription-plans/subscription-history/get",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/seller/subscription-history?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
