import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const storeFaqs = createAsyncThunk<
   any,
   { formData: FormData; limit: number }
>(
   "adminSupport/storeFaqs",
   async ({ formData, limit }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/admin/faqs", formData);
         notify(response.data.success);
         dispatch(getFaqs({ limit }));
         return response.data.success;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getFaqs = createAsyncThunk<any, { limit: number }>(
   "adminSupport/getFaqs",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/faqs?number=${limit}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getFaq = createAsyncThunk<any, { id: number }>(
   "adminSupport/getFaq",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/faqs/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const updateFaqs = createAsyncThunk<
   any,
   { id: number; formData: FormData; limit: number }
>(
   "adminSupport/updateFaqs",
   async ({ id, formData, limit }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(`/admin/faqs/${id}`, formData);
         notify(response.data.success);
         dispatch(getFaqs({ limit }));
         return response.data.success;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const deleteFaqs = createAsyncThunk<any, { id: number; limit: number }>(
   "adminSupport/deleteFaqs",
   async ({ id, limit }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/faqs/${id}`);
         notify(response.data.success);
         dispatch(getFaqs({ limit }));
         return response.data.success;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getSupportRequests = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "adminSupport/getSupportRequests",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/supports?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getSupport = createAsyncThunk<any, { id: number }>(
   "adminSupport/getSupport",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/supports/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const supportReply = createAsyncThunk<
   any,
   { id: number; formData: FormData }
>(
   "adminSupport/supportReply",
   async ({ id, formData }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(`/admin/supports/${id}`, formData);
         console.log(response.data);
         notify(response.data.message);
         dispatch(getSupport({ id }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
