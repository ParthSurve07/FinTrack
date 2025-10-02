"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  icon: React.ElementType;
  chartData: { value: number }[];
  className?: string;
};

export default function StatCard({
  title,
  value,
  change,
  icon: Icon,
  chartData,
  className
}: StatCardProps) {
  const isPositive = change && change.startsWith("+");
  const isNegative = change && change.startsWith("-");

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">{value}</div>
            {change && (
              <p
                className={cn(
                  "text-xs text-muted-foreground",
                  isPositive && "text-green-500",
                  isNegative && "text-red-500"
                )}
              >
                {change} today
              </p>
            )}
          </div>
          
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}