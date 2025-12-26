"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { SettingsSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import {
   chnageAdminStatus,
   get_admins,
} from "@/admin/settings/security-settings/access-control/features/AccessControlAction";
import dynamic from "next/dynamic";
const AccessControlTable = dynamic(() => import("./AccessControlTable"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));

const icon = (
   <div className="w-6 h-6">
      <SettingsSvgIcon />
   </div>
);

export default function AccessControlContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement | null>(null);

   useEffect(() => {
      dispatch(get_admins({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleChangeAdminStatus = useCallback(
      (id: string) => {
         dispatch(chnageAdminStatus({ id, page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         setPage(1);
         dispatch(get_admins({ page, perPage, search }));
      },
      [dispatch, page, perPage]
   );
   const onHandlePagination = useCallback(
      (page: number): void => {
         setPage(page);
         dispatch(get_admins({ page, perPage, search }));
      },
      [dispatch, perPage, search]
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
      dispatch(get_admins({ page, perPage, search }));
   };

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Access Control"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <AccessControlTable
            onHandleChangeAdminStatus={onHandleChangeAdminStatus}
            onHandlePagination={onHandlePagination}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
