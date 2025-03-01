import { Box, Typography } from '@mui/material';
import chatGPTScreenshot from '../../assets/images/chat-gpt-chat.png';
import openAIScreenshot from '../../assets/images/openAI-developer-platform.png';
import { Weather } from '../Weather/Weather';

export const ChatGPTSetupInfo = () => {
  return (
    <Box sx={{ marginBlock: 4 }} component='section' id='layout'>
      <Typography variant='h3' component='h2' sx={{ mb: 4 }}>
        ChatGPI setup
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: { xs: 0, lg: 8 },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Box className='maxWidthForText' sx={{ flex: 1 }}>
          <Typography mb={2}>On the main page you might have seen this short text about the weather:</Typography>
          <Box sx={{ mb: 2 }}>
            <Weather />
          </Box>
          It is actually a ChatGPT answer! I used{' '}
          <Typography component='span' fontWeight='bold'>
            OpenAI API
          </Typography>{' '}
          and with it's billing cost helped me none other than the chat itself.
        </Box>

        <Box sx={{ flex: 2 }}>
          <Box component='figure' mb={4}>
            <Box component='img' src={openAIScreenshot} alt='' mb={1} />
            <Typography component='figcaption'>Screenshot of Open AI</Typography>
          </Box>
          <Box component='figure' mb={4}>
            <Box component='img' src={chatGPTScreenshot} alt='' mb={1} />
            <Typography component='figcaption'>Screenshot of chatGPT</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
