import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "@/saller/products/featrues/ProductSlice";
import sallerCommonSlice from "@/saller/features/sallerCommonSlice";
import companySlice from "@/saller/companies/features/companySlice";
import settingsSlice from "@/saller/settings/features/settingsSlice";
import supportSlice from "@/saller/support/features/supportSlice";
import ordersSlice from "@/saller/orders/features/ordersSlice";
import inventorySlice from "@/saller/inventory/features/inventorySlice";
import reviewsSlice from "@/saller/reviews/features/reviewsSlice";
import subscriptionSlice from "@/saller/subscriptions/featrues/SubscriptionSlice";
import sallerMessageSlice from "@/saller/messages/features/messageSlice";
import dashboardSlice from "@/saller/dashboard/features/dashboardSlice";
import viewBuyerProfileSlice from "./view-buyer-profile/features/viewSellerProfileSlice";

const sallerReducer = combineReducers({
   sallerCommon: sallerCommonSlice,
   dashboard: dashboardSlice,
   product: productSlice,
   company: companySlice,
   orders: ordersSlice,
   inventory: inventorySlice,
   reviews: reviewsSlice,
   subscription: subscriptionSlice,
   settings: settingsSlice,
   support: supportSlice,
   sellerMessage: sallerMessageSlice,
   viewBuyerProfile: viewBuyerProfileSlice,
});

export default sallerReducer;
