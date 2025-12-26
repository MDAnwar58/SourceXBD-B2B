"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Data = {
   x: any;
   y: any;
};

type Props = {
   datas: Data[];
   months: string[];
};

export default function TotalSubscribersChart({ datas, months }: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: { x: string; y: number }[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Subscribers",
            data: datas,
         },
      ],
      options: {
         chart: {
            type: "area",
            height: "100%",
            stacked: true,
         },
         colors: ["#4285F4"],
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
            categories: months,
            labels: {
               style: {
                  fontSize: "12px",
               },
            },
         },
         yaxis: {
            labels: {
               formatter: function (val: number) {
                  return `${val} Subscribers`; // Adds the "K" suffix for thousands
               },
            },
         },
      },
   });

   return (
      <div className="h-[330px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
