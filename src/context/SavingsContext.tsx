// src/context/SavingsContext.tsx
import React, { createContext, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type SavingsContextProps = {
  children: ReactNode;
};

type Saving = {
  id?: string;
  description: string;
  category: string;
  targetAmount: number;
  contributedAmount: number;
};

type SavingsContextType = {
  savings: Saving[];
  addSaving: (newSaving: Saving) => void;
  deleteSaving: (id: string) => void;
  updateContributedAmount: (id: string, amount: number) => void;
  getSavingById: (id: string) => Saving | undefined;
};

const SavingsContext = createContext<SavingsContextType>({
  savings: [],
  addSaving: (newSaving: Saving) => {},
  deleteSaving: (id: string) => {},
  updateContributedAmount: (id: string, amount: number) => {},
  getSavingById: (id: string) => undefined,
});

export function SavingsProvider({ children }: SavingsContextProps) {
  const localStorageKey = "savings";

  const getStoredSavings = (): Saving[] => {
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  };

  const setStoredSavings = (data: Saving[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const [savings, setSavings] = React.useState<Saving[]>(getStoredSavings);

  const addSavingHandler = (newSaving: Saving) => {
    setSavings((prev) => [...prev, { ...newSaving, id: uuidv4() }]);
  };

  const deleteSavingHandler = (id: string) => {
    setSavings((prev) => prev.filter((saving) => saving.id !== id));
  };

  const updateContributedAmountHandler = (id: string, amount: number) => {
    setSavings((prev) =>
      prev.map((saving) =>
        saving.id === id
          ? { ...saving, contributedAmount: saving.contributedAmount + amount }
          : saving
      )
    );
  };

  const getSavingByIdHandler = (id: string): Saving | undefined => {
    return savings.find((saving) => saving.id === id);
  };

  React.useEffect(() => {
    setStoredSavings(savings);
  }, [savings]);

  const context = {
    savings,
    addSaving: addSavingHandler,
    deleteSaving: deleteSavingHandler,
    updateContributedAmount: updateContributedAmountHandler,
    getSavingById: getSavingByIdHandler,
  };

  return (
    <SavingsContext.Provider value={context}>
      {children}
    </SavingsContext.Provider>
  );
}

export default SavingsContext;
