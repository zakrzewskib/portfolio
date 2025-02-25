import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    getGames: build.query({
      query: () => `games`, // todo: Add pagination, add types
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGamesQuery } = nbaAPI;
