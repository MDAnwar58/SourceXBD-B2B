import { createSlice } from "@reduxjs/toolkit";
import { getBlog, storeComment, cleanError } from "./BlogDetailsAction";

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   type: string;
   images: any;
   desc: any;
   comments: any;
   tags: any;
};

interface BlogDetailsState {
   blog: any;
   loading: boolean;
   error: object;
}

const initialState: BlogDetailsState = {
   blog: {},
   loading: false,
   error: {},
};

export const blogDetailsSlice = createSlice({
   name: "userend/blog/details",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get blogs
         .addCase(getBlog.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getBlog.fulfilled, (state, action) => {
            state.blog = action.payload as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getBlog.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get blog comment
         .addCase(storeComment.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(storeComment.fulfilled, (state, action) => {
            state.blog = action.payload as any;
            state.error = {};
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(storeComment.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // clean error data
         .addCase(cleanError.pending, (state) => {
            state.loading = false;
         })
         .addCase(cleanError.fulfilled, (state, action) => {
            state.loading = true;
            state.error = action.payload as object;
         })
         .addCase(cleanError.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as object;
         });
   },
});

// Ensure you export the reducer correctly
export default blogDetailsSlice.reducer;
