import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

export type Page = {
  text: string;
  link: string;
};

const pages = [
  {
    text: 'Skills',
    link: '/skills',
  },
  {
    text: 'Experience',
    link: '/experience',
  },
];

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl" component="nav">
        <Toolbar disableGutters>
          <Logo />

          <MobileMenu pages={pages} />
          <Logo isMobile />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.link}
                component={NavLink}
                to={page.link}
                sx={{ my: 2, color: 'inherit', display: 'block' }}
              >
                {page.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
