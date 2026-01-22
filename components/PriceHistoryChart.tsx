"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type HistoryPoint = {
  date: string;
  price: number;
};

export default function PriceHistoryChart({
  history,
}: {
  history: HistoryPoint[];
}) {
  return (
    <div className="mt-6 h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={history}>
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(v) =>
              new Date(v).toLocaleDateString("en-IE", {
                day: "numeric",
                month: "short",
              })
            }
          />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={["dataMin - 50", "dataMax + 50"]}
          />
          <Tooltip
            formatter={(value: number) => `€${value}`}
            labelFormatter={(label) =>
              new Date(label).toLocaleDateString("en-IE", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            }
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4f46e5"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}