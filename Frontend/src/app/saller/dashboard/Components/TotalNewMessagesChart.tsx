"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TotalNewMessagesChart() {
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
        colors: ["#457eef"], // Line border color (black)
      },
      fill: {
        gradient: {
          opacityFrom: 0.3,
          opacityTo: 0.9,
        },
        type: "solid",
        colors: ["#D8F0FD"], // Background color (green)
      },
      colors: ["#457eef"], // Set line color similar to the chart you uploaded
      tooltip: {
        enabled: true,
        y: {
          formatter: (value: any) => `$${value.toFixed(2)}`,
        },
      },
    },
  });

  return (
    <div className="overflow-hidden -mt-5">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={73}
      />
    </div>
  );
}
