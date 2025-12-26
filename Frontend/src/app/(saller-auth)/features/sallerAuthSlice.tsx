import { createSlice } from "@reduxjs/toolkit";
import {
   getCities,
   getCountries,
   registerBecomeASupplier,
} from "./SallerAuthAction";

type Country = {
   id: number;
   name: string;
   iso: string;
   iso3: string;
};
type City = {
   id: number;
   name: string;
   slug: string;
   country_id: number;
};

type SallerAuthState = {
   countries: Country[];
   cities: City[];
   loading: boolean;
   error: any;
   message: string;
};

const initialState: SallerAuthState = {
   countries: [],
   cities: [],
   loading: false,
   error: {},
   message: "",
};

const sallerAuthSlice = createSlice({
   name: "sallerAuth",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getCountries.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCountries.fulfilled, (state, action) => {
            state.countries = action.payload as Country[];
            state.loading = false;
         })
         .addCase(getCountries.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         })
         .addCase(getCities.pending, (state) => {
            state.loading = true;
         })
         .addCase(getCities.fulfilled, (state, action) => {
            state.cities = action.payload as City[];
            state.loading = false;
         })
         .addCase(getCities.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         })
         .addCase(registerBecomeASupplier.pending, (state) => {
            state.loading = true;
         })
         .addCase(registerBecomeASupplier.fulfilled, (state, action) => {
            state.message = action.payload;
            state.error = {};
            state.loading = false;
         })
         .addCase(registerBecomeASupplier.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
         });
   },
});

export default sallerAuthSlice.reducer;
