import { Box, Button, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import { Time } from '../components/time/Time';
import { Skill } from '../components/ui/Skill';
import { Weather } from '../components/Weather/Weather';

export const MainPage = () => {
  return (
    <Box
      sx={{
        mt: { xs: 4, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: { xs: 'start', md: 'center' },
        height: { sm: 'calc(100vh - 128px)' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: { xs: 4, md: 8, lg: 16 },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
          <Typography variant='h3' component='h1'>
            Hello! My name is Bartosz Zakrzewski
          </Typography>
          <Typography variant='h5' component='h2'>
            and I am Frontend Developer
          </Typography>
        </Box>
        <Box className='maxWidthForText' sx={{ flex: 1 }}>
          <Typography variant='body1'>
            I worked as a Software Engineer for{' '}
            <Typography fontWeight='bold' component='span'>
              2 years
            </Typography>{' '}
            now. During that time I discovered that the most important skills in IT are:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'true', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
            <Skill>#adaptability</Skill>
            <Skill>#learning new things</Skill>
          </Box>
          <Typography variant='body1'>
            There are so many frameworks, libraries and some internal technologies at specific companies, that being a
            good developer is adapting to them and building something using these technologies. This whole portfolio
            page was created to test some of the technologies I learned, but also to use technologies that I don't
            really know that well.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'true', alignItems: 'center', gap: 2, mt: 2, mb: 2 }}>
            <Button
              variant='contained'
              component={NavLink}
              to='https://linkedin.com/in/bartosz-zakrzewski-5879b7228'
              target='_blank'
            >
              Contact me
            </Button>
            <Button variant='outlined' component={NavLink} to='/skills'>
              See my skills
            </Button>
          </Box>

          <Box>
            <Time />
            <Weather />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
