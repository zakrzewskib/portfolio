import { CircularProgress, Typography } from '@mui/material';
import { useGetCurrentConditionsQuery } from '../../store/api/weatherAPISlice';

export const Weather = () => {
  const { data, isLoading } = useGetCurrentConditionsQuery({ locationCode: 274663 });

  if (isLoading) {
    return <CircularProgress size='16px' />;
  }

  if (!data) {
    return <Typography>Couldn't load weather...</Typography>;
  }

  // todo: Add displaying temperature in Fahrenheit depending on user's location
  const temperature = data[0].Temperature.Metric.Value;
  const weatherText = data[0].WeatherText;

  // todo: Add chat gpt response like: "6.1°C and cloudy? It’s a bit chilly, but not too bad. Perfect for a cozy vibe, maybe with a warm drink. 🌥️"
  return (
    <Typography>
      It's {temperature}°C and {weatherText}
    </Typography>
  );
};
