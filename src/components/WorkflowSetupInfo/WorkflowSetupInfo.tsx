import { Box, Typography } from '@mui/material';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { withDarkMode } from '../../HOCs';
import { useIsDarkMode } from '../../hooks';
import { Skill } from '../ui';

const codeToShow = `name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
    steps:
      # ...
      - name: Build project
        run: npm run build
        env:
          VITE_BALLDONTLIE_API_KEY: \${{ secrets.VITE_BALLDONTLIE_API_KEY }}
          VITE_ACCUWEATHER_API_KEY: \${{ secrets.VITE_ACCUWEATHER_API_KEY }}
          VITE_OPENAI_API_KEY: \${{ secrets.VITE_OPENAI_API_KEY }}
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`;

export const WorkflowSetupInfo = withDarkMode(() => {
  const isDarkMode = useIsDarkMode();
  const style = isDarkMode ? atomOneDark : atomOneLight;

  return (
    <Box sx={{ marginBlock: 4 }} component='section' id='layout'>
      <Typography variant='h3' component='h2' sx={{ mb: 4 }}>
        Deployment and APIs setup
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 2, lg: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box className='maxWidthForText'>
          I added automated deployment - to do this, it was necessary to use:
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
            <Skill>#Github Actions</Skill>
            <Skill>#Github Pages</Skill>
          </Box>
          I created a workflow and added all necessary API keys to the environment.
        </Box>

        <Box sx={{ maxWidth: '800px' }}>
          <SyntaxHighlighter
            language='yaml'
            style={style}
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
