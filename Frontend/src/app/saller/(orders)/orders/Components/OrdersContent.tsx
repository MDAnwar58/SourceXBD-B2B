"use client";
import { OrderListSvgIcon } from "@/saller/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import OrdersContext from "@/saller/orders/features/OrdersContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OrdersTable = dynamic(() => import("./OrdersTable"));

const icon = (
   <div className="w-6 h-6">
      <OrderListSvgIcon />
   </div>
);

export default function OrdersContent() {
   const {
      getOrders,
      page,
      setPage,
      perPage,
      search,
      setSearch,
      onDeleteHandle,
   } = OrdersContext();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      getOrders(page, perPage, search);
   }, [page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         getOrders(1, perPage, search);
      },
      [perPage]
   );
   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Orders"
            searchRef={searchRef}
            onHandleFilterbtn={onHandleFilterbtn}
         />
         <OrdersTable
            getOrders={getOrders}
            page={page}
            setPage={setPage}
            perPage={perPage}
            search={search}
            onDeleteHandle={onDeleteHandle}
         />
      </Fragment>
   );
}
