import React from 'react';
import { AlertTriangle, CheckCircle, Info, Eye, EyeOff } from 'lucide-react';
import { RiskData } from '../types';
import { useState } from 'react';

interface RiskSummaryProps {
  riskData: RiskData;
}

export const RiskSummary: React.FC<RiskSummaryProps> = ({ riskData }) => {
  const [showSensitiveData, setShowSensitiveData] = useState(false);
  const isHighRisk = riskData.idmTrust.level === 'high';

  const riskComponents = [
    {
      name: 'Email Verification',
      status: riskData.idmTrust.email.verified,
      riskScore: riskData.idmTrust.email.riskScore,
      details: {
        address: riskData.idmTrust.email.address,
        reputation: riskData.idmTrust.email.reputation,
        verified: riskData.idmTrust.email.verified
      }
    },
    {
      name: 'Phone Verification',
      status: riskData.idmTrust.contact.verified,
      riskScore: riskData.idmTrust.contact.riskScore,
      details: {
        phoneNumber: riskData.idmTrust.contact.phoneNumber,
        carrier: riskData.idmTrust.contact.carrier,
        verified: riskData.idmTrust.contact.verified
      }
    },
    {
      name: 'AML Check',
      status: riskData.idmAml.status === 'clear',
      riskScore: riskData.idmAml.riskScore,
      details: {
        status: riskData.idmAml.status,
        entityName: riskData.idmAml.entityName,
        category: riskData.idmAml.category
      }
    },
    {
      name: 'IP Analysis',
      status: !riskData.idmTrust.ip.vpnDetected,
      riskScore: riskData.idmTrust.ip.riskScore,
      details: {
        address: riskData.idmTrust.ip.address,
        location: riskData.idmTrust.ip.location,
        vpnDetected: riskData.idmTrust.ip.vpnDetected
      }
    }
  ];

  const maskSensitiveData = (value: string, show: boolean = false): string => {
    if (show || !isHighRisk) return value;
    if (value.includes('@')) {
      const [username, domain] = value.split('@');
      return `${username.slice(0, 2)}${'*'.repeat(username.length - 2)}@${domain}`;
    }
    if (value.startsWith('+')) {
      return `${value.slice(0, 4)}${'*'.repeat(value.length - 4)}`;
    }
    return `${value.slice(0, 3)}${'*'.repeat(Math.max(0, value.length - 3))}`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
            <Info className="w-5 h-5" />
            <span>Risk Summary</span>
          </h3>
          <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
            isHighRisk 
              ? 'bg-red-100 text-red-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {isHighRisk ? (
              <AlertTriangle className="w-4 h-4" />
            ) : (
              <CheckCircle className="w-4 h-4" />
            )}
            <span>{isHighRisk ? 'Unsafe' : 'Safe'}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600">
          Overall Risk Level: <span className="font-medium">{riskData.idmTrust.level.toUpperCase()}</span>
        </p>
      </div>

      <div className="p-6 space-y-4">
        {riskComponents.map((component, index) => (
          <div key={index} className={`p-4 rounded-lg border ${
            component.status ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-gray-900">{component.name}</span>
              <div className={`flex items-center space-x-1 text-sm ${
                component.status ? 'text-green-700' : 'text-red-700'
              }`}>
                {component.status ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <AlertTriangle className="w-4 h-4" />
                )}
                <span>Score: {component.riskScore}</span>
              </div>
            </div>
            
            {!component.status && (
              <div className="text-sm text-red-700 space-y-1">
                {Object.entries(component.details).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="capitalize font-medium">{key}:</span>
                    <span>{typeof value === 'string' ? maskSensitiveData(value, showSensitiveData) : JSON.stringify(value)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {isHighRisk && (
          <div className="mt-4">
            <button
              onClick={() => setShowSensitiveData(!showSensitiveData)}
              className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
            >
              {showSensitiveData ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
              <span>{showSensitiveData ? 'Hide' : 'Show'} Sensitive Data</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};