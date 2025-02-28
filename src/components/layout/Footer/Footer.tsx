import { AppBar, Box, Container, Link, Toolbar } from '@mui/material';
import { LayoutProps } from '../../../types';

interface FooterProps extends LayoutProps {
  isPositionFixed?: boolean;
}

export const Footer = ({ maxWidth, isPositionFixed = false }: FooterProps) => {
  return (
    <AppBar position={isPositionFixed ? 'fixed' : 'static'} sx={{ top: 'auto', bottom: 0 }} component='footer'>
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
