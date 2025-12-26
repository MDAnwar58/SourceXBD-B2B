import { createSlice } from "@reduxjs/toolkit";
import {
   getCountries,
   create_city,
   getCities,
   get_city,
   update_city,
   delete_city,
} from "./CityAcion";

type Country = {
   id: number;
   iso: string;
   nicename: string;
};

type City = {
   id: number | string;
   name: string;
   country_id: number | string;
   map: string;
   desc: any;
   status: string;
};

interface CityState {
   countries: Country[];
   cities: City[];
   city: object;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
}

const initialState: CityState = {
   countries: [],
   cities: [],
   city: {},
   loading: false,
   tableLoading: false,
   error: {},
};

const citySlice = createSlice({
   name: "categoryType",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get category type
         .addCase(getCountries.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(getCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload as Country[];
         })
         .addCase(getCountries.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // create category type
         .addCase(create_city.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(create_city.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(create_city.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get category
         .addCase(getCities.pending, (state, action) => {
            state.tableLoading = true;
         })
         .addCase(getCities.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.cities = action.payload as City[];
         })
         .addCase(getCities.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.tableLoading = true;
         })
         // get category type for edit
         .addCase(get_city.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(get_city.fulfilled, (state, action) => {
            state.city = action.payload as object;
            state.loading = false;
         })
         .addCase(get_city.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // update category
         .addCase(update_city.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(update_city.fulfilled, (state, action) => {
            state.city = {};
            state.error = {};
            state.loading = false;
         })
         .addCase(update_city.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // delete sub category
         .addCase(delete_city.pending, (state, action) => {
            state.loading = true;
         })
         .addCase(delete_city.fulfilled, (state, action) => {
            state.city = {};
            state.error = {};
            state.loading = false;
         });
   },
});

export default citySlice.reducer;
