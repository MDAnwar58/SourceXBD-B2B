import React, { useCallback, useRef, useState } from "react";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import {
   create_order,
   delete_order,
   get_orders_items,
   get_orders,
   update_order,
   change_order_status,
} from "./OrdersAction";
import { useRouter } from "next/navigation";
import { calculateTotalPrice } from "@/saller/orders/features/totalPriceCalculate";

type EntityWithId = {
   id: string;
};

type IdCard = {
   url: string;
   title: string;
};

export default function OrdersContext() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const [userId, setUserId] = useState<string>("");
   const [country, setCountry] = useState<EntityWithId | null>(null);
   const [product, setProduct] = useState<any | null>(null);
   const phone = useRef<HTMLInputElement>(null);
   const amount = useRef<HTMLInputElement>(null);
   const location_name = useRef<HTMLInputElement>(null);
   const [qty, setQty] = useState<number>(1);
   const email = useRef<HTMLInputElement>(null);
   const address = useRef<HTMLInputElement>(null);
   const state = useRef<HTMLInputElement>(null);
   const [city, setCity] = useState<EntityWithId | null>(null);
   const zip_code = useRef<HTMLInputElement>(null);
   const [status, setStatus] = useState<string>("");
   const [paymentMethod, setPaymentMethod] = useState<string>("");
   const [selectProducts, setSelectProducts] = useState<any[]>([]);
   const dispatch = useDispatch<AppDispatch>();
   const router = useRouter();

   const getOrders = useCallback(
      (Page: number, PerPage: number, Search: string): void => {
         dispatch(get_orders({ page: Page, perPage: PerPage, search: Search }));
      },
      [dispatch]
   );

   const onDeleteHandle = useCallback(
      (id: number, page: number, perPage: number, search: string): void => {
         dispatch(delete_order({ id, page, perPage, search }));
      },
      [dispatch]
   );

   const createOrder = () => {
      const total = calculateTotalPrice(selectProducts);
      const BuyerId = userId;
      const CountryId = country?.id ? country?.id : "";
      const ProductId = product?.value ? product?.value : "";
      const Phone = phone.current ? phone.current?.value : "";
      const Amount = total > 0 ? total : 0;
      const LocationName = location_name.current
         ? location_name.current.value
         : "";
      const Qty = qty ? qty : "";
      const Email = email.current ? email.current?.value : "";
      const Address = address.current ? address.current?.value : "";
      const State = state.current ? state.current?.value : "";
      const CityId = city?.id ? city?.id : "";
      const ZipCode = zip_code.current ? zip_code.current?.value : "";
      const Status = status || "";
      const PaymentMethod = paymentMethod || "";
      const products = selectProducts.map((product) => ({
         product_id: product.id,
         qty: product.qty,
         amount: product?.discount_price
            ? (product.price - product.discount_price) * product.qty
            : product.price * product.qty,
      }));
      const payload = {
         user_id: BuyerId,
         product_id: ProductId,
         country_id: CountryId,
         amount: Amount,
         products: products,
         payment_method: PaymentMethod,
         pay_status: Status,
         address: Address,
         location_name: LocationName,
         qty: Qty,
         phone: Phone,
         email: Email,
         state: State,
         zip_code: ZipCode,
         city_id: CityId,
      };
      dispatch(create_order({ payload, router })).finally(() => {
         setSelectProducts([]);
      });
   };
   const updateOrder = (id: number) => {
      const total = calculateTotalPrice(selectProducts);
      const BuyerId = userId;
      const CountryId = country?.id ? country?.id : "";
      const ProductId = product?.value ? product?.value : "";
      const Phone = phone.current ? phone.current?.value : "";
      const Amount = total > 0 ? total : 0;
      const LocationName = location_name.current
         ? location_name.current.value
         : "";
      const Qty = qty ? qty : "";
      const Email = email.current ? email.current?.value : "";
      const Address = address.current ? address.current?.value : "";
      const State = state.current ? state.current?.value : "";
      const CityId = city?.id ? city?.id : "";
      const ZipCode = zip_code.current ? zip_code.current?.value : "";
      const Status = status || "";
      const PaymentMethod = paymentMethod || "";
      const products = selectProducts.map((product) => ({
         product_id: product.id,
         qty: product.qty,
         amount: product?.discount_price
            ? (product.price - product.discount_price) * product.qty
            : product.price * product.qty,
      }));

      const payload = {
         user_id: BuyerId,
         product_id: ProductId,
         country_id: CountryId,
         amount: Amount,
         products: products,
         payment_method: PaymentMethod,
         pay_status: Status,
         address: Address,
         location_name: LocationName,
         qty: Qty,
         phone: Phone,
         email: Email,
         state: State,
         zip_code: ZipCode,
         city_id: CityId,
      };

      dispatch(update_order({ id, payload, router }));
   };

   const getOrderItems = useCallback(
      (page: number, perPage: number, search: string) => {
         dispatch(get_orders_items({ page, perPage, search }));
      },
      [dispatch]
   );

   const changeOrderStatus = useCallback(
      (
         id: number,
         payStatus: string,
         page: number,
         perPage: number,
         search: string
      ) => {
         const payload = {
            status: payStatus,
         };
         dispatch(change_order_status({ id, payload, page, perPage, search }));
      },
      [dispatch]
   );

   return {
      getOrders,
      page,
      setPage,
      perPage,
      setPerPage,
      search,
      setSearch,
      userId,
      setUserId,
      country,
      setCountry,
      product,
      setProduct,
      phone,
      amount,
      location_name,
      qty,
      setQty,
      email,
      address,
      state,
      city,
      setCity,
      zip_code,
      status,
      setStatus,
      paymentMethod,
      setPaymentMethod,
      onDeleteHandle,
      createOrder,
      updateOrder,
      getOrderItems,
      changeOrderStatus,
      selectProducts,
      setSelectProducts,
   };
}
