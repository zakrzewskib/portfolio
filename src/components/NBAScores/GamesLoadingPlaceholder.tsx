import { CircularProgress, Typography } from '@mui/material';

export const GamesLoadingPlaceholder = () => {
  return (
    <Typography variant='body1'>
      Games are loading... <CircularProgress size='16px' />
    </Typography>
  );
};
