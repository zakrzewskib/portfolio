import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeSwitcher } from './ThemeSwitcher';

export const RightNavBar = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <LinkedInIcon />
      </IconButton>
      <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
        <GitHubIcon />
      </IconButton>
      <ThemeSwitcher />
    </Box>
  );
};
