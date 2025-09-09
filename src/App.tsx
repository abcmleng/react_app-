import React, { useState } from 'react';
import { VerificationCards } from './components/VerificationCards';
import { BankVerification } from './components/BankVerification';
import { GovernmentVerification } from './components/GovernmentVerification';
import { RiskDisplay } from './components/RiskDisplay';
import { VerificationType, RiskData, BankLoginData, GovernmentFormData } from './types';
import { evaluateEmailRisk, evaluateNameRisk } from './utils/riskEvaluation';

function App() {
  const [verificationType, setVerificationType] = useState<VerificationType>(null);
  const [riskData, setRiskData] = useState<RiskData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleVerificationSelect = (type: VerificationType) => {
    setVerificationType(type);
    setRiskData(null);
    setIsLoggedIn(false);
    setIsSubmitted(false);
  };

  const handleBankLogin = (loginData: BankLoginData) => {
    console.log('handleBankLogin called with:', loginData);
    setIsLoading(true);
    
    setTimeout(() => {
      const risk = evaluateEmailRisk(loginData.email);
      console.log('Risk data found:', risk);
      setRiskData(risk);
      setIsLoggedIn(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleGovernmentSubmit = (formData: GovernmentFormData) => {
    setIsLoading(true);
    
    setTimeout(() => {
      const risk = evaluateNameRisk(formData.fullName);
      setRiskData(risk);
      setIsSubmitted(true);
      setIsLoading(false);
    }, 2000);
  };

  const handleBack = () => {
    setVerificationType(null);
    setRiskData(null);
    setIsLoggedIn(false);
    setIsSubmitted(false);
  };

  const renderRightPanel = () => {
    if (!verificationType) {
      return <VerificationCards onSelect={handleVerificationSelect} />;
    }

    if (verificationType === 'bank') {
      return (
        <BankVerification
          onBack={handleBack}
          onLogin={handleBankLogin}
          riskData={riskData}
          isLoggedIn={isLoggedIn}
        />
      );
    }

    if (verificationType === 'government') {
      return (
        <GovernmentVerification
          onBack={handleBack}
          onSubmit={handleGovernmentSubmit}
          riskData={riskData}
          isSubmitted={isSubmitted}
        />
      );
    }

    return null;
  };

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Left Panel - Risk Display */}
      <div className="w-[30%] border-r border-gray-200 h-full relative flex flex-col">
        {/* Fixed position logo and header */}
        {/* <div className="flex-shrink-0 p-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <img
            src="/src/ID-logo.png"
            alt="ID Logo"
            className="w-16 h-16 object-contain mb-2"
          />
          <h1 className="text-xl font-bold text-center">
            IDMerit Risk Analyser
          </h1>
        </div> */}
        <div className="flex items-center space-x-3 px-4 py-2">
          <img
            src="/src/ID-logo.png"
            alt="ID Logo"
            className="w-16 h-16 object-contain"
          />
          <h1 className="text-xl font-bold">
            IDMerit Risk Analyser
          </h1>
        </div>
        {/* Scrollable RiskDisplay */}
        <div className="flex-grow overflow-y-auto">
          <RiskDisplay riskData={riskData} isLoading={isLoading} verificationType={verificationType} />
        </div>
      </div>

      {/* Right Panel - User Interaction */}
      <div className="w-[70%] h-full overflow-y-auto">
        {renderRightPanel()}
      </div>
    </div>
  );
}

export default App;