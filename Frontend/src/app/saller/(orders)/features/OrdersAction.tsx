import Axios from "@/app/utils/axios-client";
import { notify } from "@/app/utils/notify";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const get_orders = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "orders/get-orders",
   async ({ page, perPage, search }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(
            `/seller/orders?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const delete_order = createAsyncThunk<
   any,
   { id: number; page: number; perPage: number; search: string }
>(
   "orders/delete-order",
   async (
      { id, page, perPage, search },
      { rejectWithValue, dispatch }
   ): Promise<any> => {
      try {
         const response = await Axios.delete(`/seller/orders/${id}`);
         notify(response.data.msg);
         dispatch(get_orders({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getBuyers = createAsyncThunk(
   "orders/get-buyers",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/buyers`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getProducts = createAsyncThunk(
   "orders/get-products",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/order-products`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const getProductsForOrder = createAsyncThunk<
   any,
   { limit: number; search: string }
>(
   "orders/get-products-for-order",
   async ({ limit, search }, { rejectWithValue }) => {
      try {
         const response = await Axios.get(
            `/seller/get-products?number=${limit}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getCountries = createAsyncThunk(
   "orders/get-countries",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/countries`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
export const getCities = createAsyncThunk(
   "orders/get-cities",
   async (_, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/cities`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const create_order = createAsyncThunk<
   any,
   {
      payload: any;
      router: any;
   }
>("orders/create", async ({ payload, router }, { rejectWithValue }) => {
   try {
      const response = await Axios.post("/seller/orders", payload);
      if (response.status === 200) {
         notify(response.data.msg);
         router.push("/saller/orders");
      }
      return response.data.message;
   } catch (error: any) {
      console.log(error.response.data.errors);
      return rejectWithValue(error.response.data.errors);
   }
});

export const getOrder = createAsyncThunk<
   any,
   {
      id: number;
      setProduct: any;
      setUserId: any;
      setStatus: any;
      setPaymentMethod: any;
      setQty: any;
      setSelectProducts: any;
   }
>(
   "seller/orders/edit-order",
   async (
      {
         id,
         setProduct,
         setUserId,
         setStatus,
         setPaymentMethod,
         setQty,
         setSelectProducts,
      },
      { rejectWithValue }
   ): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/orders/${id}`);

         setProduct({
            name: response?.data?.product?.name,
            value: response?.data?.product?.id,
            price: Number(response?.data?.product?.price),
            discount_price: Number(response?.data?.product?.discount_price),
            qty: Number(response?.data?.product?.stock),
         });
         setUserId(response.data.user_id);
         setStatus(response.data.status);
         setPaymentMethod(response.data.payment_method);
         setQty(response.data.qty);
         if (response?.data?.order_items?.length > 0) {
            const order_items = response.data.order_items.map(
               (order_item: any) => {
                  return {
                     id: order_item?.product.id,
                     name: order_item?.product.name,
                     price: order_item?.product.price,
                     discount_price: order_item?.product.discount_price,
                     qty: order_item.qty,
                     min_order: order_item?.product.min_order,
                     stock: order_item?.product.stock,
                     image: order_item?.product.images[0]?.file_path.toString(),
                  };
               }
            );
            setSelectProducts(order_items);
         }
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const update_order = createAsyncThunk<
   any,
   {
      id: number;
      payload: any;
      router: any;
   }
>(
   "seller/orders/update",
   async ({ id, payload, router }, { rejectWithValue }) => {
      try {
         const response = await Axios.post(
            `/seller/order-update/${id}`,
            payload
         );
         if (response.status === 200) {
            notify(response.data.msg);
            setTimeout(() => {
               router.push("/saller/orders");
            }, 700);
         }
         return response.data.message;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);

export const get_orders_items = createAsyncThunk<
   any,
   { page: number; perPage: number; search: string }
>(
   "orders/get-order-items",
   async ({ page, perPage, search }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(
            `/seller/order-items?page=${page}&number=${perPage}&key=${search}`
         );
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);

export const change_order_status = createAsyncThunk<
   any,
   { id: number; payload: any; page: number; perPage: number; search: string }
>(
   "seller/orders/change-order-status",
   async (
      { id, payload, page, perPage, search },
      { rejectWithValue, dispatch }
   ): Promise<any> => {
      try {
         const response = await Axios.post(
            `/seller/change-order-status/${id}`,
            payload
         );
         // console.log(response.data);
         notify(response.data.msg);
         dispatch(get_orders({ page, perPage, search }));
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.errors);
      }
   }
);
export const getOrderInvoice = createAsyncThunk<any, { id: number }>(
   "seller/orders/get-order-for-invoice",
   async ({ id }, { rejectWithValue }): Promise<any> => {
      try {
         const response = await Axios.get(`/seller/orders/${id}`);
         return response.data;
      } catch (error: any) {
         return rejectWithValue(error.response.data.message);
      }
   }
);
