import Img from "@/components/Image";
import AdminCard from "@admin/components/card";
import Grid from "@admin/components/grid";
import React, { Fragment } from "react";
import PaymentMethodCard from "./Components/PaymentMethodCard";
import SpendingSummaryCard from "./Components/SpendingSummaryCard";
import TransactionHistoryTable from "./Components/TransactionHistoryTable";
import { ItemSubscriptionsSvgIcon } from "../../components/SvgIcons";
import PageHeader from "@admin/components/PageHeader";
import BillingAndPaymentContent from "./Components/BillingAndPaymentContent";

export default function TransactionHistory() {
   return <BillingAndPaymentContent />;
}
