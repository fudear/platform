import { Network } from "alchemy-sdk";

export interface CustomTransaction {
  uniqueId: string;
  asset: string | null;
  category: string;
  value: number | null;
  from: string;
  to: string | null;
  timestamp?: string;
  action?: string;
  hash?: string;
  network?: Network;
}

export enum TransactionType {
  Incoming,
  Outgoing,
}