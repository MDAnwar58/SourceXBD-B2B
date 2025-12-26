import { createSlice } from "@reduxjs/toolkit";
import { getFAQs, supportStore } from "./SupportAction";

type SupportState = {
   faqs: any[];
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: SupportState = {
   faqs: [],
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const supportSlice = createSlice({
   name: "buyerSupport",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(supportStore.pending, (state, action) => {
            state.loading = true;
            state.error = {};
            state.submit = false;
         })
         .addCase(supportStore.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
            state.submit = true;
         })
         .addCase(supportStore.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.submit = false;
         })
         .addCase(getFAQs.pending, (state, action) => {
            state.error = {};
            state.submit = false;
         })
         .addCase(getFAQs.fulfilled, (state, action) => {
            state.error = {};
            state.faqs = action.payload as any[];
            state.submit = true;
         })
         .addCase(getFAQs.rejected, (state, action) => {
            state.error = action.payload;
            state.submit = false;
         });
   },
});

export default supportSlice.reducer;
