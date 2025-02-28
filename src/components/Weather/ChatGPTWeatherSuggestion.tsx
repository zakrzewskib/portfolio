import { CircularProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useCreatePromptMutation } from '../../store/api/openAIAPISlice';
import { CurrentWeatherConditions } from '../../types';

interface ChatGPTWeatherSuggestionProps {
  weather: CurrentWeatherConditions;
}

export const ChatGPTWeatherSuggestion = ({ weather }: ChatGPTWeatherSuggestionProps) => {
  const [createPrompt, { isLoading, isError }] = useCreatePromptMutation();
  const [chatGPTAnswer, setChatGPTAnswer] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const temperature = weather.Temperature.Metric.Value;
      const weatherText = weather.WeatherText;

      const weatherChatGPTQuestion = `It's ${temperature}°C and ${weatherText}, today. Fill the sentence: ChatGPT says that I should. Be short, a little funny and add emojis.`;

      const chatGPTAnswer = await createPrompt({ message: weatherChatGPTQuestion });

      if (chatGPTAnswer.data) {
        console.log(chatGPTAnswer);
        setChatGPTAnswer(chatGPTAnswer.data.choices[0].message.content);
      }
    };

    fetch();
  }, [createPrompt, weather]);

  if (isLoading) {
    return <CircularProgress size='16px' />;
  }

  if (isError) {
    return <Typography>Couldn't load chatGPT suggestion about the weather...</Typography>;
  }

  return <Typography>{chatGPTAnswer}</Typography>;
};
