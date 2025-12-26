import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "@/app/utils/axios-client";

export const getDashboardDatas = createAsyncThunk(
   "sellerDashboard/getDashboardData",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/dashboard/home");
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getRecentOrders = createAsyncThunk(
   "sellerDashboard/getRecentOrders",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/dashboard/orders");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getTopSellingProducts = createAsyncThunk(
   "sellerDashboard/getTopSellingProducts",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/dashboard/popular");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getRecentMessages = createAsyncThunk(
   "sellerDashboard/getRecentMessages",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/seller/dashboard/massage");
         return response.data.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
