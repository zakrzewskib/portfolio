import { Box, Link, Typography } from '@mui/material';
import { Skill } from '../ui';
import { NBAScores } from './NBAScores';

export const NBAScoresInfo = () => {
  return (
    <Box sx={{ marginBlock: 4 }} component='section'>
      <Typography variant='h3' component='h2' sx={{ mb: 4 }}>
        Fetching from API
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 4, lg: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box className='maxWidthForText' sx={{ display: 'flex', flexDirection: 'column' }}>
          Websites often need to download some data, which can be implemented in many ways. I decided to use:
          <Box sx={{ mt: 1, mb: 1 }}>
            <Skill>#RTK Query</Skill>
          </Box>
          from Redux toolkit for easier data fetching and caching and in case in future I would need to use Redux store.
          <Box>
            I also wanted to try out some 'random' API - which I found here:{' '}
            <Link target='_blank' href='https://icons8.com'>
              https://github.com/public-apis/public-apis
            </Link>{' '}
            and I choose{' '}
            <Link target='_blank' href='https://www.balldontlie.io'>
              balldontlie
            </Link>{' '}
            for API for Live Sports Data.
          </Box>
        </Box>

        <NBAScores />
      </Box>
    </Box>
  );
};
