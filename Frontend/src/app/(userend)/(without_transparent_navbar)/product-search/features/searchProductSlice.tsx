import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { onSearchGetProducts } from "@/userend/features/CommonAction";
import {
   getCategories,
   getCities,
   getSearchProducts,
   getSearchProductsWithAuth,
} from "./SearchProductAction";

type Product = {
   id: string;
   name: string;
   slug: string;
   images: any;
   price: string;
   seller: string;
   status: string;
   stock: string;
   category: string;
   sub_category: string;
   video: string;
   is_wish_active: boolean;
   contact: string | null;
   seller_id: number;
};
type RelatedProduct = {
   id: string;
   name: string;
   slug: string;
   image: string;
   price: string;
   seller: string;
   status: string;
   stock: string;
   category: string;
   sub_category: string;
   video: string;
   desc: any;
   seller_id: number;
   is_wish_active: boolean;
};

type SearchResponse = {
   exact_products: Product[];
   regional_sellers: [];
   related_products: RelatedProduct[];
   suppliers: [];
   verified_sellers: [];
};

type Category = {
   id: string;
   name: string;
   slug: string;
};

type City = {
   id: string;
   name: string;
   slug: string;
};

interface CommonState {
   products: Product[];
   regional_sellers: any;
   related_products: RelatedProduct[];
   suppliers: any;
   verified_sellers: any;
   categories: Category[];
   cities: City[];
   loading: boolean;
   error: object;
}

const initialState: CommonState = {
   products: [],
   regional_sellers: [],
   related_products: [],
   suppliers: [],
   verified_sellers: [],
   categories: [],
   cities: [],
   loading: false,
   error: {},
};

export const searchProductSlice = createSlice({
   name: "userend/product-search",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get search products
         .addCase(onSearchGetProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(onSearchGetProducts.fulfilled, (state, action) => {
            state.products = action.payload.exact_products as Product[];
            state.regional_sellers = action.payload.regional_sellers as any;
            state.related_products = action.payload
               .related_products as RelatedProduct[];
            state.suppliers = action.payload.suppliers as any;
            state.verified_sellers = action.payload.verified_sellers as any;
            state.error = {} as object;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(onSearchGetProducts.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get filtered products
         .addCase(getSearchProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getSearchProducts.fulfilled, (state, action) => {
            state.products = action.payload.exact_products as Product[];
            state.regional_sellers = action.payload.regional_sellers as any;
            state.related_products = action.payload
               .related_products as RelatedProduct[];
            state.suppliers = action.payload.suppliers as any;
            state.verified_sellers = action.payload.verified_sellers as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getSearchProducts.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get filtered products
         .addCase(getSearchProductsWithAuth.pending, (state) => {
            state.loading = true;
         })
         .addCase(getSearchProductsWithAuth.fulfilled, (state, action) => {
            state.products = action.payload.exact_products as Product[];
            state.regional_sellers = action.payload.regional_sellers as any;
            state.related_products = action.payload
               .related_products as RelatedProduct[];
            state.suppliers = action.payload.suppliers as any;
            state.verified_sellers = action.payload.verified_sellers as any;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getSearchProductsWithAuth.rejected, (state, action) => {
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
         // get filtered products
         .addCase(getCities.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCities.fulfilled, (state, action) => {
            state.cities = action.payload as City[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getCities.rejected, (state, action) => {
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
export default searchProductSlice.reducer;
