import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountiresForProfileUpdate = createAsyncThunk(
   "buyer/profile/countires",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("seller/countries");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const getProfileForEdit = createAsyncThunk(
   "buyer/profile/edit",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/user/me");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const updateBuyerProfile = createAsyncThunk<
   any,
   { formData: FormData; router: any },
   { rejectValue: any }
>("buyer/profile/update", async ({ formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/user/profile", formData);
      if (response.status === 200) {
         notify(response.data.message);
         setTimeout(() => {
            router.push("/buyer/profile");
         }, 701);
      }
      return response.data;
   } catch (error: any) {
      console.log(error.response.data.message);
      return rejectWithValue(error.response.data.message);
   }
});
export const getBuyerProfileSocialMediaLinks = createAsyncThunk(
   "buyer/profile/get-social-links",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/user/get-social-link");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const storeBuyerProfileSocialMediaLink = createAsyncThunk<
   any,
   { payload: any },
   { rejectValue: any }
>(
   "buyer/profile/store-social-link",
   async ({ payload }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.post("/user/store-social-link", payload);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(getBuyerProfileSocialMediaLinks());
         }
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const deleteBuyerProfileSocialMediaLink = createAsyncThunk<
   any,
   { id: number }
>(
   "buyer/profile/delete-social-link",
   async ({ id }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/user/social-link-delete/${id}`);
         if (response.status === 200) {
            notify(response.data.msg);
            dispatch(getBuyerProfileSocialMediaLinks());
         }
         return response.data.msg;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
