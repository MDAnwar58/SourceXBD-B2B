import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getProduct } from "./SaleProductAction";

type Vendor = { id: string; name: string; email: string };
type Tag = { id: string; text: string };
type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
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

type ProductData = {
   product: Product;
   related_products: RelatedProduct[];
};

type Category = {
   id: string;
   name: string;
   slug: string;
};

interface CommonState {
   product_data: ProductData | object;
   categories: Category[];
   loading: boolean;
   error: object;
}

const initialState: CommonState = {
   product_data: {},
   categories: [],
   loading: false,
   error: {},
};

export const saleProductSlice = createSlice({
   name: "userend/product-search",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getProduct.pending, (state) => {
            state.loading = true;
         })
         .addCase(getProduct.fulfilled, (state, action) => {
            state.product_data = action.payload as ProductData;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getProduct.rejected, (state, action) => {
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
export default saleProductSlice.reducer;
