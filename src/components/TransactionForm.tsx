import React, { useState } from 'react';
import { Send, User, Mail, CreditCard } from 'lucide-react';
import { RiskData, Transaction } from '../types';

interface TransactionFormProps {
  riskData: RiskData;
  userEmail?: string;
}

interface TransactionFormData {
  recipient: string;
  amount: string;
}

export const TransactionForm: React.FC<TransactionFormProps> = ({ riskData, userEmail }) => {
  const [formData, setFormData] = useState<TransactionFormData>({
    recipient: '',
    amount: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const isHighRisk = riskData.idmTrust.level === 'high';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate transaction processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    const transaction: Transaction = {
      id: Date.now().toString(),
      recipientName: formData.recipient,
      recipientEmail: userEmail || formData.recipient,
      recipientAccount: formData.recipient,
      amount: parseFloat(formData.amount),
      status: isHighRisk ? 'Failed' : 'Success',
      timestamp: new Date().toISOString()
    };

    // Store transaction in localStorage for demo
    const existingTransactions = JSON.parse(localStorage.getItem('transactions') || '[]');
    localStorage.setItem('transactions', JSON.stringify([transaction, ...existingTransactions]));

    // Reset form
    setFormData({
      recipient: '',
      amount: ''
    });

    setIsProcessing(false);

    // Dispatch custom event to update recent transactions
    window.dispatchEvent(new Event('transactionUpdate'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Send className="w-5 h-5" />
        <span>Send Money</span>
      </h3>

      {isHighRisk && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 font-medium">
            ⚠️ Registration flagged: Transactions may be blocked for security reasons
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="recipient" className="block text-sm font-medium text-gray-700 mb-1">
            Recipient (Full name, Email, or Account Number)
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              id="recipient"
              name="recipient"
              value={formData.recipient}
              onChange={handleChange}
              className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Enter full name, email, or account number"
              required
            />
          </div>
        </div>

        {/* Removed recipientEmail and recipientAccount fields */}

        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
            Amount (USD)
          </label>
          <input
            type="number"
            step="0.01"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="0.00"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isProcessing ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Money</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};