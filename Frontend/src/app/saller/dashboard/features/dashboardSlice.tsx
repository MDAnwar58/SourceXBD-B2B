import { createSlice } from "@reduxjs/toolkit";
import {
   getDashboardDatas,
   getTopSellingProducts,
   getRecentOrders,
   getRecentMessages,
} from "./DashboardAction";

type TopSellingProduct = {
   category: string;
   company: string;
   contact: string | null;
   discount_price: number | null;
   id: number;
   image: string;
   is_wish_active: boolean;
   min_order: string | null;
   name: string;
   price: number;
   s_desc: string | null;
   seller: string;
   seller_id: number;
   slug: string;
   spacification: string;
   status: string;
   time_ago: string;
   order_qty_sum: string;
   totalSaleItems: number;
};

type Product = {
   category: string;
   discount_price: number;
   image: string;
   name: string;
   price: number;
};

type Seller = {
   image: string | null;
   name: string;
};

type User = {
   image: string | null;
   name: string;
};

type RecentOrder = {
   amount: string;
   company: string;
   created_at: string;
   address: string;
   id: number;
   location_name: string;
   pay_status: string;
   product: Product;
   qty: number;
   selller: Seller;
   status: string;
   transaction_id: any;
   user: User;
};

type Image = {
   id: number;
   image: string;
   imageable_id: number;
};

type RecentMessage = {
   created_at: string;
   id: number;
   massage: string;
   recipient: string;
   sender: string;
   sender_id: number;
   sender_image: Array<Image[]>;
};

type dashboardInitialState = {
   orders: any[];
   orders_parcent: any;
   sells: any[];
   sell_parcent: any;
   products: any[];
   product_parcent: any;
   monthlySales: any[];
   top_selling_products: Array<TopSellingProduct[]>;
   recent_orders: RecentOrder[];
   recent_messages: RecentMessage[];
   loading: boolean;
   error: {} | null;
};

const initialState: dashboardInitialState = {
   orders: [],
   orders_parcent: 0,
   sells: [],
   sell_parcent: {},
   products: [],
   product_parcent: 0,
   monthlySales: [],
   top_selling_products: [],
   recent_orders: [],
   recent_messages: [],
   loading: false,
   error: {},
};

export const dashboardSlice = createSlice({
   name: "sellerDashboard",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getDashboardDatas.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getDashboardDatas.fulfilled, (state, action) => {
            state.orders = action.payload.orders as any[];
            state.orders_parcent = action.payload.orders_parcent as any;
            state.sells = action.payload.sells as any[];
            state.sell_parcent = action.payload.sell_parcent as any;
            state.products = action.payload.products as any[];
            state.product_parcent = action.payload.product_parcent as any;
            state.monthlySales = action.payload.monthlySales as any[];
            state.loading = false;
         })
         .addCase(getDashboardDatas.rejected, (state, action) => {
            state.error = action.payload as {} | null;
            state.loading = false;
         })
         // get top selling products
         .addCase(getTopSellingProducts.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getTopSellingProducts.fulfilled, (state, action) => {
            state.top_selling_products = action.payload as any[];
            state.loading = false;
         })
         .addCase(getTopSellingProducts.rejected, (state, action) => {
            state.error = action.payload as {} | null;
            state.loading = false;
         })
         // get orders
         .addCase(getRecentOrders.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getRecentOrders.fulfilled, (state, action) => {
            state.recent_orders = action.payload as RecentOrder[];
            state.loading = false;
         })
         .addCase(getRecentOrders.rejected, (state, action) => {
            state.error = action.payload as {} | null;
            state.loading = false;
         })
         // get recent messages
         .addCase(getRecentMessages.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getRecentMessages.fulfilled, (state, action) => {
            state.recent_messages = action.payload as RecentMessage[];
            state.loading = false;
         })
         .addCase(getRecentMessages.rejected, (state, action) => {
            state.error = action.payload as {} | null;
            state.loading = false;
         });
   },
});

export default dashboardSlice.reducer;
