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
        display: 'flex',
        gap: '4px',
      }}
    >
      <Typography>I live in: Warsaw, Poland</Typography> and it's:
      <Box display='flex'>
        <Typography fontWeight='bold'>{moment(date).tz('Europe/Warsaw').format('LTS')}</Typography>,
      </Box>
    </Box>
  );
};
