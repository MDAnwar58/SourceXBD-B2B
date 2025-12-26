import React from "react";
import InvoiceContent from "./Components/InvoiceContent";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Invoice",
   description: "Invoice",
};

type Props = {
   params: {
      id: number;
   };
};

export default function OrderInvoice({ params }: Props) {
   return <InvoiceContent params={params} />;
}
