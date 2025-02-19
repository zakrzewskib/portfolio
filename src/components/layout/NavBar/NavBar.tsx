import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { NavLink } from 'react-router';
import { LayoutProps } from '../../../types';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { NavBarIcons } from './NavBarIcons';

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

export const NavBar = ({ maxWidth }: LayoutProps) => {
  return (
    <AppBar position='sticky'>
      <Container maxWidth={maxWidth} component='nav'>
        <Toolbar disableGutters>
          <MobileMenu pages={pages} />

          <Logo />

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
          <NavBarIcons />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
