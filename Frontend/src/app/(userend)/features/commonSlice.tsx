import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "./CommonAction";

type CommonState = {
   auth: boolean;
   user: any;
   message: string;
   error: any;
};

const initialState: CommonState = {
   auth: false,
   user: {},
   message: "",
   error: {},
};

export const commonSlice = createSlice({
   name: "userCommon",
   initialState,
   reducers: {
      isAuth: (state, action) => {
         state.auth = action.payload;
      },
      setUser: (state, action) => {
         state.user = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         //logoutUser  penddign
         .addCase(logoutUser.pending, (state, action) => {
            state.auth = false;
            state.user = {};
         })
         .addCase(logoutUser.fulfilled, (state, action) => {
            state.auth = false;
            state.user = {};
            state.message = action.payload as string;
         })
         .addCase(logoutUser.rejected, (state, action) => {
            state.error = action.payload as any;
         });
   },
});

export const { isAuth, setUser } = commonSlice.actions;
export default commonSlice.reducer;
