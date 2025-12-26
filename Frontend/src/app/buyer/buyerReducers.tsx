import { combineReducers } from "@reduxjs/toolkit";
import dashboardSlice from "@/buyer/dashboard/features/dashboardSlice";
import buyerCommonSlice from "@/buyer/features/buyerCommonSlice";
import profileSlice from "@/buyer/profile/features/profileSlice";
import wishListSlice from "@/buyer/wish-list/features/wishListSlice";
import orderHistorySlice from "@/buyer/order-history/select-product/features/orderHistorySlice";
import orderHistoryTermAndConditionSlice from "@/buyer/order-history/terms-and-condition/features/orderHistoryTermAndConditionSlice";
import productRequestSlice from "@/buyer/product-requests/features/productRequestSlice";
import buyerMessageSlice from "@/buyer/messages/features/messageSlice";
import supportSlice from "@/buyer/help-and-support/features/supportSlice";
import orderDetailsSlice from "@/buyer/order/features/orderDetailsSlice";
import viewSellerProfileSlice from "@/buyer/view-seller-profile/features/viewSellerProfileSlice";

const buyerReducer = combineReducers({
   common: buyerCommonSlice,
   dashboard: dashboardSlice,
   profile: profileSlice,
   wishList: wishListSlice,
   orderHistoryProductSelection: orderHistorySlice,
   orderHistoryTermAndCondition: orderHistoryTermAndConditionSlice,
   productRequest: productRequestSlice,
   buyerMessage: buyerMessageSlice,
   buyerSupport: supportSlice,
   orderDetails: orderDetailsSlice,
   viewSellerProfile: viewSellerProfileSlice,
});
export default buyerReducer;
