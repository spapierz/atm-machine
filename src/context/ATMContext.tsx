import { createContext, useContext, ReactNode, useState, useEffect } from 'react';


import {
  Customer,
} from '../interfaces/ATM';
import { mockCustomers } from '../data/mockCustomers';
import { useNavigate } from 'react-router-dom';

interface ATMContextType {
  customer: Customer | null;
  error: boolean;
  depositValue: number;
  withdrawalValue: number;
  setDepositValue: (value: number) => void;
  setWithdrawalValue: (value: number) => void;
  setError: (value: boolean) => void;
  login: (pin: string) => void;
  submitDeposit: () => void;
  submitWithdrawal: () => void;
}

interface ATMProviderProps {
  children: ReactNode;
}

export const ATMContext = createContext<ATMContextType>({} as ATMContextType);

export const useATMContext = () => {
  const context = useContext(ATMContext);
  if (context === undefined) {
    throw new Error('useATMContext must be used within an ATMProvider');
  }
  return context;
};

export const ATMProvider = ({ children }: ATMProviderProps) => {
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [updatedCustomer, setUpdatedCustomer] = useState<Customer | null>(null);
  const [withdrawalValue, setWithdrawalValue] = useState<number>(0)
  const [depositValue, setDepositValue] = useState<number>(0)
  const [error, setError] = useState<boolean>(false);
  const [customersMap, setCustomersMap] = useState<{ [pin: string]: Customer }>({});
  
  const navigate = useNavigate();

  const login = (pin: string) => {
    const customerData = customersMap[pin];
    if (customerData) {
      setCustomer(customerData);
      navigate('/account');
    } else {
      setCustomer(null)
      setError(true)
    }
  };

  const submitDeposit = () => {
    if (customer) {
      const updated = { ...customer };
      const currentBalance = updated.balance;
      const depositValuePennies = depositValue * 100;

      const newBalancePennies = currentBalance + depositValuePennies;

      updated.balance = newBalancePennies;
      setUpdatedCustomer(updated);
    }
  };

  const submitWithdrawal = () => {
    if (customer) {
      const updated = { ...customer };
      const currentBalance = updated.balance;
      const dailyWithdrawalLimit = updated.dailyWithdrawalLimit;
      const withdrawalValuePennies = withdrawalValue * 100;

      if (withdrawalValuePennies < dailyWithdrawalLimit) {
        const newBalancePennies = currentBalance - withdrawalValuePennies;
        updated.balance = newBalancePennies;
        updated.dailyWithdrawalLimit = dailyWithdrawalLimit - withdrawalValuePennies;
        setUpdatedCustomer(updated);
        navigate('/account');
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  useEffect(() => {
    const customerMapLookup: { [pin: string]: Customer } = {};
    mockCustomers.forEach((customer) => {
      customerMapLookup[customer.pin] = customer;
    });
    setCustomersMap(customerMapLookup);

    if (!customer) {
      navigate('/');
    }
  }, [customer, navigate]);

  useEffect(() => {
    if (updatedCustomer) {
      setCustomer(updatedCustomer);
    }
  }, [updatedCustomer]);

  const value: ATMContextType = {
    customer,
    error,
    withdrawalValue,
    setWithdrawalValue,
    depositValue,
    setDepositValue,
    setError,
    login,
    submitWithdrawal,
    submitDeposit
  };

  return (
    <ATMContext.Provider value={value}>
      {children}
    </ATMContext.Provider>
  );
}
