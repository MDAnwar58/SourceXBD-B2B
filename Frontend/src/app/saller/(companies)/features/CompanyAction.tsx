import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const update_company_profile = createAsyncThunk<
   any,
   {
      formData: FormData;
      router: any;
   }
>(
   "sallerCompany/updateCompanyProfile",
   async ({ formData, router }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/seller/profile/update", formData);
         if (response.status === 200) {
            notify(response.data.message);
            router.push("/saller/company-profile");
            // dispatch(getCompanyProfile());
         }
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const get_category_types = createAsyncThunk<any>(
   "sallerCompany/category-types/for-profile-update",
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
   "sallerCompany/countries",
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
   "sallerCompany/cities",
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
   "sallerCompany/company-profile",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/me");
         return response.data.user;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);

export const documents_update = createAsyncThunk<
   any,
   {
      formData: FormData;
   }
>(
   "sallerCompany/updateCompanyDocuments",
   async ({ formData }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post(
            "/seller/profile/documents",
            formData
         );
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(getCompanyProfile());
         }
         return response.data.msg;
      } catch (error: any) {
         console.log(error.response.data.errors);
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const removeIdCardImage = createAsyncThunk(
   "sallerCompany/removeIdCardImage",
   async (id: number, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/seller/profile/documents/${id}`);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(getCompanyProfile());
         }
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getTrustPoints = createAsyncThunk(
   "sallerCompany/getTrustPoints",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/trust-points");
         return response.data.trust_point;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
