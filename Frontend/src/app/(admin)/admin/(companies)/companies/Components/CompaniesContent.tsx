"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { CompaniesSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getCompanies } from "@/admin/companies/features/CompanyAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const CompaniesTable = dynamic(() => import("./CompaniesTable"), {
   ssr: false,
});

const icon = (
   <span className="w-6 h-6">
      <CompaniesSvgIcon />
   </span>
);

export default function CompaniesContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getCompanies({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getCompanies({ page, perPage, search }));
      },
      [dispatch, page, perPage]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getCompanies({ page, perPage, search }));
      },
      [dispatch, perPage, search]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getCompanies({ page, perPage, search }));
      },
      [dispatch]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Companies"
            searchRef={searchRef}
            onHandleFilterbtn={onHandleFilterbtn}
         />
         <CompaniesTable
            onHandlePagination={onHandlePagination}
            onHandleResetTable={onHandleResetTable}
            page={page}
            perPage={perPage}
            search={search}
         />
      </Fragment>
   );
}
