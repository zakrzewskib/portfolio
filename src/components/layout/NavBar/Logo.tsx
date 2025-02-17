import { Link } from '@mui/material';
import { NavLink } from 'react-router';

interface LogoProps {
  isMobile?: boolean;
}

export const Logo = ({ isMobile = false }: LogoProps) => {
  return (
    <Link
      component={NavLink}
      to="/"
      underline="hover"
      variant={isMobile ? 'h5' : 'h6'}
      noWrap
      sx={{
        mr: 2,
        flexGrow: isMobile ? 1 : 0,
        display: isMobile ? { xs: 'flex', md: 'none' } : { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
      }}
    >
      Bartosz Zakrzewski
    </Link>
  );
};
