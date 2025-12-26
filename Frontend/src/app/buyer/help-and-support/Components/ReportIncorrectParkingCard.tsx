"use client";
import React, { useState } from "react";
import { ReportIncorrectParking } from "./ReportIncorrectParking";
import dynamic from "next/dynamic";
const Card = dynamic(() => import("@/components/card"), {
   ssr: false,
});

type Props = {
   faqAccordions?: any[] | undefined;
};

export default function ReportIncorrectParkingCard({ ...props }) {
   const { faqAccordions = [] } = props;
   return (
      <div>
         <Card>
            <div className="text-[#2f2f2f] text-left font-['Raleway-Bold',_sans-serif] text-xl font-bold">
               Report incorrect parking
            </div>
            <ReportIncorrectParking faqAccordions={faqAccordions} />
         </Card>
      </div>
   );
}
