import Axios from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getWishProducts = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "userend/buyer/wish-list/recent-wish-products",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/wishlist?number=${limit}&key=${search}`
         );
         console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any; limit: number; search: string }
>(
   "buyer/wish-list/products/remove",
   async ({ productId, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/user/wishlist/${productId}`);
         dispatch(getWishProducts({ limit, search }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
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
