import { Entry } from '../../contexts/OverviewContext';
import { format } from 'date-fns'; 
import { formatCurrency } from '../../utils/numbers';

type TransactionListProps = {
  entries: Entry[];
}

export function TransactionList({ entries }: TransactionListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {entries.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.type}</td>
            <td>{formatCurrency(entry.amount)}</td>
            <td>{entry.description}</td>
            <td>{format(new Date(entry.date), 'dd/MM/yyyy')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
