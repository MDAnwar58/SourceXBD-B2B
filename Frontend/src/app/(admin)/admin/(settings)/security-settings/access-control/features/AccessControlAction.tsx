import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createAdmin = createAsyncThunk<
   any,
   {
      formData: FormData;
      router: any;
   }
>(
   "adminSettingsAccessControl/createAdmin",
   async ({ formData, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/admin/admins", formData);
         if (response.status === 200) {
            notify(response.data.msg);
            router.push("/admin/security-settings/access-control");
         }
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const get_admins = createAsyncThunk<
   any,
   {
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminSettingsAccessControl/getAdmins",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/admins?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getAdmin = createAsyncThunk<
   any,
   {
      id: string;
   }
>(
   "adminSettingsAccessControl/getAdmin",
   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/admins/edit/${id}`);
         console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const updateAdmin = createAsyncThunk<
   any,
   {
      id: string;
      formData: FormData;
      router: any;
   }
>(
   "adminSettingsAccessControl/updateAdmin",
   async ({ id, formData, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(`/admin/admins/${id}`, formData);
         if (response.status === 200) {
            notify(response.data.msg);
            router.push("/admin/security-settings/access-control");
         }
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const chnageAdminStatus = createAsyncThunk<
   any,
   {
      id: string;
      page: number;
      perPage: number;
      search: string;
   }
>(
   "adminSettingsAccessControl/changeAdminStatus",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/admins/${id}`);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(get_admins({ page, perPage, search }));
            return response.data;
         }
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
