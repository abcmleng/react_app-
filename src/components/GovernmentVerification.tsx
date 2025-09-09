import React, { useState } from 'react';
import { User, Mail, Phone, ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import { GovernmentFormData, RiskData } from '../types';
import { GovernmentHeader } from './GovernmentHeader';
import { GovernmentFooter } from './GovernmentFooter';

interface GovernmentVerificationProps {
  onBack: () => void;
  onSubmit: (data: GovernmentFormData) => void;
  riskData: RiskData | null;
  isSubmitted: boolean;
}

export const GovernmentVerification: React.FC<GovernmentVerificationProps> = ({
  onBack,
  onSubmit,
  riskData,
  isSubmitted
}) => {
  const [formData, setFormData] = useState<GovernmentFormData>({
    fullName: '',
    email: '',
    phoneNumber: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    onSubmit(formData);
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted && riskData) {
    const isLowRisk = riskData.idmTrust.level === 'low';
    
    return (
      <div className="h-full flex flex-col p-8 bg-gray-50">
        <GovernmentHeader />
        <div className="flex-grow flex items-center justify-center">
          <div className="max-w-md w-full">
            <div className="flex items-center space-x-3 mb-8">
              <button
                onClick={onBack}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </button>
              <h2 className="text-2xl font-bold text-gray-900">Registration Status</h2>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border text-center">
              {isLowRisk ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Registration Successful</h3>
                  <p className="text-gray-600">
                    Your identity has been successfully verified and approved by government records.
                  </p>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">Status: APPROVED</p>
                    <p className="text-xs text-green-600 mt-1">All Registration checks passed</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Registration Failed</h3>
                  <p className="text-gray-600">
                    Your identity Registration could not be completed due to security concerns.
                  </p>
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-800 font-medium">Status: REJECTED</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <GovernmentFooter />
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-8 bg-gray-50">
      <GovernmentHeader />
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="flex items-center space-x-3 mb-8">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h2 className="text-2xl font-bold text-gray-900">Goverment Verification</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

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
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
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
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
          </form>
        </div>
      </div>
      <GovernmentFooter />
    </div>
  );
};
