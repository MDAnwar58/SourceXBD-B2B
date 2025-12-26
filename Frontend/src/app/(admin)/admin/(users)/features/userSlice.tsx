import { createSlice } from "@reduxjs/toolkit";
import { getUser, getUsers, changeUserPassword } from "./UserAction";

type User = {
   company: string | null;
   created_at: string;
   email: string;
   id: number;
   image: any[];
   name: string;
   phone: string | null;
   role: string;
   status: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type UsersData = {
   data: User[];
   meta: Meta;
};

interface BlogState {
   users_data: UsersData | {};
   user: any | {};
   orders: any[];
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
   message: string;
}

const initialState: BlogState = {
   users_data: {},
   user: {},
   orders: [],
   loading: false,
   tableLoading: false,
   error: {},
   message: "",
};

export const userSlice = createSlice({
   name: "blogType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get users
         .addCase(getUsers.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.users_data = action.payload as UsersData;
         })
         .addCase(getUsers.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get user
         .addCase(getUser.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.user = action.payload.user as UsersData;
            state.orders = action.payload.orders as any[];
         })
         .addCase(getUser.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // change user password
         .addCase(changeUserPassword.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(changeUserPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
         })
         .addCase(changeUserPassword.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default userSlice.reducer;
