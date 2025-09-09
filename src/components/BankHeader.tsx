import React from 'react';
import iciciLogo from '../icici-header-logo.png';

export const BankHeader: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={iciciLogo} alt="Bank Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-blue-700">Bank Portal</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li>
              <a href="#" className="hover:text-blue-700 transition-colors">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition-colors">Accounts</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition-colors">Services</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-700 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
