"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   datas: number[];
   categories: string[];
};

export default function AllProductsChart({ datas, categories }: Props) {
   const [chartData, setChartData] = useState<{
      series: { name: string; data: number[] }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Products",
            data: datas, // Sample profits data
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
            colors: ["#F44242"], // Line border color (black)
         },
         fill: {
            gradient: {
               opacityFrom: 0.3,
               opacityTo: 0.9,
            },
            type: "solid",
            colors: ["rgba(244, 66, 66, .2)"], // Background color (green)
         },
         colors: ["#F44242"], // Set line color similar to the chart you uploaded
         tooltip: {
            enabled: true,
            y: {
               formatter: (value: any) => `${value.toFixed(0)}`,
            },
         },
         xaxis: {
            categories: categories,
         },
      },
   });

   return (
      <div className="overflow-hidden -mt-5 h-24 5xl:w-[175px] 3xl:w-[135px] 2xl:w-[85px] 6lg:w-[175px] 3lg:w-[115px] lg:w-[95px] 4md:w-[175px] md:w-[105px] 3xs:w-[175px] xs:w-[135px] xs3:w-[95px] xs5:w-[65px] w-[35px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height="100%"
         />
      </div>
   );
}
