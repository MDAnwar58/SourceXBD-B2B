import { createSlice } from "@reduxjs/toolkit";
import {
   deleteReport,
   getBuyerComplaint,
   getBuyerComplaints,
} from "./BuyerComplaintAction";

type InitialStateProps = {
   buyerComplaints: any | {};
   buyerComplaint: any | {};
   error: any | {};
   message: string;
   loading: boolean;
};

const initialState: InitialStateProps = {
   buyerComplaints: [],
   buyerComplaint: {},
   error: {},
   message: "",
   loading: false,
};

export const buyerComplaintSlice = createSlice({
   name: "adminComplaint",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getBuyerComplaints.pending, (state, action) => {
            state.error = {};
            state.loading = true;
         })
         .addCase(getBuyerComplaints.fulfilled, (state, action) => {
            state.error = {};
            state.buyerComplaints = action.payload as any | {};
            state.loading = false;
         })
         .addCase(getBuyerComplaints.rejected, (state, action) => {
            state.buyerComplaints = [] as any | {};
            state.error = action.error.message;
            state.loading = false;
         })
         .addCase(getBuyerComplaint.pending, (state, action) => {
            state.error = {};
            state.loading = true;
         })
         .addCase(getBuyerComplaint.fulfilled, (state, action) => {
            state.error = {};
            state.buyerComplaint = action.payload as any | {};
            state.loading = false;
         })
         .addCase(getBuyerComplaint.rejected, (state, action) => {
            state.buyerComplaint = {} as any | {};
            state.error = action.payload as any;
            state.loading = false;
         })
         .addCase(deleteReport.pending, (state, action) => {
            state.message = "";
            state.error = {};
            state.loading = true;
         })
         .addCase(deleteReport.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(deleteReport.rejected, (state, action) => {
            state.message = "";
            state.error = action.payload;
            state.loading = false;
         });
   },
});

export default buyerComplaintSlice.reducer;
