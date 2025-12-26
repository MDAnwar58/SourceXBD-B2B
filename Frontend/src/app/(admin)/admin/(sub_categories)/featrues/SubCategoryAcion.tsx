import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Category = {
   name: string;
};

type SubCategory = {
   name: string;
   category_id: string;
   desc: any;
   status: string;
};

export const getCategories = createAsyncThunk<Category[]>(
   "category/get",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/get-categories");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const createSubCategory = createAsyncThunk<
   string,
   { payload: SubCategory; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("sub_category/create", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/sub-categories", payload);
      notify(response.data.msg);
      router.push("/admin/sub_categories");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// get category types list function name is getCategoryTypes
export const getSubCategories = createAsyncThunk<
   SubCategory[],
   { page: number; perPage: number; search: string }
>(
   "sub_category/get",
   async ({ page, perPage, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/admin/sub-categories?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const getSubCategory = createAsyncThunk<
   Category[],
   {
      id: string;
      setCategoryId: any;
      setStatus: React.Dispatch<React.SetStateAction<string>>;
   }
>(
   "category/edit",
   async ({ id, setCategoryId, setStatus }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(`/admin/sub-categories/${id}`);
         setCategoryId(response.data.category_id);
         setStatus(response.data.status);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const updateSubCategory = createAsyncThunk<
   string,
   { payload: SubCategory; id: string; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("category/update", async ({ payload, id, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.patch(
         `/admin/sub-categories/${id}`,
         payload
      );
      notify(response.data.msg);
      router.push("/admin/sub_categories");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// delete category type
export const deleteSubCategory = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "sub_category/delete",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/sub-categories/${id}`);
         notify(response.data.msg);
         dispatch(getSubCategories({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// change status sub category type
export const changeStatusSubCategory = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "category/change-status",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/sub_category-status/${id}`);
         notify(response.data.msg);
         dispatch(getSubCategories({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
