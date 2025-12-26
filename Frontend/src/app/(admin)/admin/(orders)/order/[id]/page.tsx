import React from "react";
import { Metadata } from "next";
import OrderDetailsContent from "./Components/OrderDetailsContent";

export const metadata: Metadata = {
   title: "Order Detials",
   description: "Order Detials",
};

type Props = {
   params: {
      id: number;
   };
};

export default function OrderDetails({ params }: Props) {
   return <OrderDetailsContent params={params} />;
}
