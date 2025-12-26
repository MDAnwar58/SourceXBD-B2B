"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Data = {
   x: string;
   y: number;
};

type Props = {
   orders: Data[];
   products: Data[];
   users: Data[];
   categories: string[];
};

export default function MonthlyActiveUsersNewSignupsAndPlatformRevenue({
   orders,
   products,
   users,
   categories,
}: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Orders",
            data: orders,
         },
         {
            name: "Products",
            data: products,
         },
         {
            name: "Users",
            data: users,
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            stacked: true,
         },
         colors: ["#FF6C6C", "#4285F4", "#98B0EE"],
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "smooth",
         },
         fill: {
            type: "gradient",
            gradient: {
               opacityFrom: 0.6,
               opacityTo: 0.8,
            },
         },
         legend: {
            position: "top",
            horizontalAlign: "left",
         },
         xaxis: {
            categories: categories,
            labels: {
               style: {
                  fontSize: "12px",
               },
            },
         },
         yaxis: {
            labels: {
               formatter: function (val: number) {
                  return `${val}`; // Adds the "K" suffix for thousands
               },
            },
         },
         tooltip: {
            enabled: true,
            shared: true, // Enable tooltip for all series
            y: {
               formatter: function (
                  value: number,
                  { seriesIndex }: { seriesIndex: number }
               ) {
                  const labels = ["", "", ""]; // Units for each series
                  return `${value} ${labels[seriesIndex]}`;
               },
            },
         },
      },
   });

   return (
      <div className="4lg:h-[430px] lg:h-[370px] 4md:h-[300px] md:h-[250px] sm:h-[350px] 6xs:h-[315px] 3xs:h-[275px] xs3:h-[225px] h-[200px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
