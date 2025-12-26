import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const update_company_profile = createAsyncThunk<
   any,
   {
      formData: FormData;
   }
>(
   "adminSettings/updateCompanyProfile",
   async ({ formData }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/admin/profile", formData);
         if (response.status === 200) {
            notify(response.data.message);
            dispatch(getCompanyProfile());
         }
         return response.data.message;
      } catch (error: any) {
         console.log(error.response.data.errors);
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const change_password = createAsyncThunk<
   any,
   {
      formData: FormData;
      passwordFormRef: any;
   }
>(
   "adminSettings/change-password",
   async ({ formData, passwordFormRef }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/admin/password", formData);
         if (response.status === 200) {
            notify(response.data.message);
         }
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const get_category_types = createAsyncThunk<any>(
   "adminSettings/category-types/for-profile-update",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get("/seller/dashboard/type");
         return response.data.category_types;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const get_countries = createAsyncThunk(
   "adminSettings/countries",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/countries");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const get_cities = createAsyncThunk(
   "adminSettings/cities",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/cities");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);

export const getCompanyProfile = createAsyncThunk(
   "adminSettings/company-profile",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/me");
         return response.data.user;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const documents_update = createAsyncThunk<
   any,
   {
      formData: FormData;
   }
>(
   "adminSettings/updateCompanyDocuments",
   async ({ formData }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(
            "/seller/profile/documents",
            formData
         );
         if (response.status === 200) {
            notify(response.data.msg);
         }
         return response.data.msg;
      } catch (error: any) {
         console.log(error.response.data.errors);
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getProfileNotifications = createAsyncThunk(
   "adminSettings/get-profile-notifications",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/get-profile-notification");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const updateProfileNotifications = createAsyncThunk<
   any,
   { payload: any }
>(
   "adminSettings/update-profile-notifications",
   async ({ payload }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            "/seller/profile-notification",
            payload
         );
         notify(response.data.mag);
         dispatch(getProfileNotifications());
         return response.data.mag;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
