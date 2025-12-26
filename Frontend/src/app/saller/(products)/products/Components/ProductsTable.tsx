"use client";
import React, { Fragment, useCallback, useEffect, useRef } from "react";
import {
   AllProductsSvgIcon,
   UpAndDownLineArrowSvgIcon,
} from "@/saller/components/SvgIcons";
import ProductContext from "@/saller/products/featrues/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { SallerState } from "@/app/saller/store";
import { AppDispatch } from "@/app/store";
import { errorCleanUp } from "@/saller/products/featrues/ProductAcion";
import dynamic from "next/dynamic";
const AllProducts = dynamic(() => import("./AllProducts"));
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const SallerPagination = dynamic(
   () => import("@/saller/components/Pagination")
);
const TableHeader = dynamic(() => import("./TableHeader"));

const tabs = ["All", "Active", "Draft", "+"];

const TableUpDropdown = (
   <div className="bg-[rgba(152,176,238,0.05)] hover:bg-[#98b0ee] text-gray-700 hover:text-white rounded-[10px] w-9 h-9 shadow-admin-card flex justify-center items-center">
      <div className="w-[19px] h-3">
         <UpAndDownLineArrowSvgIcon />
      </div>
   </div>
);

const icon = (
   <span className="w-6 h-6">
      <AllProductsSvgIcon />
   </span>
);

type Product = {
   id: string;
   name: string;
   slug: string;
   category: string;
   sub_category: string;
   price: string | number;
   status: string;
   seller: string;
};

type Link = {
   url?: string;
   label?: string;
   active?: boolean;
};

type Meta = {
   current_page?: number;
   from?: number;
   last_page?: number;
   links?: Link[];
   path?: string;
   per_page?: number;
   to?: number;
   total?: number;
};

interface ProductData {
   data?: Product[];
   meta?: Meta;
}

export default function ProductsTable() {
   const {
      getProducts,
      page,
      perPage,
      search,
      setPage,
      setSearch,
      tableTab,
      setTableTab,
      setPerPage,
   } = ProductContext();
   const searchRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   useEffect((): void => {
      getProducts(page, perPage, search, tableTab);
      dispatch(errorCleanUp());
   }, [page, perPage, search, tableTab, dispatch]);

   const onTabHandler = useCallback(
      (tab: string | null | undefined) => {
         if (tab === null || tab === undefined) {
            throw new Error("tab cannot be null or undefined");
         }
         setTableTab(tab);
         setPage(1);
         getProducts(1, perPage, search, tab);
      },
      [page, perPage, search]
   );

   const onHandleFilterbtn = (search: string) => {
      setSearch(search);
      setPage(1);
      getProducts(page, perPage, search, tableTab);
   };

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
      getProducts(page, perPage, search, tableTab);
   };

   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         getProducts(page, perPage, search, tableTab);
      },
      [perPage, search]
   );

   const { products } = useSelector(
      (state: SallerState) => state.saller.product
   );

   const Products = products as ProductData | undefined;
   const links = Products?.meta?.links as Link | undefined;
   const lastPage = Products?.meta?.last_page;
   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Products"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <div className="bg-white p-5 rounded-[20px] shadow-admin-card overflow-x-auto mb-7">
            <TableHeader
               tabs={tabs}
               onTabHandler={onTabHandler}
               tableTab={tableTab}
               TableUpDropdown={TableUpDropdown}
               onHandleResetTable={onHandleResetTable}
            />

            <div className=" overflow-x-auto w-full">
               {Products?.data && (
                  <AllProducts
                     products={Products?.data}
                     getProducts={getProducts}
                     page={page}
                     perPage={perPage}
                     search={search}
                     tableTab={tableTab}
                     lastPage={lastPage}
                     form={Products?.meta?.from}
                     to={Products?.meta?.to}
                  />
               )}
            </div>
         </div>
         <SallerPagination
            links={links}
            lastPage={lastPage}
            onHandlePagination={onHandlePagination}
         />
      </Fragment>
   );
}
