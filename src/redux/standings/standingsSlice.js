/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api-football-standings.azharimm.dev/leagues';

const initialState = {
  standings: [],
  seasonId: 2022,
  leagueId: 'eng.1',
  isLoading: true,
  error: undefined,
};

export const getStandings = createAsyncThunk('standings/getStandings',
  async ({ seasonId, leagueId }, thunkAPI) => {
    try {
      const response = await axios(`${url}/${leagueId}/standings?season=${seasonId}&sort=asc`);

      const { data } = response;
      return data.data.standings;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  });

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  reducers: {
    setSeasonId: (state, action) => {
      state.seasonId = action.payload;
    },
    setLeagueId: (state, action) => {
      state.leagueId = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getStandings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStandings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.standings = action.payload;
      })
      .addCase(getStandings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.response.data.data;
      });
  },
});

export const { setSeasonId, setLeagueId } = standingsSlice.actions;
export default standingsSlice.reducer;
