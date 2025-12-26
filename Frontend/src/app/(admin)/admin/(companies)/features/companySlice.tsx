import { createSlice } from "@reduxjs/toolkit";
import {
   getCompanies,
   getCompany,
   approveCompany,
   declineCompany,
} from "./CompanyAction";

type Company = {
   date: string;
   desc: string;
   id: number;
   user_image: string | null;
   name: string;
   user_email: string;
   user_name: string;
   user_phone: string;
   trust_point: number;
   points: number;
   status: string;
};

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Link[];
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type CompaniesData = {
   data: Company[];
   meta: Meta;
};

type YearOfMonth = {
   month: string;
   year: number;
   total_sales: string;
};

interface InitialStateProps {
   companies_data: CompaniesData[];
   company: object | {};
   currentMonthProductCount: number;
   a_year_all_months_products_count: any[];
   monthlyProductCountPercentageChange: any | {};
   monthlySales: YearOfMonth[];
   monthlyOrders: number;
   monthlyOrdersPersent: number;
   monthlyOrdersDatas: any[];
   monthlyOrderCountPercentageChange: any;
   loading: boolean;
   tableLoading: boolean;
   error: string | object | null;
   message: string;
}

const initialState: InitialStateProps = {
   companies_data: [],
   company: {},
   currentMonthProductCount: 0,
   a_year_all_months_products_count: [],
   monthlyProductCountPercentageChange: {},
   monthlySales: [],
   monthlyOrders: 0,
   monthlyOrdersPersent: 0,
   monthlyOrdersDatas: [],
   monthlyOrderCountPercentageChange: {},
   loading: false,
   tableLoading: false,
   error: {},
   message: "",
};

export const companiesSlice = createSlice({
   name: "adminCompanies",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get users
         .addCase(getCompanies.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getCompanies.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.companies_data = action.payload as CompaniesData[];
         })
         .addCase(getCompanies.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // get company
         .addCase(getCompany.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.company = action.payload.company as any;
            state.currentMonthProductCount = action.payload
               .currentMonthProductCount as any;
            state.a_year_all_months_products_count = action.payload
               .a_year_all_months_products_count as any;
            state.monthlyProductCountPercentageChange = action.payload
               .monthlyProductCountPercentageChange as any | {};
            state.monthlySales = action.payload.monthlySales as YearOfMonth[];
            state.monthlyOrders = action.payload.monthlyOrders as any;
            state.monthlyOrdersPersent = action.payload
               .monthlyOrdersPersent as any;
            state.monthlyOrdersDatas = action.payload
               .monthlyOrdersDatas as any[];
            state.monthlyOrderCountPercentageChange = action.payload
               .monthlyOrderCountPercentageChange as any;
         })
         .addCase(getCompany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // approve company
         .addCase(approveCompany.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(approveCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
         })
         .addCase(approveCompany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         })
         // decline company
         .addCase(declineCompany.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(declineCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as string;
         })
         .addCase(declineCompany.rejected, (state, action) => {
            state.error = action.payload as string | object;
            state.loading = false;
         });
   },
});

export default companiesSlice.reducer;
