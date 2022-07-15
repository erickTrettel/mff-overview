import { useEffect } from 'react';

import { Summary } from '../../components/Summary';
import { TransactionList } from '../../components/TransactionList';
import { Entry, useOverviewContext } from '../../contexts/OverviewContext';

const initialData: Entry[] = [
  {
    id: 10,
    type: 'revenue',
    amount: 300,
    description: 'Salary 💲',
    date: new Date('2022-07-05'),
  },
  {
    id: 11,
    type: 'expense',
    amount: -100,
    description: 'Rent 🏡',
    date: new Date('2022-07-10'),
  },
  {
    id: 12,
    type: 'revenue',
    amount: 25,
    description: 'Rent cashback 🏡💸',
    date: new Date('2022-07-10'),
  },
  {
    id: 13,
    type: 'expense',
    amount: -10,
    description: 'Food 🥙',
    date: new Date('2022-07-15'),
  },
];

export function Overview() {
  const { entries, setEntries, totalValue, setTotalValue } =
    useOverviewContext();

  useEffect(() => {
    setEntries(initialData);
  }, []);

  useEffect(() => {
    setTotalValue(entries.reduce((acc, entry) => acc + entry.amount, 0));
  }, [entries]);

  return (
    <section>
      <h1>Your finances overview!</h1>

      <TransactionList entries={entries} />

      <Summary totalValue={totalValue} />
    </section>
  );
}
