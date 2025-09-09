import { RiskData } from '../types';

export const lowRiskData = {
  device_info: {
    incognitoMode: false,
    vpn: false,
    platformBot: false,
    riskLevel: "low",
    riskScore: 20,
  },
  email_info: {
    email: "abhishek123@gmail.com",
    verified: true,
    domain: "gmail.com",
    lastSeen: "2025-09-01T18:20:00Z",
    riskLevel: "low",
    riskScore: 10,
  },
  phone_info: {
    phoneNumber: "+1234567890",
    verified: true,
    carrier: "Verizon",
    lastSeen: "2025-08-30T10:45:00Z",
    riskLevel: "low",
    riskScore: 12,
  },
  ip_info: {
    address: "192.168.1.1",
    location: "New York, USA",
    vpnDetected: false,
    riskScore: 15,
    connection_type: "Reserved",
  },
  aml_info: {
    status: "clear",
    riskScore: 0,
    entityName: "Abhishek",
    category: [],
  },
};

export const highRiskData = {
  device_info: {
    incognitoMode: true,
    vpn: true,
    platformBot: true,
    riskLevel: "high",
    riskScore: 85,
  },
  email_info: {
    email: "suspicious_user@darkmail.xyz",
    verified: false,
    domain: "darkmail.xyz",
    lastSeen: "2022-05-01T03:15:00Z",
    riskLevel: "high",
    riskScore: 78,
  },
  phone_info: {
    phoneNumber: "+19999999999",
    verified: false,
    carrier: "Unknown",
    lastSeen: "2022-01-01T00:00:00Z",
    riskLevel: "high",
    riskScore: 82,
  },
  ip_info: {
    address: "185.220.101.1",
    location: "Unknown",
    vpnDetected: true,
    riskScore: 90,
    connection_type: "Tor Network",
  },
  aml_info: {
    status: "match",
    riskScore: 95,
    entityName: "Suspicious Entity",
    category: ["Terrorism", "Sanction", "Money Laundering"],
  },
};

// Convert new format to existing RiskData format
export const convertToRiskData = (data: typeof lowRiskData | typeof highRiskData, email?: string, name?: string): RiskData => {
  return {
    idmDevice: {
      incognitoMode: data.device_info.incognitoMode,
      vpn: data.device_info.vpn,
      platformBot: data.device_info.platformBot,
      riskLevel: data.device_info.riskLevel as 'low' | 'high'
    },
    idmTrust: {
      riskScore: data.device_info.riskScore,
      level: data.device_info.riskLevel as 'low' | 'high',
      lastUpdated: new Date().toISOString(),
      email: {
        address: email || data.email_info.email,
        verified: data.email_info.verified,
        reputation: data.device_info.riskLevel === 'low' ? 'good' : 'poor',
        riskScore: data.email_info.riskScore
      },
      ip: {
        address: data.ip_info.address,
        location: data.ip_info.location,
        vpnDetected: data.ip_info.vpnDetected,
        riskScore: data.ip_info.riskScore
      },
      contact: {
        phoneNumber: data.phone_info.phoneNumber,
        carrier: data.phone_info.carrier,
        verified: data.phone_info.verified,
        riskScore: data.phone_info.riskScore
      }
    },
    idmSocialPhone: {
      phoneNumber: data.phone_info.phoneNumber,
      verified: data.phone_info.verified,
      carrier: data.phone_info.carrier,
      lastSeen: data.phone_info.lastSeen,
      riskLevel: data.phone_info.riskLevel as 'low' | 'high',
      riskScore: data.phone_info.riskScore
    },
    idmSocialEmail: {
      email: email || data.email_info.email,
      verified: data.email_info.verified,
      domain: data.email_info.domain,
      lastSeen: data.email_info.lastSeen,
      riskLevel: data.email_info.riskLevel as 'low' | 'high',
      riskScore: data.email_info.riskScore
    },
    idmAml: {
      status: data.aml_info.status,
      checkedOn: new Date().toISOString().split('T')[0],
      riskLevel: data.device_info.riskLevel as 'low' | 'high',
      riskScore: data.aml_info.riskScore,
      entityName: name || data.aml_info.entityName,
      category: data.aml_info.category
    }
  };
};

