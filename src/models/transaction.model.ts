import { Network } from 'alchemy-sdk';

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

export const DefiArgentinaWallets = [
  '0x5D039073fC3DD3d9c7Dbc9eC3409bA6957786Bf4',
  '0x59ec567e868b06b132f6d31f117795822beaa147',
  '0xe576d24c6AA0E6A2cb3f30A5C18A636bba54FfaE',
];
