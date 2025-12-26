import Axios from "@/app/utils/axios-client-without-token";
import { setCookie } from "@/components/react/cookie";
import { useHotNotify } from "@/components/react/react-hot-toaster";
import {
   removeLocalStorage,
   setLocalStorage,
} from "@/components/react/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCountries = createAsyncThunk(
   "sallerAuth/countries",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/countries");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const getCities = createAsyncThunk(
   "sallerAuth/cities",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/cities");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const registerBecomeASupplier = createAsyncThunk<
   any,
   { payload: any; router: any }
>(
   "sallerAuth/register-become-a-supplier",
   async ({ payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/seller/register", payload);
         if (response.status === 201) {
            useHotNotify("Your request has been submitted!", "success", 1000);
            setLocalStorage("verify-msg", response.data.message);
            setLocalStorage("verify-email", response.data.email);
            setLocalStorage("verify-cache-key", response.data.cache_key);
            setTimeout(() => router.push("/verify/become-a-supplier"), 1500);
            return response.data.message;
         }
      } catch (error: any) {
         useHotNotify("Somethings went wrong!", "fail", 1000);
         console.log(error.response.data);
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const verifyBecomeASupplier = createAsyncThunk<
   any,
   { payload: any; router: any }
>(
   "sallerAuth/verify-become-a-supplier",
   async ({ payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(
            "/seller/register/verify-code",
            payload
         );
         if (response.status === 201) {
            useHotNotify(response.data.message, "success", 1000);
            setCookie("auth", response.data.token, 1);
            removeLocalStorage("verify-msg");
            removeLocalStorage("verify-email");
            removeLocalStorage("verify-cache-key");
            setTimeout(() => router.push("/saller/dashboard"), 1500);
            return response.data;
         }
      } catch (error: any) {
         useHotNotify("Somethings went wrong!", "fail", 1000);
         return rejectWithValue(error.response.data.errors);
      }
   }
);
