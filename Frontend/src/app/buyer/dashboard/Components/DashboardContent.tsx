"use client";
import dynamic from "next/dynamic";
import React, { useCallback, useEffect, useState } from "react";
import { BuyerDashboardSvgIcon } from "@/buyer/components/SvgIcons";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import {
   cancleOrder,
   getOrders,
   getRecentMessage,
   getRecentWishProducts,
   getReviews,
} from "@/buyer/dashboard/features/DashboardAction";
const PageHeader = dynamic(() => import("@/buyer/components/PageHeader"), {
   ssr: false,
});
const Grid = dynamic(() => import("@/buyer/components/buyer-grid"), {
   ssr: false,
});
const RequestForQuotation = dynamic(() => import("./RequestForQuotation"), {
   ssr: false,
});
const RecentMessageCard = dynamic(() => import("./RecentMessageCard"), {
   ssr: false,
});
const YourOrdersCard = dynamic(() => import("./YourOrdersCard"), {
   ssr: false,
});
const RecentWishlist = dynamic(() => import("./RecentWishlist"), {
   ssr: false,
});
const YourReviewCard = dynamic(() => import("./YourReviewCard"), {
   ssr: false,
});

const icon = (
   <span className="w-5 h-5 text-[##2F2F2F]">
      <BuyerDashboardSvgIcon />
   </span>
);

export default function DashboardContent() {
   const [recentMessageLimit, setRecentMessageLimit] = useState<number>(2);
   const [orderLimit, setOrderLimit] = useState<number>(5);
   const [reviewLimit, setReviewLimit] = useState<number>(6);
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getRecentMessage({ limit: recentMessageLimit }));
      dispatch(getOrders({ limit: orderLimit }));
      dispatch(getRecentWishProducts());
      dispatch(getReviews({ limit: reviewLimit }));
   }, [dispatch, recentMessageLimit, orderLimit, reviewLimit]);

   const onHandleRecentMessageLimit = useCallback(
      (limit: number) => {
         setRecentMessageLimit(limit);
         dispatch(getRecentMessage({ limit }));
      },
      [dispatch]
   );

   const onClearRecentMessage = useCallback(
      (fromId: number) => {
         // dispatch(cleanError({ error: null }));
      },
      [dispatch]
   );

   const onLoadMoreOrders = useCallback(
      (limit: number) => {
         setOrderLimit(limit);
         dispatch(getOrders({ limit }));
      },
      [dispatch]
   );

   const onCancleOrder = useCallback(
      (orderId: number) => {
         dispatch(cancleOrder({ orderId, limit: orderLimit }));
      },
      [dispatch, orderLimit]
   );

   const onHandleReviewLimit = useCallback(
      (limit: number) => {
         setReviewLimit(limit);
         dispatch(getReviews({ limit }));
      },
      [dispatch]
   );

   return (
      <div className="pb-20">
         <PageHeader icon={icon} title="Dashboard" searchBox={false} />
         <RequestForQuotation />
         <Grid gridOne={true} className="xl:grid-cols-2 mt-7" gap={7}>
            <RecentMessageCard
               recentMessageLimit={recentMessageLimit}
               onHandleRecentMessageLimit={onHandleRecentMessageLimit}
               onClearRecentMessage={onClearRecentMessage}
            />
            <YourOrdersCard
               orderLimit={orderLimit}
               onLoadMoreOrders={onLoadMoreOrders}
               onCancleOrder={onCancleOrder}
            />
         </Grid>
         <RecentWishlist />
         <YourReviewCard
            reviewLimit={reviewLimit}
            onHandleReviewLimit={onHandleReviewLimit}
         />
      </div>
   );
}
