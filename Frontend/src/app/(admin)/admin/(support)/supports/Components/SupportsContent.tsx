"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { SupportSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getSupportRequests } from "@/admin/support/features/SupportAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const SupportsTable = dynamic(() => import("./SupportsTable"));

const icon = (
   <div className="w-6 h-6">
      <SupportSvgIcon />
   </div>
);

export default function SupportsContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      dispatch(getSupportRequests({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         dispatch(getSupportRequests({ page, perPage, search }));
      },
      [dispatch, perPage, search]
   );

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         dispatch(getSupportRequests({ page: 1, perPage, search }));
      },
      [dispatch, perPage]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string): void => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getSupportRequests({ page, perPage, search }));
      },
      [dispatch]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Supports"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <SupportsTable
            onHandlePagination={onHandlePagination}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
