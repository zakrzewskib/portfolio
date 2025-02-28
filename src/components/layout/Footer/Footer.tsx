import { AppBar, Box, Container, Link, Toolbar } from '@mui/material';
import { LayoutProps } from '../../../types';

export const Footer = ({ maxWidth }: LayoutProps) => {
  return (
    <AppBar position='static' component='footer'>
      <Container maxWidth={maxWidth}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <span>Icons from:</span>
            <Link target='_blank' underline='hover' href='https://icons8.com' sx={{ color: 'inherit' }}>
              Icons8
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
