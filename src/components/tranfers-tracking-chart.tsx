import React, { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Brush,
} from "recharts";

export type PayrollTransferData = {
  day: number;
  amount: number;
};

export type PayrollTransferMonthData = {
  name: string;
  payrolls: Record<string, PayrollTransferData[]>;
};

export type PayrollTransferChartProps = {
  data: PayrollTransferMonthData[];
};

const PayrollTransferChart = ({ data }: PayrollTransferChartProps) => {
  // Transform data to aggregate monthly totals for each payroll
  const transformedData = useMemo(() => {
    // Collect all unique payroll names across months
    const allPayrolls = new Set<string>();
    data.forEach((month) => {
      Object.keys(month.payrolls).forEach((payroll) =>
        allPayrolls.add(payroll)
      );
    });

    // Transform the data
    return Array.from(allPayrolls).map((payroll) => {
      const payrollData: Record<string, number | string> = { payroll };

      data.forEach((month) => {
        const monthTransfers = month.payrolls[payroll] || [];
        payrollData[month.name] = monthTransfers.reduce(
          (total, transfer) => total + transfer.amount,
          0
        );
      });

      return payrollData;
    });
  }, [data]);

  // Color palette for departments
  const colorPalette = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7300",
    "#0088fe",
    "#00c49f",
  ];

  return (
    <div className="w-full h-[700px] bg-white text-primary-content rounded-lg py-2 border border-slate-300">
      <h2 className="text-lg font-extrabold uppercase text-center text-secondary">
        Most Recent Quarterly Expenses by Payroll
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData}
          margin={{ top: 20, right: 20, left: 40, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="payroll" />
          <YAxis
            label={{
              value: "Monthly Expenses ($)",
              angle: -90,
              offset: -20,
              position: "insideLeft",
            }}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip
            formatter={(value) => [
              `$${Number(value).toLocaleString()}`,
              "Expenses",
            ]}
          />
          <Legend />
          <Brush dataKey="payroll" height={30} stroke="#263e3f" />
          {data.map((month, index) => (
            <Bar
              key={month.name}
              dataKey={month.name}
              fill={colorPalette[index % colorPalette.length]}
              name={month.name}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PayrollTransferChart;
