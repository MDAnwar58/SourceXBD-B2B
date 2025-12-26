"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   data: { x: string; y: any }[];
   categories: string[];
};

export default function CompanyDensityChart({ data, categories }: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Monthly Sells",
            data: data,
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            stacked: true,
         },
         colors: ["#90FF38"],
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
            categories: categories, // Month names
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
      <div
         className="ps-3 pe-5 11xl:h-[365px] 7xl:h-[335px] 5xl:h-[300px] 2xl:h-[335px] 1xl:h-[300px] h-[365px] 1xl:w-full md:w-[655px] sm:w-full w-[655px]" // 300px
      >
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
