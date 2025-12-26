import { createSlice } from "@reduxjs/toolkit";
import {
   getCategories,
   createSubCategory,
   getSubCategories,
   getSubCategory,
   updateSubCategory,
   deleteSubCategory,
   changeStatusSubCategory,
   // deleteCategoryType,
   // getCategoryType,
   // updateCategoryType,
} from "./SubCategoryAcion";

type Category = {
   id: number;
   category_type_id: string;
   name: string;
   desc: string;
   status: string;
};

type SubCategory = {
   id: number;
   category_id: string;
   name: string;
   slug: string;
   desc: any;
   status: string;
};

interface CategoryState {
   categories: Category[];
   sub_categories: SubCategory[];
   sub_category: object;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: CategoryState = {
   categories: [],
   sub_categories: [],
   sub_category: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const subCategorySlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get category type
         .addCase(getCategories.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload as Category[];
         })
         .addCase(getCategories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // create category type
         .addCase(createSubCategory.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(createSubCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(createSubCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category
         .addCase(getSubCategories.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getSubCategories.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.sub_categories = action.payload as SubCategory[];
         })
         .addCase(getSubCategories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get category type for edit
         .addCase(getSubCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getSubCategory.fulfilled, (state, action) => {
            state.sub_category = action.payload as object;
            state.loading = false;
         })
         .addCase(getSubCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(updateSubCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(updateSubCategory.fulfilled, (state, action) => {
            state.sub_category = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(updateSubCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete sub category
         .addCase(deleteSubCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteSubCategory.fulfilled, (state, action) => {
            state.sub_category = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(deleteSubCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // sub category status change
         .addCase(changeStatusSubCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(changeStatusSubCategory.fulfilled, (state, action) => {
            state.sub_category = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(changeStatusSubCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default subCategorySlice.reducer;
