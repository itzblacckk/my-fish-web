import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import FishManager from './FishManager';

const mockData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 2000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
];

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {user?.email}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Total Sales
          </h3>
          <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            ₹45,678
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Active Orders
          </h3>
          <p className="text-3xl font-bold text-green-600 dark:text-green-400">
            12
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Low Stock Items
          </h3>
          <p className="text-3xl font-bold text-red-600 dark:text-red-400">
            5
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Sales Overview
        </h3>
        <div className="w-full overflow-x-auto">
          <LineChart
            width={800}
            height={300}
            data={mockData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#3B82F6"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </div>
      </div>

      <FishManager />
    </div>
  );
}