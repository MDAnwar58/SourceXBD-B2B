"use client";
import React, { Fragment, useEffect } from "react";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getUpcomingProducts } from "../features/HomeAction";
import { LocalUrl } from "@/components/react/localhost";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const UpComingProduct = dynamic(() => import("./UpComingProduct"));

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   seller_id: number;
};

export default function UpcomingProducts() {
   const localUrl = LocalUrl();
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getUpcomingProducts());
   }, [dispatch]);

   const { upcoming_products } = useSelector(
      (state: RootState) => state.userend.home
   );
   const products: Product[] = upcoming_products;

   return (
      <div className="container pb-20">
         <div className="pb-7 xs:flex justify-between">
            <div
               className="text-left font-['Raleway-Bold',_sans-serif] text-3xl font-bold relative"
               style={{
                  background:
                     "linear-gradient(270deg,rgba(66, 133, 244, 1) 0%,rgba(38, 77, 142, 1) 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
               }}
            >
               Upcoming Products
            </div>
            <NavLink href="/products" className="3xs:block hidden">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>

         <div className=" xs6:grid xl:grid-cols-4 3md:grid-cols-3 grid-cols-12 sm:gap-7 3xs:gap-5 gap-7">
            {products.length > 0 &&
               products.map((product: Product, index: number) => (
                  <Fragment key={index}>
                     <UpComingProduct product={product} />
                  </Fragment>
               ))}
         </div>

         <div className="3xs:hidden flex justify-center pt-5">
            <NavLink href="/products">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-end">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6 ps-3">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>
      </div>
   );
}
