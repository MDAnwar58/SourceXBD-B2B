"use client";
import React, { Fragment, useEffect, useState } from "react";
import { SvgViewMoreArrowIcon } from "@/components/SvgIcons";
import { AppDispatch, RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import {
   getTrandingProducts,
   getTrandingProductsWithAuth,
} from "../features/HomeAction";
import dynamic from "next/dynamic";
const HomeProduct = dynamic(() => import("./HomeProduct"));
const Img = dynamic(() => import("@/components/Image"));
const NavLink = dynamic(() => import("@/components/NavLink"));

type Product = {
   id: string;
   name: string;
   slug: string;
   price: string;
   category: string;
   company: string;
   contact: string;
   image: string;
   is_wish_active: boolean;
   seller_id: number;
};

export default function TrendyProducts() {
   const [userId, setUserId] = useState<number | null>(null);
   const dispatch = useDispatch<AppDispatch>();

   const { auth, user } = useSelector(
      (state: RootState) => state.userend.common
   );
   useEffect(() => {
      if (auth === true) {
         setUserId(user?.id);
         dispatch(getTrandingProductsWithAuth());
      } else {
         dispatch(getTrandingProducts());
      }
   }, [auth, user, dispatch]);

   const { tranding_products } = useSelector(
      (state: RootState) => state.userend.home
   );
   const products: Product[] = tranding_products;

   return (
      <div className="container  pt-20 pb-24 relative">
         <Img
            src="/assets/images/product-area-background-image.png"
            alt="Product Area Background Image"
            width={650}
            height={997}
            className=" absolute right-0 -top-[17rem] w-[94%] h-[997px] bg-cover bg-center -z-10 lg:block hidden"
         />
         <div className="pb-7 xs:flex justify-between items-center">
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
               Trendy Products
            </div>
            <NavLink href="/products" className="xs:block hidden">
               <span className="text-[#4285f4] border-b border-[#4285F4] text-left font-['Raleway-SemiBold',_sans-serif] text-base font-semibold flex items-center gap-x-2">
                  <span className=" capitalize">view more</span>
                  <span className="w-6 h-6">
                     <SvgViewMoreArrowIcon />
                  </span>
               </span>
            </NavLink>
         </div>

         <div className=" xs6:grid xl:grid-cols-4 3md:grid-cols-3 grid-cols-12 lg:gap-7 sm:gap-5 3xs:gap-3 gap-7">
            {products.length > 0 &&
               products.map((product: Product, index: number) => (
                  <Fragment key={index}>
                     <HomeProduct
                        product={product}
                        auth={auth}
                        userId={userId}
                     />
                  </Fragment>
               ))}
         </div>

         <div className="xs:hidden flex justify-center pt-5">
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
