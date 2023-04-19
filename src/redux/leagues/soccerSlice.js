import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api-football-standings.azharimm.dev/leagues';

const initialState = {
  leagues: [],
  isLoading: true,
  error: undefined,
};

export const getLeagues = createAsyncThunk('leagues/getLeagues',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      const { data } = response;
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const LeaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getLeagues.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getLeagues.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.leagues = action.payload;
        return newState;
      })
      .addCase(getLeagues.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload.response.data.data;
        return newState;
      });
  },
});

export default LeaguesSlice.reducer;
