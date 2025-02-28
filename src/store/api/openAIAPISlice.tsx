import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ChatGPTCompletionResponse } from '../../types';

export const openAIAPI = createApi({
  reducerPath: 'openAIAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.openai.com/v1/',
    prepareHeaders: (headers) => {
      const token = import.meta.env.VITE_OPENAI_API_KEY;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    createPrompt: build.mutation<ChatGPTCompletionResponse, { message: string }>({
      query: ({ message }) => ({
        url: '/chat/completions',
        method: 'POST',
        body: {
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: message }],
        },
      }),
    }),
  }),
});

export const { useCreatePromptMutation } = openAIAPI;
