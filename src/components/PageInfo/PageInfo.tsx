import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { withDarkMode } from '../../HOCs';
import { useIsDarkMode } from '../../hooks';
import { Skill } from '../ui';
// todo: Check light import of SyntaxHighlighter
import { NavLink } from 'react-router';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeToShow = `import { Link, useMediaQuery, useTheme } from '@mui/material';
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
};`;

export const PageInfo = withDarkMode(() => {
  const theme = useTheme();
  const isLgAndLower = useMediaQuery(theme.breakpoints.down('lg'));
  const isDarkMode = useIsDarkMode();

  const style = isDarkMode ? atomOneDark : atomOneLight;

  return (
    <Box sx={{ marginBlock: 4 }} component='section' id='layout'>
      <Typography variant='h3' component='h2' sx={{ mb: 4 }}>
        Layout
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, lg: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box className='maxWidthForText' sx={{ display: 'flex', flexDirection: 'column' }}>
          This whole webpage was created with:
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
            <Skill>#Material UI</Skill>
            <Skill>#React.js</Skill>
            <Skill>#TypeScript</Skill>
          </Box>
          React.js and TypeScript are main technologies that I know and use for webdev. I also wanted to try out MUI -
          popular UI library. {isLgAndLower ? 'Below' : 'On the right'} you can see some of my code. It shows some of
          MUI and React features and benefits:
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
            <Skill>#responsive design</Skill>
            <Skill>#React Router</Skill>
            <Skill>#theming</Skill>
          </Box>
          Also I displayed this code with:
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
            <Skill>#react-syntax-highlighter</Skill>
          </Box>
          <Box>
            <Typography sx={{ mb: 1 }}>You can click the button below to see the source code:</Typography>
            <Button
              variant='contained'
              component={NavLink}
              to='https://github.com/zakrzewskib/portfolio'
              target='_blank'
            >
              Source code on github
            </Button>
          </Box>
        </Box>

        <Box sx={{ maxWidth: '800px' }}>
          <SyntaxHighlighter
            language='typescript'
            style={style}
            // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/222
            customStyle={{
              fontSize: '15px',
            }}
            codeTagProps={{
              style: {
                fontSize: 'inherit',
              },
            }}
          >
            {codeToShow}
          </SyntaxHighlighter>
        </Box>
      </Box>
    </Box>
  );
});
