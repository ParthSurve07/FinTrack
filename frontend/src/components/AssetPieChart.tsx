"use client";

import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChartTooltip } from "./ui/chart";
import { CustomTooltip } from "./CustomChartTooltip";

const chartData = [
  { asset: "Stocks", value: 50 },
  { asset: "Mutual Funds", value: 30 },
  { asset: "Crypto", value: 20 },
];

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
];

export default function AssetPieChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Current portfolio distribution</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="asset"
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={150}
                paddingAngle={4}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <ChartTooltip
                cursor={false}
                content={<CustomTooltip />}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}