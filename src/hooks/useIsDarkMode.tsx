import { useColorScheme, useMediaQuery } from '@mui/material';

export const useIsDarkMode = () => {
  const { mode } = useColorScheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return mode === 'dark' || (mode === 'system' && prefersDarkMode);
};
