import { createSlice } from "@reduxjs/toolkit";
import {
   storeFaqs,
   getFaqs,
   getFaq,
   updateFaqs,
   deleteFaqs,
   getSupportRequests,
   getSupport,
   supportReply,
} from "./SupportAction";

type FAQs = {
   ans: string;
   created_at: string;
   id: number;
   qs: string;
   status: string;
};

type User = {
   id: number;
   name: string;
   email: string;
   phone: string;
   role: string;
   status: string;
};

type SupportRequest = {
   answer: string | null;
   created_at: string;
   date: string;
   id: number;
   status: string;
   subject: string;
   user: User;
   user_id: number;
};

type SupportRequestData = {
   data: SupportRequest[];
   current_page: number;
   from: number;
   last_page: number;
   links: any[];
   to: number;
};

type InitialStateProps = {
   faqs: FAQs[];
   faqLength: number;
   faq: FAQs | {};
   support_requests_data: SupportRequestData | {};
   support: SupportRequest | {};
   loading: boolean;
   error: any;
   message: string;
};

const initialState: InitialStateProps = {
   faqs: [],
   faqLength: 0,
   faq: {},
   support_requests_data: {},
   support: {},
   loading: false,
   error: null,
   message: "",
};

export const supportSlice = createSlice({
   name: "adminSupport",
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(storeFaqs.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(storeFaqs.fulfilled, (state, action) => {
            state.message = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(storeFaqs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(getFaqs.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getFaqs.fulfilled, (state, action) => {
            state.faqs = action.payload.faqs as FAQs[];
            state.faqLength = action.payload.faqLength as number;
            state.loading = false;
            state.error = null;
         })
         .addCase(getFaqs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get faq
         .addCase(getFaq.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getFaq.fulfilled, (state, action) => {
            state.faq = action.payload as FAQs | {};
            state.loading = false;
            state.error = null;
         })
         .addCase(getFaq.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // update faq
         .addCase(updateFaqs.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(updateFaqs.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.faq = {};
            state.message = action.payload as string;
         })
         .addCase(updateFaqs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // delete faq
         .addCase(deleteFaqs.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(deleteFaqs.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.faq = {};
            state.message = action.payload as string;
         })
         .addCase(deleteFaqs.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get support requests
         .addCase(getSupportRequests.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getSupportRequests.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.support_requests_data = action.payload as
               | SupportRequestData
               | {};
         })
         .addCase(getSupportRequests.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get support
         .addCase(getSupport.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(getSupport.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.support = action.payload as SupportRequest | {};
         })
         .addCase(getSupport.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // support reply store
         .addCase(supportReply.pending, (state, action) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(supportReply.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.message = action.payload as string;
         })
         .addCase(supportReply.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default supportSlice.reducer;
