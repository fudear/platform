import { Tabs, Tab, Typography, Grid } from '@mui/material';
import { FC, useState } from 'react';
import ProjectCard from './ProjectCard';

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

      {selectedTab === 0 && (
        <Grid container spacing={3} marginY={4} sx={{ marginX: 4 }}>
          <Grid xs>
            <ProjectCard />
          </Grid>
          <Grid xs>
            <ProjectCard />
          </Grid>
        </Grid>
      )}
      {selectedTab === 1 && (
        <Grid container spacing={3} sx={{ marginX: 4 }}>
          <Grid xs={6}>
            <ProjectCard />
          </Grid>
          <Grid xs={6}>
            <ProjectCard />
          </Grid>
          <Grid xs={6}>
            <ProjectCard />
          </Grid>
          <Grid xs={6}>
            <ProjectCard />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProjectTabs;
