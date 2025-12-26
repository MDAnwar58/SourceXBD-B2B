"use client";
import React, { Fragment, useEffect, useState } from "react";
import {
   ExtraBorderCheckSvgIcon,
   ItemSubscriptionsSvgIcon,
} from "@/saller/components/SvgIcons";
import { useDispatch, useSelector } from "react-redux";
import { getSubscriptionPlans } from "@/saller/subscriptions/featrues/SubscriptionAcion";
import { AppDispatch } from "@/app/saller/store";
import SubscriptionContext from "@/saller/subscriptions/featrues/SubscriptionContext";
import { SallerState } from "@/app/saller/store";
import dynamic from "next/dynamic";
import { getCookie } from "@/components/react/cookie";
import { useAuth } from "@/components/react/auth";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const Grid = dynamic(() => import("@/saller/components/grid"));
const SallerCard = dynamic(() => import("@/saller/components/card"));
const ChooseYourRightPlanHeader = dynamic(
   () => import("./ChooseYourRightPlan")
);
const TermsAndCondition = dynamic(() => import("./TermsAndCondition"));

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);

interface SubscriptionPlan {
   id: string;
   name: string;
   title: string;
   package: string;
   type: string;
   duration: string;
   product_limit: number;
   amount: number | any;
   is_free: boolean;
   requirements: any;
   is_active_for_user: boolean;
}

export default function SubscriptionPlansList() {
   const { page, perPage, search } = SubscriptionContext();
   const [user, setUser] = useState<any | null>(null);

   const dispatch = useDispatch<AppDispatch>();

   useEffect(() => {
      const token = getCookie("auth");
      const user = useAuth(token);
      if (user) {
         setUser(user);
      }
      dispatch(getSubscriptionPlans({ page, perPage, search }));
   }, [dispatch, page, perPage, search]);

   const { subscription_plans } = useSelector(
      (state: SallerState) => state.saller.subscription
   );

   const subscriptionPlan: SubscriptionPlan[] = subscription_plans;

   return (
      <Fragment>
         <PageHeader icon={icon} title="Subscription Plans" searchBox={false} />
         <ChooseYourRightPlanHeader />
         <Grid
            cols={5}
            gap={9}
            className="6xl:!grid-cols-5 1xl2:!grid-cols-4 4lg:!grid-cols-3 3md:!grid-cols-2 md:!grid-cols-1 4xs:!grid-cols-2 !grid-cols-1 lg:!gap-9 !gap-5"
         >
            {subscriptionPlan &&
               subscriptionPlan?.length > 0 &&
               subscriptionPlan?.map(
                  (plan: SubscriptionPlan, index: number) => (
                     <SallerCard
                        key={index + 1}
                        className="!bg-[#ffffff] hover:!bg-[rgba(152,176,238,0.05)] group transition-all duration-150 ease-linear relative 3xs:mb-0 mb-7"
                     >
                        <div className="flex justify-between items-center pb-1">
                           <div className="text-[#2f2f2f] text-left font-['Raleway-Medium',_sans-serif] text-md font-medium">
                              {plan.name}
                           </div>
                           {plan.type ? (
                              <div className="space-y-1">
                                 <div
                                    className="bg-[#98b0ee] rounded-lg w-[91px] h-5 flex justify-center items-center text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold capitalize"
                                    style={{
                                       boxShadow:
                                          "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                    }}
                                 >
                                    {plan.type}
                                 </div>

                                 {plan?.is_active_for_user === true && (
                                    <div
                                       className="bg-[#34a853] rounded-lg w-[63px] h-5 flex justify-center items-center gap-[.2rem] ms-auto"
                                       style={{
                                          boxShadow:
                                             "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                       }}
                                    >
                                       <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                                          Active
                                       </div>
                                       <div className="bg-[#90ff38] rounded-[50%] w-2 h-2 relative" />
                                    </div>
                                 )}
                              </div>
                           ) : (
                              plan?.is_active_for_user === true && (
                                 <div
                                    className="bg-[#34a853] rounded-lg w-[63px] h-5 flex justify-center items-center gap-[.2rem]"
                                    style={{
                                       boxShadow:
                                          "-2px -2px 10px 0px rgba(101, 101, 101, 0.25),2px 2px 10px 0px rgba(0, 0, 0, 0.25)",
                                    }}
                                 >
                                    <div className="text-[#ffffff] text-left font-['Raleway-Bold',_sans-serif] text-[8px] font-bold">
                                       Activate
                                    </div>
                                    <div className="bg-[#90ff38] rounded-[50%] w-2 h-2 relative" />
                                 </div>
                              )
                           )}
                        </div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-5">
                           {plan.title}
                        </div>

                        <div className="text-[#2f2f2f] group-hover:text-[#98b0ee]  transition-all duration-150 ease-linear text-left font-['Arial-Regular',_sans-serif] text-2xl font-normal pb-[.15rem]">
                           {plan.is_free ? "Free" : "TK" + plan.amount}
                        </div>
                        <div className="text-[#515151] text-left font-['Raleway-Medium',_sans-serif] text-[10px] font-medium pb-3">
                           /{plan.package}
                        </div>

                        {plan?.is_active_for_user !== true && (
                           <a
                              href={`http://localhost:8000/sslcommerz/pay-now/${user?.id}/${Number(plan?.id)}`}
                              className="bg-[#f5f5f5] hover:bg-[#98b0ee] text-[#515151] hover:text-white text-left font-['Raleway-Bold',_sans-serif] text-[10px] font-bold rounded-lg w-full h-[25px] flex items-center justify-center mb-4"
                           >
                              Get Started
                           </a>
                        )}

                        <div
                           className={`${plan?.is_active_for_user === true ? "pt-3" : ""}`}
                        >
                           <div className="flex items-center gap-x-2 mb-2">
                              <div className="text-[#34A853] w-4 h-4">
                                 <ExtraBorderCheckSvgIcon />
                              </div>
                              <div>
                                 <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative w-[100px] h-2.5">
                                    Lorem ipsum dolor sit amit
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-x-2 mb-2">
                              <div className="text-[#34A853] w-4 h-4">
                                 <ExtraBorderCheckSvgIcon />
                              </div>
                              <div>
                                 <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative w-[100px] h-2.5">
                                    Lorem ipsum dolor sit amit
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-x-2 mb-2">
                              <div className="text-[#34A853] w-4 h-4">
                                 <ExtraBorderCheckSvgIcon />
                              </div>
                              <div>
                                 <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative w-[100px] h-2.5">
                                    Lorem ipsum dolor sit amit
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-x-2 mb-2">
                              <div className="text-[#34A853] w-4 h-4">
                                 <ExtraBorderCheckSvgIcon />
                              </div>
                              <div>
                                 <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative w-[100px] h-2.5">
                                    Lorem ipsum dolor sit amit
                                 </div>
                              </div>
                           </div>
                           <div className="flex items-center gap-x-2 mb-2">
                              <div className="text-[#34A853] w-4 h-4">
                                 <ExtraBorderCheckSvgIcon />
                              </div>
                              <div>
                                 <div className="text-[#000000] text-left font-['Raleway-Medium',_sans-serif] text-[8px] font-medium relative w-[100px] h-2.5">
                                    Lorem ipsum dolor sit amit
                                 </div>
                              </div>
                           </div>
                        </div>
                     </SallerCard>
                  )
               )}
         </Grid>
         <TermsAndCondition />
      </Fragment>
   );
}
