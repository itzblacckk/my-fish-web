import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', sales: 4000, orders: 240 },
  { month: 'Feb', sales: 3000, orders: 198 },
  { month: 'Mar', sales: 2000, orders: 120 },
  { month: 'Apr', sales: 2780, orders: 167 },
  { month: 'May', sales: 1890, orders: 98 },
  { month: 'Jun', sales: 2390, orders: 145 },
];

export default function Analytics() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Analytics
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Sales Overview
        </h3>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sales"
                stroke="#3B82F6"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="orders"
                stroke="#10B981"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Popular Fish Varieties
          </h3>
          <div className="space-y-4">
            {['Blue Moscow', 'Red Tail', 'Half Black'].map((variety, index) => (
              <div
                key={variety}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <span className="text-gray-900 dark:text-white">{variety}</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {85 - index * 15}% popularity
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Customer Demographics
          </h3>
          <div className="space-y-4">
            {[
              { age: '18-24', percentage: '15%' },
              { age: '25-34', percentage: '45%' },
              { age: '35-44', percentage: '25%' },
              { age: '45+', percentage: '15%' },
            ].map((demo) => (
              <div
                key={demo.age}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <span className="text-gray-900 dark:text-white">
                  Age {demo.age}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {demo.percentage}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}