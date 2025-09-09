import React from 'react';
import { AlertCircle } from 'lucide-react';
import { RiskData } from '../types';
import { DeviceInfo } from './DeviceInfo';
import { RiskSummary } from './RiskSummary';
import { RiskGauge } from './RiskGauge';

interface RiskDisplayProps {
  riskData: RiskData | null;
  isLoading?: boolean;
  verificationType?: 'bank' | 'government' | null;
}

export const RiskDisplay: React.FC<RiskDisplayProps> = ({ riskData, isLoading, verificationType }) => {
  if (isLoading) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Evaluating risk profile...</p>
        </div>
      </div>
    );
  }

  if (!riskData) {
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Waiting for Verification
          </h3>
          <p className="text-gray-600">
            Please select a verification method and complete the process to view your risk assessment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto bg-gray-50 p-6 space-y-6">
      {/* <div className="sticky top-0 bg-gray-50 pb-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Risk Evaluation Results</h2>
        <p className="text-sm text-gray-600 mt-1">
          Last updated: {new Date(riskData.idmTrust.lastUpdated).toLocaleString()}
        </p>
      </div> */}

      <RiskGauge riskData={riskData} />
      <DeviceInfo riskData={riskData} />
      {verificationType === 'government' && <RiskSummary riskData={riskData} />}
    </div>
  );
};
