"use client";
import PageHeader from "@admin/components/PageHeader";
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
import { getMessages } from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const ReviewNewMessages = dynamic(() => import("./ReviewNewMessages"), {
   ssr: false,
});

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function ReviewMessagesContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(5);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getMessages({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getMessages({ page, perPage, search }));
      },
      [dispatch, page, perPage]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getMessages({ page, perPage, search }));
      },
      [dispatch]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getMessages({ page, perPage, search }));
      },
      [dispatch, perPage, search]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Qucik Action"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <ReviewNewMessages
            onHandlePagination={onHandlePagination}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
