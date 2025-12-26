import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getReceiverWithMessage = createAsyncThunk<
   any,
   { receiverId: number; limit: number }
>(
   "sallerMessage/get-receiver-info",
   async ({ receiverId, limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/seller/messages/${receiverId}`, {
            params: {
               limit: limit,
            },
         });
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getRecentMessageUserList = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "sellerMessage/get-recent-messages",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/seller/messages/users/last?limit=${limit}&key=${search}`
         );
         return response.data.conversations;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const pinnedUserInUserList = createAsyncThunk<
   any,
   { receiverId: number; limit: number; search: string }
>(
   "sellerMessage/pinned-user-in-user-list",
   async ({ receiverId, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/seller/messages/pin/${receiverId}`
         );
         notify(response.data.massage);
         dispatch(getRecentMessageUserList({ limit, search }));
         return response.data.massage;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeUserInPinnedUserList = createAsyncThunk<
   any,
   { receiverId: number; limit: number; search: string }
>(
   "sellerMessage/remove-user-in-pinned-user-list",
   async ({ receiverId, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/seller/messages/remove/pin/${receiverId}`
         );
         notify(response.data.massage);
         dispatch(getRecentMessageUserList({ limit, search }));
         return response.data.massage;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getProducts = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "sellerMessage/get-products",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/seller/get-products?number=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
