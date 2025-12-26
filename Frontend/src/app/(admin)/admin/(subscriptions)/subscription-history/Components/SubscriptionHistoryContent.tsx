"use client";
import React, {
   Fragment,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";
import { ItemSubscriptionsSvgIcon } from "@admin/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";
import { getSubscriptionHistories } from "@/admin/subscriptions/featrues/SubscriptionAcion";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const SubscriptionPlanPopularityTable = dynamic(
   () => import("./SubscriptionPlanPopularityTable")
);

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);

export default function SubscriptionHistoryContent() {
   const [page, setPage] = useState<number>(1);
   const [perPage, setPerPage] = useState<number>(10);
   const [search, setSearch] = useState<string>("");
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getSubscriptionHistories({ page, perPage, search }));
   }, [dispatch]);

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getSubscriptionHistories({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandlePagination = useCallback(
      (page: any) => {
         setPage(page);
         dispatch(getSubscriptionHistories({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   const onHandleResetTable = useCallback(
      (page: number, perPage: number, search: string) => {
         setPage(page);
         setPerPage(perPage);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getSubscriptionHistories({ page, perPage, search }));
      },
      [dispatch, page, perPage, search]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Subscription Plan Histories"
            titleClassName="4xs:w-auto xs:w-48 xs4:w-36 w-32"
            searchRef={searchRef}
            onHandleFilterbtn={onHandleFilterbtn}
         />
         <SubscriptionPlanPopularityTable
            onHandlePagination={onHandlePagination}
            onHandleResetTable={onHandleResetTable}
         />
      </Fragment>
   );
}
