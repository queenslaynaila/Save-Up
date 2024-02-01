// yourSavingsContext.js

import { createContext, useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
  const [savings, setSavings] = useState([]);

  const addSaving = ({ description, category, targetAmount }) => {
    setSavings((prevSavings) => [
      ...prevSavings,
      { id: uuidv4(), description, category, targetAmount, contributedAmount: 0 },
    ]);
  };

  const addContribution = (savingId, amount) => {
    setSavings((prevSavings) =>
      prevSavings.map((saving) =>
        saving.id === savingId
          ? { ...saving, contributedAmount: saving.contributedAmount + amount }
          : saving
      )
    );
  };

  const calculateAmountLeft = (targetAmount, contributedAmount) => {
    return targetAmount - contributedAmount;
  };

  return (
    <SavingsContext.Provider value={{ savings, addSaving, addContribution, calculateAmountLeft }}>
      {children}
    </SavingsContext.Provider>
  );
};

export const useSavings = () => {
  return useContext(SavingsContext);
};
