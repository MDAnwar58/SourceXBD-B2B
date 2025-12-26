"use client";
import React, { useEffect, useState } from "react";
import {
   DashboardOverviewGridCompaniesSvgIcon,
   DashboardOverviewGridOrdersSvgIcon,
   DashboardOverviewGridProductsSvgIcon,
   DashboardOverviewGridUsersSvgIcon,
} from "@admin/components/SvgIcons";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const Img = dynamic(() => import("@/components/Image"), {
   ssr: false,
});

type DataPerchent = {
   current_month_percentage: any;
   last_month_percentage: any;
};

export default function OverviewGridCard() {
   const [userPerchent, setUserPerchent] = useState<string>("");
   const [companyPerchent, setCompanyPerchent] = useState<string>("");
   const [productPerchent, setProductPerchent] = useState<string>("");
   const [orderPerchent, setOrderPerchent] = useState<string>("");

   const {
      users,
      usersPerchent = {},
      companies_count,
      companiesPerchent = {},
      products,
      productsPerchent = {},
      orders,
      ordersPerchent,
   } = useSelector((state: AdminState) => state.admin.dashboard);
   const UsersPerchent = usersPerchent as DataPerchent | any;
   const CompaniesPerchent = companiesPerchent as DataPerchent | any;
   const ProductsPerchent = productsPerchent as DataPerchent | any;
   const OrdersPerchent = ordersPerchent as DataPerchent | any;

   useEffect(() => {
      if (
         UsersPerchent?.current_month_percentage !== undefined &&
         UsersPerchent?.last_month_percentage !== undefined
      ) {
         setUserPerchent(UsersPerchent?.current_month_percentage);
      }
      if (
         CompaniesPerchent?.current_month_percentage !== undefined &&
         CompaniesPerchent?.last_month_percentage !== undefined
      ) {
         setCompanyPerchent(CompaniesPerchent?.current_month_percentage);
      }
      if (
         ProductsPerchent?.current_month_percentage !== undefined &&
         ProductsPerchent?.last_month_percentage !== undefined
      ) {
         setProductPerchent(ProductsPerchent?.current_month_percentage);
      }
      if (
         OrdersPerchent?.current_month_percentage !== undefined &&
         OrdersPerchent?.last_month_percentage !== undefined
      ) {
         setOrderPerchent(OrdersPerchent?.current_month_percentage);
      }
   }, [UsersPerchent, CompaniesPerchent, ProductsPerchent, OrdersPerchent]);

   return (
      <div className="grid 2xl:grid-cols-4 4lg:grid-cols-3 4md:grid-cols-2 md:grid-cols-1 4xs:grid-cols-2 grid-cols-1 gap-7 mb-7">
         <div className="bg-[#ffffff] rounded-2xl w-full py-6 px-6 shadow-admin-card flex items-center">
            <div className="w-[72px] h-[72px] relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="overview grid image"
                  width={150}
                  height={150}
                  className=" -z-10 w-full h-full"
               />
               <span className=" absolute top-[50%] left-[50%] z-10 transform-translate-middle">
                  <DashboardOverviewGridUsersSvgIcon
                     width={32}
                     height={32}
                     color="white"
                  />
               </span>
            </div>
            <div className="ps-4">
               <div
                  className={`${usersPerchent?.current_month_percentage > usersPerchent?.current_month_percentage ? "text-[#1ec94c]" : "text-[#c91e1e]"} text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]`}
               >
                  {usersPerchent?.current_month_percentage >
                  usersPerchent?.current_month_percentage
                     ? `+${Number(userPerchent).toFixed(2)}%`
                     : `-${Number(userPerchent).toFixed(2)}%`}
               </div>
               <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
                  {users}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium relative w-[66px] h-[13px]">
                  Total Users
               </div>
            </div>
         </div>

         <div className="bg-[#ffffff] rounded-2xl w-full py-6 px-6 shadow-admin-card flex items-center">
            <div className="w-[72px] h-[72px] relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="overview grid image"
                  width={150}
                  height={150}
                  className=" -z-10 w-full h-full"
               />
               <span className="text-white absolute top-[50%] left-[50%] z-10 transform-translate-middle">
                  <DashboardOverviewGridCompaniesSvgIcon
                     width={32}
                     height={32}
                  />
               </span>
            </div>
            <div className="ps-4">
               <div
                  className={`${CompaniesPerchent?.current_month_percentage > CompaniesPerchent?.last_month_percentage ? "text-[#1ec94c]" : "text-[#c91e1e]"} text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]`}
               >
                  {CompaniesPerchent?.current_month_percentage >
                  CompaniesPerchent?.last_month_percentage
                     ? `+${Number(companyPerchent).toFixed(2)}%`
                     : `-${Number(companyPerchent).toFixed(2)}%`}
               </div>

               <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
                  {companies_count}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
                  Top Companies
               </div>
            </div>
         </div>

         <div className="bg-[#ffffff] rounded-2xl w-full py-6 px-6 shadow-admin-card flex items-center">
            <div className="w-[72px] h-[72px] relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="overview grid image"
                  width={150}
                  height={150}
                  className=" -z-10 w-full h-full"
               />
               <span className="text-white absolute top-[50%] left-[50%] z-10 transform-translate-middle">
                  <DashboardOverviewGridProductsSvgIcon
                     width={32}
                     height={32}
                  />
               </span>
            </div>
            <div className="ps-4">
               <div
                  className={`${ProductsPerchent?.current_month_percentage > ProductsPerchent?.last_month_percentage ? "text-[#1ec94c]" : "text-[#c91e1e]"} text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]`}
               >
                  {ProductsPerchent?.current_month_percentage >
                  ProductsPerchent?.last_month_percentage
                     ? `+${Number(productPerchent).toFixed(2)}%`
                     : `-${Number(productPerchent).toFixed(2)}%`}
               </div>
               <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
                  {products}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
                  Top products
               </div>
            </div>
         </div>

         <div className="bg-[#ffffff] rounded-2xl w-full py-6 px-6 shadow-admin-card flex items-center">
            <div className="w-[72px] h-[72px] relative">
               <Img
                  src="/assets/images/overview-gird-image.png"
                  alt="overview grid image"
                  width={150}
                  height={150}
                  className=" -z-10 w-full h-full"
               />
               <span className="text-white absolute top-[50%] left-[50%] z-10 transform-translate-middle">
                  <DashboardOverviewGridOrdersSvgIcon width={32} height={32} />
               </span>
            </div>

            <div className="ps-4">
               <div
                  className={`${OrdersPerchent?.current_month_percentage > OrdersPerchent?.last_month_percentage ? "text-[#1ec94c]" : "text-[#c91e1e]"} text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal pb-[0.15rem]`}
               >
                  {OrdersPerchent?.current_month_percentage >
                  OrdersPerchent?.last_month_percentage
                     ? `+${Number(orderPerchent).toFixed(2)}%`
                     : `-${Number(orderPerchent).toFixed(2)}%`}
               </div>
               <div className="text-[#515151] text-left font-['Arial-Bold',_sans-serif] text-2xl font-bold pb-[0.15rem]">
                  {orders}
               </div>
               <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-xs font-medium">
                  Total Orders
               </div>
            </div>
         </div>
      </div>
   );
}
