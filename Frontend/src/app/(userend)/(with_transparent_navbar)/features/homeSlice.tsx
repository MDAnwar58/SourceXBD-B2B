import { createSlice } from "@reduxjs/toolkit";
import {
   getCategories,
   getMostPopularProducts,
   getTodayAddProducts,
   getRecentWeeklyProduct,
   getOneMostPopularProduct,
   getBestSaller,
   getTrandingProducts,
   getUpcomingProducts,
   getCities,
   getRecentBlogs,
   cleanError,
   storeProductInWishList,
   getTrandingProductsWithAuth,
   removeProductInWishList,
} from "./HomeAction";

type Category = {
   id: string;
   name: string;
   slug: string;
   images: string[];
   desc: any;
};

type Image = {
   image: string;
};

type Blog = {
   id: string;
   title: string;
   slug: string;
   sub_title: string;
   images: any;
};

type City = {
   id: string;
   name: string;
   slug: string;
   country_id: string;
   desc: any;
   images: any;
   map: any;
   status: string;
};

type Product = {
   id: string;
   name: string;
   slug: string;
   images: any;
};

type TrandingProduct = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   is_wish_active: boolean;
   seller_id: number;
};

type UpcomingProduct = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   seller_id: number;
};

interface HomeState {
   categories: Category[];
   most_popular_products: any;
   today_add_products: any;
   weekly_products: any;
   most_popular_product: Product | object;
   best_saller: any;
   cities: City[];
   recentBlogs: Blog[];
   tranding_products: TrandingProduct[];
   upcoming_products: UpcomingProduct[];
   loading: boolean;
   error: object;
   message: any;
}

const initialState: HomeState = {
   categories: [],
   most_popular_products: [],
   today_add_products: [],
   weekly_products: [],
   most_popular_product: {},
   best_saller: {},
   cities: [],
   recentBlogs: [],
   tranding_products: [],
   upcoming_products: [],
   loading: false,
   error: {},
   message: "",
};

export const homeSlice = createSlice({
   name: "userend/home",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getCategories.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.categories = action.payload as Category[];
         })
         .addCase(getCategories.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get most popular products
         .addCase(getMostPopularProducts.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getMostPopularProducts.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.most_popular_products = action.payload as any[];
         })
         .addCase(getMostPopularProducts.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get add today products
         .addCase(getTodayAddProducts.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getTodayAddProducts.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.today_add_products = action.payload as any[];
         })
         .addCase(getTodayAddProducts.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get weekly products
         .addCase(getRecentWeeklyProduct.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getRecentWeeklyProduct.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.weekly_products = action.payload as object;
         })
         .addCase(getRecentWeeklyProduct.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get one most popular products
         .addCase(getOneMostPopularProduct.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getOneMostPopularProduct.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.most_popular_product = action.payload as Product | object;
         })
         .addCase(getOneMostPopularProduct.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get best saller
         .addCase(getBestSaller.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getBestSaller.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.best_saller = action.payload as object;
         })
         .addCase(getBestSaller.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get tranding products
         .addCase(getTrandingProducts.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getTrandingProducts.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.tranding_products = action.payload as TrandingProduct[];
         })
         .addCase(getTrandingProducts.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get tranding products with auth
         .addCase(getTrandingProductsWithAuth.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getTrandingProductsWithAuth.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.tranding_products = action.payload as TrandingProduct[];
         })
         .addCase(getTrandingProductsWithAuth.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // store product in wish list
         .addCase(storeProductInWishList.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(storeProductInWishList.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.message = action.payload;
         })
         .addCase(storeProductInWishList.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // remove product in wish list
         .addCase(removeProductInWishList.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(removeProductInWishList.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.message = action.payload;
         })
         .addCase(removeProductInWishList.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get upcoming products
         .addCase(getUpcomingProducts.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getUpcomingProducts.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.upcoming_products = action.payload as UpcomingProduct[];
         })
         .addCase(getUpcomingProducts.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get cities
         .addCase(getCities.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getCities.fulfilled, (state, action) => {
            state.loading = false; // Set loading to false on fulfilled
            state.cities = action.payload as City[];
         })
         .addCase(getCities.rejected, (state, action) => {
            state.loading = false; // Set loading to false on rejection
            state.error = action.payload as object;
         })
         // get recent blogs
         .addCase(getRecentBlogs.pending, (state) => {
            state.loading = true; // Set loading to true on pending
         })
         .addCase(getRecentBlogs.fulfilled, (state, action) => {
            state.recentBlogs = action.payload as Blog[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getRecentBlogs.rejected, (state, action) => {
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
export default homeSlice.reducer;
