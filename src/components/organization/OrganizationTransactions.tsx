import { Tabs, Tab, Typography } from '@mui/material';
import { FC, useState } from 'react';

const OrganizationTransactions: FC<{}> = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      {' '}
      <>
        <Tabs
          value={selectedTab}
          onChange={(_, newValue) => setSelectedTab(newValue)}
          sx={{ justifyContent: 'center' }}
          variant="fullWidth"
        >
          <Tab label="Donations" sx={{ flex: 1 }} />
          <Tab label="Cashouts" sx={{ flex: 1 }} />
        </Tabs>

        {selectedTab === 0 && <Typography>Incoming Transactions</Typography>}
        {selectedTab === 1 && <Typography>Outgoing Transactions</Typography>}
      </>
    </>
  );
};

export default OrganizationTransactions;
