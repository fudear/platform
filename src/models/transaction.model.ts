export interface CustomTransaction {
  uniqueId: string;
  asset: string | null;
  category: string;
  value: number | null;
  from: string;
  to: string | null;
}

export enum TransactionType {
  Incoming,
  Outgoing,
}
