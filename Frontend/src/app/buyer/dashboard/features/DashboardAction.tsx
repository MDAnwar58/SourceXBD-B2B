import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecentMessage = createAsyncThunk<any, { limit: number }>(
   "userend/buyer/recent-message",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/dashboard/recent-massage?limit=${limit}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getOrders = createAsyncThunk<any, { limit: number }>(
   "userend/buyer/orders",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/dashboard/orders?limit=${limit}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const cancleOrder = createAsyncThunk<
   any,
   { orderId: number; limit: number }
>(
   "userend/buyer/order/cancle",
   async ({ orderId, limit }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(`/user/orders/cancle/${orderId}`);
         notify(response.data.msg);
         dispatch(getOrders({ limit }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getRecentWishProducts = createAsyncThunk(
   "userend/buyer/recent-wish-products",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/user/dashboard/recent-wish");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any }
>(
   "buyer/dashboard/products/remove/wish-list",
   async ({ productId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/user/wishlist/${productId}`);
         dispatch(getRecentWishProducts());
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getReviews = createAsyncThunk<any, { limit: number }>(
   "userend/buyer/reviews",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/dashboard/review-six?limit=${limit}`
         );
         // console.log(response.data.reviews);
         return response.data;
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
