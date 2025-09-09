import React from 'react';

export const BankFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p>123 Bank Street</p>
          <p>City, State, ZIP</p>
          <p>Email: support@bank.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-700 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-700 transition-colors">Accounts</a></li>
            <li><a href="#" className="hover:text-blue-700 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-blue-700 transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-700 transition-colors">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-700 transition-colors">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors">LinkedIn</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">&copy; 2024 Bank Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
