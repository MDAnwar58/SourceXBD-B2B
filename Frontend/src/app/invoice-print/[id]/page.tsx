import React from "react";
import PrintContent from "./Components/PrintContent";

type Props = {
   params: {
      id: number;
   };
};

export default function InvoicePrint({ params }: Props) {
   return <PrintContent params={params} />;
}
