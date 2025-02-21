import { Box, Typography } from '@mui/material';
import { PageInfo } from '../components/PageInfo/PageInfo';

export const SkillsPage = () => {
  return (
    <Box
      sx={{
        mt: 4,
      }}
    >
      <PageInfo />
      <Typography variant='body1' sx={{ marginBlock: 4 }}>
        Work in progress...
      </Typography>
    </Box>
  );
};
