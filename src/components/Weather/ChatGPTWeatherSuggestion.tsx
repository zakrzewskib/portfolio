import { CircularProgress, Typography } from '@mui/material';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useCreatePromptMutation } from '../../store/api/openAIAPISlice';
import { CurrentWeatherConditions } from '../../types';

interface ChatGPTWeatherSuggestionProps {
  weather: CurrentWeatherConditions;
}

// todo: Save chatGPT answer to local storage with tanstack query instead of manual localStorage
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
        const answer = chatGPTAnswer.data.choices[0].message.content;
        setChatGPTAnswer(answer);

        // caching
        localStorage.setItem(
          'chatGPTAnswer',
          JSON.stringify({
            value: answer,
            timestamp: new Date(),
          })
        );
      }
    };

    const answerFromLocalStorage = localStorage.getItem('chatGPTAnswer');

    if (!answerFromLocalStorage) {
      fetch();
    } else {
      // Revalidate cache each 60 minutes
      const parsedVal = JSON.parse(localStorage.getItem('chatGPTAnswer') as string) as {
        timestamp: Date;
        value: string;
      };
      const timeDiffInMinutes = moment().diff(parsedVal.timestamp, 'minutes');

      if (timeDiffInMinutes > 60) {
        fetch();
      } else {
        setChatGPTAnswer(parsedVal.value);
      }
    }
  }, [createPrompt, weather]);

  if (isLoading) {
    return <CircularProgress size='16px' />;
  }

  if (isError) {
    return <Typography>Couldn't load chatGPT suggestion about the weather...</Typography>;
  }

  return <Typography>{chatGPTAnswer}</Typography>;
};
