import { createSlice } from "@reduxjs/toolkit";
import {
   getCountiresForProfileUpdate,
   getProfileForEdit,
   updateBuyerProfile,
   storeBuyerProfileSocialMediaLink,
   getBuyerProfileSocialMediaLinks,
   deleteBuyerProfileSocialMediaLink,
} from "./ProfileAction";

type ProfileState = {
   countires: any;
   profile: any;
   orders: any[];
   social_media_links: any[];
   loading: boolean;
   error: any;
   message: string;
};

const initialState: ProfileState = {
   countires: [],
   profile: {},
   orders: [],
   social_media_links: [],
   loading: false,
   error: {},
   message: "",
};

export const profileSlice = createSlice({
   name: "buyerProfile",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get countries for profile update
         .addCase(getCountiresForProfileUpdate.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCountiresForProfileUpdate.fulfilled, (state, action) => {
            state.countires = action.payload as any;
            state.loading = false;
         })
         .addCase(getCountiresForProfileUpdate.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         })
         // get profile
         .addCase(getProfileForEdit.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getProfileForEdit.fulfilled, (state, action) => {
            state.profile = action.payload.user as any;
            state.orders = action.payload.orders as any[];
            state.loading = false;
         })
         .addCase(getProfileForEdit.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         })
         // update profile
         .addCase(updateBuyerProfile.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(updateBuyerProfile.fulfilled, (state, action) => {
            state.profile = {} as any;
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(updateBuyerProfile.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         })
         // store social media link
         .addCase(storeBuyerProfileSocialMediaLink.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(
            storeBuyerProfileSocialMediaLink.fulfilled,
            (state, action) => {
               state.message = action.payload as string;
               state.loading = false;
            }
         )
         .addCase(
            storeBuyerProfileSocialMediaLink.rejected,
            (state, action) => {
               state.error = action.payload as any;
               state.loading = false;
            }
         )
         // get social media links
         .addCase(getBuyerProfileSocialMediaLinks.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(
            getBuyerProfileSocialMediaLinks.fulfilled,
            (state, action) => {
               state.social_media_links = action.payload as any[];
               state.loading = false;
            }
         )
         .addCase(getBuyerProfileSocialMediaLinks.rejected, (state, action) => {
            state.error = action.payload as any;
            state.loading = false;
         })
         // delete social media link
         .addCase(
            deleteBuyerProfileSocialMediaLink.pending,
            (state, action) => {
               state.error = {} as any;
               state.loading = true;
            }
         )
         .addCase(
            deleteBuyerProfileSocialMediaLink.fulfilled,
            (state, action) => {
               state.error = {} as any;
               state.message = action.payload as string;
               state.loading = false;
            }
         )
         .addCase(
            deleteBuyerProfileSocialMediaLink.rejected,
            (state, action) => {
               state.error = action.payload as any;
               state.loading = false;
            }
         );
   },
});

export default profileSlice.reducer;
