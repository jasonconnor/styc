import { APIURL } from '../../services/app/app.svc'
import { getHighscores } from '../../services/scores/scores.svc'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const initialState = {
  loading: false,
  complete: false,
  data: []
}

export const getLeaderboard = createAsyncThunk(
  'highscores', async (params, { rejectWithValue }) => {
    try {
      const response = await getHighscores(`${APIURL}/scores`)
      return response.data
    } catch (error) {
      throw error
    }
  }
)

const leaderboardSlice = createSlice({
  name: 'highscores',
  initialState,
  reducers: {},
  extraReducers: {
    [getLeaderboard.pending]: state => {
      state.loading = true
      state.complete = false
    },
    [getLeaderboard.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.complete = true
      state.data = payload
    },
    [getLeaderboard.rejected]: state => {
      state.loading = false
      state.complete = true
    }
  }
})

export const leaderboardReducer = leaderboardSlice.reducer