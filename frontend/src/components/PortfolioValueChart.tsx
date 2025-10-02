"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Sample data for the chart
const chartData = [
  { month: "April", value: 23000 },
  { month: "May", value: 28000 },
  { month: "June", value: 26000 },
  { month: "July", value: 31000 },
  { month: "August", value: 35000 },
  { month: "September", value: 38000 },
];

const chartConfig = {
  value: {
    label: "Portfolio Value",
    color: "#2563eb", // blue-600
  },
};

export default function PortfolioValueChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Value Over Time</CardTitle>
        <CardDescription>Last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Adjusted min-height for better alignment */}
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            {/* ... rest of the bar chart is perfect ... */}
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickFormatter={(value) => `₹${Number(value) / 1000}k`}
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}