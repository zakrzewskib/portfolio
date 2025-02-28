import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CurrentWeatherConditions } from '../../types';

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://dataservice.accuweather.com/',
  }),
  endpoints: (build) => ({
    getCurrentConditions: build.query<CurrentWeatherConditions[], { locationCode: number }>({
      query: ({ locationCode }) => {
        const weatherAPIKey = import.meta.env.VITE_ACCUWEATHER_API_KEY;
        return `/currentconditions/v1/${locationCode}?apikey=${weatherAPIKey}`;
      },
    }),
  }),
});

export const { useGetCurrentConditionsQuery } = weatherAPI;
