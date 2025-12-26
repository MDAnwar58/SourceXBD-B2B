"use client";
import { OrderListSvgIcon } from "@/app/saller/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import OrdersContext from "@/saller/orders/features/OrdersContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OrderItemsTable = dynamic(() => import("./OrderItemsTable"));

const icon = (
   <span className="w-6 h-6">
      <OrderListSvgIcon />
   </span>
);

export default function OrderItemsContent() {
   const {
      getOrderItems,
      page,
      perPage,
      search,
      setPage,
      setPerPage,
      setSearch,
   } = OrdersContext();
   const searchRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      getOrderItems(page, perPage, search);
   }, [page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         getOrderItems(1, perPage, search);
      },
      [perPage]
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
      getOrderItems(page, perPage, search);
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Order Items"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <OrderItemsTable
            getOrderItems={getOrderItems}
            perPage={perPage}
            search={search}
            setPage={setPage}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
