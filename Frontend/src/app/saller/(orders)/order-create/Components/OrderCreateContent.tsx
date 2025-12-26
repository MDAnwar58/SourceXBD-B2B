"use client";
import { OrderListSvgIcon } from "@/saller/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/store";
import {
   getBuyers,
   getProducts,
   getCountries,
   getCities,
   getProductsForOrder,
} from "@/saller/orders/features/OrdersAction";
import dynamic from "next/dynamic";
import OrdersContext from "@/saller/orders/features/OrdersContext";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OrderCreateFormAlternative = dynamic(
   () => import("./OrderCreateFormAlternative")
);
const OrderSummary = dynamic(() => import("./OrderSummary"));

const icon = (
   <span className="w-6 h-6">
      <OrderListSvgIcon />
   </span>
);

export default function OrderCreateContent() {
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
      createOrder,
      selectProducts,
      setSelectProducts,
   } = OrdersContext();
   const [productSelectionModal, setProductSelectionModal] =
      useState<boolean>(false);
   const [limit, setLimit] = useState<number>(10);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
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
         <PageHeader icon={icon} title="Order Create" searchBox={false} />
         {/* <OrderCreateForm /> */}
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5 mb-5">
            <div className="rounded-md lg:col-span-2">
               {/* Search Bar */}
               {/* <div className="">
                  <form action="#" method="GET">
                     <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                           <svg
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 fillRule="evenodd"
                                 clipRule="evenodd"
                                 d="M12.2127 9.62199C13.044 8.55022 13.4358 7.20201 13.3084 5.85163C13.1809 4.50125 12.5438 3.25014 11.5267 2.35282C10.5095 1.45551 9.18872 0.979401 7.83298 1.02135C6.47725 1.06331 5.18842 1.62017 4.22869 2.57865C3.26813 3.53781 2.70945 4.82713 2.66649 6.1839C2.62354 7.54066 3.09955 8.86275 3.99751 9.88074C4.89548 10.8987 6.14783 11.536 7.49934 11.6627C8.85086 11.7894 10.1998 11.396 11.2714 10.5627L11.3 10.5927L14.128 13.4213C14.19 13.4833 14.2635 13.5324 14.3444 13.5659C14.4254 13.5994 14.5121 13.6167 14.5997 13.6167C14.6873 13.6167 14.774 13.5994 14.855 13.5659C14.9359 13.5324 15.0094 13.4833 15.0714 13.4213C15.1333 13.3594 15.1824 13.2858 15.216 13.2049C15.2495 13.124 15.2667 13.0373 15.2667 12.9497C15.2667 12.8621 15.2495 12.7753 15.216 12.6944C15.1824 12.6135 15.1333 12.5399 15.0714 12.478L12.2427 9.64999C12.233 9.64038 12.2229 9.63104 12.2127 9.62199ZM10.8287 3.52199C11.2051 3.89231 11.5044 4.33349 11.7095 4.82008C11.9145 5.30667 12.0212 5.82904 12.0234 6.35707C12.0255 6.88509 11.9231 7.40832 11.722 7.89656C11.5209 8.38481 11.2252 8.82841 10.8518 9.20178C10.4784 9.57516 10.0348 9.87091 9.5466 10.072C9.05836 10.2731 8.53513 10.3755 8.00711 10.3733C7.47908 10.3712 6.95671 10.2645 6.47012 10.0595C5.98353 9.85441 5.54235 9.55506 5.17203 9.17865C4.43197 8.42645 4.01913 7.41228 4.02343 6.35707C4.02772 5.30185 4.44881 4.29108 5.19497 3.54493C5.94112 2.79877 6.95189 2.37769 8.00711 2.37339C9.06232 2.36909 10.0765 2.78193 10.8287 3.52199Z"
                                 fill="#2F2F2F"
                              />
                           </svg>
                        </div>
                        <input
                           type="text"
                           name="email"
                           id="mobile-search"
                           className="bg-[#ffffff] w-full rounded-[14px] h-11 pl-10 text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium"
                           style={{
                              boxShadow:
                                 "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
                           }}
                           placeholder="Search Product"
                        />
                     </div>
                  </form>
               </div> */}
               <OrderCreateFormAlternative
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
                  createOrder={createOrder}
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
               selectProducts={selectProducts}
            />
         </div>
      </Fragment>
   );
}
