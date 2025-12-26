import { createSlice } from "@reduxjs/toolkit";
import { getBuyerProfile } from "./ViewSellerProfileAction";

type SupportState = {
   buyer: any | {};
   loading: boolean;
   error: any;
   message: string;
};

const initialState: SupportState = {
   buyer: {},
   loading: false,
   error: {},
   message: "",
};

export const viewBuyerProfileSlice = createSlice({
   name: "sellerBuyerProfile",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getBuyerProfile.pending, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(getBuyerProfile.fulfilled, (state, action) => {
            state.error = {};
            state.buyer = action.payload.user as any | {};
            state.loading = true;
         })
         .addCase(getBuyerProfile.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         });
   },
});

export default viewBuyerProfileSlice.reducer;
