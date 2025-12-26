import { createSlice } from "@reduxjs/toolkit";
import {
   create_subscription_plan,
   getSubscriptionPlans,
   getSubscriptionPlan,
   update_subscription_plan,
   delete_city,
   getSubscriptionHistories,
   getSubscriptionSellCalculation,
} from "./SubscriptionAcion";

type SubscriptionPlan = {
   id: string;
   name: string;
   title: string;
   package: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: any;
   contents: any;
};

type MonthlySubscribersData = {
   month: string;
   count: number;
};

interface CityState {
   subscription_plans: SubscriptionPlan[];
   subscription_plan: object;
   subscription_histories_data: any;
   totalSubscribersCount: number;
   monthly_subscribers_datas: MonthlySubscribersData[];
   totalRevenueOnSubscription: string;
   revenue_chart_datas: any[];
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: CityState = {
   subscription_plans: [],
   subscription_plan: {},
   subscription_histories_data: {},
   totalSubscribersCount: 0,
   monthly_subscribers_datas: [],
   totalRevenueOnSubscription: "",
   revenue_chart_datas: [],
   loading: false,
   tableLoading: false,
   error: {},
};

const subscriptionSlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // create category type
         .addCase(create_subscription_plan.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(create_subscription_plan.fulfilled, (state, action) => {
            state.loading = false;
            state.subscription_plan = {};
            state.error = {};
         })
         .addCase(create_subscription_plan.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category
         .addCase(getSubscriptionPlans.pending, (state, action) => {
            state.tableLoading = true;
            state.subscription_plan = {};
         })
         .addCase(getSubscriptionPlans.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.error = {};
            state.subscription_plan = {};
            state.subscription_plans = action.payload as SubscriptionPlan[];
         })
         .addCase(getSubscriptionPlans.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get category type for edit
         .addCase(getSubscriptionPlan.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getSubscriptionPlan.fulfilled, (state, action) => {
            state.subscription_plan = action.payload as object;
            state.loading = false;
         })
         .addCase(getSubscriptionPlan.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(update_subscription_plan.pending, (state, action) => {
            state.loading = true;
            state.subscription_plan = {};
         })
         .addCase(update_subscription_plan.fulfilled, (state, action) => {
            state.subscription_plan = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(update_subscription_plan.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete sub category
         .addCase(delete_city.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(delete_city.fulfilled, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(delete_city.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get subscription histories
         .addCase(getSubscriptionHistories.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getSubscriptionHistories.fulfilled, (state, action) => {
            state.subscription_histories_data = action.payload;
            state.error = {};
            state.loading = false;
         })
         .addCase(getSubscriptionHistories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get subscription sell calculation
         .addCase(getSubscriptionSellCalculation.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getSubscriptionSellCalculation.fulfilled, (state, action) => {
            state.totalSubscribersCount = action.payload
               .total_subscribers_count as number;
            state.monthly_subscribers_datas = action.payload
               .monthly_subscribers_datas as MonthlySubscribersData[];
            state.totalRevenueOnSubscription = action.payload.amounts as string;
            state.revenue_chart_datas = action.payload
               .revenue_chart_datas as any;
            state.error = {};
            state.loading = false;
         })
         .addCase(getSubscriptionSellCalculation.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default subscriptionSlice.reducer;
