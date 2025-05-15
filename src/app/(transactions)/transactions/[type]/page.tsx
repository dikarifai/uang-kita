"use client";

import { useParams } from "next/navigation";

const TransactionsPage: React.FC = () => {
  const param = useParams();

  return <main>{param.type}</main>;
};

export default TransactionsPage;
