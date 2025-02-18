import { Container } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withIsDarkMode } from '../../HOCs';
import { useIsDarkMode } from '../../hooks';

const codeToShow = `export const Logo = () => {
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
};`;

export const PageInfo = withIsDarkMode(() => {
  const isDarkMode = useIsDarkMode();

  const style = isDarkMode ? atomOneDark : atomOneLight;

  return (
    <Container sx={{ marginBlock: { xs: 4, md: 16 } }}>
      <SyntaxHighlighter language='typescript' style={style}>
        {codeToShow}
      </SyntaxHighlighter>
    </Container>
  );
});
