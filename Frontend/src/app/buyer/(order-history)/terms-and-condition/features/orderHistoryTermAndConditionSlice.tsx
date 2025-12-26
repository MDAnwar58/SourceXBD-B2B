import { createSlice } from "@reduxjs/toolkit";
import {
   cleanError,
   add_terms_and_condition,
} from "./OrderHistoryTermAndConditionAction";

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

interface DashboardState {
   recent_messages: Array<RecentMessage[]>;
   orders: Array<Order[]>;
   wish_products: WishProduct[];
   reviews: any;
   loading: boolean;
   error: object;
   message: string;
}

const initialState: DashboardState = {
   recent_messages: [],
   orders: [],
   wish_products: [],
   reviews: [],
   loading: false,
   error: {},
   message: "",
};

export const orderHistoryTermAndConditionSlice = createSlice({
   name: "buyer/dashboard",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // add product selection product
         .addCase(add_terms_and_condition.pending, (state) => {
            state.loading = true;
         })
         .addCase(add_terms_and_condition.fulfilled, (state, action) => {
            state.message = action.payload as string;
            state.loading = false; // Set loading to false on fulfilled
         })
         .addCase(add_terms_and_condition.rejected, (state, action) => {
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
export default orderHistoryTermAndConditionSlice.reducer;
