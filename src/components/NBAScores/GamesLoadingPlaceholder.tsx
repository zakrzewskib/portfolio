import { CircularProgress, Typography } from '@mui/material';

// todo: Replace with general ui loading placeholder
export const GamesLoadingPlaceholder = () => {
  return (
    <Typography variant='body1'>
      Games are loading... <CircularProgress size='16px' />
    </Typography>
  );
};
