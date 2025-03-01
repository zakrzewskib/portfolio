import { Box, Typography } from '@mui/material';
import moment from 'moment-timezone';
import { useEffect, useState } from 'react';

export const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        mb: 1,
      }}
    >
      <Typography component='span'>I live in: Warsaw, Poland</Typography> and it's:{' '}
      <Typography fontWeight='bold' component='span'>
        {moment(date).tz('Europe/Warsaw').format('LTS')}
      </Typography>
    </Box>
  );
};
