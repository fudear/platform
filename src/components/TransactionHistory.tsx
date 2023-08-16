import useAlchemyTransactionsHistory from "@/hooks/useAlchemy.hook";
import { TransactionType } from "@/models/transaction.model";
import { incomingTransactionsState } from "@/states/incoming-transactions.atom";
import { outgoingTransactionsState } from "@/states/outgoing-transactions.atom";
import { Typography, Stack, Card, CardContent } from "@mui/material";
import { FC, useEffect } from "react";
import { useRecoilState } from "recoil";

const TransactionHistory: FC<{}> = () => {
  const [incomingTxState, setIncomingTxState] = useRecoilState(
    incomingTransactionsState
  );
  const [outgoingTxState, setOutgoingTxState] = useRecoilState(
    outgoingTransactionsState
  );

  const outgoingTxFn = useAlchemyTransactionsHistory(
    setOutgoingTxState,
    TransactionType.Outgoing
  );
  const incomingTxFn = useAlchemyTransactionsHistory(
    setIncomingTxState,
    TransactionType.Incoming
  );

  useEffect(() => {
    incomingTxFn();
    outgoingTxFn();
  }, []);

  return (
    <Typography variant="h3">
      <Stack direction="row" justifyContent="space-evenly">
        <Stack gap={3} alignItems="center" marginY={2}>
          <Typography variant="h2">Incoming</Typography>
          {incomingTxState.map((tx) => (
            <Card key={tx.uniqueId} variant="outlined" sx={{ width: 450 }}>
              <CardContent>
                <Typography>Asset: {tx.asset}</Typography>
                <Typography>Value: {tx.value}</Typography>
                <Typography>Category: {tx.category}</Typography>
                <Typography>From: {tx.from}</Typography>
                <Typography>To: {tx.to}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Stack gap={3} alignItems="center" marginY={2}>
          <Typography variant="h2">Outgoing</Typography>
          {outgoingTxState.map((tx) => (
            <Card key={tx.uniqueId} variant="outlined" sx={{ width: 450 }}>
              <CardContent>
                <Typography>Asset: {tx.asset}</Typography>
                <Typography>Value: {tx.value}</Typography>
                <Typography>Category: {tx.category}</Typography>
                <Typography>From: {tx.from}</Typography>
                <Typography>To: {tx.to}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Stack>
    </Typography>
  );
};

export default TransactionHistory;
