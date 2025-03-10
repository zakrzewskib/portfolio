import { Box, Typography } from '@mui/material';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import { ObjectDetection } from './ObjectDetection';

export const ObjectDetectionInfo = () => {
  return (
    <Box sx={{ marginBlock: 4 }} component='section' id='layout'>
      <Typography variant='h3' component='h2' sx={{ mb: 4 }}>
        Tensorflow.js
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 0, lg: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box className='maxWidthForText' sx={{ mb: 2, flex: 1 }}>
          This text will be about Tensorflow.js
        </Box>

        <Box>
          <ObjectDetection />
        </Box>
      </Box>
    </Box>
  );
};
