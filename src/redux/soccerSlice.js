import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api-football-standings.azharimm.site/leagues';

const initialState = {
    rockets: [],
    isLoading: true,
    error: undefined,
  };