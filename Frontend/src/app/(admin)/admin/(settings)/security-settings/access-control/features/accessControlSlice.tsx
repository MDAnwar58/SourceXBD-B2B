import { createSlice } from "@reduxjs/toolkit";
import {
   createAdmin,
   get_admins,
   getAdmin,
   updateAdmin,
   chnageAdminStatus,
} from "./AccessControlAction";

type SettingsState = {
   admin: any | {};
   admins_data: any | {};
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: SettingsState = {
   admin: {},
   admins_data: {},
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const accessControlSlice = createSlice({
   name: "accessControl",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(createAdmin.pending, (state, action) => {
            state.loading = true;
            state.error = {};
            state.submit = false;
         })
         .addCase(createAdmin.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
            state.submit = true;
         })
         .addCase(createAdmin.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.submit = false;
         })
         .addCase(get_admins.pending, (state, action) => {
            state.loading = true;
            state.error = {};
            state.admin = {};
         })
         .addCase(get_admins.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.admin = {};
            state.admins_data = action.payload as any | {};
         })
         .addCase(get_admins.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.admin = {};
         })
         .addCase(getAdmin.pending, (state, action) => {
            state.error = {};
            state.admin = {};
            state.loading = true;
         })
         .addCase(getAdmin.fulfilled, (state, action) => {
            state.error = {};
            state.admin = action.payload as any | {};
            state.loading = false;
         })
         .addCase(getAdmin.rejected, (state, action) => {
            state.error = action.payload;
            state.admin = {};
            state.loading = false;
         })
         .addCase(updateAdmin.pending, (state, action) => {
            state.error = {};
            state.loading = true;
         })
         .addCase(updateAdmin.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(updateAdmin.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         })
         .addCase(chnageAdminStatus.pending, (state, action) => {
            state.error = {};
            state.loading = true;
         })
         .addCase(chnageAdminStatus.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(chnageAdminStatus.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         });
   },
});

export default accessControlSlice.reducer;
