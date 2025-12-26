"use client";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import { getFaqs } from "@/admin/support/features/SupportAction";
import { SupportSvgIcon } from "@admin/components/SvgIcons";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const FAQsCard = dynamic(() => import("./FAQsCard"), {
   ssr: false,
});

const icon = (
   <span className="w-6 h-6">
      <SupportSvgIcon />
   </span>
);

export default function FAQContent() {
   const [limit, setLimit] = useState<number>(5);
   const [loading, setLoading] = useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getFaqs({ limit }));
   }, [dispatch]);

   const onHandleLoadMore = useCallback(
      (limit: number) => {
         setLoading(true);
         setLimit(limit);
         dispatch(getFaqs({ limit }));
         setTimeout(() => {
            setLoading(false); // Stop loading after delay
         }, 1000);
      },
      [dispatch, loading]
   );

   return (
      <Fragment>
         <PageHeader icon={icon} title="FAQs" searchBox={false} />
         <FAQsCard
            limit={limit}
            setLimit={setLimit}
            onHandleLoadMore={onHandleLoadMore}
            loading={loading}
         />
      </Fragment>
   );
}
