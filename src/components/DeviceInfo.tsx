import React from 'react';
import { Monitor, Shield, ShieldAlert, Eye, Wifi } from 'lucide-react';
import { RiskData } from '../types';

interface DeviceInfoProps {
  riskData: RiskData;
}

export const DeviceInfo: React.FC<DeviceInfoProps> = ({ riskData }) => {
  const { idmDevice } = riskData;
  const isHighRisk = idmDevice.riskLevel === 'high';
  const isLowRisk = idmDevice.riskLevel.toLowerCase() === 'low';

  const deviceChecks = isLowRisk ? [] : [
    {
      label: 'Private Browsing',
      status: !idmDevice.incognitoMode,
      icon: Eye,
      value: idmDevice.incognitoMode ? 'On' : 'Off'
    },
    {
      label: 'Secure Connection Masking',
      status: !idmDevice.vpn,
      icon: Wifi,
      value: idmDevice.vpn ? 'On' : 'Off'
    },
    {
      label: 'Automated Behavior',
      status: !idmDevice.platformBot,
      icon: Monitor,
      value: idmDevice.platformBot ? 'On' : 'Off'
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
          <Monitor className="w-5 h-5" />
          <span>Device Information</span>
        </h3>
        <div className={`flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium ${
          isHighRisk 
            ? 'bg-red-100 text-red-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {isHighRisk ? (
            <ShieldAlert className="w-4 h-4" />
          ) : (
            <Shield className="w-4 h-4" />
          )}
          <span>{isHighRisk ? 'Blocked' : 'Safe'}</span>
        </div>
      </div>

      <div className="space-y-3">
        {deviceChecks.map((check, index) => {
          const Icon = check.icon;
          return (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <Icon className="w-4 h-4 text-gray-600" />
                <span className="font-medium text-gray-900">{check.label}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">{check.value}</span>
                <div className={`w-2 h-2 rounded-full ${
                  check.status ? 'bg-green-500' : 'bg-red-500'
                }`}></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          <span className="font-medium">IP Location:</span> {riskData.idmTrust.ip.location}
        </p>
      </div>
    </div>
  );
};
