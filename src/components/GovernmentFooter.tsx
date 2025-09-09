import React from 'react';

export const GovernmentFooter: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <p>Government Office</p>
          <p>123 Government St.</p>
          <p>Email: info@govportal.gov</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Privacy & Terms</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-800 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-800 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-blue-800 transition-colors">Official Disclaimers</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-800 transition-colors">Facebook</a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-800 transition-colors">Twitter</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-800 transition-colors">LinkedIn</a>
          </div>
          <p className="mt-6 text-sm text-gray-500">&copy; 2024 Government Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
