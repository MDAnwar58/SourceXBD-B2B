import { createSlice } from "@reduxjs/toolkit";
import {
   login,
   SignUp,
   setState,
   VerifyCode,
   register,
   forgetPassword,
   VerifyOTP,
   ResetPassword,
   cleanError,
} from "./action";
import { setCookie } from "@/components/react/cookie";

interface Authenticate {
   loading: boolean;
   error: object;
   email: string;
   message: string;
}
const initialState: Authenticate = {
   loading: false,
   error: {},
   email: "",
   message: "",
};

export const authSlice = createSlice({
   name: "authentication",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(login.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(login.fulfilled, (state, action) => {
            state.loading = true;
            // setCookie("auth", action.payload.token, 1);
            // action.payload.router.push("/");
         })
         .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         })
         .addCase(SignUp.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(SignUp.fulfilled, (state, action) => {
            state.loading = true;
            state.error = {} as object;
            state.email = action.payload.email;
            state.message = action.payload.message;
         })
         .addCase(SignUp.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         })
         .addCase(setState.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(setState.fulfilled, (state, action) => {
            state.loading = true;
            state.error = {} as object;
            state.email = action.payload.email;
            state.message = action.payload.message;
         })
         .addCase(setState.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         })
         .addCase(VerifyCode.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(VerifyCode.fulfilled, (state, action) => {
            state.loading = true;
            state.error = {} as object;
            // state.email = action.payload.email;
            // state.message = action.payload.message;
         })
         .addCase(VerifyCode.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         })
         .addCase(register.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(register.fulfilled, (state, action) => {
            state.loading = true;
            state.error = {} as object;
         })
         .addCase(register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         })
         .addCase(forgetPassword.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(forgetPassword.fulfilled, (state, action) => {
            state.error = {} as object;
            state.loading = false;
            state.message = action.payload as string;
         })
         .addCase(forgetPassword.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false;
         })
         .addCase(VerifyOTP.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(VerifyOTP.fulfilled, (state, action) => {
            state.error = {} as object;
            state.loading = false;
         })
         .addCase(VerifyOTP.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false;
         })
         .addCase(ResetPassword.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(ResetPassword.fulfilled, (state, action) => {
            state.error = {} as object;
            state.loading = false;
         })
         .addCase(ResetPassword.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false;
         })
         .addCase(cleanError.pending, (state, action) => {
            state.loading = false;
         })
         .addCase(cleanError.fulfilled, (state, action) => {
            state.loading = true;
            state.error = action.payload as object;
         })
         .addCase(cleanError.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         });
   },
});

export default authSlice.reducer;
