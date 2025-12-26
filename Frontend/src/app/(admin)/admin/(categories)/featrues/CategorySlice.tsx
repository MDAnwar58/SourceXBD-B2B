import { createSlice } from "@reduxjs/toolkit";
import {
   getCategoryTypes,
   createCategory,
   getCategories,
   getCategory,
   updateCategory,
   deleteCategory,
   changeStatusCategory,
} from "./CategoryAcion";

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

type Category = {
   id: number;
   category_type_id: string;
   name: string;
   desc: string;
   status: string;
};

interface CategoryState {
   category_types: CategoryType[];
   categories: Category[];
   category: object;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: CategoryState = {
   category_types: [],
   categories: [],
   category: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const SubCategorySlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get category type
         .addCase(getCategoryTypes.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCategoryTypes.fulfilled, (state, action) => {
            state.loading = false;
            state.category_types = action.payload as CategoryType[];
         })
         .addCase(getCategoryTypes.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // create category type
         .addCase(createCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(createCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(createCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category
         .addCase(getCategories.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getCategories.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.categories = action.payload as Category[];
         })
         .addCase(getCategories.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = false;
         })
         // get category type for edit
         .addCase(getCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCategory.fulfilled, (state, action) => {
            state.category = action.payload as object;
            state.loading = false;
         })
         .addCase(getCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(updateCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(updateCategory.fulfilled, (state, action) => {
            state.category = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(updateCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // // delete category type
         .addCase(deleteCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteCategory.fulfilled, (state, action) => {
            state.loading = false;
         })
         .addCase(deleteCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete category type
         .addCase(changeStatusCategory.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(changeStatusCategory.fulfilled, (state, action) => {
            state.category = {};
            state.loading = false;
         })
         .addCase(changeStatusCategory.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default SubCategorySlice.reducer;
