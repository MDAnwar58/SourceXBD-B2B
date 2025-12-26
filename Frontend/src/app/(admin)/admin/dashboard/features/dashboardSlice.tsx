import { createSlice } from "@reduxjs/toolkit";
import {
   getDashboardDatas,
   getPendingCompnaies,
   getPendingProducts,
   getApproveCopmanies,
   declineCopmany,
   approveCopmany,
   deleteCopmany,
   approvePendingProduct,
   getMessages,
   getViewPlatformAnalytics,
} from "./DashboardAction";

type IntialStateProps = {
   companies_count: number;
   companiesPerchent: any;
   ordersPerchent: any;
   messages: number;
   users: number;
   usersPerchent: any;
   products: number;
   productsPerchent: any;
   orders: number;
   a_year_monthly_data: any[];
   a_year_monthly_messages: any[];
   total_new_messages: any[];
   companies: any[];
   companiesLength: number;
   peding_products: any[];
   productsLength: number;
   approve_companies: any[];
   messages_data: any;
   categorySales: any[];
   monthlySales: any[];
   monthlySalesItems: any[];
   newCustomersPercentage: number;
   oldCustomersPercentage: number;
   sales: number;
   target: number;
   top_selling_products: any[];
   top_selling_products_total_length: number;
   loading: boolean;
   error: string | object;
   message: string;
};

const initialState: IntialStateProps = {
   companies_count: 0,
   companiesPerchent: {},
   ordersPerchent: {},
   messages: 0,
   users: 0,
   usersPerchent: {},
   products: 0,
   productsPerchent: {},
   orders: 0,
   a_year_monthly_data: [],
   a_year_monthly_messages: [],
   total_new_messages: [],
   companies: [],
   companiesLength: 0,
   peding_products: [],
   productsLength: 0,
   approve_companies: [],
   messages_data: {},
   categorySales: [],
   monthlySales: [],
   monthlySalesItems: [],
   newCustomersPercentage: 0,
   oldCustomersPercentage: 0,
   sales: 0,
   target: 0,
   top_selling_products: [],
   top_selling_products_total_length: 0,
   loading: false,
   error: {},
   message: "",
};

export const dashboardSlice = createSlice({
   name: "adminDashboard",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getDashboardDatas.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getDashboardDatas.fulfilled, (state, action) => {
            state.error = {};
            state.companies_count = action.payload.companies as number;
            state.companiesPerchent = action.payload.companiesPerchent as any;
            state.messages = action.payload.messages as number;
            state.users = action.payload.users as number;
            state.usersPerchent = action.payload.usersPerchent as any;
            state.products = action.payload.products as number;
            state.productsPerchent = action.payload.productsPerchent as any;
            state.orders = action.payload.orders as number;
            state.ordersPerchent = action.payload.ordersPerchent as any;
            // state.ordersPerchent = action.payload.orders as any;
            state.a_year_monthly_data = action.payload.monthlyData as any[];
            state.a_year_monthly_messages = action.payload
               .monthlyMessages as any[];
            state.total_new_messages = action.payload.notifications as any[];
            state.loading = false;
         })
         .addCase(getDashboardDatas.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         .addCase(getPendingCompnaies.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getPendingCompnaies.fulfilled, (state, action) => {
            state.error = {};
            state.companies = action.payload.data as any[];
            state.companiesLength = action.payload.companiesLength as number;
            state.loading = false;
         })
         .addCase(getPendingCompnaies.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get pending products
         .addCase(getPendingProducts.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getPendingProducts.fulfilled, (state, action) => {
            state.error = {};
            state.peding_products = action.payload.data as any[];
            state.productsLength = action.payload.productsLength as number;
            state.loading = false;
         })
         .addCase(getPendingProducts.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get approve companies
         .addCase(getApproveCopmanies.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getApproveCopmanies.fulfilled, (state, action) => {
            state.error = {};
            state.approve_companies = action.payload as any[];
            state.loading = false;
         })
         .addCase(getApproveCopmanies.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // decline company
         .addCase(declineCopmany.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(declineCopmany.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(declineCopmany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // approve company
         .addCase(approveCopmany.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(approveCopmany.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(approveCopmany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete company
         .addCase(deleteCopmany.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteCopmany.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(deleteCopmany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // approve pending product
         .addCase(approvePendingProduct.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(approvePendingProduct.fulfilled, (state, action) => {
            state.error = {};
            state.message = action.payload as string;
            state.loading = false;
         })
         .addCase(approvePendingProduct.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get messages
         .addCase(getMessages.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getMessages.fulfilled, (state, action) => {
            state.error = {};
            state.messages_data = action.payload as any;
            state.loading = false;
         })
         .addCase(getMessages.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get view platform analytics
         .addCase(getViewPlatformAnalytics.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getViewPlatformAnalytics.fulfilled, (state, action) => {
            state.error = {};
            state.categorySales = action.payload.categorySales as any[];
            state.monthlySales = action.payload.monthlySalesData as any[];
            state.monthlySalesItems = action.payload.monthlySalesItems as any[];
            state.newCustomersPercentage = action.payload
               .newCustomersPercentage as number;
            state.oldCustomersPercentage = action.payload
               .oldCustomersPercentage as number;
            state.sales = action.payload.sales as number;
            state.target = action.payload.target as number;
            state.top_selling_products = action.payload
               .top_selling_products as any[];
            state.top_selling_products_total_length = action.payload
               .top_selling_products_total_length as number;
            state.loading = false;
         })
         .addCase(getViewPlatformAnalytics.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default dashboardSlice.reducer;
