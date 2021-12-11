export type TransactionPayload = {
  giver: string;
  taker: string;
  items: number[];
  status: string;
};

export type Transaction = {
  id: number;
} & TransactionPayload;
