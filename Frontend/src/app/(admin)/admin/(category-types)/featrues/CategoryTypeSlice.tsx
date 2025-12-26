import { createSlice } from "@reduxjs/toolkit";
import {
   changeStatusCategoryType,
   createCategoryType,
   deleteCategoryType,
   getCategoryType,
   getCategoryTypes,
   updateCategoryType,
} from "./CategoryTypeAcion";

type CategoryType = {
   id: number;
   name: string;
   status: string;
};

interface CategoryTypeState {
   category_types: CategoryType[];
   category_type: object;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: CategoryTypeState = {
   category_types: [],
   category_type: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const categoryTypeSlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // create category type
         .addCase(createCategoryType.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(createCategoryType.fulfilled, (state, action) => {
            state.error = {};
            state.loading = false;
         })
         .addCase(createCategoryType.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category types
         .addCase(getCategoryTypes.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getCategoryTypes.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.category_types = action.payload as CategoryType[];
         })
         .addCase(getCategoryTypes.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get category type for edit
         .addCase(getCategoryType.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCategoryType.fulfilled, (state, action) => {
            state.category_type = action.payload as object;
            state.loading = false;
         })
         .addCase(getCategoryType.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category type
         .addCase(updateCategoryType.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(updateCategoryType.fulfilled, (state, action) => {
            state.category_type = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(updateCategoryType.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete category type
         .addCase(deleteCategoryType.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(deleteCategoryType.fulfilled, (state, action) => {
            state.category_type = {};
            state.loading = false;
         })
         .addCase(deleteCategoryType.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // change status category type
         .addCase(changeStatusCategoryType.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(changeStatusCategoryType.fulfilled, (state, action) => {
            state.category_type = {};
            state.loading = false;
         })
         .addCase(changeStatusCategoryType.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default categoryTypeSlice.reducer;
