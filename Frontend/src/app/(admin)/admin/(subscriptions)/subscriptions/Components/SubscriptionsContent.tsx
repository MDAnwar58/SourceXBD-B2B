"use client";
import Grid from "@/components/grid";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import {
   getSubscriptionHistories,
   getSubscriptionSellCalculation,
} from "@/admin/subscriptions/featrues/SubscriptionAcion";
import dynamic from "next/dynamic";
const TotalSubscriptionsCard = dynamic(
   () => import("./TotalSubscriptionsCard")
);
const RevenueFromSubscriptionsCard = dynamic(
   () => import("./RevenueFromSubscriptionsCard")
);
const SubscriptionTable = dynamic(() => import("./SubscriptionTable"));

export default function SubscriptionsContent() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getSubscriptionSellCalculation());
      dispatch(getSubscriptionHistories({ page: 1, perPage: 10, search: "" }));
   }, [dispatch]);
   return (
      <Grid cols={12} gap={7}>
         <TotalSubscriptionsCard />
         <RevenueFromSubscriptionsCard />
         <SubscriptionTable />
      </Grid>
   );
}
