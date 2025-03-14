import { Box, Typography } from '@mui/material';
import chatGPTScreenshotDark from '../../assets/images/chat-gpt-chat-dark.webp';
import chatGPTScreenshotLight from '../../assets/images/chat-gpt-chat-light.webp';
import openAIScreenshotDark from '../../assets/images/openAI-developer-platform-dark.webp';
import openAIScreenshotLight from '../../assets/images/openAI-developer-platform-light.webp';
import { withDarkMode } from '../../HOCs';
import { useIsDarkMode } from '../../hooks';
import { Skill } from '../ui';
import { Weather } from '../Weather/Weather';

export const ChatGPTSetupInfo = withDarkMode(() => {
  const isDarkMode = useIsDarkMode();

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
        <Box className='maxWidthForText' sx={{ mb: 2 }}>
          <Typography mb={2}>On the main page you might have seen this short text about the weather:</Typography>
          <Box sx={{ mb: 2 }}>
            <Weather />
          </Box>
          It is actually a ChatGPT answer! I used: and with it's billing cost helped me none other the chatGPT itself.
          <Box sx={{ display: 'flex', flexWrap: 'true', alignItems: 'center', gap: 1, mb: 1, mt: 1 }}>
            <Skill>#Open AI</Skill>
            <Skill>#ChatGPT</Skill>
          </Box>
        </Box>

        <Box>
          <Box component='figure' mb={4}>
            <Box
              component='img'
              src={isDarkMode ? openAIScreenshotDark : openAIScreenshotLight}
              alt='' // not needed - we have figcaption
              mb={2}
            />
            <Typography fontWeight='bold' component='figcaption'>
              Screenshot of Open AI
            </Typography>
          </Box>
          <Box component='figure' mb={4}>
            <Box
              component='img'
              src={isDarkMode ? chatGPTScreenshotDark : chatGPTScreenshotLight}
              alt='' // not needed - we have figcaption
              mb={2}
            />
            <Typography fontWeight='bold' component='figcaption'>
              Screenshot of chat with chatGPT
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
});
