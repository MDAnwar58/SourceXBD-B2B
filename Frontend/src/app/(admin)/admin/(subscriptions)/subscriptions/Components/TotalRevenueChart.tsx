"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   data: number[];
   categories: string[];
};

export default function TotalRevenueChart({ data, categories }: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: number[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Profits",
            data: data, // Sample profits data
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            sparkline: {
               enabled: true, // Minimalistic chart without grid or axes
            },
         },
         xaxis: {
            categories: categories, // Months of the year
            labels: {
               style: {
                  colors: "#6B7280", // Label color
               },
            },
         },
         stroke: {
            curve: "smooth",
            width: 2,
            colors: ["#FFDE88"], // Line border color (black)
         },
         fill: {
            gradient: {
               opacityFrom: 0.3,
               opacityTo: 0.9,
            },
            type: "solid",
            colors: ["rgba(255, 222, 136, .2)"], // Background color
         },
         colors: ["#FFDE88"], // Set line color similar to the chart you uploaded
         tooltip: {
            enabled: true,
            y: {
               formatter: (value: any) => `৳${value.toFixed(2)}`,
            },
         },
      },
   });

   return (
      <div className="overflow-hidden -mt-5 h-[19.5rem]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
