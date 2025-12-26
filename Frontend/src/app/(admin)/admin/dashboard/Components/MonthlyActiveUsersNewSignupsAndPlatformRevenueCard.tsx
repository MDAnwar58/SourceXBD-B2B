"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"), {
   ssr: false,
});
const MonthlyActiveUsersNewSignupsAndPlatformRevenue = dynamic(
   () => import("./MonthlyActiveUsersNewSignupsAndPlatformRevenue"),
   { ssr: false }
);

export default function MonthlyActiveUsersNewSignupsAndPlatformRevenueCard() {
   const [orderDatas, setOrderDatas] = useState<any[]>([]);
   const [userDatas, setUserDatas] = useState<any[]>([]);
   const [productDatas, setProductDatas] = useState<any[]>([]);
   const [months, setMonths] = useState<string[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   const { a_year_monthly_data = [] } = useSelector(
      (state: AdminState) => state.admin.dashboard
   );

   useEffect(() => {
      setIsLoading(true);
      setTimeout(() => {
         if (a_year_monthly_data?.length > 0) {
            const monthNames = a_year_monthly_data.map(
               (data: any) => data.month
            );
            setMonths(monthNames);

            const ordersData = a_year_monthly_data.map((data: any) => {
               return {
                  x: data.month,
                  y: Number(data.new_orders),
               };
            });
            setOrderDatas(ordersData);

            const usersData = a_year_monthly_data.map((data: any) => {
               return {
                  x: data.month,
                  y: Number(data.new_users),
               };
            });
            setUserDatas(usersData);

            const productData = a_year_monthly_data.map((data: any) => {
               return {
                  x: data.month,
                  y: Number(data.new_products),
               };
            });
            setProductDatas(productData);

            setIsLoading(false);
         }
      }, 1000);
   }, [a_year_monthly_data]);

   return (
      <AdminCard className="!bg-[#ffffff] !p-0 2xl:!pt-5 !pt-3 2xl:!pe-5 !pe-3">
         {/* <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-sm font-bold mb-2 ps-5">
            Monthly Active Users, New Signups &amp; Platform Revenue
         </div> */}
         <div>
            {isLoading === true ? (
               <div className="text-center text-gray-500 text-xl font-medium py-5">
                  Loading chart...
               </div>
            ) : (
               <MonthlyActiveUsersNewSignupsAndPlatformRevenue
                  orders={orderDatas}
                  products={productDatas}
                  users={userDatas}
                  categories={months}
               />
            )}
         </div>
      </AdminCard>
   );
}
