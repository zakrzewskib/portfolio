import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { nbaAPI } from './api/nbaAPISlice';
import { weatherAPI } from './api/weatherAPISlice';

export const store = configureStore({
  reducer: {
    [nbaAPI.reducerPath]: nbaAPI.reducer,
    [weatherAPI.reducerPath]: weatherAPI.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nbaAPI.middleware).concat(weatherAPI.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
