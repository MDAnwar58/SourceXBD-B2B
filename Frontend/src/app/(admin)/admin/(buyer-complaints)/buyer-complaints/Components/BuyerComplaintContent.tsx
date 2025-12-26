"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import PageHeader from "@admin/components/PageHeader";
import BuyerComplaintsTable from "./BuyerComplaintsTable";
import AdminPagination from "@admin/components/Pagination";
import { BuyerComplaintsSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import {
   deleteReport,
   getBuyerComplaints,
} from "@/admin/buyer-complaints/features/BuyerComplaintAction";

const icon = (
   <div className="w-6 h-6">
      <BuyerComplaintsSvgIcon />
   </div>
);

export default function BuyerComplaintContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const searchRef = useRef<HTMLInputElement | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getBuyerComplaints({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onDeleteHandle = useCallback(
      (id: number) => {
         dispatch(deleteReport({ id, page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getBuyerComplaints({ page, perPage, search }));
      },
      [dispatch, page, perPage]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef?.current) {
            searchRef.current.value = "";
         }
         dispatch(getBuyerComplaints({ page, perPage, search }));
      },
      [dispatch]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getBuyerComplaints({ page, perPage, search }));
      },
      [dispatch, perPage, search]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Buyer Complaints"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <BuyerComplaintsTable
            onHandleResetTable={onHandleResetTable}
            onHandlePagination={onHandlePagination}
            onDeleteHandle={onDeleteHandle}
            perPage={perPage}
            search={search}
         />
      </Fragment>
   );
}
