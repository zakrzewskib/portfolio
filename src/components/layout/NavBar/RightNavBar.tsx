import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LeetCodeIcon from '../../../assets/leetcode-icon-icons8.png';
import { ThemeSwitcher } from './ThemeSwitcher';
import { CustomIcon } from '../../ui/CustomIcon';

export const RightNavBar = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <IconButton
        size="large"
        aria-label="linkedin link"
        color="inherit"
        component="a"
        href="https://linkedin.com/in/bartosz-zakrzewski-5879b7228"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="github link"
        color="inherit"
        component="a"
        href="https://github.com/zakrzewskib"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        size="large"
        aria-label="leetcode link"
        color="inherit"
        component="a"
        href="https://leetcode.com/u/zakrzewskib"
        target="_blank"
      >
        <CustomIcon src={LeetCodeIcon} alt="leetcode link" />
      </IconButton>
      <ThemeSwitcher />
    </Box>
  );
};
