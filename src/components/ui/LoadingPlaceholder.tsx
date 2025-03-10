import { CircularProgress, Typography } from '@mui/material';

interface LoadingPlaceholderProps {
  text: string;
}

export const LoadingPlaceholder = ({ text }: LoadingPlaceholderProps) => {
  return (
    <Typography variant='body1'>
      {text} <CircularProgress size='16px' />
    </Typography>
  );
};
