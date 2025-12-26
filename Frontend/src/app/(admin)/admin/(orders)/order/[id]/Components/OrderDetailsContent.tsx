"use client";
import PageHeader from "@admin/components/PageHeader";
import React, { Fragment, useEffect } from "react";
import { OrderListSvgIcon } from "@admin/components/SvgIcons";
import { AppDispatch } from "@admin/store";
import { useDispatch } from "react-redux";
import { getOrder } from "@/admin/orders/features/OrderAction";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@admin/components/grid"));
const OrderCalculationGrid = dynamic(() => import("./OrderCalculationGrid"));
const RecentUpdateTimeline = dynamic(() => import("./RecentUpdateTimeline"));
const RecentUpdates = dynamic(() => import("./RecentUpdates"));

const icon = (
   <div className="w-6 h-6">
      <OrderListSvgIcon />
   </div>
);

type Props = {
   params: {
      id: number;
   };
};

export default function OrderDetailsContent({ params }: Props) {
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getOrder({ id: params?.id }));
   }, [dispatch, params]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Order Detials" />
         <Grid cols={12} gap={9}>
            <div className="1xl2:col-span-6 col-span-12 3xs:mb-0 mb-7">
               <OrderCalculationGrid />
            </div>
            <div className="1xl2:col-span-6 col-span-12 3xs:mb-0 mb-7">
               <RecentUpdateTimeline />
            </div>
            <RecentUpdates />
         </Grid>
      </Fragment>
   );
}
