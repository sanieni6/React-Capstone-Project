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
      const newState = { ...state };
      newState.seasonId = action.payload;
      return newState;
    },
    setLeagueId: (state, action) => {
      const newState = { ...state };
      newState.leagueId = action.payload;
      return newState;
    },
    clear: (state) => {
      const newState = { ...state };
      newState.standings = [];
      newState.isLoading = false;
      newState.error = undefined;
      return newState;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getStandings.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getStandings.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.standings = action.payload;
        return newState;
      })
      .addCase(getStandings.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload.response.data.data;
        return newState;
      });
  },
});

export const { setSeasonId, setLeagueId, clear } = standingsSlice.actions;
export default standingsSlice.reducer;
