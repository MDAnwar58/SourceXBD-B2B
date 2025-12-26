import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBuyerComplaints = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string },
   { rejectValue: any }
>(
   "admin/getBuyerComplaints",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/reports?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getBuyerComplaint = createAsyncThunk<
   any,
   { id: number },
   { rejectValue: any }
>("admin/getBuyerComplaint", async ({ id }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(`/admin/reports/${id}`);
      return response.data.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.message);
   }
});

export const deleteReport = createAsyncThunk<
   any,
   {
      id: number;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/deleteReport",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/reports/${id}`);
         notify(response.data.msg);
         dispatch(getBuyerComplaints({ page, perPage, search }));
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
