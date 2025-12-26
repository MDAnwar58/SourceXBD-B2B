import { createSlice } from "@reduxjs/toolkit";
import {
   get_orders,
   delete_order,
   getBuyers,
   getCountries,
   getCities,
   getProducts,
   getProductsForOrder,
   create_order,
   getOrder,
   update_order,
   get_orders_items,
   change_order_status,
   getOrderInvoice,
} from "./OrdersAction";

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

type SettingsState = {
   orders_data: OrderDatas | {};
   buyers: any;
   products: Array<any[]>;
   totalProductsLength: number;
   countries: any;
   cities: any;
   order: any | {};
   order_items: any;
   loading: boolean;
   error: any;
   submit: boolean;
   message: string;
};

const initialState: SettingsState = {
   orders_data: {},
   buyers: [],
   products: [],
   totalProductsLength: 0,
   countries: [],
   cities: [],
   order: {},
   order_items: [],
   loading: false,
   error: {},
   submit: false,
   message: "",
};

export const ordersSlice = createSlice({
   name: "orders",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         // get orders
         .addCase(get_orders.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_orders.fulfilled, (state, action) => {
            state.loading = false;
            state.orders_data = action.payload as OrderDatas | {};
            state.error = {};
         })
         .addCase(get_orders.rejected, (state, action) => {
            state.loading = false;
            state.orders_data = {};
            state.error = action.payload;
         })

         // delete order
         .addCase(delete_order.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(delete_order.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(delete_order.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get buyers
         .addCase(getBuyers.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getBuyers.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.buyers = action.payload as any;
         })
         .addCase(getBuyers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get products
         .addCase(getProducts.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.products = action.payload as Array<any[]>;
         })
         .addCase(getProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get products for order
         .addCase(getProductsForOrder.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getProductsForOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.products = action.payload.data as Array<any[]>;
            state.totalProductsLength = action.payload
               .totalProductsLength as number;
         })
         .addCase(getProductsForOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get countries
         .addCase(getCountries.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.countries = action.payload as any;
         })
         .addCase(getCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get cities
         .addCase(getCities.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getCities.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.cities = action.payload as any;
         })
         .addCase(getCities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get cities
         .addCase(create_order.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(create_order.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.message = action.payload as any;
         })
         .addCase(create_order.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get order
         .addCase(getOrder.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getOrder.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order = action.payload as any;
         })
         .addCase(getOrder.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // update order
         .addCase(update_order.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(update_order.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order = {};
            state.message = action.payload as any;
         })
         .addCase(update_order.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // get order items
         .addCase(get_orders_items.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(get_orders_items.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order_items = action.payload as any;
         })
         .addCase(get_orders_items.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // change order status
         .addCase(change_order_status.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(change_order_status.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
         })
         .addCase(change_order_status.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         })
         // change order status
         .addCase(getOrderInvoice.pending, (state, action) => {
            state.loading = true;
            state.error = {};
         })
         .addCase(getOrderInvoice.fulfilled, (state, action) => {
            state.loading = false;
            state.error = {};
            state.order = action.payload as any;
         })
         .addCase(getOrderInvoice.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
         });
   },
});

export default ordersSlice.reducer;
