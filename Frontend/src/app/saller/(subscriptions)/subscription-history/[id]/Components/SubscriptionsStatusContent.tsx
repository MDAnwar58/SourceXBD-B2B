"use client";
import { StatusSvgIcon } from "@/app/saller/components/SvgIcons";
import { AppDispatch, SallerState } from "@/saller/store";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActiveSubscriptionPlan } from "@/saller/subscriptions/featrues/SubscriptionAcion";
import dynamic from "next/dynamic";
const PageHeader = dynamic(() => import("@/saller/components/PageHeader"));
const UserAvatar = dynamic(() => import("./UserAvatar"));
const MyPlanCard = dynamic(() => import("./MyPlanCard"));
const PlanDetailsCard = dynamic(() => import("./PlanDetailsCard"));

const icon = (
   <div className="w-6 h-6">
      <StatusSvgIcon />
   </div>
);

type User = {
   company: string;
   image: string;
   name: string;
};

type SubscriptionPlan = {
   amount: number;
   duration: number | null;
   is_free: boolean | number;
   name: string;
   package: string;
   product_limit: number;
};

type SubscriptionPlanHistory = {
   end_date: string;
   is_active: boolean;
   remaining_products: number;
   start_date: string;
   subscription: SubscriptionPlan;
   user: User;
   active_product: number;
};

type Props = {
   params: { id: string };
};

export default function SubscriptionsStatusContent({ params }: Props) {
   const { id } = params;
   const dispatch = useDispatch<AppDispatch>();
   useEffect(() => {
      dispatch(getActiveSubscriptionPlan({ id: Number(id) }));
   }, [id]);

   const { subscription_plan = {} } = useSelector(
      (state: SallerState) => state.saller.subscription
   );

   const subscriptionPlanHistory = subscription_plan as
      | SubscriptionPlanHistory
      | {}
      | any;
   const subscription =
      subscriptionPlanHistory?.subscription as SubscriptionPlan;
   const user = subscriptionPlanHistory?.user as User;
   const Package = subscription?.package as string | any;
   const amount = subscription?.amount as number;
   const activeProduct =
      subscriptionPlanHistory?.active_product !== undefined
         ? subscriptionPlanHistory?.active_product
         : 0;
   const startDate =
      subscriptionPlanHistory?.start_date !== undefined
         ? subscriptionPlanHistory?.start_date
         : ("" as string);
   const endDate =
      subscriptionPlanHistory?.end_date !== undefined
         ? subscriptionPlanHistory?.end_date
         : ("" as string);

   return (
      <Fragment>
         <PageHeader
            icon={icon}
            title="Subscriptions Status"
            searchBox={false}
         />

         {/* Subscriptions content section  start */}
         <div
            className="bg-[#ffffff] rounded-[20px] p-8 mb-5"
            style={{
               boxShadow:
                  "-1px -1px 5px 0px rgba(101, 101, 101, 0.2),1px 1px 5px 0px rgba(0, 0, 0, 0.2)",
            }}
         >
            <UserAvatar user={user} />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
               <MyPlanCard
                  subscription={subscription}
                  activeProduct={activeProduct}
                  startDate={startDate}
                  endDate={endDate}
               />
               <PlanDetailsCard
                  Package={Package}
                  amount={amount}
                  endDate={endDate}
               />
            </div>
         </div>
      </Fragment>
   );
}
