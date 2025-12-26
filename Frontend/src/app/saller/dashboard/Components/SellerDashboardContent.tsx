"use client";
import React, { Fragment, useEffect } from "react";
import { DashboardOverviewSvgIcon } from "@/saller/components/SvgIcons";
import { AppDispatch } from "@/saller/store";
import { useDispatch } from "react-redux";
import {
   getDashboardDatas,
   getRecentMessages,
   getRecentOrders,
   getTopSellingProducts,
} from "@/saller/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const TopSellingProducts = dynamic(() => import("./TopSellingProducts"));
const ViewOrdersTable = dynamic(() => import("./ViewOrdersTable"));
const RecentMessagesCard = dynamic(() => import("./RecentMessagesCard"));
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const OverviewGridCard = dynamic(() => import("./OverviewGridCard"));
const Grid = dynamic(() => import("@/saller/components/grid"));
const MonthlyActiveUsersNewSignupsAndPlatformRevenueCard = dynamic(
   () => import("./MonthlyActiveUsersNewSignupsAndPlatformRevenueCard")
);

const icon = (
   <span className="w-6 h-6">
      <DashboardOverviewSvgIcon />
   </span>
);

export default function SellerDashboardContent() {
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getDashboardDatas());
      dispatch(getTopSellingProducts());
      dispatch(getRecentOrders());
      dispatch(getRecentMessages());
   }, [dispatch]);

   return (
      <Fragment>
         <PageHeader icon={icon} title="Overview" searchBox={false} />

         <OverviewGridCard />
         {/* <div>
            <Button
               type="button"
               className=" bg-blue-500 rounded-lg px-5 py-2 text-white"
               onClick={() => testPaymentSystem()}
            >
               Payment System Test
            </Button>
         </div> */}
         <Grid cols={12} gap={7} className=" mb-7">
            <div className="2xl:col-span-8 col-span-12">
               <MonthlyActiveUsersNewSignupsAndPlatformRevenueCard />
            </div>

            <div className=" 2xl:col-span-4 col-span-12 xs:mt-0 mt-7 w-full">
               <TopSellingProducts />
            </div>
         </Grid>

         <div className=" mb-20">
            <ViewOrdersTable />
            <RecentMessagesCard />
         </div>
      </Fragment>
   );
}
