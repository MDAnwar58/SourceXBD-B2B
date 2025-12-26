import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk<
   any,
   {
      page: number;
      perPage: number;
      search: string;
   }
>(
   "admin/getUsers",
   async ({ page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(
            `/admin/users?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getUser = createAsyncThunk<
   any,
   {
      id: number;
   }
>("admin/getUser", async ({ id }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(`/admin/users/${id}`);
      // console.log(response.data);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.message);
   }
});
export const changeUserPassword = createAsyncThunk<
   any,
   {
      id: number;
      payload: any;
      router: any;
   }
>(
   "admin/changeUserPassword",
   async ({ id, payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(
            `/admin/users/change-password/${id}`,
            payload
         );
         notify(response.data.message);
         setTimeout(() => {
            router.push(`/admin/user/${id}`);
         }, 701);
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
