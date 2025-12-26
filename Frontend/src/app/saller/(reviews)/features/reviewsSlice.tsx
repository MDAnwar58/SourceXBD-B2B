import { createSlice } from "@reduxjs/toolkit";
import {
   get_reviews,
   get_review,
   accept_review,
   reply_added,
   get_replies,
} from "./ReviewsAction";

type ReplyImage = {
   id: number;
   image: string;
   imageable_id: number;
};

type ReplyUser = {
   id: number;
   image: Array<ReplyImage[]>;
   name: string;
};

type Reply = {
   content: string;
   created_at: string;
   id: number;
   review_id: number;
   user: ReplyUser;
   name: string;
};

type Country = { id: number; nicename: string };

type Profile = {
   country: Country;
   country_id: number;
   id: number;
   state: string;
   user_id: number;
};

type Image = { id: number; imageable_id: number; image: string };

type User = { id: number; name: string; image: Image; profile: Profile };

type Star = {
   five: number;
   four: number;
   three: number;
   two: number;
   one: number;
};

type Media = {
   file_path: string;
   id: number;
   product_id: number;
};

type Product = {
   id: number;
   media: Array<Media[]>;
   name: string;
};

type Review = {
   id: number;
   desc: string;
   product: Product;
   rattings: number;
   status: string;
   title: string;
   user_id: number;
   created_at: string;
   user: User;
};

type ReviewData = {
   avgRating: string;
   review: Review;
   reviewCount: number;
   star: Star;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type ReviewsData = {
   current_page: number;
   data: Review[];
   first_page_url: string;
   from: number;
   last_page: number;
   last_page_url: string | null;
   links: Link[];
   next_page_url: string | null;
   path: string;
   per_page: number;
   prev_page_url: string | null;
   to: number;
   total: number;
};

type ReviewsState = {
   reviews: ReviewsData | any;
   review: ReviewData | any;
   totalLength: number;
   replies: Reply[];
   replyCount: number;
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: ReviewsState = {
   reviews: {},
   review: {},
   totalLength: 0,
   replies: [],
   replyCount: 0,
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const reviewsSlice = createSlice({
   name: "review",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get reviews
         .addCase(get_reviews.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_reviews.fulfilled, (state, action) => {
            state.loading = false;
            state.reviews = action.payload as ReviewsData;
            state.error = {};
         })
         .addCase(get_reviews.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get review
         .addCase(get_review.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_review.fulfilled, (state, action) => {
            state.loading = false;
            state.review = action.payload as ReviewData;
            state.error = {};
         })
         .addCase(get_review.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // accept review
         .addCase(accept_review.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(accept_review.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload as string;
            state.error = {};
         })
         .addCase(accept_review.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // reply add
         .addCase(reply_added.pending, (state, action) => {
            state.loading = true;
            // state.error = {};
         })
         .addCase(reply_added.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload as string;
            state.error = {};
         })
         .addCase(reply_added.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get replies
         .addCase(get_replies.pending, (state, action) => {
            state.loading = true;
            // state.error = {};
         })
         .addCase(get_replies.fulfilled, (state, action) => {
            state.loading = false;
            state.replies = action.payload.replies as Reply[];
            state.replyCount = action.payload.replyCount as number;
            state.error = {};
         })
         .addCase(get_replies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default reviewsSlice.reducer;
