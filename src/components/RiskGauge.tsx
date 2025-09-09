import React, { useEffect, useState } from 'react';
import { RiskData } from '../types';

interface RiskGaugeProps {
  riskData: RiskData;
}

export const RiskGauge: React.FC<RiskGaugeProps> = ({ riskData }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const targetScore = riskData.idmTrust.riskScore;

  useEffect(() => {
    const duration = 1500;
    const steps = 60;
    const increment = targetScore / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setAnimatedScore(Math.min(increment * currentStep, targetScore));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetScore]);

  const getGaugeColor = (score: number) => {
    if (score <= 30) return '#059669'; // green
    if (score <= 70) return '#D97706'; // amber
    return '#DC2626'; // red
  };

  const getGaugeText = (score: number) => {
    if (score <= 30) return 'Low Risk';
    if (score <= 70) return 'Medium Risk';
    return 'High Risk';
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Assessment</h3>
      
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={getGaugeColor(animatedScore)}
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-300 ease-out"
            />
          </svg>
          
          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-gray-900">
              {Math.round(animatedScore)}
            </span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Risk Score
            </span>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${
          animatedScore <= 30 
            ? 'bg-green-100 text-green-800' 
            : animatedScore <= 70 
              ? 'bg-amber-100 text-amber-800'
              : 'bg-red-100 text-red-800'
        }`}>
          {getGaugeText(animatedScore)}
        </div>
      </div>
    </div>
  );
};