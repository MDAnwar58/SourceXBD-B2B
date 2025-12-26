import { createSlice } from "@reduxjs/toolkit";
import {
   cleanError,
   getOrganisation,
   getOrganisationWithAuth,
   removeProductInWishList,
   storeProductInWishList,
} from "./OrganisationAction";

type Vendor = { id: string; name: string; email: string };
type Tag = { id: string; text: string };

type Company = {
   address: string;
   city_id: number;
   contact: string;
   country_id: number;
   desc: any;
   documents: any;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: string;
   user_id: number;
};

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: Company;
   contact: string;
   stock: string;
   desc: any;
   images: any;
   is_wish_active: boolean;
   seller: string;
   status: string;
   sub_category: string;
   tags: Tag;
   vendor: Vendor;
   video: string;
   created_at: any;
   discount_price: number;
   min_order: number;
};

type RelatedProduct = {
   id: string;
   name: string;
   slug: string;
   category: string;
   company: string;
   price: string;
   image: string;
   contact: string;
   is_wish_active: boolean;
   time_ago: string;
};

type ProductData = {
   product: Product;
   related_products: RelatedProduct[];
};

type Category = {
   id: string;
   name: string;
   slug: string;
};

type Organisation = {
   company: string;
   email: string;
   email_verified_at: string;
   id: string;
   image: any;
   name: string;
   phone: string;
   products: Product[];
   totalLength: number;
   profile: string;
   role: string;
   status: string;
   location: string;
   yearOfJoining: string;
};

interface CommonState {
   organisation: Organisation | object;
   loading: boolean;
   error: object;
   message: string;
}

const initialState: CommonState = {
   organisation: {},
   loading: false,
   error: {},
   message: "",
};

export const organisationSlice = createSlice({
   name: "userend/organisation",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get organisation
         .addCase(getOrganisation.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOrganisation.fulfilled, (state, action) => {
            state.organisation = action.payload as ProductData;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getOrganisation.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get organisation with auth
         .addCase(getOrganisationWithAuth.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOrganisationWithAuth.fulfilled, (state, action) => {
            state.organisation = action.payload as ProductData;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getOrganisationWithAuth.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // store product in wishlist
         .addCase(storeProductInWishList.pending, (state) => {
            state.loading = true;
         })
         .addCase(storeProductInWishList.fulfilled, (state, action) => {
            state.message = action.payload;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(storeProductInWishList.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // remove product in wishlist
         .addCase(removeProductInWishList.pending, (state) => {
            state.loading = true;
         })
         .addCase(removeProductInWishList.fulfilled, (state, action) => {
            state.message = action.payload;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(removeProductInWishList.rejected, (state, action) => {
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
export default organisationSlice.reducer;
