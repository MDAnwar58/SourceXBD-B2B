import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const update_company_profile = createAsyncThunk<
   any,
   {
      formData: FormData;
   }
>(
   "sallerSettings/updateCompanyProfile",
   async ({ formData }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/seller/profile/update", formData);
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
   "sallerSettings/change-password",
   async ({ formData, passwordFormRef }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/seller/password", formData);
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
   "sallerSettings/category-types/for-profile-update",
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
   "sallerSettings/countries",
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
   "sallerSettings/cities",
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
   "sallerSettings/company-profile",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/me");
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
   "sallerSettings/updateCompanyDocuments",
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
   "sallerSettings/get-profile-notifications",
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
   "sallerSettings/update-profile-notifications",
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
