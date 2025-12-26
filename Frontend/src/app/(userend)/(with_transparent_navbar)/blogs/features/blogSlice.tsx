import { createSlice } from "@reduxjs/toolkit";
import { getThreeBlogs, get_blogs, cleanError } from "./BlogAction";

type ThreeBlog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   images: any;
};
type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   type: string;
   image: any;
   create_at: string;
};
type BlogData = {
   data: Blog[];
   totalBlogLength: number;
};

interface HomeState {
   three_blogs: ThreeBlog[];
   blog_data: BlogData[];
   loading: boolean;
   error: object;
}

const initialState: HomeState = {
   three_blogs: [],
   blog_data: [],
   loading: false,
   error: {},
};

export const blogSlice = createSlice({
   name: "userend/home",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get recent blogs
         .addCase(getThreeBlogs.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getThreeBlogs.fulfilled, (state, action) => {
            state.three_blogs = action.payload as ThreeBlog[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getThreeBlogs.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get blogs
         .addCase(get_blogs.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(get_blogs.fulfilled, (state, action) => {
            state.blog_data = action.payload as BlogData[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(get_blogs.rejected, (state, action) => {
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
export default blogSlice.reducer;
