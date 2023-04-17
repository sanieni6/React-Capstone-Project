import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import leaguesReducer from './leagues/soccerSlice';
import seasonsReducer from './seasons/seasonsSlice';
import standingsSlice from './standings/standingsSlice';

const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    seasons: seasonsReducer,
    standings: standingsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
