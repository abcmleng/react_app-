// import React from 'react';
// import { CreditCard, Shield } from 'lucide-react';
// import { VerificationType } from '../types';

// interface VerificationCardsProps {
//   onSelect: (type: VerificationType) => void;
// }

// export const VerificationCards: React.FC<VerificationCardsProps> = ({ onSelect }) => {
//   return (
//     <div className="h-full flex items-center justify-center p-8">
//       <div className="max-w-md w-full space-y-6">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Verification Method</h2>
//           <p className="text-gray-600">Select your preferred verification type to continue</p>
//         </div>
        
//         <div className="space-y-4">
//           <button
//             onClick={() => onSelect('bank')}
//             className="w-full p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
//                 <CreditCard className="w-6 h-6 text-blue-600" />
//               </div>
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-gray-900">Bank Verification</h3>
//                 <p className="text-gray-500 text-sm">Verify using your banking credentials</p>
//               </div>
//             </div>
//           </button>

//           <button
//             onClick={() => onSelect('government')}
//             className="w-full p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
//           >
//             <div className="flex items-center space-x-4">
//               <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
//                 <Shield className="w-6 h-6 text-blue-600" />
//               </div>
//               <div className="text-left">
//                 <h3 className="text-lg font-semibold text-gray-900">Government Verification</h3>
//                 <p className="text-gray-500 text-sm">Verify using government-issued information</p>
//               </div>
//             </div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { CreditCard, Shield, TestTube } from 'lucide-react';
import { VerificationType } from '../types';

interface VerificationCardsProps {
  onSelect: (type: VerificationType) => void;
  testMode: boolean;
  onTestModeToggle: () => void;
}

export const VerificationCards: React.FC<VerificationCardsProps> = ({ 
  onSelect, 
  testMode, 
  onTestModeToggle 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <img src="src/security.png" alt="ID Merit Logo" className="h-10 w-auto" />
              <span className="font-bold text-xl text-gray-900">IDAssure</span>
            </div>
            <nav className="flex items-center space-x-4">
              {/* Test Mode Toggle */}
              <div className="flex items-center space-x-2">
                <TestTube className={`w-4 h-4 ${testMode ? 'text-orange-600' : 'text-gray-400'}`} />
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={testMode}
                    onChange={onTestModeToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                </label>
                <span className={`text-sm font-medium ${testMode ? 'text-orange-600' : 'text-gray-500'}`}>
                  Test Mode
                </span>
              </div>
              <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow">
          {testMode && (
            <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <TestTube className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Test Mode Active</span>
              </div>
              <p className="text-sm text-orange-700">
                Using dummy data for testing. Bank: emails A-M = low risk, N-Z = high risk. 
                Government: names A-M = low risk, N-Z = high risk.
              </p>
            </div>
          )}
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Verification Method</h2>
            <p className="text-gray-600">Select your preferred verification type to continue</p>
          </div>
          
          <div className="space-y-4">
            <button
              onClick={() => onSelect('bank')}
              className="w-full p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Bank Verification</h3>
                  <p className="text-gray-500 text-sm">Verify using your banking credentials</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => onSelect('government')}
              className="w-full p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Government Verification</h3>
                  <p className="text-gray-500 text-sm">Verify using government-issued information</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} IDAssure. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
