import React from 'react';

export const GovernmentHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-blue-800 font-bold text-xl">
          Government Portal
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-blue-800 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800 transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800 transition-colors">Departments</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-800 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
