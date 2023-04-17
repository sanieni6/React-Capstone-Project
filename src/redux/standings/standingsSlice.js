import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc';

const initialState = {
  standings: [],
  isLoading: true,
  error: undefined,
};

export const getStandings = createAsyncThunk('standings/getStandings',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      const { data } = response;
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const standingsSlice = createSlice({
  name: 'standings',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getStandings.pending, (state) => ({
        ...state,
      }))
      .addCase(getStandings.fulfilled, (state, action) => ({
        ...state,
        standings: action.payload,
      }))
      .addCase(getStandings.rejected, (state) => ({
        ...state,
      }));
  },
});

export default standingsSlice.reducer;
