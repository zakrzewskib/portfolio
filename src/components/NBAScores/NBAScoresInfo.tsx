import { Box, Link, Typography } from '@mui/material';
import { Skill } from '../ui';
import { NBAScores } from './NBAScores';

export const NBAScoresInfo = () => {
  return (
    <Box sx={{ marginBlock: 4 }} component='section' id='nba-api'>
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
        <Box className='maxWidthForText' sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          Websites often need to download some data, which can be implemented in many ways. I decided to use:
          <Box sx={{ mt: 1, mb: 1 }}>
            <Skill>#RTK Query</Skill>
          </Box>
          from Redux toolkit for easier:
          <Box sx={{ display: 'flex', flexWrap: 'true', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
            <Skill>#data fetching</Skill>
            <Skill>#caching</Skill>
          </Box>
          (and in case in the future I would need to use Redux store.)
          <Box mb={1}>
            I also wanted to just select and use some 'random' APIs - which I found here:{' '}
            <Link target='_blank' href='https://icons8.com'>
              https://github.com/public-apis/public-apis
            </Link>
            . I choose{' '}
            <Link target='_blank' href='https://www.balldontlie.io'>
              balldontlie
            </Link>{' '}
            API for Live Sports Data. I needed to create an account there and get an API key. I also added:
            <Box sx={{ mt: 1, mb: 1 }}>
              <Skill>#infinite scroll</Skill>
            </Box>
            with:{' '}
            <Link href='https://www.npmjs.com/package/react-infinite-scroll-component'>react-infinite-scroll</Link>,
            that I always wanted to try implementing.
            {/* I needed to add some additional setup on RTK Query. */}
            {/* todo: Add dialog on hover that shows this setup */}
          </Box>
        </Box>

        <Box flex={1}>
          <Typography variant='h5' component='h3' mb={2}>
            Recent NBA Games:
          </Typography>
          <NBAScores />
        </Box>
      </Box>
    </Box>
  );
};
