import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIURL } from "../../services/app/app.svc";
import { getRequestWithRetry } from "../../services/app/requestWrapper";

const initialState = {
  loading: false,
  complete: false,
  data: null
};

export const getUserProfile = createAsyncThunk(
  'profile/user',
  async (params, { rejectWithValue }) => {
    try {
      if (!localStorage.getItem('accessToken')) {
        return null;
      }

      const response = await getRequestWithRetry(`${APIURL}/account`);

      return response.data;
    } catch (err) {
        throw err;
    }
  }
);

const userProfileSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [getUserProfile.pending]: state => {
      state.loading = true;
      state.complete = false;
    },
    [getUserProfile.fulfilled]: (state, { payload } ) => {
      state.loading = false;
      state.complete = true;
      state.data = payload;
    },
    [getUserProfile.rejected]: state => {
      state.loading = false;
      state.complete = true;
    },
  }
});

export const userProfileReducer = userProfileSlice.reducer;