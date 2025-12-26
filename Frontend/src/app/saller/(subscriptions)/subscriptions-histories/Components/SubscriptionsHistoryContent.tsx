"use client";
import React, { Fragment, useEffect, useState } from "react";
import { ItemSubscriptionsSvgIcon } from "@/saller/components/SvgIcons";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/saller/store";
import { getSubscriptionPlansHistory } from "@/saller/subscriptions/featrues/SubscriptionAcion";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const TransactionHistoryTable = dynamic(
   () => import("./TransactionHistoryTable")
);

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);
export default function SubscriptionsHistoryContent() {
   const [page, setPage] = useState(1);
   const [perPage, setPerPage] = useState(5);
   const [search, setSearch] = useState("");

   const dispatach = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatach(getSubscriptionPlansHistory({ page, perPage, search }));
   }, [dispatach, page, perPage, search]);

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Subscriptions Histories"
            searchBox={false}
         />
         <TransactionHistoryTable
            getSubscriptionPlansHistory={getSubscriptionPlansHistory}
            page={page}
            perPage={perPage}
            search={search}
            setPage={setPage}
         />
      </Fragment>
   );
}
