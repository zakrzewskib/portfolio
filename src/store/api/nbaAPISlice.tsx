import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GameDTO, Meta } from '../../types';

export const nbaAPI = createApi({
  reducerPath: 'nbaAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.balldontlie.io/v1/',
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_BALLDONTLIE_API_KEY;
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    getGames: build.query<{ data: GameDTO[]; meta: Meta }, { date: string }>({
      query: ({ date }) => `games?dates[]=${date}`,
      // Only have one cache entry
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: ({ data: currentCachedData }, { data: newData }) => {
        currentCachedData.push(...newData);
      },
      //  Refetch when date changes ('pagination')
      forceRefetch({ currentArg, previousArg }) {
        return currentArg?.date !== previousArg?.date;
      },
    }),
  }),
});

export const { useGetGamesQuery } = nbaAPI;

// Merging new data with previously fetched data
// needs to be used with serializeQueryArgs or forceRefetch options to keep an existing cache entry so that it can be updated.
// https://stackoverflow.com/questions/72530121/rtk-query-infinite-scrolling-retaining-existing-data
// https://redux-toolkit.js.org/rtk-query/api/createApi#merge
