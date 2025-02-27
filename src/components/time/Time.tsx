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
        position: 'absolute',
        top: 'calc(128px + 12px)',
        right: 0,
        display: { xs: 'none', md: 'flex' },
        gap: 1,
      }}
    >
      <Typography fontWeight='bold'>{moment(date).tz('Europe/Warsaw').format('LTS')},</Typography>
      <Typography>Warsaw, Poland</Typography>
    </Box>
  );
};
