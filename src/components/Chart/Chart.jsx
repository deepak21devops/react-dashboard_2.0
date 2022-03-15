import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const data = [
  {
    name: "Jan",
    Total: 2000,
  },
  {
    name: "Feb",
    Total: 1000,
  },
  {
    name: "Mar",
    Total: 3000,
  },
  {
    name: "Apr",
    Total: 1500,
  },
  {
    name: "May",
    Total: 5000,
  },
  {
    name: "Jun",
    Total: 1000,
  },
];

const Chart = () => {
  return (
    <div className="chart">
      <p className="chartTitle">Last Six Months (Revenue)</p>
      <div className="chartContainer">
        <ResponsiveContainer width="100%" height="80%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="Total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />

            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Total"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#Total)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
