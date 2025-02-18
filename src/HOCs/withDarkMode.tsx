/* eslint-disable @typescript-eslint/no-explicit-any */
import { useColorScheme } from '@mui/material';

// 'The mode is always undefined on first render, so make sure to handle this case as shown in the demo below—otherwise you may encounter a hydration mismatch error.'
// https://mui.com/material-ui/customization/dark-mode/?srsltid=AfmBOooWvzXBUuy53ILKYBFFBFTBukjamOFshJSPgq-8HIC-uc5RXSLn#toggling-color-mode

export const withDarkMode = (WrappedComponent: any) => {
  return (props: any) => {
    const { mode } = useColorScheme();

    if (!mode) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
