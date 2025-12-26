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
   approvePendingProduct,
   declinePendingProduct,
   getPendingProducts,
} from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const ViewPendingProductApprovals = dynamic(
   () => import("./ViewPendingProductApprovals"),
   {
      ssr: false,
   }
);

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function ViewPendingProductApprovalsContent() {
   const [limit, setLimit] = useState<number>(15);
   const [search, setSearch] = useState<string>("");
   const [isLoading, setIsLoading] = useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();
   const searchRef = useRef<HTMLInputElement>(null);

   useEffect(() => {
      dispatch(getPendingProducts({ limit, search }));
   }, [dispatch, limit, search]);

   const loadMorePendingProducts = useCallback(
      (limit: number) => {
         setLimit(limit);
         setIsLoading(true);
         setTimeout(() => {
            dispatch(getPendingProducts({ limit, search }));
            setIsLoading(false);
         }, 701);
      },
      [dispatch, search]
   );

   const onHandleFilterbtn = useCallback(
      (search: string) => {
         setSearch(search);
         dispatch(getPendingProducts({ limit, search }));
      },
      [dispatch, limit, search]
   );

   const onHandleResetTable = useCallback(
      (limit: number, search: string) => {
         setLimit(limit);
         setSearch(search);
         if (searchRef.current) {
            searchRef.current.value = "";
         }
         dispatch(getPendingProducts({ limit, search }));
      },
      [dispatch, limit, search]
   );

   const onHandleApproveBtn = useCallback(
      (id: number) => {
         const payload = { is_approve: 1 };
         dispatch(
            approvePendingProduct({
               id,
               payload,
               limit,
               search,
            })
         );
      },
      [dispatch, limit, search]
   );
   const onHandleDeclineBtn = useCallback(
      (id: number) => {
         const payload = { is_approve: 0 };
         dispatch(
            declinePendingProduct({
               id,
               payload,
               limit,
               search,
            })
         );
      },
      [dispatch, limit, search]
   );

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Qucik Action"
            onHandleFilterbtn={onHandleFilterbtn}
            searchRef={searchRef}
         />
         <ViewPendingProductApprovals
            limit={limit}
            loadMorePendingProducts={loadMorePendingProducts}
            isLoading={isLoading}
            onHandleResetTable={onHandleResetTable}
            onHandleApproveBtn={onHandleApproveBtn}
            onHandleDeclineBtn={onHandleDeclineBtn}
         />
      </Fragment>
   );
}
