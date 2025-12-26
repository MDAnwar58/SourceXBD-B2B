import { createSlice } from "@reduxjs/toolkit";
import {
   update_product,
   deleteProduct,
   get_categories,
   get_sub_categories,
   create_product,
   get_products,
   get_product,
   restore_product,
   force_delete_product,
   errorCleanUp,
} from "./ProductAcion";

type Category = {
   id: string;
   name: string;
};

type SubCategory = {
   id: string;
   name: string;
};

type Seller = {
   id: string;
   name: string;
};

type Product = {
   id: string;
   name: string;
   slug: string;
   category: Category;
   sub_category: SubCategory;
   price: string | number;
   status: string;
   seller: Seller;
};

interface ProductState {
   categories: Category[];
   sub_categories: SubCategory[];
   sellers: Seller[];
   products: Product[];
   product: object;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | object[] | null;
}

const initialState: ProductState = {
   categories: [],
   sub_categories: [],
   sellers: [],
   products: [],
   product: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const productSlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get category type
         .addCase(get_categories.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(get_categories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload as Category[];
         })
         .addCase(get_categories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get sub category
         .addCase(get_sub_categories.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(get_sub_categories.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.sub_categories = action.payload as SubCategory[];
         })
         .addCase(get_sub_categories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // create category type
         .addCase(create_product.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(create_product.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(create_product.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get products
         .addCase(get_products.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(get_products.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.product = {};
            state.products = action.payload as Product[];
         })
         .addCase(get_products.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get product for edit
         .addCase(get_product.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(get_product.fulfilled, (state, action) => {
            state.product = action.payload as object;
            state.loading = false;
         })
         .addCase(get_product.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(update_product.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(update_product.fulfilled, (state, action) => {
            state.product = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(update_product.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete product
         .addCase(deleteProduct.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteProduct.fulfilled, (state, action) => {
            state.product = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(deleteProduct.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // restore product
         .addCase(restore_product.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(restore_product.fulfilled, (state, action) => {
            state.product = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(restore_product.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // force delete product
         .addCase(force_delete_product.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(force_delete_product.fulfilled, (state, action) => {
            state.product = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(force_delete_product.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // clean up error
         .addCase(errorCleanUp.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(errorCleanUp.fulfilled, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(errorCleanUp.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default productSlice.reducer;
