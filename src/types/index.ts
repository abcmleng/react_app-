export interface RiskData {
  idmDevice: {
    incognitoMode: boolean;
    vpn: boolean;
    platformBot: boolean;
    riskLevel: 'low' | 'high';
  };
  idmTrust: {
    riskScore: number;
    level: 'low' | 'high';
    lastUpdated: string;
    email: {
      address: string;
      verified: boolean;
      reputation: string;
      riskScore: number;
    };
    ip: {
      address: string;
      location: string;
      vpnDetected: boolean;
      riskScore: number;
    };
    contact: {
      phoneNumber: string;
      carrier: string;
      verified: boolean;
      riskScore: number;
    };
  };
  idmSocialPhone: {
    phoneNumber: string;
    verified: boolean;
    carrier: string;
    lastSeen: string;
    riskLevel: 'low' | 'high';
    riskScore: number;
  };
  idmSocialEmail: {
    email: string;
    verified: boolean;
    domain: string;
    lastSeen: string;
    riskLevel: 'low' | 'high';
    riskScore: number;
  };
  idmAml: {
    status: string;
    checkedOn: string;
    riskLevel: 'low' | 'high';
    riskScore: number;
    entityName: string;
    category: string[];
  };
}

export interface Transaction {
  id: string;
  recipientName: string;
  recipientEmail: string;
  recipientAccount: string;
  amount: number;
  status: 'Success' | 'Failed' | 'Blocked';
  timestamp: string;
}

export type VerificationType = 'bank' | 'government' | null;

export interface BankLoginData {
  email: string;
  password: string;
}

export interface GovernmentFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
}