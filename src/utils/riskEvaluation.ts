import { riskDataset } from '../data/riskData';
import { RiskData } from '../types';

export const evaluateEmailRisk = (email: string): RiskData | null => {
  const normalizedEmail = email.toLowerCase().trim();
  return riskDataset.find(data => 
    data.idmTrust.email.address.toLowerCase() === normalizedEmail
  ) || null;
};

export const evaluateNameRisk = (fullName: string): RiskData | null => {
  const normalizedName = fullName.toLowerCase().trim();
  
  if (normalizedName.includes('sumit')) {
    return riskDataset[1]; // High risk data
  } else {
    return riskDataset[0]; // Low risk data
  }
  
  return null;
};

export const getRiskColor = (riskLevel: 'low' | 'high'): string => {
  return riskLevel === 'low' ? '#059669' : '#DC2626';
};

export const getRiskStatus = (riskLevel: 'low' | 'high'): string => {
  return riskLevel === 'low' ? 'Safe' : 'Blocked';
};