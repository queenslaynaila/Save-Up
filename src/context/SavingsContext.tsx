import React, { createContext, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

type SavingsContextProps = {
  children: ReactNode;
};
type SavingsContextType = {
  contributions: Contribution[];
  totalContributions: number;
  totalTargetedAmount: number;
  savings: Saving[];
  addSaving: (newSaving: Saving) => void;
  deleteSaving: (id: string) => void;
  updateContributedAmount: (id: string, amount: number) => void;
  getSavingById: (id: string) => Saving | undefined;
};
type Saving = {
  id?: string;
  description: string;
  category: string;
  targetAmount: number;
  contributedAmount: number;
};

type Contribution = {
  id: string;
  savingId: string;
  amount: number;
  date: string;
};

const SavingsContext = createContext<SavingsContextType>({
  contributions: [],
  totalContributions: 0,
  totalTargetedAmount: 0,
  savings: [],
  addSaving: (newSaving: Saving) => {},
  deleteSaving: (id: string) => {},
  updateContributedAmount: (id: string, amount: number) => {},
  getSavingById: (id: string) => undefined,
});

export function SavingsProvider({ children }: SavingsContextProps) {
  const savingsLocalStorageKey = "savings";
  const contributionsLocalStorageKey = "contributions";

  const getStoredSavings = (): Saving[] => {
    const storedData = localStorage.getItem(savingsLocalStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  };

  const setStoredSavings = (data: Saving[]) => {
    localStorage.setItem(savingsLocalStorageKey, JSON.stringify(data));
  };

  const getStoredContributions = (): Contribution[] => {
    const storedData = localStorage.getItem(contributionsLocalStorageKey);
    return storedData ? JSON.parse(storedData) : [];
  };

  const setStoredContributions = (data: Contribution[]) => {
    localStorage.setItem(contributionsLocalStorageKey, JSON.stringify(data));
  };

  const [savings, setSavings] = React.useState<Saving[]>(getStoredSavings);
  const [contributions, setContributions] = React.useState<Contribution[]>(
    getStoredContributions,
  );

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
          : saving,
      ),
    );

    const newContribution: Contribution = {
      id: uuidv4(),
      savingId: id,
      amount: amount,
      date: new Date().toISOString(),
    };

    setContributions((prev) => [...prev, newContribution]);
  };

  React.useEffect(() => {
    setTotalContributions(
      contributions.reduce(
        (total, contribution) => total + contribution.amount,
        0,
      ),
    );
  }, [contributions]);

  const getSavingByIdHandler = (id: string): Saving | undefined => {
    return savings.find((saving) => saving.id === id);
  };

  React.useEffect(() => {
    setStoredSavings(savings);
    setStoredContributions(contributions);
  }, [savings, contributions]);

  const [totalContributions, setTotalContributions] = React.useState<number>(0);
  const [totalTargetedAmount, setTotalTargetedAmount] =
    React.useState<number>(0);

  React.useEffect(() => {
    setTotalContributions(
      contributions.reduce(
        (total, contribution) => total + contribution.amount,
        0,
      ),
    );
  }, [contributions]);

  React.useEffect(() => {
    setTotalTargetedAmount(
      savings.reduce((total, saving) => total + saving.targetAmount, 0),
    );
  }, [savings]);

  const context = {
    savings,
    contributions,
    totalContributions,
    totalTargetedAmount,
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
