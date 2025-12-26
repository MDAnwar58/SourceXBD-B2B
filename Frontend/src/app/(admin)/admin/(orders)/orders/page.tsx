import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const OrderContent = dynamic(() => import("./Components/OrderContent"));

export const metadata: Metadata = {
   title: "Orders",
   description: "Orders",
};

export default function Orders() {
   return <OrderContent />;
}
