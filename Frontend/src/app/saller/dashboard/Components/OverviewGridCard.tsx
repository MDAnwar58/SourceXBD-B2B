"use client";
import React from "react";
import dynamic from "next/dynamic";
const TotalOrders = dynamic(() => import("./TotalOrders"));
const TotalSell = dynamic(() => import("./TotalSell"));
const TotalProducts = dynamic(() => import("./TotalProducts"));

export default function OverviewGridCard() {
   return (
      <div className="grid 4lg:grid-cols-3 4md:grid-cols-2 md:grid-cols-1 4xs:grid-cols-2 grid-cols-1 gap-7 mb-7">
         <TotalOrders />
         <TotalSell />
         <TotalProducts />
      </div>
   );
}
