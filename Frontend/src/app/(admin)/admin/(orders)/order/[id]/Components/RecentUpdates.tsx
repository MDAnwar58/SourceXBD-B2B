"use client";
import React from "react";
import dynamic from "next/dynamic";
const AdminCard = dynamic(() => import("@admin/components/card"));
const Grid = dynamic(() => import("@admin/components/grid"));
const PaymentInformation = dynamic(() => import("./PaymentInformation"));
const OrderInformation = dynamic(() => import("./OrderInformation"));

export default function RecentUpdates() {
   return (
      <div className="col-span-12 mb-10">
         <AdminCard>
            <div className="text-[#515151] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold pb-5">
               Recent Updates
            </div>
            <Grid cols={12} gap={7}>
               <div className="4xl:col-span-8 col-span-12 3xs:mb-0 mb-7">
                  <OrderInformation />
               </div>
               <div className="4xl:col-span-4 col-span-12">
                  <PaymentInformation />
               </div>
            </Grid>
         </AdminCard>
      </div>
   );
}
