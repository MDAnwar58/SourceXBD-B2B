import { createSlice } from "@reduxjs/toolkit";
import {
   cleanError,
   getRecentMessage,
   getOrders,
   getRecentWishProducts,
   removeProductInWishList,
   getReviews,
   cancleOrder,
} from "./DashboardAction";

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

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type Sender = {
   created_at: string;
   email: string;
   email_verified_at: string | null;
   id: number;
   image: Array<Image[]>;
   name: string;
   phone: string;
   role: string;
   status: string;
   updated_at: string;
};

type RecentMessage = {
   created_at: string;
   formatted_date: string;
   from_id: number;
   id: number;
   is_pin: number;
   is_read: number;
   massage: string;
   reply_id: number | null;
   sender: Sender;
   to_id: number;
   updated_at: string;
};

type OrderProduct = {
   category: string;
   image: string;
   name: string;
};

type Seller = {
   image: string | null;
   name: string;
};
type User = {
   image: string | null;
   name: string;
};

type Order = {
   address: string;
   amount: string;
   company: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: OrderProduct;
   qty: number;
   seller: Seller;
   status: string;
   transaction_id: string;
   user: User;
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

interface DashboardState {
   recent_messages: Array<RecentMessage[]>;
   orders: Array<Order[]>;
   orderProductsCount: number;
   wish_products: WishProduct[];
   reviews: any;
   loading: boolean;
   error: object;
   message: string;
   totalLength: number;
   recentMessageTotalLength: number;
}

const initialState: DashboardState = {
   recent_messages: [],
   orders: [],
   orderProductsCount: 0,
   wish_products: [],
   reviews: [],
   loading: false,
   error: {},
   message: "",
   totalLength: 0,
   recentMessageTotalLength: 0,
};

export const dashboardSlice = createSlice({
   name: "buyer/dashboard",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get recent messages
         .addCase(getRecentMessage.pending, (state) => {
            state.loading = true;
         })
         .addCase(getRecentMessage.fulfilled, (state, action) => {
            state.recent_messages = action.payload.data as Array<
               RecentMessage[]
            >;
            state.recentMessageTotalLength = action.payload
               .totalLength as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getRecentMessage.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get orders
         .addCase(getOrders.pending, (state) => {
            state.loading = true;
         })
         .addCase(getOrders.fulfilled, (state, action) => {
            state.orders = action.payload.orders as Array<Order[]>;
            state.orderProductsCount = action.payload.productsCount as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getOrders.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // order cancle
         .addCase(cancleOrder.pending, (state) => {
            state.loading = true;
         })
         .addCase(cancleOrder.fulfilled, (state, action) => {
            state.message = action.payload as string;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(cancleOrder.rejected, (state, action) => {
            state.error = action.payload as object;
            state.loading = false; // Set loading to false on rejection
         })
         // get recent wish products
         .addCase(getRecentWishProducts.pending, (state) => {
            state.loading = true;
         })
         .addCase(getRecentWishProducts.fulfilled, (state, action) => {
            state.wish_products = action.payload as WishProduct[];
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getRecentWishProducts.rejected, (state, action) => {
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
         // remove wish product in wishlist
         .addCase(getReviews.pending, (state) => {
            state.loading = true;
         })
         .addCase(getReviews.fulfilled, (state, action) => {
            state.reviews = action.payload.reviews as any;
            state.totalLength = action.payload.totalLength as number;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(getReviews.rejected, (state, action) => {
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
export default dashboardSlice.reducer;
