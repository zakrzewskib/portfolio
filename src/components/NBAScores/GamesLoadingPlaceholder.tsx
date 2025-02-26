import { CircularProgress } from '@mui/material';

export const GamesLoadingPlaceholder = () => {
  return (
    <p>
      Games are loading... <CircularProgress size='16px' />
    </p>
  );
};
