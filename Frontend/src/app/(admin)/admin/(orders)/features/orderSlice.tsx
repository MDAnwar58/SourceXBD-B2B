import { createSlice } from "@reduxjs/toolkit";
import { getOrders, getOrder } from "./OrderAction";

type Company = {
   date: string;
   desc: string;
   id: number;
   user_image: string | null;
   name: string;
   user_email: string;
   user_name: string;
   user_phone: string;
   trust_point: number;
   points: number;
   status: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type CompaniesData = {
   data: Company[];
   meta: Meta;
};

type YearOfMonth = {
   month_name: string;
   year: number;
   total_sales: string;
};

interface InitialStateProps {
   orders_data: any;
   order: object | {};
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
   message: string;
}

const initialState: InitialStateProps = {
   orders_data: [],
   order: {},
   loading: false,
   tableLoading: false,
   error: {},
   message: "",
};

export const orderSlice = createSlice({
   name: "adminOrders",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get users
         .addCase(getOrders.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.orders_data = action.payload as any;
         })
         .addCase(getOrders.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get company
         .addCase(getOrder.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order = action.payload.order as any;
         })
         .addCase(getOrder.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default orderSlice.reducer;
