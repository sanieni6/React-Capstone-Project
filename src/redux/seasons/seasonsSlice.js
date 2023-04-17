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
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const seasonsSlice = createSlice({
  name: 'seasons',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSeasons.pending, (state) => ({
        ...state,
      }))
      .addCase(getSeasons.fulfilled, (state, action) => ({
        ...state,
        seasons: action.payload,
      }))
      .addCase(getSeasons.rejected, (state) => ({
        ...state,
      }));
  },
});

export default seasonsSlice.reducer;
