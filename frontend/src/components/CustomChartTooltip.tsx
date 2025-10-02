"use client";

import { Card } from "@/components/ui/card";

export function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    const data = payload[0];
    const name = data.name || label;
    const value = data.value;
    const color = data.color || data.payload.fill;

    // Format the value as currency
    const formattedValue = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

    return (
      <Card className="p-2 text-sm border bg-background/95 shadow-lg">
        <div className="flex items-center gap-2">
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: color }}
          />
          <p className="text-muted-foreground">{name}:</p>
          <p className="font-bold">{formattedValue}</p>
        </div>
      </Card>
    );
  }

  return null;
}