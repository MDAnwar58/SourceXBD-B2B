import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const OrderDetailsContent = dynamic(() => import("./Components/OrderContent"), {
   ssr: false,
});

export const metadata: Metadata = {
   title: "Order Details",
};

type Props = {
   params: { id: number };
};

export default function OrderDetails({ params }: Props) {
   return <OrderDetailsContent params={params} />;
}
