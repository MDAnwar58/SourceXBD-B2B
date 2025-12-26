import { createSlice } from "@reduxjs/toolkit";
import { getOrderInvoice } from "./PrintAction";

type PrintState = {
   auth: boolean;
   order: any | {};
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: PrintState = {
   auth: false,
   order: {},
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const printSlice = createSlice({
   name: "sellerPrint",
   initialState: initialState,
   reducers: {
      isAuth: (state, action) => {
         state.auth = action.payload as boolean;
      },
   },
   extraReducers: (builder) => {
      builder
         // get order

         // change order status
         .addCase(getOrderInvoice.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getOrderInvoice.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order = action.payload as any;
         })
         .addCase(getOrderInvoice.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export const { isAuth } = printSlice.actions;
export default printSlice.reducer;
