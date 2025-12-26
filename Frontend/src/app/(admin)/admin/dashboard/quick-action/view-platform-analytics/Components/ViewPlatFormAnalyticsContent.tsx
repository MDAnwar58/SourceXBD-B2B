"use client";
import { DashboardQucikActionSvgIcon } from "@admin/components/SvgIcons";
import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminState, AppDispatch } from "@admin/store";
import { getViewPlatformAnalytics } from "@admin/dashboard/features/DashboardAction";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@admin/components/PageHeader"), {
   ssr: false,
});
const OverTimeTotalSalesAndTargetAmount = dynamic(
   () => import("./OverTimeTotalSalesAndTargetAmount"),
   {
      ssr: false,
   }
);
const SalesOverTimeCart = dynamic(() => import("./SalesOverTimeCart"), {
   ssr: false,
});
const SalesbyCategoryTotalSalesAmount = dynamic(
   () => import("./SalesbyCategoryTotalSalesAmount"),
   {
      ssr: false,
   }
);
const SalesbyCategoryTotalSalesChart = dynamic(
   () => import("./SalesbyCategoryTotalSalesChart"),
   {
      ssr: false,
   }
);
const NewAndReturningCustomers = dynamic(
   () => import("./NewAndReturningCustomers"),
   {
      ssr: false,
   }
);
const TopSallingProduct = dynamic(() => import("./TopSallingProduct"), {
   ssr: false,
});

type MonthlySale = {
   month: string;
   total_sales_money: number;
};
type MonthlySaleItem = {
   month: string;
   total_sales_items: number;
};
type CategorySale = {
   id: number;
   name: string;
   total_sales_money: number;
};

const colors = ["#98B0EE", "#4285F4", "#98B0EE"];

const icon = (
   <span className="w-6 h-6">
      <DashboardQucikActionSvgIcon />
   </span>
);

export default function ViewPlatFormAnalyticsContent() {
   const [limit, setLimit] = useState<number>(2);
   const [monthlySalesMoneyData, setMonthlySalesMoneyData] = useState<any[]>(
      []
   );
   const [monthlySalesItemsData, setMonthlySalesItemsData] = useState<any[]>(
      []
   );
   const [categorySalesData, setCategorySalesData] = useState<any[]>([]);
   const [categorySalesDataCategories, setCategorySalesDataCategories] =
      useState<any[]>([]);
   const [loadingMothlySales, setLoadingMothlySales] = useState<boolean>(false);
   const [loadingSalesByCategoryItems, setLoadingSalesByCategoryItems] =
      useState<boolean>(false);
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getViewPlatformAnalytics({ limit }));
   }, [dispatch, limit]);

   const {
      categorySales = [],
      monthlySales = [],
      monthlySalesItems = [],
   } = useSelector((state: AdminState) => state.admin.dashboard);
   const MonthlySales = monthlySales as MonthlySale[];
   const MonthlySaleItems = monthlySalesItems as MonthlySaleItem[];
   const CategorySales = categorySales as CategorySale[];

   useEffect(() => {
      setLoadingMothlySales(true);
      if (MonthlySales?.length > 0) {
         const monthlySalesMoney = MonthlySales.map((item: MonthlySale) => {
            return {
               x: item.month,
               y: Number(item.total_sales_money),
            };
         });
         setMonthlySalesMoneyData(monthlySalesMoney);
      }
      if (MonthlySaleItems?.length > 0) {
         const monthlySalesItems = MonthlySaleItems.map(
            (item: MonthlySaleItem) => {
               return {
                  x: item.month,
                  y: Number(item.total_sales_items),
               };
            }
         );
         setMonthlySalesItemsData(monthlySalesItems);
      }
      if (MonthlySaleItems?.length > 0) {
         const monthlySalesItems = MonthlySaleItems.map(
            (item: MonthlySaleItem) => {
               return {
                  x: item.month,
                  y: Number(item.total_sales_items),
               };
            }
         );
         setMonthlySalesItemsData(monthlySalesItems);
         setLoadingMothlySales(false);
      }
   }, [MonthlySales, MonthlySaleItems]);

   useEffect(() => {
      setLoadingSalesByCategoryItems(true);
      if (CategorySales?.length > 0) {
         const categorySales = CategorySales.map((item: CategorySale, i) => {
            return {
               x: item.name,
               y: Number(item.total_sales_money),
               fillColor: colors[i % colors.length],
            };
         });
         const categoires = CategorySales.map((item: CategorySale) => {
            return item.name;
         });
         setCategorySalesDataCategories(categoires);
         setCategorySalesData(categorySales);
         setLoadingSalesByCategoryItems(false);
      }
   }, [CategorySales]);

   const onLoadMore = useCallback(
      (limit: number) => {
         setLimit(limit);
         dispatch(getViewPlatformAnalytics({ limit }));
      },
      [dispatch]
   );

   return (
      <Fragment>
         <PageHeader icon={icon} title="Qucik Action" searchBox={false} />

         <div className="3xs:grid grid-cols-12 gap-7 mb-7">
            <div className="5lg:col-span-8 col-span-12 bg-[#ffffff] rounded-[20px] shadow-admin-card 3xs:mb-0 mb-7">
               <div className=" overflow-x-auto overflow-y-hidden">
                  <OverTimeTotalSalesAndTargetAmount
                     salesData={monthlySalesMoneyData}
                     salesItemsData={monthlySalesItemsData}
                  />
                  {loadingMothlySales === true ? (
                     <div className="py-3 text-center text-gray-500 text-xl font-semibold">
                        Chart loading...
                     </div>
                  ) : (
                     <SalesOverTimeCart
                        salesData={monthlySalesMoneyData}
                        salesItemsData={monthlySalesItemsData}
                     />
                  )}
               </div>
            </div>

            <div className="5lg:col-span-4 col-span-12">
               <div className="bg-[rgba(255,255,255,0.40)] shadow-admin-card row-span-1 rounded-[20px] w-full h-full ">
                  <SalesbyCategoryTotalSalesAmount />

                  <div className=" overflow-x-auto overflow-y-hidden">
                     {loadingSalesByCategoryItems === true ? (
                        <div className="py-3 text-center text-gray-500 text-xl font-semibold">
                           Chart loading...
                        </div>
                     ) : (
                        <SalesbyCategoryTotalSalesChart
                           data={categorySalesData}
                           categories={categorySalesDataCategories}
                        />
                     )}
                  </div>
               </div>
            </div>
         </div>

         <div className="xs4:grid grid-cols-12 gap-7 mb-7">
            <div className="8xl:col-span-8 2xl:col-span-7 3lg:col-span-6 col-span-12 xs4:mb-0 mb-7">
               <NewAndReturningCustomers />
            </div>
            <div className="8xl:col-span-4 2xl:col-span-5 3lg:col-span-6 col-span-12">
               <TopSallingProduct limit={limit} onLoadMore={onLoadMore} />
            </div>
         </div>
      </Fragment>
   );
}
