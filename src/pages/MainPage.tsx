import { Box, Link, Typography } from '@mui/material';
import { NavLink } from 'react-router';
import { Skill } from '../components/ui/Skill';

export const MainPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: { xs: 4, md: 16 },
        marginBlock: { xs: 4, md: 16 },
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: { md: '100%' } }}>
        <Typography variant='h3' component='h1'>
          Hello! I'm Bartosz Zakrzewski
        </Typography>
        <Typography variant='h5' component='h2'>
          I am Frontend Developer living in Warsaw, Poland
        </Typography>
      </Box>

      <Box sx={{ width: { md: '100%' } }}>
        <Typography variant='body1'>
          I worked as a Software Engineer for 2 years now. During that time I discovered that the most important skills
          in IT are:
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2, mt: 1 }}>
          <Skill>#adaptability</Skill>
          <Skill>#learning_new_things</Skill>
        </Box>

        <Typography variant='body1'>
          There are so many frameworks and libraries and also some internal technologies at specific companies that
          being a good developer is adapting to them and building something using them. This whole portfolio page was
          created to test some of the technologies I learned, but also to use technologies that I don't really know that
          well.
        </Typography>

        <Typography variant='body1'>
          Also you can see some more technologies used on the{' '}
          <Link color='textPrimary' component={NavLink} to='/skills'>
            skills
          </Link>{' '}
          page.
        </Typography>
      </Box>
    </Box>
  );
};
