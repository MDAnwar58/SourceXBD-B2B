"use client";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import { ProductRequestSvgIcon } from "@/buyer/components/SvgIcons";
import ProductRequestContext from "@/buyer/product-requests/features/ProductRequestContext";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"));
const ProductRequestsTable = dynamic(() => import("./ProductRequestsTable"));

const icon = (
   <span className="w-5 h-5 text-[##2F2F2F]">
      <ProductRequestSvgIcon />
   </span>
);

export default function ProductRequestContent() {
   const searchRef = useRef<HTMLInputElement | null>(null);
   const {
      getProductRequests,
      page,
      setPage,
      limit,
      setLimit,
      search,
      setSearch,
   } = ProductRequestContext();

   useEffect(() => {
      getProductRequests(page, Number(limit), search);
   }, [page, limit, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         getProductRequests(1, limit, search);
      },
      [limit]
   );

   const onHandleResetTable = (
      page: number,
      limit: number,
      search: string
   ): void => {
      setPage(page);
      setLimit(limit);
      setSearch(search);
      if (searchRef.current) {
         searchRef.current.value = "";
      }
      getProductRequests(page, limit, search);
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Product Requests"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <ProductRequestsTable
            setPage={setPage}
            getProductRequests={getProductRequests}
            page={page}
            limit={limit}
            search={search}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
