"use client";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@admin/store";
import {
   getDashboardDatas,
   getPendingCompnaies,
   getPendingProducts,
} from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const Grid = dynamic(() => import("@/components/grid"), {
   ssr: false,
});
const OverviewGridCard = dynamic(() => import("./OverviewGridCard"), {
   ssr: false,
});
const MonthlyActiveUsersNewSignupsAndPlatformRevenueCard = dynamic(
   () => import("./MonthlyActiveUsersNewSignupsAndPlatformRevenueCard"),
   {
      ssr: false,
   }
);
const TotalNewMessages = dynamic(() => import("./TotalNewMessages"), {
   ssr: false,
});
const SystemAlerts = dynamic(() => import("./SystemAlerts"), {
   ssr: false,
});
const PendingApprovalsCompanies = dynamic(
   () => import("./PendingApprovalsCompanies"),
   {
      ssr: false,
   }
);
const PendingApprovalsProducts = dynamic(
   () => import("./PendingApprovalsProducts"),
   {
      ssr: false,
   }
);

export default function DashboardContent() {
   const [limit, setLimit] = useState<number>(3);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getDashboardDatas());
      dispatch(getPendingCompnaies({ limit: 3, search: "" }));
      dispatch(getPendingProducts({ limit, search: "" }));
   }, [dispatch]);

   const loadMorePendingProducts = useCallback(
      (limit: number) => {
         setLimit(limit);
         dispatch(getPendingProducts({ limit, search: "" }));
      },
      [dispatch]
   );

   return (
      <Fragment>
         <OverviewGridCard />
         <Grid cols={12} gap={7} className=" mb-7">
            <div className="3xl:col-span-9 2xl:col-span-8 col-span-12">
               <MonthlyActiveUsersNewSignupsAndPlatformRevenueCard />
            </div>

            <div className="3xl:col-span-3 2xl:col-span-4 col-span-12 xs:mt-0 mt-7">
               <div className="2xl:h-full 2xl:block grid grid-cols-12 xl:gap-11 gap-7">
                  <div className="2xl:h-[46.1%] h-full 5md:col-span-6 4md:col-span-7 md:col-span-12 6xs:col-span-6 col-span-12 mb-7">
                     <TotalNewMessages />
                  </div>
                  <div className="2xl:h-[46.1%] 5md:col-span-6 4md:col-span-7 md:col-span-12 6xs:col-span-6 col-span-12">
                     <SystemAlerts />
                  </div>
               </div>
            </div>
         </Grid>

         <div className="grid grid-cols-12 gap-4 mb-20">
            <PendingApprovalsCompanies />
            <PendingApprovalsProducts
               loadMorePendingProducts={loadMorePendingProducts}
               limit={limit}
            />
         </div>
      </Fragment>
   );
}
