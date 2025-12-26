import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCompanies = createAsyncThunk<
   any,
   {
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/getCompanies",
   async ({ page, perPage, search }, { rejectWithValue, dispatch }) => {
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
export const getCompany = createAsyncThunk<
   any,
   {
      id: number;
   }
>("admin/getCompanyShow", async ({ id }, { rejectWithValue, dispatch }) => {
   try {
      const response = await Axios.get(`/admin/companies/show/${id}`);
      // console.log(response.data);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.message);
   }
});
export const approveCompany = createAsyncThunk<
   any,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/approveCompany",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/companies/approve/${id}`);
         notify(response.data.msg);
         dispatch(getCompanies({ page, perPage, search }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const declineCompany = createAsyncThunk<
   any,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/declineCompany",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/companies/decline/${id}`);
         notify(response.data.msg);
         dispatch(getCompanies({ page, perPage, search }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
