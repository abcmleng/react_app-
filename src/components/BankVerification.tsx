import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft } from 'lucide-react';
import { BankLoginData, RiskData } from '../types';
import { TransactionForm } from './TransactionForm';
import { RecentTransactions } from './RecentTransactions';
import { BankHeader } from './BankHeader';
import { BankFooter } from './BankFooter';

interface BankVerificationProps {
  onBack: () => void;
  onLogin: (data: BankLoginData) => void;
  riskData: RiskData | null;
  isLoggedIn: boolean;
}

export const BankVerification: React.FC<BankVerificationProps> = ({
  onBack,
  onLogin,
  riskData,
  isLoggedIn
}) => {
  const [formData, setFormData] = useState<BankLoginData>({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('BankVerification handleSubmit called with:', formData);
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    onLogin(formData);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isLoggedIn && riskData) {
    return (
      <>
        <BankHeader />
        <div className="h-full p-8 bg-gray-50">
          <div className="max-w-md mx-auto space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">Banking Dashboard</h2>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="text-center mb-4">
                <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
                  riskData.idmTrust.level === 'low' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {riskData.idmTrust.level === 'low' ? 'Registration Verified' : 'Registration Flagged'}
                </div>
              </div>
              <p className="text-center text-gray-600 mb-6">
                Hello, {riskData.idmAml.entityName}
              </p>
            </div>

            <TransactionForm riskData={riskData} userEmail={formData.email} />
            <RecentTransactions userEmail={formData.email} />
          </div>
        </div>
        <BankFooter />
      </>
    );
  }

  return (
    <>
      <BankHeader />
      <div className="h-full flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full">
          <div className="flex items-center space-x-3 mb-8">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Bank Login</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <span>Login</span>
              )}
            </button>
          </form>
          
        </div>
      </div>
      <BankFooter />
    </>
  );
};
