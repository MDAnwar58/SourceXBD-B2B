"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   salesData: any[];
   salesItemsData: any[];
};

export default function SalesOverTimeCart({
   salesData,
   salesItemsData,
}: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Sales Money",
            data: salesData,
         },
         {
            name: "Sales Items",
            data: salesItemsData,
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            stacked: true,
         },
         colors: ["#FF6C6C", "#4285F4"],
         dataLabels: {
            enabled: false,
         },
         stroke: {
            curve: "straight",
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
            categories: [
               "Jan",
               "Feb",
               "Mar",
               "Apr",
               "May",
               "Jun",
               "Jul",
               "Aug",
               "Sep",
               "Oct",
               "Nov",
               "Dec",
            ], // Month names
            labels: {
               style: {
                  fontSize: "12px",
               },
            },
         },
         yaxis: {
            labels: {
               formatter: function (val: number) {
                  return val + "৳"; // Adds "K" for thousands
               },
            },
         },
      },
   });

   return (
      <div className="ps-3 pe-5 13xl:h-[465px] 12xl:h-[405px] 11xl:h-[375px] 1xl:h-[350px] 4md:h-[325px] 3xs:h-[275px] h-[315px] 3xs:w-full w-[515px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
