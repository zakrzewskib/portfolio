import { Link, useMediaQuery, useTheme } from '@mui/material';
import { NavLink } from 'react-router';

export const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link
      component={NavLink}
      to='/'
      underline='hover'
      variant={'h6'}
      noWrap
      sx={{
        mr: { xs: 0, md: 2 },
        ml: { xs: 2, md: 0 },
        flexGrow: { xs: 1, md: 0 },
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'inherit',
      }}
    >
      {!isMobile ? 'Bartosz Zakrzewski' : 'BZ'}
    </Link>
  );
};
