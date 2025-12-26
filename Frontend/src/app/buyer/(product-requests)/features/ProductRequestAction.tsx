import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Payload = {
   user_id: string;
   category_id: string;
   desc: any;
};

export const addProductRequest = createAsyncThunk<
   any,
   { payload: Payload; router: any }
>(
   "buyer/product-request/add",
   async ({ payload, router }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/user/requirements", payload);
         notify(response.data.msg);
         setTimeout(() => {
            router.push("/buyer/product-requests");
         }, 700);
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error);
      }
   }
);
export const getCategories = createAsyncThunk(
   "userend/buyer/product-request/categories",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/categories");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const get_product_requests = createAsyncThunk<
   any,
   { page: number; limit: number; search: string }
>(
   "userend/buyer/get-product-requests",
   async ({ page, limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/user/requirements?page=${page}&number=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const delete_product_requests = createAsyncThunk<
   any,
   { id: number; page: number; limit: number; search: string }
>(
   "userend/buyer/delete-product-requests",
   async ({ id, page, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/user/requirements/${id}`);
         notify(response.data.msg);
         setTimeout(() => {
            dispatch(get_product_requests({ page, limit, search }));
         }, 300);
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
