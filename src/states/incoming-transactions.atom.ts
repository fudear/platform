import { CustomTransaction } from "@/models/transaction.model";
import { atom } from "recoil";

const incomingTransactionsStateKey = "incomingTransactionsState";

export const incomingTransactionsState = atom<CustomTransaction[]>({
  key: incomingTransactionsStateKey,
  default: [],
});
