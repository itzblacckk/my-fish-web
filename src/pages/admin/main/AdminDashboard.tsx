import { Routes, Route, Link } from 'react-router-dom';
import { PlusCircle, List, LogOut } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link
                to="/admin"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-gray-900"
              >
                Dashboard
              </Link>
              <Link
                to="/admin/add-fish"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-gray-900"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Add Fish
              </Link>
              <Link
                to="/admin/fish-list"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 hover:text-gray-900"
              >
                <List className="h-5 w-5 mr-2" />
                Fish List
              </Link>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 hover:text-red-700">
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<div>Fish List</div>} />
          <Route path="/add-fish" element={<div>Add Fish Form</div>} />
          <Route path="/fish-list" element={<div>Fish List</div>} />
        </Routes>
      </main>
    </div>
  );
}
