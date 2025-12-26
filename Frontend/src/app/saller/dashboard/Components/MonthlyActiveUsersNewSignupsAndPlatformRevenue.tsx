"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   data: { x: string; y: number }[];
   categories: string[];
};

export default function MonthlyActiveUsersNewSignupsAndPlatformRevenue({
   data,
   categories,
}: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         // {
         //    name: "South",
         //    data: [
         //       { x: "Jan", y: 20 },
         //       { x: "Feb", y: 30 },
         //       { x: "Mar", y: 40 },
         //       { x: "Apr", y: 35 },
         //       { x: "May", y: 50 },
         //       { x: "Jun", y: 55 },
         //       { x: "Jul", y: 70 },
         //    ],
         // },
         // {
         //    name: "North",
         //    data: [
         //       { x: "Jan", y: 10 },
         //       { x: "Feb", y: 15 },
         //       { x: "Mar", y: 25 },
         //       { x: "Apr", y: 20 },
         //       { x: "May", y: 30 },
         //       { x: "Jun", y: 35 },
         //       { x: "Jul", y: 40 },
         //    ],
         // },
         {
            name: "Sales",
            data: data,
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
                  return `${val}৳`; // Adds the "K" suffix for thousands
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
