import { RiskData } from '../types';

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
