import { Paper, Stack, Typography, Button, Box } from '@mui/material';
import { FC } from 'react';
import Banner from './Banner';

const KPI: FC<{ title: string; value: string }> = ({ title, value }) => (
  <Stack>
    <Typography variant="h5">{title}</Typography>
    <Typography variant="displaySmall" fontWeight={700}>
      {value}
    </Typography>
  </Stack>
);

const OrganizationCard: FC<{}> = () => {
  return (
    <Paper elevation={2}>
      <Banner />

      <Box marginX={4}>
        <Typography fontWeight={700} fontSize={44} color="#0D0D0D">
          DeFi Argentina
        </Typography>

        <Typography variant="h5" color="#0D0D0D">
          About
        </Typography>

        <Typography color="#3E3E3E">
          DeFi Argentina is at the forefront of leveraging revolutionary
          blockchain technology to bring about positive change in the lives of
          children and support their essential needs through local soup
          kitchens. Our unwavering mission revolves around simplifying and
          enhancing the act of giving by harnessing the power of Decentralized
          Finance (DeFi).By synergizing blockchain innovation and charitable
          initiatives, we have reimagined the way donations are made and
          managed. Our visionary approach not only ensures the utmost
          transparency but also empowers every donor with a profound sense of
          impact. Through DeFi, we create an ecosystem where each contribution,
          regardless of its size, becomes a pivotal force in shaping a better
          future for the underprivileged.
        </Typography>

        <Stack direction="row" marginTop={10}>
          <Box sx={{ flex: 1 }}>
            <KPI title="Total amount collected" value="$6251.00" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <KPI title="Unique donations" value="2,542" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <KPI title="Unique donors" value="2,237" />
          </Box>
        </Stack>
        <Stack direction="row" marginY={8}>
          <Box sx={{ flex: 1 }}>
            <KPI title="Highest donation" value="$1,500.00" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <KPI title="Avergae donation" value="$150.00" />
          </Box>
          <Box sx={{ flex: 1 }}>
            <KPI title="Recurrence of donations" value="32 minutes" />
          </Box>
        </Stack>

        <Button
          fullWidth
          variant="contained"
          sx={{ paddingY: 2, marginBottom: 4 }}
        >
          <Typography textAlign="center">Donate</Typography>
        </Button>
      </Box>
    </Paper>
  );
};

export default OrganizationCard;
