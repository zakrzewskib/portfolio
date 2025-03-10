import { Box } from '@mui/material';
import { useEffect } from 'react';
import { ChatGPTSetupInfo } from '../components/ChatGPTSetupInfo/ChatGPTSetupInfo';
import { NBAScoresInfo } from '../components/NBAScores/NBAScoresInfo';
import { ObjectDetectionInfo } from '../components/ObjectDetection/ObjectDetectionInfo';
import { PageInfo } from '../components/PageInfo/PageInfo';
import { WorkflowSetupInfo } from '../components/WorkflowSetupInfo/WorkflowSetupInfo';

export const SkillsPage = () => {
  // restore position to top of the page
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

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
      <ObjectDetectionInfo />
      Work in progres... More to come!
    </Box>
  );
};
