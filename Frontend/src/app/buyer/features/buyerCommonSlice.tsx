import { createSlice } from "@reduxjs/toolkit";
import { logoutSaller } from "./BuyerCommonAction";

type BuyerCommonState = {
   auth: boolean;
   user: any;
   loading: boolean;
   error: any;
};

const initialState: BuyerCommonState = {
   auth: false,
   user: null,
   loading: false,
   error: {},
};

export const buyerCommonSlice = createSlice({
   name: "buyerCommon",
   initialState: initialState,
   reducers: {
      // is auth check user is login or not
      isAuth: (state, action) => {
         state.auth = action.payload as boolean;
      },
      setUserInfo: (state, action) => {
         state.user = action.payload as any;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(logoutSaller.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(logoutSaller.fulfilled, (state, action) => {
            state.loading = false;
            state.auth = false;
         })
         .addCase(logoutSaller.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         });
   },
});

export const { isAuth, setUserInfo } = buyerCommonSlice.actions;
export default buyerCommonSlice.reducer;
