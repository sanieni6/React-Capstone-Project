import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api-football-standings.azharimm.dev/leagues/eng.1/seasons';

const initialState = {
  seasons: [],
  isLoading: true,
  error: undefined,
};

export const getSeasons = createAsyncThunk('seasons/getSeasons',
  async (thunkAPI) => {
    try {
      const response = await axios(url);
      const { data } = response;
      return data.data.seasons;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSeasons.pending, (state) => {
        const newState = { ...state };
        newState.isLoading = true;
        return newState;
      })
      .addCase(getSeasons.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.seasons = action.payload;
        return newState;
      })
      .addCase(getSeasons.rejected, (state, action) => {
        const newState = { ...state };
        newState.isLoading = false;
        newState.error = action.payload.response.data.data;
        return newState;
      });
  },
});

export default seasonsSlice.reducer;
