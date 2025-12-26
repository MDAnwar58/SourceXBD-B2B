"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import {
   declineCopmany,
   deleteCopmany,
   getApproveCopmanies,
   getPendingCompnaies,
} from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const ApprovalTable = dynamic(() => import("./ApprovalTable"), {
   ssr: false,
});
const ApproveNewCompanies = dynamic(() => import("./ApprovalsNewCompanies"), {
   ssr: false,
});
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function ApprovalNewCompanyContent() {
   const [limit, setLimit] = useState<number>(6);
   const [searchCompany, setSearchCompany] = useState<string>("");
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);
   const searchApproveRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getPendingCompnaies({ limit, search: searchCompany }));
      dispatch(getApproveCopmanies({ page, perPage, search }));
   }, [dispatch, limit, searchCompany, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearchCompany(search);
         dispatch(getPendingCompnaies({ limit, search }));
      },
      [dispatch, limit]
   );

   const loadMorePendingCompanies = useCallback(
      (limit: number) => {
         setLimit(limit);
         dispatch(getPendingCompnaies({ limit, search: searchCompany }));
      },
      [dispatch, searchCompany]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getApproveCopmanies({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleSearchbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getApproveCopmanies({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchApproveRef?.current) {
            searchApproveRef.current.value = "";
         }
         dispatch(getApproveCopmanies({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleDeclineBtn = useCallback(
      (id: number) => {
         dispatch(
            declineCopmany({
               id,
               limit,
               company_search: searchCompany,
               page,
               perPage,
               search,
            })
         );
      },
      [dispatch, limit, searchCompany, page, perPage, search]
   );

   const onHandledeleteBtn = useCallback(
      (id: number) => {
         dispatch(
            deleteCopmany({
               id,
               limit,
               company_search: searchCompany,
               page,
               perPage,
               search,
            })
         );
      },
      [dispatch, limit, searchCompany, page, perPage, search]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Qucik Action"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <ApproveNewCompanies
            limit={limit}
            loadMorePendingCompanies={loadMorePendingCompanies}
            searchCompany={searchCompany}
            page={page}
            perPage={perPage}
            search={search}
            onHandleDeclineBtn={onHandleDeclineBtn}
            onHandledeleteBtn={onHandledeleteBtn}
         />
         <ApprovalTable
            onHandlePagination={onHandlePagination}
            onHandleSearchbtn={onHandleSearchbtn}
            onHandleResetTable={onHandleResetTable}
            searchApproveRef={searchApproveRef}
            onHandleDeclineBtn={onHandleDeclineBtn}
            onHandledeleteBtn={onHandledeleteBtn}
         />
      </Fragment>
   );
}