export const riskDataset: RiskData[] = [
  {
    idmDevice: {
      incognitoMode: false,
      vpn: false,
      platformBot: false,
      riskLevel: "low"
    },
    idmTrust: {
      riskScore: 20,
      level: "low",
      lastUpdated: "2025-09-02T12:00:00Z",
      email: {
        address: "abhishek123@gmail.com",
        verified: true,
        reputation: "good",
        riskScore: 10
      },
      ip: {
        address: "192.168.1.1",
        location: "New York, USA",
        vpnDetected: false,
        riskScore: 15
      },
      contact: {
        phoneNumber: "+1234567890",
        carrier: "Verizon",
        verified: true,
        riskScore: 12
      }
    },
    idmSocialPhone: {
      phoneNumber: "+1234567890",
      verified: true,
      carrier: "Verizon",
      lastSeen: "2025-08-30T10:45:00Z",
      riskLevel: "low",
      riskScore: 12
    },
    idmSocialEmail: {
      email: "abhishek123@gmail.com",
      verified: true,
      domain: "gmail.com",
      lastSeen: "2025-09-01T18:20:00Z",
      riskLevel: "low",
      riskScore: 10
    },
    idmAml: {
      status: "clear",
      checkedOn: "2025-09-01",
      riskLevel: "low",
      riskScore: 15,
      entityName: "Abhishek Kumar",
      category: ["PEPs"]
    }
  },
  {
    idmDevice: {
      incognitoMode: true,
      vpn: true,
      platformBot: true,
      riskLevel: "high"
    },
    idmTrust: {
      riskScore: 95,
      level: "high",
      lastUpdated: "2025-09-02T12:00:00Z",
      email: {
        address: "sumit123@gmail.com",
        verified: false,
        reputation: "poor",
        riskScore: 90
      },
      ip: {
        address: "203.0.113.55",
        location: "Unknown",
        vpnDetected: true,
        riskScore: 85
      },
      contact: {
        phoneNumber: "+19998887777",
        carrier: "Unknown",
        verified: false,
        riskScore: 88
      }
    },
    idmSocialPhone: {
      phoneNumber: "+19998887777",
      verified: false,
      carrier: "Unknown",
      lastSeen: "2025-09-02T01:15:00Z",
      riskLevel: "high",
      riskScore: 90
    },
    idmSocialEmail: {
      email: "sumit123@gmail.com",
      verified: false,
      domain: "gmail.com",
      lastSeen: "2025-09-02T01:10:00Z",
      riskLevel: "high",
      riskScore: 95
    },
    idmAml: {
      status: "match_found",
      checkedOn: "2025-09-01",
      riskLevel: "high",
      riskScore: 98,
      entityName: "Sumit Sharma",
      category: ["Sanction", "Crime"]
    }
  },
  {
    idmDevice: {
      incognitoMode: false,
      vpn: false,
      platformBot: false,
      riskLevel: "low"
    },
    idmTrust: {
      riskScore: 20,
      level: "low",
      lastUpdated: "2025-09-02T12:00:00Z",
      email: {
        address: "romit1234@gmail.com",
        verified: true,
        reputation: "good",
        riskScore: 10
      },
      ip: {
        address: "192.168.1.1",
        location: "New York, USA",
        vpnDetected: false,
        riskScore: 15
      },
      contact: {
        phoneNumber: "+1234567890",
        carrier: "Verizon",
        verified: true,
        riskScore: 12 
      }
    },
    idmSocialPhone: {
      phoneNumber: "+1234567890",
      verified: true,
      carrier: "Verizon",
      lastSeen: "2025-08-30T10:45:00Z",
      riskLevel: "low",
      riskScore: 12
    },
    idmSocialEmail: {
      email: "romit1234@gmail.com",
      verified: true,
      domain: "gmail.com",
      lastSeen: "2025-09-01T18:20:00Z",
      riskLevel: "low",
      riskScore: 10
    },
    idmAml: {
      status: "clear",
      checkedOn: "2025-09-01",
      riskLevel: "low",
      riskScore: 15,
      entityName: "Romit Yadav",
      category: ["PEPs"]
    }
  },
];