import { formatCurrency } from "../../utils/numbers";

type SummaryProps = {
  totalValue: number;
}

export function Summary({ totalValue }: SummaryProps) {
  return <p><b>Total: </b>{formatCurrency(totalValue)}</p>
}
