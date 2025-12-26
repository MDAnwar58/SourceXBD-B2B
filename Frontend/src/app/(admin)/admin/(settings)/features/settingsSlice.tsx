import { createSlice } from "@reduxjs/toolkit";
import {
   get_category_types,
   get_cities,
   get_countries,
   update_company_profile,
   getCompanyProfile,
   documents_update,
   getProfileNotifications,
   updateProfileNotifications,
} from "./SettingsAction";

type Category = {
   id: string;
   name: string;
};
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

type Documents = {
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: string;
   user_id: number;
};

type Company = {
   address: string;
   city_id: number;
   contact: string;
   country: string;
   desc: any;
   documents: any;
   id: number;
   industry: string;
   logo: string;
   name: string;
   points: number;
   review: number;
   status: string;
   trust_point: number;
   type: string;
   user_id: string;
};

type User = {
   company: Company;
   email: string;
   id: number;
   name: string;
   phone: string;
   profile: string;
   role: string;
   status: string;
};

type Notification = {
   email_notification: number | null;
   phone_notification: number | null;
};

type SettingsState = {
   categories: Array<Category[]>;
   category_types: Array<any[]>;
   countries: Array<Country[]>;
   cities: Array<City[]>;
   user: User | {} | null;
   profile_notifications: Array<Notification[]>;
   auth: boolean;
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: SettingsState = {
   categories: [],
   category_types: [],
   countries: [],
   cities: [],
   profile_notifications: [],
   user: null,
   auth: false,
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const settingsSlice = createSlice({
   name: "sallerSettings",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(update_company_profile.pending, (state, action) => {
            state.loading = true;
            state.error = {};
            state.submit = false;
         })
         .addCase(update_company_profile.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.submit = true;
         })
         .addCase(update_company_profile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.submit = false;
         })
         // get categories
         .addCase(get_category_types.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_category_types.fulfilled, (state, action) => {
            state.loading = false;
            state.category_types = action.payload;
            state.error = {};
         })
         .addCase(get_category_types.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get countries
         .addCase(get_countries.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_countries.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload;
            state.error = {};
         })
         .addCase(get_countries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get cities
         .addCase(get_cities.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_cities.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload;
            state.error = {};
         })
         .addCase(get_cities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get company profile
         .addCase(getCompanyProfile.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getCompanyProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload as User;
            state.error = {};
         })
         .addCase(getCompanyProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         .addCase(documents_update.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(documents_update.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(documents_update.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // profile notifications
         .addCase(getProfileNotifications.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getProfileNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.profile_notifications = action.payload as Array<
               Notification[]
            >;
         })
         .addCase(getProfileNotifications.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // profile notifications update
         .addCase(updateProfileNotifications.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(updateProfileNotifications.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
         })
         .addCase(updateProfileNotifications.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default settingsSlice.reducer;
