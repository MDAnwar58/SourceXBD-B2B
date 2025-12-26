import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";

export const getDashboardDatas = createAsyncThunk(
   "adminDashboard/getDashboardDatas",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/dashboard/index");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getPendingCompnaies = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "adminDashboard/getPendingCompnaies",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/dashboard/companies?limit=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getPendingProducts = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "adminDashboard/getPendingProducts",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/dashboard/products?limit=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const approvePendingProduct = createAsyncThunk<
   any,
   { id: number; payload: any; limit: number; search: string }
>(
   "adminDashboard/approvePendingProduct",
   async ({ id, payload, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/admin/dashboard/product-approve/${id}`,
            payload
         );
         notify(response.data.msg);
         dispatch(getPendingProducts({ limit, search }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const declinePendingProduct = createAsyncThunk<
   any,
   { id: number; payload: any; limit: number; search: string }
>(
   "adminDashboard/approvePendingProduct",
   async ({ id, payload, limit, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            `/admin/dashboard/product-decline/${id}`,
            payload
         );
         notify(response.data.msg);
         dispatch(getPendingProducts({ limit, search }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getApproveCopmanies = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "adminDashboard/getApproveCompanies",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/companies?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const declineCopmany = createAsyncThunk<
   any,
   {
      id: number;
      limit: number;
      company_search: string;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminDashboard/declineCopmany",
   async (
      { id, limit, company_search, page, perPage, search },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/companies/decline/${id}`);
         notify(response.data.msg);
         dispatch(getPendingCompnaies({ limit, search: company_search }));
         dispatch(getApproveCopmanies({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const approveCopmany = createAsyncThunk<
   any,
   {
      id: number;
      limit: number;
      company_search: string;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminDashboard/approveCopmany",
   async (
      { id, limit, company_search, page, perPage, search },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/companies/approve/${id}`);
         notify(response.data.msg);
         dispatch(getPendingCompnaies({ limit, search: company_search }));
         dispatch(getApproveCopmanies({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const deleteCopmany = createAsyncThunk<
   any,
   {
      id: number;
      limit: number;
      company_search: string;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminDashboard/deleteCopmany",
   async (
      { id, limit, company_search, page, perPage, search },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await Axios.get(`/admin/companies/delete/${id}`);
         notify(response.data.msg);
         dispatch(getPendingCompnaies({ limit, search: company_search }));
         dispatch(getApproveCopmanies({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getMessages = createAsyncThunk<
   any,
   {
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminDashboard/getMessages",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/dashboard/messages?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getViewPlatformAnalytics = createAsyncThunk<
   any,
   { limit: number }
>(
   "adminDashboard/getViewPlatformAnalytics",
   async ({ limit }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/dashboard/sells?number=${limit}`
         );
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
