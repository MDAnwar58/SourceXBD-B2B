"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function SpendingSummaryChart() {
    const [chartData, setChartData] = useState<{
        series: { name: string; data: number[] }[];
        options: ApexOptions;
    }>({
        series: [
            {
                name: "Profits",
                data: [120, 115, 130, 160, 125, 135, 150, 145, 140], // Sample profits data
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
                curve: "smooth",
                width: 2,
                colors: ["#4285F4"], // Line border color (black)
            },
            fill: {
                gradient: {
                    opacityFrom: 0.3,
                    opacityTo: 0.9,
                },
                type: "solid",
                colors: ["rgba(66, 133, 244, 0.15)"], // Background color
            },
            colors: ["#4285F4"], // Set line color similar to the chart you uploaded
            tooltip: {
                enabled: true,
                y: {
                    formatter: (value: any) => `$${value.toFixed(2)}`,
                },
            },
        },
    });

    return (
        <div className="overflow-hidden -mt-5 h-[130px]">
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="area"
                height="100%"
            />
        </div>
    );
}
