import { Box, CircularProgress, Typography } from '@mui/material';
import { useGetCurrentConditionsQuery } from '../../store/api/weatherAPISlice';
import { ChatGPTWeatherSuggestion } from './ChatGPTWeatherSuggestion';

export const Weather = () => {
  const { data, isLoading } = useGetCurrentConditionsQuery({ locationCode: 274663 });

  if (isLoading) {
    return <CircularProgress size='16px' />;
  }

  if (!data) {
    return <Typography>Couldn't load the weather...</Typography>;
  }

  // todo: Add displaying temperature in Fahrenheit depending on user's location
  const temperature = data[0].Temperature.Metric.Value;
  const weatherText = data[0].WeatherText;

  return (
    <Box>
      <Typography sx={{ mb: 1 }}>
        It's {temperature}°C and {weatherText} today.
      </Typography>
      <ChatGPTWeatherSuggestion weather={data[0]} />
    </Box>
  );
};
