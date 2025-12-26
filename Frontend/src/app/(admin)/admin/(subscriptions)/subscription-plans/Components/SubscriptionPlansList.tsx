"use client";
import React, { Fragment, useEffect } from "react";
import {
   DashboardEditSvgIcon,
   ExtraBorderCheckSvgIcon,
   ItemSubscriptionsSvgIcon,
   PlusWithDotsInUpSvgIcon,
} from "@admin/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionPlans } from "@/admin/subscriptions/featrues/SubscriptionAcion";
import { AppDispatch } from "@admin/store";
import SubscriptionContext from "@/admin/subscriptions/featrues/SubscriptionContext";
import { AdminState } from "@admin/store";
import dynamic from "next/dynamic";
const NavLink = dynamic(() => import("@/components/NavLink"));
const PageHeader = dynamic(() => import("@admin/components/PageHeader"));
const Grid = dynamic(() => import("@admin/components/grid"));
const SallerCard = dynamic(() => import("@admin/components/card"));

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);

type Content = {
   id: number;
   subscription_id: number;
   content: string;
};

interface SubscriptionPlan {
   id: string;
   name: string;
   title: string;
   package: string;
   type: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: any;
   contents: Array<Content[]>;
}

type SubscriptionPlansData = {
   subscription_plans: SubscriptionPlan[];
};

export default function SubscriptionPlansList() {
   const { page, perPage, search } = SubscriptionContext();
   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      dispatch(getSubscriptionPlans({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const { subscription_plans } = useSelector(
      (state: AdminState) => state.admin.subscription
   );
   const Plan = subscription_plans as SubscriptionPlansData | any;
   // console.log(subscription_plans);
   return (
      <Fragment>
         <PageHeader icon={icon} title="Subscription Plans" />
         <Grid
            cols={5}
            gap={9}
            className="6xl:!grid-cols-5 1xl2:!grid-cols-4 4lg:!grid-cols-3 3md:!grid-cols-2 md:!grid-cols-1 4xs:!grid-cols-2 !grid-cols-1 lg:!gap-9 !gap-5"
         >
            {Plan?.subscriptions &&
               Plan?.subscriptions?.length > 0 &&
               Plan?.subscriptions?.map(
                  (plan: SubscriptionPlan, index: number) => (
                     <SallerCard
                        key={index + 1}
                        className="!bg-[#ffffff] hover:!bg-[rgba(152,176,238,0.05)] group transition-all duration-150 ease-linear relative 3xs:mb-0 mb-7"
                     >
                        <div className="flex justify-between items-center pb-1">
                           <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-md font-medium">
                              {plan.name}
                           </div>
                           {plan.type && (
                              <div
                                 className="bg-[#98b0ee] rounded-lg w-[91px] h-5 flex justify-center items-center text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold capitalize"
                                 style={{
                                    boxShadow:
                                       "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                 }}
                              >
                                 {plan.type}
                              </div>
                           )}
                        </div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-5">
                           {plan.title}
                        </div>

                        <div className="text-[#2f2f2f] group-hover:text-[#98b0ee]  transition-all duration-150 ease-linear text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-[.15rem]">
                           {plan.is_free ? "Free" : "TK" + plan.amount}
                        </div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-3">
                           /{plan.package || "year"}
                        </div>

                        <div className="bg-[#f5f5f5] hover:bg-[#98b0ee] text-[#515151] hover:text-white text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-full h-[25px] flex items-center justify-center mb-4">
                           Get Started
                        </div>

                        <div>
                           {plan?.contents.length > 0 ? (
                              plan?.contents.map(
                                 (requirement: any, index: number) => (
                                    <div
                                       key={index}
                                       className="flex items-center gap-x-2 mb-3"
                                    >
                                       <div className="text-[#34A853] w-4 h-4">
                                          <ExtraBorderCheckSvgIcon />
                                       </div>
                                       <div>
                                          <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium">
                                             {requirement.content}
                                          </div>
                                       </div>
                                    </div>
                                 )
                              )
                           ) : (
                              <div className="mb-2 text-gray-600 text-center font-['Raleway-Medium',_sans-serif] text-[10px] font-semibold">
                                 Requirements not found
                              </div>
                           )}
                        </div>

                        <NavLink
                           href={`/admin/subscription-plan-edit/${plan.id}`}
                           className="hidden group-hover:block text-gray-700 w-4 h-4 absolute bottom-2 left-[50%] transform-translate-x-middle transition-all duration-150 ease-linear"
                        >
                           <DashboardEditSvgIcon />
                        </NavLink>
                     </SallerCard>
                  )
               )}
            <NavLink href="/admin/subscription-plan-create">
               <SallerCard className=" !h-[345px] w-full flex items-center justify-center">
                  <div>
                     <div className="w-[37.5px] h-[37.53px] mx-auto text-[#231815] mb-3">
                        <PlusWithDotsInUpSvgIcon />
                     </div>
                     <div className="text-[#2f2f2f] text-left font-['Arial-Regular',_sans-serif] text-xs font-normal relative">
                        Add New Plan
                     </div>
                  </div>
               </SallerCard>
            </NavLink>
         </Grid>
      </Fragment>
   );
}
