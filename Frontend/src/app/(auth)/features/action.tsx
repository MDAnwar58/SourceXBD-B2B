import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import {
   removeCookie,
   setCookie,
   setCookieForShortTerm,
} from "@/components/react/cookie";
import {
   removeLocalStorage,
   setLocalStorage,
} from "@/components/react/storage";
import { createAsyncThunk } from "@reduxjs/toolkit";

type User = {
   f_name: string;
   l_name: string;
   email: string;
};

type VerifyCodePayload = {
   confirmation_code: number;
   cache_key: string;
};

type Register = {
   password: string;
   password_confirmation: string;
   cache_key: string;
};

type ForgetPassword = {
   email: string;
};

type VerifyOTPPayload = {
   otp: number;
   email: any;
};

type ResetPasswordPayload = {
   email: string;
   token: string;
   password: string;
   password_confirmation: string;
};

export const login = createAsyncThunk(
   "login",
   async (next: any, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/auth/login", next.payload);
         // console.log(response.data);
         // const token = response.data.access_token;
         // const data = {
         //    token: token,
         //    router: next.router,
         // };
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const SignUp = createAsyncThunk<any, { payload: User; router: any }>(
   "signup",
   async ({ payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/auth/register-step-one", payload);
         // console.log(response.data);
         const userData = {
            email: response.data.email,
            message: response.data.msg,
            cache_key: response.data.cache_key,
         };
         const data = new URLSearchParams(userData).toString();
         setLocalStorage("register-user-data", data);
         router.push("/verify-code");
         return {
            message: response.data.msg,
            email: response.data.email,
         };
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const setState = createAsyncThunk<
   any,
   { message: string; email: string }
>("set-state", async ({ message, email }, { rejectWithValue }) => {
   try {
      return {
         message: message,
         email: email,
      };
   } catch (error: any) {
      return rejectWithValue(error);
   }
});

export const VerifyCode = createAsyncThunk<
   any,
   { payload: VerifyCodePayload; router: any }
>("verify-code", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post(
         "/auth/verify-confirmation-code",
         payload
      );
      if (response.status === 200) {
         notify(response.data.message);
         router.push("/chooch-password");
      }
      return response.data;
   } catch (error: any) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data.errors);
   }
});

export const register = createAsyncThunk<
   any,
   { payload: Register; router: any }
>("register", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/auth/register-step-three", payload);
      if (response.status === 200) {
         notify(response.data.message);
         removeLocalStorage("register-user-data");
         setCookie("auth", response.data.token, 7);
         router.push("/");
      }
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data);
   }
});

export const forgetPassword = createAsyncThunk<
   any,
   { payload: ForgetPassword; router: any }
>("forget/password", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/auth/password/request-otp", payload);
      if (response.status === 200) {
         router.push(`/verify-otp?email=${payload.email}`);
      }
      return response.data.message;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const VerifyOTP = createAsyncThunk<
   any,
   { payload: VerifyOTPPayload; router: any }
>("verify-otp", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/auth/password/verify-otp", payload);
      if (response.status === 200) {
         notify(response.data.message);
         setCookieForShortTerm("reset-password", response.data.token, 30);
         setTimeout(() => {
            router.push(`/reset-password?email=${payload.email}`);
         }, 1000);
      }
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const ResetPassword = createAsyncThunk<
   any,
   { payload: ResetPasswordPayload; router: any }
>("reset-password", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/auth/password/reset", payload);
      if (response.status === 200) {
         notify(response.data.message);
         removeCookie("reset-password");
         setTimeout(() => {
            router.push(`/sign-in`);
         }, 1000);
      }
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const cleanError = createAsyncThunk<any, { error: object | string }>(
   "clean-error",
   async ({ error }, { rejectWithValue }) => {
      try {
         return error;
      } catch (error: any) {
         return rejectWithValue(error);
      }
   }
);
