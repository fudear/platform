import { Paper, Stack, Typography, Button } from '@mui/material';
import { FC } from 'react';
import Banner from './Banner';

const OrganizationCard: FC<{}> = () => {
  return (
    <Paper elevation={2}>
      <Banner />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        marginX={2}
      >
        <Typography variant="displayLarge">DeFi Argentina</Typography>
        <Button variant="contained" sx={{ paddingY: 2 }}>
          Donate
        </Button>
      </Stack>

      <Stack marginTop={8} marginX={8}>
        <Typography variant="h3">Total amount collected</Typography>
        <Typography variant="displaySmall">$123,456,789.00</Typography>

        <Typography variant="h6" marginTop={5}>
          DeFi Argentina
        </Typography>
        <Typography marginBottom={5}>About DeFi Argentina</Typography>
      </Stack>
    </Paper>
  );
};

export default OrganizationCard;
