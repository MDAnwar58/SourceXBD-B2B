import { createSlice } from "@reduxjs/toolkit";
import { getSellerProfile } from "./ViewSellerProfileAction";

type SupportState = {
   seller: any | {};
   orders: any[];
   loading: boolean;
   error: any;
   message: string;
};

const initialState: SupportState = {
   seller: {},
   orders: [],
   loading: false,
   error: {},
   message: "",
};

export const viewSellerProfileSlice = createSlice({
   name: "buyerSellerProfile",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getSellerProfile.pending, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(getSellerProfile.fulfilled, (state, action) => {
            state.error = {};
            state.seller = action.payload.user as any | {};
            state.orders = action.payload.orders as any[];
            state.loading = true;
         })
         .addCase(getSellerProfile.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         });
   },
});

export default viewSellerProfileSlice.reducer;
