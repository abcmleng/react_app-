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
import { CreditCard, Shield } from 'lucide-react';
import { VerificationType } from '../types';

interface VerificationCardsProps {
  onSelect: (type: VerificationType) => void;
}

export const VerificationCards: React.FC<VerificationCardsProps> = ({ onSelect }) => {
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
            <nav className="space-x-4">
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
