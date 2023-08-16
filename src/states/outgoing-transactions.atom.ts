import { CustomTransaction } from "@/models/transaction.model";
import { atom } from "recoil";

const outgoingTransactionsStateKey = "outgoingTransactionsState";

export const outgoingTransactionsState = atom<CustomTransaction[]>({
  key: outgoingTransactionsStateKey,
  default: [],
});
