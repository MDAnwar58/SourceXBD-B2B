import { createSlice } from "@reduxjs/toolkit";
import { get_inventories } from "./InventoryAction";

type Link = {
   active: boolean;
   label: string;
   url: string | null;
};

type Meta = {
   current_page: number;
   from: number;
   last_page: number;
   links: Array<Link[]>;
   path: string;
   per_page: number;
   to: number;
   total: number;
};

type User = { image: string | null; name: string };
type Seller = { image: string | null; name: string };

type Product = {
   image: string;
   name: string;
};

type Data = {
   amount: string;
   company: string;
   created_at: string;
   id: number;
   product: Product;
   selller: Seller;
   status: string;
   transaction_id: any;
   user: User;
};

type OrderDatas = {
   data: Array<Data[]>;
   meta: Meta;
};

type ProductData = {
   category_id: number;
   contact: string | number | null;
   deleted_at: null;
   desc: string;
   discount_price: any | null;
   id: number;
   is_show: number;
   min_order: number | string | null;
   name: string;
   price: number;
   publish: string;
   rating_point: number;
   s_desc: any | null;
   section: string;
   slug: string;
   spacification: any | null;
   status: string;
   stock: number;
   sub_category_id: number;
   tags: any;
   title: string;
   type: string;
   user_id: number;
   vendor: string;
};

type InventoryState = {
   orders_data: OrderDatas | {};
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: InventoryState = {
   orders_data: {},
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const inventorySlice = createSlice({
   name: "inventory",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get orders
         .addCase(get_inventories.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_inventories.fulfilled, (state, action) => {
            state.loading = false;
            state.orders_data = action.payload as OrderDatas | {};
            state.error = {};
         })
         .addCase(get_inventories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default inventorySlice.reducer;
