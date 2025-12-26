import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_reviews = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "admin/review/get-reviews",
   async ({ page, perPage, search }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(
            `/admin/reviews?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const delete_review = createAsyncThunk<
   any,
   { id: number; page: number; perPage: number; search: string }
>(
   "admin/review/delete-review",
   async (
      { id, page, perPage, search },
      { rejectWithValue, dispatch }
   ): Promise<any> => {
      try {
         const response = await Axios.get(`/admin/reviews/delete/${id}`);
         notify(response.data.msg);
         // setTimeout(() => {
         dispatch(get_reviews({ page, perPage, search }));
         // }, 500);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const get_review = createAsyncThunk<any, { id: number }>(
   "admin/review/get-review",
   async ({ id }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/admin/reviews/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const accept_review = createAsyncThunk<
   any,
   { id: number; page: number; perPage: number; search: string }
>(
   "admin/review/accept-review",
   async (
      { id, page, perPage, search },
      { rejectWithValue, dispatch }
   ): Promise<any> => {
      try {
         const response = await Axios.get(`/admin/reviews/active/${id}`);
         console.log(response.data);
         notify(response.data.msg);
         setTimeout(() => {
            dispatch(get_reviews({ page, perPage, search }));
         }, 500);
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const reply_added = createAsyncThunk<
   any,
   { reviewId: number; limit: number; payload: any; replyFormRef: any }
>(
   "admin/review/add-reply",
   async (
      { reviewId, limit, payload, replyFormRef },
      { rejectWithValue, dispatch }
   ): Promise<any> => {
      try {
         const response = await Axios.post(
            `/admin/reviews/reply/${reviewId}`,
            payload
         );
         notify(response.data.msg);
         replyFormRef?.current?.reset();
         dispatch(get_replies({ reviewId, limit }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const get_replies = createAsyncThunk<
   any,
   { reviewId: number; limit: number }
>(
   "admin/review/get-reply",
   async ({ reviewId, limit }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(
            `/admin/reviews/replies/${reviewId}`,
            {
               params: { number: limit },
            }
         );
         return response.data;
      } catch (error: any) {
         return error.response.data.message;
      }
   }
);
