import { createSlice } from "@reduxjs/toolkit";
import {
   cleanError,
   getWishProducts,
   removeProductInWishList,
} from "./WishListAction";

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
type RecentMessage = {
   id: string;
   massage: string;
   recipient: string;
   sender: string;
   created_at: string;
};

type OrderDetails = {
   address: string;
   amount: any;
   date: string;
};

type Order = {
   category: string;
   id: number;
   images: string[];
   name: string;
   order: OrderDetails;
   price: number;
   seller: string;
   slug: string;
   stock: number;
};

type WishProduct = {
   id: number;
   name: string;
   price: number;
   discount_price: number | null;
   min_order: number | null;
   s_desc: string;
   image: string;
   category: string;
   company: string;
   contact: string | null;
   is_wish_active: boolean;
   slug: string;
   spacification: any | null;
   time_ago: string;
};

interface WishListState {
   wish_products: WishProduct[];
   loading: boolean;
   error: object;
   message: string;
   totalLength: number;
}

const initialState: WishListState = {
   wish_products: [],
   loading: false,
   error: {},
   message: "",
   totalLength: 0,
};

export const wishListSlice = createSlice({
   name: "buyer/wish-list",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get recent wish products
         .addCase(getWishProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getWishProducts.fulfilled, (state, action) => {
            state.wish_products = action.payload.data as WishProduct[];
            state.totalLength = action.payload.totalLength as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getWishProducts.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // remove wish product in wishlist
         .addCase(removeProductInWishList.pending, (state) => {
            state.loading = true;
         })
         .addCase(removeProductInWishList.fulfilled, (state, action) => {
            state.message = action.payload as string;
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
export default wishListSlice.reducer;
