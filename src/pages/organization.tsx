import OrganizationCard from '@/components/organization/OrganizationCard';
import OrganizationTransactions from '@/components/organization/OrganizationTransactions';
import ProjectCampaigns from '@/components/organization/ProjectCampaigns';
import Stack from '@mui/material/Stack';
import { FC } from 'react';

const OrganizationPage: FC<{}> = () => {
  return (
    <>
      <Stack gap={5}>
        <OrganizationCard />

        <ProjectCampaigns />

        <OrganizationTransactions />
      </Stack>
    </>
  );
};

export default OrganizationPage;
