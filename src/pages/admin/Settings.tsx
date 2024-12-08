import React from 'react';
import { Save } from 'lucide-react';

export default function Settings() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Settings
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <form className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              General Settings
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Store Name
                </label>
                <input
                  type="text"
                  defaultValue="HM Guppy Fish Store"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  defaultValue="contact@hmguppyfish.com"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91 88790 45747"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emailNotifications"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
                <label
                  htmlFor="emailNotifications"
                  className="ml-2 text-gray-700 dark:text-gray-300"
                >
                  Email notifications for new orders
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="stockAlerts"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 rounded border-gray-300"
                />
                <label
                  htmlFor="stockAlerts"
                  className="ml-2 text-gray-700 dark:text-gray-300"
                >
                  Low stock alerts
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <Save className="h-5 w-5" />
            <span>Save Settings</span>
          </button>
        </form>
      </div>
    </div>
  );
}