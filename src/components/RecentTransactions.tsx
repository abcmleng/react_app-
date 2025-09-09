import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle } from 'lucide-react';
import { Transaction } from '../types';

interface RecentTransactionsProps {
  userEmail?: string;
}

export const RecentTransactions: React.FC<RecentTransactionsProps> = ({ userEmail }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactions = () => {
    const stored = localStorage.getItem('transactions');
    if (stored) {
      const allTransactions: Transaction[] = JSON.parse(stored);
      // Filter transactions by current user's email
      if (userEmail) {
        const filteredTransactions = allTransactions.filter(txn =>
          txn.recipientEmail === userEmail
        );
        setTransactions(filteredTransactions);
      } else {
        // If no userEmail provided, show no transactions for security
        setTransactions([]);
      }
    }
  };

  useEffect(() => {
    loadTransactions();

    const handleTransactionUpdate = () => {
      loadTransactions();
    };

    window.addEventListener('transactionUpdate', handleTransactionUpdate);
    return () => window.removeEventListener('transactionUpdate', handleTransactionUpdate);
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Success':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'Failed':
      case 'Blocked':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Success':
        return 'text-green-800 bg-green-100';
      case 'Failed':
      case 'Blocked':
        return 'text-red-800 bg-red-100';
      default:
        return 'text-yellow-800 bg-yellow-100';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
        <Clock className="w-5 h-5" />
        <span>Recent Transactions</span>
      </h3>

      {transactions.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No recent transactions</p>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">
                  ${transaction.amount.toFixed(2)}
                </span>
                <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(transaction.status)}`}>
                  {getStatusIcon(transaction.status)}
                  <span>{transaction.status}</span>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>To: {transaction.recipientName}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatDate(transaction.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};