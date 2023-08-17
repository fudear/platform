import { Box, LinearProgress, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';

const ProjectCard: FC<{}> = () => {
  return (
    <Paper elevation={2} sx={{ width: '25rem', minWidth: '25rem' }}>
      <Image
        src="/test-project-card.png"
        alt="Project card"
        height={220}
        width={500}
        style={{ width: '100%' }}
      />
      <Box marginX={3} marginBottom={5}>
        <Typography variant="h6" fontWeight={600}>
          Help in the Amazonas
        </Typography>
        <Typography color="secondary">
          We are seeking funds for a rural school in the Amazon. Children need
          food for half the day.
        </Typography>

        <Box marginTop={5}>
          <Typography fontSize="14px" fontWeight="600" marginTop={5}>
            Total amount collected
          </Typography>
          <LinearProgress
            variant="determinate"
            sx={{ height: '1rem', borderRadius: 5 }}
            value={75}
          />
          <Typography fontSize="14px" color="secondary">
            600 of 1000 USDT
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
