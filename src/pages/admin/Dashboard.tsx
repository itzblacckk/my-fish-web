import React from 'react';
import { BarChart3, Users, DollarSign, Package } from 'lucide-react';
import { useFishCollection } from '../../hooks/useFishCollection';

export default function Dashboard() {
  const { fish } = useFishCollection({
    search: '',
    minPrice: 0,
    maxPrice: Infinity,
    variety: ''
  });

  const stats = [
    {
      icon: Package,
      label: 'Total Fish',
      value: fish.length,
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      label: 'Customers',
      value: '124',
      color: 'bg-green-500'
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '₹45,678',
      color: 'bg-purple-500'
    },
    {
      icon: BarChart3,
      label: 'Growth',
      value: '+12.5%',
      color: 'bg-yellow-500'
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Dashboard Overview
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Orders
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
              >
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Order #{2024001 + index}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Blue Moscow Guppy x2
                  </p>
                </div>
                <span className="px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Low Stock Alert
          </h3>
          <div className="space-y-4">
            {fish
              .filter((item) => item.stock < 10)
              .map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 last:border-0"
                >
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Stock: {item.stock} units
                    </p>
                  </div>
                  <span className="px-3 py-1 text-sm text-red-800 bg-red-100 rounded-full">
                    Low Stock
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}