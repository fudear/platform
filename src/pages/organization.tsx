import OrganizationCard from '@/components/organization/OrganizationCard';
import OrganizationTransactions from '@/components/organization/OrganizationTransactions';
import ProjectTabs from '@/components/organization/ProjectTabs';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

const OrganizationPage: FC<{}> = () => {
  return (
    <>
      <Stack gap={5}>
        <OrganizationCard />

        <ProjectTabs />

        <OrganizationTransactions />
      </Stack>
    </>
  );
};

export default OrganizationPage;
