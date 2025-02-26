import { Box, Typography } from '@mui/material';
import { NBAScoresInfo } from '../components/NBAScores/NBAScoresInfo';
import { PageInfo } from '../components/PageInfo/PageInfo';

export const SkillsPage = () => {
  // todo: Add hrefs to each page section
  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <PageInfo />
      <NBAScoresInfo />
      <Typography variant='body1' sx={{ marginBlock: 4 }}>
        Work in progress...
      </Typography>
    </Box>
  );
};
