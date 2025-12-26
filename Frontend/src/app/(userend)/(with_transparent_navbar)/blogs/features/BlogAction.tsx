import Axios from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getThreeBlogs = createAsyncThunk(
   "userend/blog/get-3-blogs",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/blog-3");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
      }
   }
);
export const get_blogs = createAsyncThunk<any, { limit: number }>(
   "userend/blog/blogs",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/blogs?number=${limit}`);
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(
            error.response.data || { message: error.message }
         );
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
