import React from 'react';
import { ClipboardList } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ClipboardList className="h-8 w-8" />
            <h1 className="text-2xl font-bold">FormFlow</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
              Dashboard
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
              Forms
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors">
              Reports
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}