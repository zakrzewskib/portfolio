import { Box } from '@mui/material';
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
    </Box>
  );
};
