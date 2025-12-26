import Axios from "@/app/utils/axios-client-without-token";
import { useHotNotify } from "@/components/react/react-hot-toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlog = createAsyncThunk<any, { slug: string }>(
   "userend/blog/blog",
   async ({ slug }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/blog/${slug}`);
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
      }
   }
);

export const storeComment = createAsyncThunk<any, { payload: object }>(
   "userend/blog/blog-comment",
   async ({ payload }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("blog/comment-store", payload);
         useHotNotify(response.data.msg, response.data.status, 1000);
         return response.data;
      } catch (error: any) {
         useHotNotify("Something went  wrong!", "fail", 1000);
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
