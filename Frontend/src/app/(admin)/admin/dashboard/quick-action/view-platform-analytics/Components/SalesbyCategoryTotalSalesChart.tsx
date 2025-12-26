"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Props = {
   data: any[];
   categories: string[];
};

export default function SalesbyCategoryTotalSalesChart({
   data,
   categories,
}: Props) {
   const [chartData, setChartData] = useState<{
      series: {
         name: string;
         data: { x: string; y: number; fillColor: string }[];
      }[];
      options: ApexOptions;
   }>({
      series: [
         {
            name: "Sales Money",
            data: data,
         },
      ],
      options: {
         chart: {
            height: "100%",
            type: "bar",
         },
         plotOptions: {
            bar: {
               columnWidth: "99.9%",
               dataLabels: {
                  position: "top",
               },
            },
         },
         dataLabels: {
            enabled: true,
            formatter: function (val: number) {
               return "৳" + val;
            },
            offsetY: -20,
            style: {
               fontSize: "12px",
               colors: ["#304758"],
            },
         },
         xaxis: {
            // categories: ["Jan", "Feb", "Mar"], // Provide category names here
            position: "bottom", // Ensure labels appear at the bottom
            axisBorder: {
               show: true, // Display axis line
            },
            axisTicks: {
               show: true, // Display axis ticks
            },
            crosshairs: {
               fill: {
                  type: "gradient",
                  gradient: {
                     colorFrom: "#D8E3F0",
                     colorTo: "#BED1E6",
                     stops: [0, 100],
                     opacityFrom: 0.4,
                     opacityTo: 0.5,
                  },
               },
            },
            tooltip: {
               enabled: true,
            },
         },
         yaxis: {
            axisBorder: {
               show: false,
            },
            axisTicks: {
               show: false,
            },
            labels: {
               show: true,
               formatter: function (val: number) {
                  return val + "৳";
               },
            },
         },
      },
   });

   return (
      <div className="13xl:h-[465px] 12xl:h-[405px] 11xl:h-[375px] 1xl:h-[350px] 4md:h-[325px] h-[325px]">
         <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height="100%"
         />
      </div>
   );
}
