import { createSlice } from "@reduxjs/toolkit";
import {
   cleanError,
   addProductRequest,
   getCategories,
   get_product_requests,
   delete_product_requests,
} from "./ProductRequestAction";

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

interface ProductRequestState {
   categoires: any;
   product_request_datas: any;
   loading: boolean;
   error: object;
   message: string;
}

const initialState: ProductRequestState = {
   categoires: [],
   product_request_datas: [],
   loading: false,
   error: {},
   message: "",
};

export const productRequestSlice = createSlice({
   name: "buyer/product/request",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // add product selection product
         .addCase(addProductRequest.pending, (state) => {
            state.loading = true;
         })
         .addCase(addProductRequest.fulfilled, (state, action) => {
            state.message = action.payload as string;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(addProductRequest.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // remove wish product in wishlist
         .addCase(getCategories.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.categoires = action.payload as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getCategories.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get product request
         .addCase(get_product_requests.pending, (state) => {
            state.loading = true;
         })
         .addCase(get_product_requests.fulfilled, (state, action) => {
            state.product_request_datas = action.payload as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(get_product_requests.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // remove delete request product
         .addCase(delete_product_requests.pending, (state) => {
            state.loading = true;
         })
         .addCase(delete_product_requests.fulfilled, (state, action) => {
            state.message = action.payload as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(delete_product_requests.rejected, (state, action) => {
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
export default productRequestSlice.reducer;
