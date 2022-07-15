import { createContext, ReactNode, useContext, useState } from 'react';

export type Entry = {
  id: number;
  type: 'expense' | 'revenue';
  amount: number;
  description: string;
  date: Date;
};

type OverviewContextProps = {
  entries: Entry[];
  setEntries: (entries: Entry[]) => void;
  totalValue: number;
  setTotalValue: (totalValue: number) => void;
}

export const OverviewContext = createContext<OverviewContextProps>({
  entries: [],
  setEntries: () => {},
  totalValue: 0,
  setTotalValue: () => {},
});

export function OverviewContextProvider({ children }: { children: ReactNode }) {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  return (
    <OverviewContext.Provider value={{ entries, setEntries, totalValue, setTotalValue }}>
      {children}
    </OverviewContext.Provider>
  );
}

export const useOverviewContext = () => useContext(OverviewContext);
