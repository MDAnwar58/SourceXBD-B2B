"use client";
import { OrderListSvgIcon } from "@/saller/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import OrdersContext from "@/saller/orders/features/OrdersContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OrderStatusList = dynamic(() => import("./OrderStatusList"));

const icon = (
   <div className="w-6 h-6">
      <OrderListSvgIcon />
   </div>
);

export default function OrderStatusUpdateContent() {
   const {
      getOrders,
      page,
      setPage,
      perPage,
      setPerPage,
      search,
      setSearch,
      changeOrderStatus,
   } = OrdersContext();
   const searchRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      getOrders(page, perPage, search);
   }, [page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         getOrders(1, perPage, search);
      },
      [page, perPage]
   );

   const onHandleResetTable = (
      page: number,
      perPage: number,
      search: string
   ): void => {
      setPage(page);
      setPerPage(perPage);
      setSearch(search);
      if (searchRef.current) {
         searchRef.current.value = "";
      }
      getOrders(page, perPage, search);
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Order Status Update"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <OrderStatusList
            getOrders={getOrders}
            page={page}
            perPage={perPage}
            search={search}
            setPage={setPage}
            onHandleResetTable={onHandleResetTable}
            changeOrderStatus={changeOrderStatus}
         />
      </Fragment>
   );
}
