import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

type Category = {
   name: string;
   category_type_id: any;
   desc: any;
   status: string;
};
type CategoryType = {
   name: string;
   status: string;
};

export const getCategoryTypes = createAsyncThunk<any>(
   "category/type/get",
   async (_, { rejectWithValue }) => {
      try {
         const response = await Axios.get("/admin/category-types");
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const createCategory = createAsyncThunk<
   string,
   { formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("category/create", async ({ formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/admin/categories", formData);
      notify(response.data.msg);
      router.push("/admin/categories");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});
// get category types list function name is getCategoryTypes
export const getCategories = createAsyncThunk<
   Category[],
   { page: number; perPage: number; search: string }
>("category/get", async ({ page, perPage, search }, { rejectWithValue }) => {
   try {
      const response = await Axios.get(
         `/admin/categories?page=${page}&number=${perPage}&key=${search}`
      );
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

export const getCategory = createAsyncThunk<
   Category[],
   {
      id: string;
      setCategoryTypeId: React.Dispatch<React.SetStateAction<string>>;
      setImage: React.Dispatch<React.SetStateAction<string>>;
      setStatus: React.Dispatch<React.SetStateAction<string>>;
   }
>(
   "category/edit",
   async (
      { id, setImage, setCategoryTypeId, setStatus },
      { rejectWithValue }
   ) => {
      try {
         const response = await Axios.get(`/admin/categories/${id}`);
         const imageString = response.data.images
            .map((image: any) => image.image)
            .join(", ");
         setImage(imageString);
         setCategoryTypeId(response.data.category_type_id);
         setStatus(response.data.status);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const updateCategory = createAsyncThunk<
   string,
   { id: string; formData: FormData; router: any }, // Accept router as a part of the payload
   { rejectValue: string }
>("category/update", async ({ id, formData, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post(`/admin/category/${id}`, formData);
      console.log(response.data);
      notify(response.data.msg);
      router.push("/admin/categories");
      return response.data;
   } catch (error: any) {
      return rejectWithValue(error.response.data.errors);
   }
});

// delete category type
export const deleteCategory = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "category/delete",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.delete(`/admin/categories/${id}`);
         notify(response.data.msg);
         dispatch(getCategories({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

// change status category type
export const changeStatusCategory = createAsyncThunk<
   number,
   { id: number; page: number; perPage: number; search: string },
   { rejectValue: string }
>(
   "category/change-status",
   async ({ id, page, perPage, search }, { rejectWithValue, dispatch }) => {
      try {
         const response = await Axios.get(`/admin/category-status/${id}`);
         notify(response.data.msg);
         dispatch(getCategories({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
