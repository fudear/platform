import { Box, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import ProjectCard from './ProjectCard';

const ProjectCampaigns: FC<{}> = () => {
  return (
    <Paper elevation={2}>
      <Box margin={4}>
        <Typography
          marginLeft={2}
          marginY={4}
          fontSize={24}
          fontWeight={800}
          color="#0D0D0D"
        >
          Campaigns
        </Typography>
        <Grid container spacing={3} marginBottom={4}>
          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>
          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>
          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>

          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>

          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>

          <Grid display="flex" justifyContent="center" flex={1} marginY={2}>
            <ProjectCard />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default ProjectCampaigns;
