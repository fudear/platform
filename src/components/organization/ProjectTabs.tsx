import { Tabs, Tab, Typography } from '@mui/material';
import { FC, useState } from 'react';

const ProjectTabs: FC<{}> = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={(_, newValue) => setSelectedTab(newValue)}
        sx={{ justifyContent: 'center' }}
        variant="fullWidth"
      >
        <Tab label="Campaign" sx={{ flex: 1 }} />
        <Tab label="Organization" sx={{ flex: 1 }} />
      </Tabs>

      {selectedTab === 0 && <Typography>CampaignCards</Typography>}
      {selectedTab === 1 && <Typography>OrganizationCards</Typography>}
    </>
  );
};

export default ProjectTabs;
