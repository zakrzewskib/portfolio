import { Box, Link, Typography } from '@mui/material';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import { Skill } from '../ui';
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
          I wanted to try using Machine Learning and I found out that there is a JavaScript version of ML framework -
          Tensorflow.
          <Box sx={{ display: 'flex', flexWrap: 'true', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
            <Skill>#Tensorflow.js</Skill>
            <Skill>#Object recognition</Skill>
          </Box>
          I decided to use already pre-trained model (
          <Link target='_blank' href='https://www.tensorflow.org/js/models'>
            tensorflow.org/js/models
          </Link>
          ), which meant I could use it 'out of the box' instead of training it myself (like in classic ML I guess).
          These models are not perfect, so don't be suprised if you upload some image and get wrong or no results :).
        </Box>

        <Box>
          <ObjectDetection />
        </Box>
      </Box>
    </Box>
  );
};
