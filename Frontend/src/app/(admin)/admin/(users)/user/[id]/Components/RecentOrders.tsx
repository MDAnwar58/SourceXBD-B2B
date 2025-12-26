"use client";
import { RightArrowSvgIcon } from "@admin/components/SvgIcons";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"), {
   ssr: false,
});
const RecentOrder = dynamic(() => import("./RecentOrder"), {
   ssr: false,
});

type UserInf = {
   image: string | null;
   name: string;
};

type Product = {
   name: string;
};

type Order = {
   created_at: string;
   id: number;
   transaction_id: any;
   product: Product;
   user: UserInf;
};

export default function RecentOrders() {
   const { orders = [] } = useSelector((state: AdminState) => state.admin.user);
   const Orders: Order[] = orders;

   return Orders.length > 0 ? (
      <div className="bg-[#ffffff] rounded-[14px] shadow-admin-card">
         <div className="bg-white border-b border-gray-300 rounded-t-[14px] xs6:flex justify-between items-center px-5 py-3 h-[10%] sticky top-0">
            <div className="text-[#2f2f2f] xs6:text-left text-center font-['Raleway-Bold',_sans-serif] text-xs font-bold xs6:pt-0 pt-3">
               Recent Orders
            </div>

            <NavLink
               href="/admin/orders"
               className="flex items-center xs6:justify-start justify-center gap-x-1 text-[#4285f4] xs6:w-auto w-[5.3rem] xs6:mx-0 mx-auto xs6:mt-0 mt-[.05rem]"
            >
               <div className=" text-left font-['Arial-Regular',_sans-serif] text-[10px] font-normal">
                  See all updates
               </div>
               <div className="w-2.5 h-2.5">
                  <RightArrowSvgIcon />
               </div>
            </NavLink>
         </div>
         <div className="h-[85%] overflow-y-auto">
            <div className="px-5 pt-4 ">
               {Orders.length > 0
                  ? Orders.map((order, index: number) => {
                       return (
                          <Fragment key={index + 1}>
                             <RecentOrder order={order} index={index} />
                          </Fragment>
                       );
                    })
                  : null}
            </div>
         </div>
      </div>
   ) : (
      <div className="bg-[#ffffff] text-xl text-gray-500 font-semibold rounded-[14px] text-center shadow-admin-card py-3 h-auto">
         Order not found
      </div>
   );
}
