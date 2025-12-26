import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "http";

type CategoryType = {
   name: string;
   status: string;
};
export const createCategoryType = createAsyncThunk<
   string,
   { payload: CategoryType; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("category-type/create", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/category_types", payload);
      notify(response.data.success);
      router.push("/admin/category-types");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});
// get category types list function name is getCategoryTypes
export const getCategoryTypes = createAsyncThunk<
   CategoryType[],
   { page: number; perPage: number }
>("category-types/get", async ({ page, perPage }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(
         `/admin/category_types?page=${page}&number=${perPage}`
      );
      // console.log(response.data.types);
      return response.data.types;
   } catch (error: any) {
      console.log(error);
      return rejectWithValue(error.response.data.errors);
   }
});

export const getCategoryType = createAsyncThunk<
   CategoryType[],
   { id: string; setStatus: React.Dispatch<React.SetStateAction<string>> }
>("category-type/edit", async ({ id, setStatus }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(`/admin/category_types/${id}`);
      setStatus(response.data.status);
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const updateCategoryType = createAsyncThunk<
   string,
   { payload: CategoryType; id: string; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>(
   "category-type/update",
   async ({ payload, id, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.patch(
            `/admin/category_types/${id}`,
            payload
         );
         notify(response.data.success);
         router.push("/admin/category-types");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// delete category type
export const deleteCategoryType = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number },
   { rejectValue: string }
>(
   "category-type/delete",
   async ({ id, page, perPage }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/category_types/${id}`);
         notify(response.data.success);
         dispatch(getCategoryTypes({ page, perPage }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// change status category type
export const changeStatusCategoryType = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number },
   { rejectValue: string }
>(
   "category-type/change-status",
   async ({ id, page, perPage }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/category_type-status/${id}`);
         console.log(response.data);
         notify(response.data.msg);
         dispatch(getCategoryTypes({ page, perPage }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
