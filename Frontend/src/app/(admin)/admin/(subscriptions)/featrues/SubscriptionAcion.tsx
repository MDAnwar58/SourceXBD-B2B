import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type SubscriptionPlan = {
   name: string;
   title: string;
   package: string;
   duration: string;
   product_limit: number | any;
   amount: number | any;
   is_free: number;
   contents: any;
};

export const create_subscription_plan = createAsyncThunk<
   SubscriptionPlan,
   { payload: any; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>(
   "subscription-plan/create",
   async ({ payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post("/admin/subscriptions", payload);
         notify(response.data.msg);
         router.push("/admin/subscription-plans");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// get category types list function name is getCategoryTypes
export const getSubscriptionPlans = createAsyncThunk<
   SubscriptionPlan[],
   { page: number; perPage: number; search: string }
>(
   "/admin/subscription-plans/get",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/subscriptions");
         console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getSubscriptionPlan = createAsyncThunk<
   SubscriptionPlan,
   {
      id: string;
      setPackage: React.Dispatch<React.SetStateAction<string>>;
      setType: React.Dispatch<React.SetStateAction<string>>;
      setIsFree: React.Dispatch<React.SetStateAction<number>>;
      setRequirements: React.Dispatch<React.SetStateAction<string[]>>;
   }
>(
   "subscription-plan/edit",
   async (
      { id, setPackage, setType, setIsFree, setRequirements },
      { rejectWithValue }
   ) => {
      try {
         const response = await Axios.get(`/admin/subscriptions/${id}`);
         setIsFree(response.data.is_free);
         setPackage(response.data.package);
         setType(response.data.type);
         const requirementContents = response.data.contents.map(
            (item: any, index: number) => item.content
         );
         setRequirements(requirementContents);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const update_subscription_plan = createAsyncThunk<
   SubscriptionPlan,
   { id: string; payload: SubscriptionPlan; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>(
   "subscription-plan/update",
   async ({ payload, id, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.patch(
            `/admin/subscriptions/${id}`,
            payload
         );
         notify(response.data.msg);
         router.push("/admin/subscription-plans");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// delete category type
export const delete_city = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "city/delete",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/cities/${id}`);
         notify(response.data.msg);
         dispatch(getSubscriptionPlans({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// change status sub category type
// export const changeStatusSubCategory = createAsyncThunk<
//    number,
//    { id: number; page: number; perPage: number; search: string },
//    { rejectValue: string }
// >(
//    "category/change-status",
//    async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
//       try {
//          const response = await Axios.get(`/admin/sub_category-status/${id}`);
//          notify(response.data.msg);
//          dispatch(getCities({ page, perPage, search }));
//          return response.data;
//       } catch (error: any) {
//          return rejectWithValue(error.response.data.errors);
//       }
//    }
// );

export const getSubscriptionHistories = createAsyncThunk<
   any,
   { page?: number; perPage?: number; search?: string },
   { rejectValue: string }
>(
   "admin/subscription-histories",
   async ({ page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(
            `/admin/subscription-histories?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getSubscriptionSellCalculation = createAsyncThunk(
   "admin/subscription-sell-calculation",
   async (_, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get("/admin/dashboard/plan");
         // console.log(response.data);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
