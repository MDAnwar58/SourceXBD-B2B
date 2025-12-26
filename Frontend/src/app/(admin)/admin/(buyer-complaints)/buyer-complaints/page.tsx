import React from "react";
import BuyerComplaintContent from "./Components/BuyerComplaintContent";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Buyer Complaints",
};

export default function BuyerComplaints() {
   return <BuyerComplaintContent />;
}
