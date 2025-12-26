import { createSlice } from "@reduxjs/toolkit";
import {
   getSubscriptionPlans,
   getActiveSubscriptionPlan,
   getSubscriptionPlansHistory,
} from "./SubscriptionAcion";

type SubscriptionPlan = {
   id: string;
   name: string;
   title: string;
   package: string;
   type: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: boolean;
   requirements: any;
   is_active_for_user: boolean;
};

type User = {
   company: string;
   image: string;
   name: string;
};

type Subscription = {
   amount: number;
   duration: number | null;
   is_free: boolean | number;
   name: string;
   package: string;
   product_limit: number;
   active_product: number;
};

type SubscriptionPlanHistory = {
   end_date: string;
   is_active: boolean;
   remaining_products: number;
   start_date: string;
   subscription: Subscription;
   user: User;
   active_product: number;
};

interface SubscriptionState {
   subscription_plans: SubscriptionPlan[];
   subscription_plan: SubscriptionPlanHistory | {};
   subscription_histories: any;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: SubscriptionState = {
   subscription_plans: [],
   subscription_plan: {},
   subscription_histories: [],
   loading: false,
   tableLoading: false,
   error: {},
};

const subscriptionSlice = createSlice({
   name: "subscription",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get category
         .addCase(getSubscriptionPlans.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getSubscriptionPlans.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.subscription_plans = action.payload as SubscriptionPlan[];
         })
         .addCase(getSubscriptionPlans.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get active subscription plan
         .addCase(getActiveSubscriptionPlan.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getActiveSubscriptionPlan.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.subscription_plan = action.payload as SubscriptionPlanHistory;
         })
         .addCase(getActiveSubscriptionPlan.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get buy subscription plan history
         .addCase(getSubscriptionPlansHistory.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getSubscriptionPlansHistory.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.subscription_histories = action.payload as any;
         })
         .addCase(getSubscriptionPlansHistory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         });
   },
});

export default subscriptionSlice.reducer;
