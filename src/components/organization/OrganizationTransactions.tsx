import { Tabs, Tab, Typography } from '@mui/material';
import { FC, useState } from 'react';
import TransactionsTable from '../TransactionsTable';
import { TransactionType } from '@/models/transaction.model';

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

        {selectedTab === 0 && (
          <TransactionsTable transactionType={TransactionType.Incoming} />
        )}
        {selectedTab === 1 && (
          <TransactionsTable transactionType={TransactionType.Outgoing} />
        )}
      </>
    </>
  );
};

export default OrganizationTransactions;
