import { Box } from '@mui/material';
import { ChatGPTSetupInfo } from '../components/ChatGPTSetupInfo/ChatGPTSetupInfo';
import { NBAScoresInfo } from '../components/NBAScores/NBAScoresInfo';
import { PageInfo } from '../components/PageInfo/PageInfo';
import { WorkflowSetupInfo } from '../components/WorkflowSetupInfo/WorkflowSetupInfo';

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
      <WorkflowSetupInfo />
      <ChatGPTSetupInfo />
    </Box>
  );
};
