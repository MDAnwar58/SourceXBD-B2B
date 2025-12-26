import { createSlice } from "@reduxjs/toolkit";

type User = {
   id: number;
   name: string;
   email: string;
   role: string;
};

type AdminCommonState = {
   auth: boolean;
   user: User | null;
   loading: boolean;
   error: any;
};

const initialState: AdminCommonState = {
   auth: false,
   user: null,
   loading: false,
   error: {},
};

const adminCommonSlice = createSlice({
   name: "adminCommon",
   initialState: initialState,
   reducers: {
      // is auth check user is login or not
      isAuth: (state, action) => {
         state.auth = action.payload as boolean;
      },
      setUser: (state, action) => {
         state.user = action.payload as null;
      },
   },
});

export const { isAuth, setUser } = adminCommonSlice.actions;
export default adminCommonSlice.reducer;
