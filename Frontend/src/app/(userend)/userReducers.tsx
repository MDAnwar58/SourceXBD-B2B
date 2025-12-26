import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "@/userend/with_transparent_navbar/features/homeSlice";
import blogSlice from "@/userend/with_transparent_navbar/blogs/features/blogSlice";
import searchProductSlice from "@/userend/without_transparent_navbar/products-search/features/searchProductSlice";
import productSlice from "@/userend/with_transparent_navbar/products/features/productSlice";
import blogDetailsSlice from "@/userend/blog/details/features/blogDetailsSlice";
import saleProductSlice from "@/userend/without_transparent_navbar/products/details/features/saleProductSlice";
import organisationSlice from "@/userend/without_transparent_navbar/organisation/details/features/organisationSlice";
import commonSlice from "@/userend/features/commonSlice";

const userReducer = combineReducers({
   common: commonSlice,
   home: homeSlice, // This should be a valid reducer function
   blog: blogSlice,
   blog_details: blogDetailsSlice,
   product: productSlice,
   productSearch: searchProductSlice,
   productSale: saleProductSlice,
   organisation: organisationSlice,
});

export default userReducer;
