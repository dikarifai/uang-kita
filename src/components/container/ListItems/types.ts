interface ListItemProps {
  children: React.ReactNode;
}

interface ListItemTransactionProps {
  items: Transaction[];
}

interface Transaction {
  id: number;
  date: string;
  type: string;
  amount: number;
  category: {
    key: string;
    name: string;
  };
  description: string;
}
