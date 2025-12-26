"use client";
import { OrderListSvgIcon } from "@/saller/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/store";
import {
   getOrder,
   getBuyers,
   getProducts,
   getCountries,
   getCities,
   getProductsForOrder,
} from "@/saller/orders/features/OrdersAction";
import OrdersContext from "@/saller/orders/features/OrdersContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OrderEditFormAlternative = dynamic(
   () => import("./OrderEditFormAlternative")
);
const OrderSummary = dynamic(() => import("./OrderSummary"));

const icon = (
   <span className="w-6 h-6">
      <OrderListSvgIcon />
   </span>
);

type Props = {
   params: { id: string };
};

export default function OrderEditContent({ params }: Props) {
   const {
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
      updateOrder,
      selectProducts,
      setSelectProducts,
   } = OrdersContext();
   const [productSelectionModal, setProductSelectionModal] =
      useState<boolean>(false);
   const [limit, setLimit] = useState<number>(10);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(
         getOrder({
            id: Number(params.id),
            setProduct,
            setUserId,
            setStatus,
            setPaymentMethod,
            setQty,
            setSelectProducts,
         })
      );
      dispatch(getBuyers());
      dispatch(getProductsForOrder({ limit, search }));
      dispatch(getCountries());
      dispatch(getCities());
   }, [dispatch]);

   const onHandleSelectProducts = useCallback((product: any) => {
      setSelectProducts((prevSelected) => {
         const isAlreadySelected = prevSelected.some(
            (selected) => selected.id === product.id
         );
         if (isAlreadySelected) {
            return prevSelected.filter(
               (selected) => selected.id !== product.id
            );
         }
         return [...prevSelected, { ...product, qty: product.min_order }];
      });
   }, []);
   const onHandleSearchProduct = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getProductsForOrder({ limit: limit, search }));
      },
      [dispatch, limit]
   );
   const onHandleProductsLimit = useCallback(
      (limit: number) => {
         setLimit(limit);
         dispatch(getProductsForOrder({ limit, search: search }));
      },
      [dispatch, search]
   );
   const onHandleRemoveProduct = useCallback(
      (product: any) => {
         const index = selectProducts.findIndex(
            (p: any) => p.id === product.id
         );
         if (index > -1) {
            selectProducts.splice(index, 1);
            setSelectProducts([...selectProducts]);
         }
      },
      [selectProducts]
   );
   const updateSelectedProducts = useCallback((product: any, qty: number) => {
      setSelectProducts((prevProducts) => {
         const updatedProducts = prevProducts.map((p) =>
            p.id === product?.id ? { ...p, qty: qty } : p
         );
         return updatedProducts;
      });
   }, []);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Order Edit" searchBox={false} />
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 mb-5">
            <div className="rounded-md lg:col-span-2">
               <OrderEditFormAlternative
                  userId={userId}
                  setUserId={setUserId}
                  country={country}
                  setCountry={setCountry}
                  product={product}
                  setProduct={setProduct}
                  phone={phone}
                  amount={amount}
                  location_name={location_name}
                  qty={qty}
                  setQty={setQty}
                  email={email}
                  address={address}
                  state={state}
                  city={city}
                  setCity={setCity}
                  zip_code={zip_code}
                  status={status}
                  setStatus={setStatus}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  updateOrder={updateOrder}
                  productSelectionModal={productSelectionModal}
                  setProductSelectionModal={setProductSelectionModal}
                  selectProducts={selectProducts}
                  setSelectProducts={setSelectProducts}
                  limitProduct={limit}
                  onHandleSelectProducts={onHandleSelectProducts}
                  onHandleSearchProduct={onHandleSearchProduct}
                  onHandleProductsLimit={onHandleProductsLimit}
                  onHandleRemoveProduct={onHandleRemoveProduct}
                  updateSelectedProducts={updateSelectedProducts}
               />
            </div>
            <OrderSummary
               qty={qty}
               product={product}
               params={params}
               updateOrder={updateOrder}
               selectProducts={selectProducts}
            />
         </div>
      </Fragment>
   );
}
