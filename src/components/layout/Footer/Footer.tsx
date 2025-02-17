import { AppBar, Container, Link, Toolbar } from '@mui/material';
import { LayoutProps } from '../../../types';

export const Footer = ({ maxWidth }: LayoutProps) => {
  return (
    <AppBar position="absolute" sx={{ top: 'auto', bottom: 0 }}>
      <Container maxWidth={maxWidth} component="footer">
        <Toolbar disableGutters sx={{ display: 'flex', gap: '4px' }}>
          <span>Icons from:</span>
          <Link target="_blank" underline="hover" href="https://icons8.com" sx={{ color: 'inherit' }}>
            Icons8
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
