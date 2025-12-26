import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecentMessageUserList = createAsyncThunk<
   any,
   { search: string }
>(
   "buyerMessage/get-recent-messages",
   async ({ search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/messages/users/last?limit=${20}&key=${search}`
         );
         return response.data.conversations;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getReceiverWithMessage = createAsyncThunk<
   any,
   { receiverId: number; limit: number }
>(
   "buyerMessage/get-receiver-info",
   async ({ receiverId, limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/user/messages/${receiverId}`, {
            params: {
               number: limit,
            },
         });
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const pinnedUserInUserList = createAsyncThunk<
   any,
   { receiverId: number; search: string }
>(
   "buyerMessage/pinned-user-in-user-list",
   async ({ receiverId, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(`/user/messages/pin/${receiverId}`);
         notify(response.data.massage);
         dispatch(getRecentMessageUserList({ search }));
         return response.data.massage;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeUserInPinnedUserList = createAsyncThunk<
   any,
   { receiverId: number; search: string }
>(
   "buyerMessage/remove-user-in-pinned-user-list",
   async ({ receiverId, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/user/messages/remove/pin/${receiverId}`
         );
         notify(response.data.massage);
         dispatch(getRecentMessageUserList({ search }));
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
   "buyerMessage/get-products",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/products?number=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
