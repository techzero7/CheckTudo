import React from 'react';
import { FileText, CheckSquare, Clock } from 'lucide-react';

export function UserDashboard() {
  const stats = [
    { name: 'Forms Assigned', value: '12', icon: FileText },
    { name: 'Forms Completed', value: '8', icon: CheckSquare },
    { name: 'Pending Forms', value: '4', icon: Clock },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">User Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white overflow-hidden rounded-lg shadow">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Forms</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Form {i}</h3>
                    <p className="text-sm text-gray-500">Due: {new Date().toLocaleDateString()}</p>
                  </div>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                    Fill Out
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}