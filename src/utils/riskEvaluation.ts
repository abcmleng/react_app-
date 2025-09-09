import { riskDataset } from '../data/riskData';
import { lowRiskData, highRiskData, convertToRiskData } from '../data/riskData';
import { RiskData } from '../types';

export const evaluateEmailRisk = (email: string, testMode: boolean = false): RiskData | null => {
  if (testMode) {
    // Test mode: A-M = low risk, N-Z = high risk
    const firstLetter = email.toLowerCase().charAt(0);
    const isLowRisk = firstLetter >= 'a' && firstLetter <= 'm';
    
    if (isLowRisk) {
      return convertToRiskData(lowRiskData, email);
    } else {
      return convertToRiskData(highRiskData, email);
    }
  }
  
  // Live mode: search existing dataset
  const normalizedEmail = email.toLowerCase().trim();
  return riskDataset.find(data => 
    data.idmTrust.email.address.toLowerCase() === normalizedEmail
  ) || null;
};

export const evaluateNameRisk = (fullName: string, testMode: boolean = false): RiskData | null => {
  if (testMode) {
    // Test mode: A-M = low risk, N-Z = high risk
    const firstLetter = fullName.toLowerCase().charAt(0);
    const isLowRisk = firstLetter >= 'a' && firstLetter <= 'm';
    
    if (isLowRisk) {
      return convertToRiskData(lowRiskData, undefined, fullName);
    } else {
      return convertToRiskData(highRiskData, undefined, fullName);
    }
  }
  
  // Live mode: existing logic
  const normalizedName = fullName.toLowerCase().trim();
  
  if (normalizedName.includes('sumit')) {
    return riskDataset[1]; // High risk data
  } else {
    return riskDataset[0]; // Low risk data
  }
};

export const getRiskColor = (riskLevel: 'low' | 'high'): string => {
  return riskLevel === 'low' ? '#059669' : '#DC2626';
};

export const getRiskStatus = (riskLevel: 'low' | 'high'): string => {
  return riskLevel === 'low' ? 'Safe' : 'Blocked';
};