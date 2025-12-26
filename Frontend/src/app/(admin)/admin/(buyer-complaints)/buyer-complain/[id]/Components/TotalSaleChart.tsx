"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalSaleChart() {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: number[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Profits",
            data: [20, 15, 30, 60, 25, 35, 50, 45, 40], // Sample profits data
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
         stroke: {
            curve: "straight",
            width: 2,
            colors: ["#90FF38"], // Line border color (black)
         },
         fill: {
            gradient: {
               opacityFrom: 0.3,
               opacityTo: 0.9,
            },
            type: "solid",
            colors: ["rgba(144, 255, 56, .2)"], // Background color (green)
         },
         colors: ["#90FF38"], // Set line color similar to the chart you uploaded
         tooltip: {
            enabled: true,
            y: {
               formatter: (value: any) => `$${value.toFixed(2)}`,
            },
         },
      },
   });

   return (
      <div className="overflow-hidden -mt-5 h-12 5xl:w-[175px] 3xl:w-[135px] 2xl:w-[85px] 6lg:w-[175px] 3lg:w-[115px] lg:w-[95px]  4md:w-[175px] md:w-[105px] 3xs:w-[175px] xs:w-[135px] xs3:w-[95px] xs5:w-[65px] w-[35px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
