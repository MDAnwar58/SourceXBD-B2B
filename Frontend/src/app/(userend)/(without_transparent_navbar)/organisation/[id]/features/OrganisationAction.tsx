import Axios from "@/app/utils/axios-client-without-token";
import AxiosClient from "@/app/utils/axios-client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getOrganisation = createAsyncThunk<
   any,
   {
      id: number;
      limit: number;
   }
>("userend/user/organisation", async ({ id, limit }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(`/organization/${id}?limit=${limit}`);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data);
   }
});
export const getOrganisationWithAuth = createAsyncThunk<
   any,
   {
      id: number;
      limit: number;
   }
>(
   "userend/user/organisation-with-auth",
   async ({ id, limit }, { rejectWithValue }) => {
      try {
         const response = await AxiosClient.get(
            `/organization/${id}?limit=${limit}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data);
      }
   }
);
export const storeProductInWishList = createAsyncThunk<
   any,
   { payload: any; organisationId: number; limit: number }
>(
   "userend/organisation/product/store/wish-list",
   async (
      { payload, organisationId, limit },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await AxiosClient.post("/user/wishlist", payload);
         dispatch(getOrganisationWithAuth({ id: organisationId, limit }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const removeProductInWishList = createAsyncThunk<
   any,
   { productId: any; organisationId: any; limit: any }
>(
   "userend/organisation/product/remove/wish-list",
   async (
      { productId, organisationId, limit },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await AxiosClient.delete(
            `/user/wishlist/${productId}`
         );
         dispatch(getOrganisationWithAuth({ id: organisationId, limit }));
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// export const getCategories = createAsyncThunk(
//    "userend/saerch-products/get-categories",
//    async (_, { rejectWithValue }) => {
//       const response = await Axios.get("/categories");
//       try {
//          return response.data.data;
//       } catch (error) {
//          return rejectWithValue(error);
//       }
//    }
// );

export const cleanError = createAsyncThunk<any, { error: object | string }>(
   "clean-error",
   async ({ error }, { rejectWithValue }) => {
      try {
         return error;
      } catch (error: any) {
         return rejectWithValue(error);
      }
   }
);
