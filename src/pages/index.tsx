import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import { outgoingTransactionsState } from '@/states/outgoing-transactions.atom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useRecoilState } from 'recoil';

const Home: FC<{}> = () => {
  const [incomingTxState, setIncomingTxState] = useRecoilState(
    incomingTransactionsState
  );
  const [outgoingTxState, setOutgoingTxState] = useRecoilState(
    outgoingTransactionsState
  );

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

export default Home;
