import { createSlice } from "@reduxjs/toolkit";
import {
   create_blog,
   getBlogs,
   getBlog,
   update_blog,
   delete_blog,
} from "./BlogAction";

type Tag = {
   id: string;
   text: string;
};
type Blog = {
   id: string;
   title: string;
   sub_title: string;
   type: string;
   desc: string;
   tags: Tag[];
   status: string;
   image: string;
};

interface BlogState {
   blogs: Blog[];
   blog: Blog | {};
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: BlogState = {
   blogs: [],
   blog: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const blogSlice = createSlice({
   name: "blogType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // create category type
         .addCase(create_blog.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(create_blog.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(create_blog.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category
         .addCase(getBlogs.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getBlogs.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.blogs = action.payload as Blog[];
         })
         .addCase(getBlogs.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get category type for edit
         .addCase(getBlog.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getBlog.fulfilled, (state, action) => {
            state.blog = action.payload as Blog;
            state.loading = false;
         })
         .addCase(getBlog.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(update_blog.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(update_blog.fulfilled, (state, action) => {
            state.blog = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(update_blog.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete sub category
         .addCase(delete_blog.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(delete_blog.fulfilled, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(delete_blog.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default blogSlice.reducer;
