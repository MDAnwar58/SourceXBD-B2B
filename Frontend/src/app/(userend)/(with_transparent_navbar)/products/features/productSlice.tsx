import { createSlice } from "@reduxjs/toolkit";
import {
   getCategories,
   get_products,
   getUpcomingProducts,
   get_products_with_auth,
   storeProductInWishList,
   removeProductInWishList,
} from "./ProductAction";

type Product = {
   id: string;
   name: string;
   slug: string;
   image: any;
   price: string;
   time_ago: string;
   category: string;
   company: string;
   contact: string;
   is_wish_active: boolean;
};

type Category = {
   id: string;
   name: string;
   slug: string;
};

interface CommonState {
   products: Product[];
   productsLength: number;
   categories: Category[];
   upcoming_products: Product[];
   loading: boolean;
   error: object;
   message: string;
}

const initialState: CommonState = {
   products: [],
   productsLength: 0,
   categories: [],
   upcoming_products: [],
   loading: false,
   error: {},
   message: "",
};

export const productSlice = createSlice({
   name: "userend/product-search",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get filtered products
         .addCase(get_products.pending, (state) => {
            state.loading = true;
         })
         .addCase(get_products.fulfilled, (state, action) => {
            state.products = action.payload.data as Product[];
            state.productsLength = action.payload.productsLength as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(get_products.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get filtered products with auth
         .addCase(get_products_with_auth.pending, (state) => {
            state.loading = true;
         })
         .addCase(get_products_with_auth.fulfilled, (state, action) => {
            state.products = action.payload.data as Product[];
            state.productsLength = action.payload.productsLength as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(get_products_with_auth.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // store product in wish list
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
         // remove product in wish list
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
         // get filtered products
         .addCase(getCategories.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.categories = action.payload as Category[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getCategories.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get upcoming products
         .addCase(getUpcomingProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getUpcomingProducts.fulfilled, (state, action) => {
            state.upcoming_products = action.payload as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getUpcomingProducts.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         });
      // clean error data
      // .addCase(cleanError.pending, (state) => {
      //    state.loading = false;
      // })
      // .addCase(cleanError.fulfilled, (state, action) => {
      //    state.loading = true;
      //    state.error = action.payload as object;
      // })
      // .addCase(cleanError.rejected, (state, action) => {
      //    state.loading = false;
      //    state.error = action.payload as object;
      // });
   },
});

// Ensure you export the reducer correctly
export default productSlice.reducer;
