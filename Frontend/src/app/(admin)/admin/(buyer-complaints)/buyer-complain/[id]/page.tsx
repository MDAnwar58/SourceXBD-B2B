import React from "react";
import BuyerComplaintContent from "./Components/BuyerComplaintContent";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Buyer Complaints",
};

type Props = {
   params: {
      id: number;
   };
};

export default function CompanyDetails({ params }: Props) {
   return <BuyerComplaintContent params={params} />;
}
