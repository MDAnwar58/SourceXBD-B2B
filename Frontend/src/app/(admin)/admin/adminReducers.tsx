import { combineReducers } from "@reduxjs/toolkit";
import categoryTypeSlice from "@admin/category_types/featrues/CategoryTypeSlice";
import categorySlice from "@admin/categories/featrues/CategorySlice";
import subCategorySlice from "@/admin/sub_categories/featrues/SubCategorySlice";
import productSlice from "@/admin/products/featrues/ProductSlice";
import citySlice from "@/admin/cities/featrues/CitySlice";
import subscriptionSlice from "@/admin/subscriptions/featrues/SubscriptionSlice";
import blogSlice from "@/admin/blogs/featrues/BlogSlice";
import adminCommonSlice from "./features/adminCommonSlice";
import userSlice from "@/admin/users/features/userSlice";
import companySlice from "@/admin/companies/features/companySlice";
import orderSlice from "@/admin/orders/features/orderSlice";
import reviewsSlice from "@/admin/reviews/features/reviewsSlice";
import supportSlice from "@/admin/support/features/supportSlice";
import settingsSlice from "@/admin/settings/features/settingsSlice";
import dashboardSlice from "@admin/dashboard/features/dashboardSlice";
import accessControlSlice from "@/admin/settings/security-settings/access-control/features/accessControlSlice";
import buyerComplaintSlice from "@/admin/buyer-complaints/features/buyerComplaintSlice";

const adminReducer = combineReducers({
   adminCommon: adminCommonSlice,
   dashboard: dashboardSlice,
   user: userSlice,
   company: companySlice,
   categoryType: categoryTypeSlice,
   category: categorySlice,
   sub_category: subCategorySlice,
   product: productSlice,
   order: orderSlice,
   city: citySlice,
   review: reviewsSlice,
   subscription: subscriptionSlice,
   blog: blogSlice,
   settings: settingsSlice,
   accessControl: accessControlSlice,
   support: supportSlice,
   buyerComplaint: buyerComplaintSlice,
});

export default adminReducer;
