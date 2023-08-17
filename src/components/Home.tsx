import { Card, Paper, Stack, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { incomingTransactionsState } from '@/states/incoming-transactions.atom';
import useGetTotalAmountCollected from '@/hooks/useGetTotalAmountCollected.hook';

const Home: FC<{}> = () => {
  const [incomingTxState] = useRecoilState(
    incomingTransactionsState
  );


  const totalAmount = useGetTotalAmountCollected(incomingTxState).toFixed(2)
  console.log('totalamount', totalAmount)


  return (
    <Paper elevation={4}>
      <Stack sx={{ padding: '2em' }}>
        <Typography variant="h3">Total amount collected</Typography>
        <Typography variant="h1">${totalAmount}</Typography>

        <Stack direction="row" marginTop={2}>
          <Stack flex={1}>
            <Typography variant="h5">Last 7 days</Typography>
            <Typography variant="h3">$1,234.00</Typography>
          </Stack>
          <Stack flex={1}>
            <Typography variant="h5">Last 24 hours</Typography>
            <Typography variant="h3">$12.00</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Home;
