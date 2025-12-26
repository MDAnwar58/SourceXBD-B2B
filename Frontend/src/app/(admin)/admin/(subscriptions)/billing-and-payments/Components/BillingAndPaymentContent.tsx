"use client";
import React, { Fragment } from "react";
import PageHeader from "@admin/components/PageHeader";
import Grid from "@/components/grid";
import SpendingSummaryCard from "./SpendingSummaryCard";
import PaymentMethodCard from "./PaymentMethodCard";
import TransactionHistoryTable from "./TransactionHistoryTable";
import { ItemSubscriptionsSvgIcon } from "@admin/components/SvgIcons";

const icon = (
   <div className="w-6 h-6">
      <ItemSubscriptionsSvgIcon />
   </div>
);

export default function BillingAndPaymentContent() {
   return (
      <Fragment>
         <PageHeader icon={icon} title="Transaction Histories" />
         <Grid cols={12} gap={7}>
            {/* <div className="6lg:col-span-6 col-span-12 3xs:mb-0 mb-7">
               <SpendingSummaryCard />
            </div>
            <div className="6lg:col-span-6 col-span-12 3xs:mb-0 mb-7">
               <PaymentMethodCard />
            </div> */}
            <TransactionHistoryTable />
         </Grid>
      </Fragment>
   );
}
